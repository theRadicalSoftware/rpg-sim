import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const MALE_NAMES = [
    'Aldric', 'Beren', 'Cedric', 'Darian', 'Edric', 'Faelan', 'Garron', 'Hadrian', 'Ivor', 'Jareth',
    'Kellan', 'Leoric', 'Merrick', 'Niall', 'Orin', 'Perrin', 'Quint', 'Roderick', 'Stefan', 'Tavian',
    'Ulric', 'Varyn', 'Wystan', 'Yorick', 'Alaric', 'Balin', 'Corwin', 'Derrin', 'Eldan', 'Fintan'
];

const FEMALE_NAMES = [
    'Aelene', 'Brienne', 'Cerys', 'Delyth', 'Elowen', 'Fiora', 'Gwyneth', 'Helena', 'Isolde', 'Jaselle',
    'Kaelin', 'Liora', 'Maela', 'Nerida', 'Ophelia', 'Perin', 'Quilla', 'Rowena', 'Seren', 'Tamsin',
    'Una', 'Vesper', 'Wynn', 'Ysara', 'Arielle', 'Brynna', 'Celine', 'Daria', 'Eira', 'Ffion'
];

// Scene Manager Class: Handles the world setup and updates for extensibility
class SceneManager {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.clock = new THREE.Clock(); // For time-based simulations

        this.villagers = []; // Array to hold villager instances
        this.villagerById = new Map();
        this.obstacles = []; // For future collision detection (trees, etc.)
        this.townCenterRadius = 14; // Reserved radius for the village square
        this.townCenterDropPoint = new THREE.Vector3(0, 0, 0);
        this.resourceNodes = {
            trees: [],
            bushes: [],
            stones: [],
        };
        this.inventory = {
            wood: 0,
            stone: 0,
            leaves: 0,
        };
        this.nextVillagerId = 1;
        this.namePools = {
            male: [...MALE_NAMES],
            female: [...FEMALE_NAMES],
        };

        this.professionRegistry = [
            {
                id: 'gatherer',
                name: 'Gatherer',
                description: 'Harvests wood, stone, and wild greens to sustain the town.',
            },
            {
                id: 'laborer',
                name: 'Laborer',
                description: 'Stays near town ready to help with construction and future crafts.',
            },
        ];

        this.gameMinutes = 8 * 60; // Start at 8:00
        this.totalElapsedMinutes = this.gameMinutes;
        this.lastClockMinute = -1;
        this.gameMinutesPerSecond = 10; // 10 game minutes per real-time second at 1×
        this.dayLengthMinutes = 24 * 60;
        this.timeMultiplier = 1;
        this.currentDay = Math.floor(this.totalElapsedMinutes / this.dayLengthMinutes);
        this.clockDisplayElement = null;
        this.timeSpeedButtons = [];
        this.bonfireRequirements = { wood: 40, stone: 20, nightlyFuel: 8 };
        this.bonfire = {
            location: new THREE.Vector3(0, 0, this.townCenterRadius * 0.82),
            built: false,
            building: false,
            builder: null,
            structure: null,
            flameMaterial: null,
            emberMaterial: null,
            flameMesh: null,
            emberMesh: null,
            light: null,
            isLit: false,
            lastLitDay: null,
            flickerPhase: Math.random() * Math.PI * 2,
            baseLightIntensity: 3.2,
            randomOffset: Math.random() * 8,
        };

        this.homes = [];
        this.homeRequirements = { wood: 70, stone: 25 };
        this.bedRequirements = { wood: 5, leaves: 10 }; // Per bed
        this.homeCounter = 1;
        this.activeSocialInteractions = new Set();

        // Storehouse system
        this.storehouse = null;
        this.storehouseRequirements = { wood: 120, stone: 80, leaves: 40 };
        this.structureModalElement = null;
        this.structureModalVisible = false;
        this.activeStructureContext = null;

        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();
        this.selectedVillager = null;
        this.modalVisible = false;
        this.modalAnchor = null;

        this.initScene();
        this.setupUI();
        this.setupInteraction();
        this.animate();
    }

    initScene() {
        // Lighting: Basic ambient + directional for natural look
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(50, 50, 50);
        directionalLight.castShadow = false;
        directionalLight.target.position.set(0, 0, 0);
        this.scene.add(directionalLight);
        this.scene.add(directionalLight.target);
        this.ambientLight = ambientLight;
        this.directionalLight = directionalLight;

        this.skyColor = new THREE.Color(0x0d1119);
        this.scene.background = this.skyColor;
        this.renderer.setClearColor(this.skyColor);

        // Ground: Flat plane for sandbox
        const groundGeometry = new THREE.PlaneGeometry(100, 100);
        const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 }); // Green grass-like
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        this.scene.add(ground);

        // Village center: detailed hall and plaza with a clear buffer for decorations
        const { group: villageCenterGroup, obstacles: villageCenterObstacles } = this.createVillageCenter();
        this.scene.add(villageCenterGroup);
        this.obstacles.push(...villageCenterObstacles);

        // Add basic environment elements
        this.addTrees(10); // Procedural trees
        this.addBushes(15); // Procedural bushes
        this.addPonds(3); // Procedural ponds
        this.addStoneClusters(12); // Early resource nodes

        // Spawn villagers around town center
        this.spawnVillagers(10);

        // Camera position: Overhead view for sandbox
        this.camera.position.set(0, 20, 20);
        this.camera.lookAt(0, 0, 0);
    }

    setupUI() {
        const panel = document.getElementById('resource-panel');
        if (panel) {
            this.resourceLabels = {
                wood: panel.querySelector('[data-resource="wood"] .value'),
                stone: panel.querySelector('[data-resource="stone"] .value'),
                leaves: panel.querySelector('[data-resource="leaves"] .value'),
            };
        } else {
            this.resourceLabels = {};
        }
        this.updateResourceDisplay();

        this.modalElement = document.getElementById('villager-modal');
        this.structureModalElement = document.getElementById('structure-modal');
        if (this.modalElement) {
            this.modalNameField = this.modalElement.querySelector('[data-field="name"]');
            this.modalProfessionSelect = this.modalElement.querySelector('[data-field="profession-select"]');
            this.modalProfessionDescription = this.modalElement.querySelector('[data-field="profession-description"]');
            this.modalSocialMeterFill = this.modalElement.querySelector('[data-field="social-meter"]');
            this.modalSocialMeterLabel = this.modalElement.querySelector('[data-field="social-meter-label"]');
            this.modalRelationshipsContainer = this.modalElement.querySelector('[data-field="relationships"]');
            this.modalMainView = this.modalElement.querySelector('[data-view="main"]');
            this.modalRelationshipsView = this.modalElement.querySelector('[data-view="relationships"]');
            this.modalBuildMenuView = this.modalElement.querySelector('[data-view="build-menu"]');
            this.modalBuildListContainer = this.modalElement.querySelector('[data-field="build-list"]');
            this.modalOpenRelationshipsButton = this.modalElement.querySelector('[data-action="open-relationships"]');
            this.modalCloseRelationshipsButton = this.modalElement.querySelector('[data-action="close-relationships"]');
            this.modalOpenBuildMenuButton = this.modalElement.querySelector('[data-action="open-build-menu"]');
            this.modalCloseBuildMenuButton = this.modalElement.querySelector('[data-action="close-build-menu"]');
            this.professionIconButton = document.getElementById('profession-icon-button');

            const closeElements = this.modalElement.querySelectorAll('[data-action="close-modal"]');
            closeElements.forEach(button => button.addEventListener('click', () => this.hideVillagerModal()));

            if (this.modalProfessionSelect) {
                this.populateProfessionSelect();
                this.modalProfessionSelect.addEventListener('change', event => {
                    if (!this.selectedVillager) return;
                    const value = event.target.value || 'gatherer';
                    this.selectedVillager.setProfession(value);
                    this.updateVillagerModal(this.selectedVillager);
                });
            }

            this.modalOpenRelationshipsButton?.addEventListener('click', () => {
                this.showVillagerModalView('relationships');
            });

            this.modalCloseRelationshipsButton?.addEventListener('click', () => {
                this.showVillagerModalView('main');
            });

            this.modalOpenBuildMenuButton?.addEventListener('click', () => {
                this.showVillagerModalView('build-menu');
                this.populateBuildMenu(this.selectedVillager);
            });

            this.modalCloseBuildMenuButton?.addEventListener('click', () => {
                this.showVillagerModalView('main');
            });
        }

        this.clockDisplayElement = document.getElementById('clock-display');
        this.timeSpeedButtons = Array.from(document.querySelectorAll('#time-speed-buttons button'));
        if (this.timeSpeedButtons.length > 0) {
            this.timeSpeedButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const speed = parseFloat(button.dataset.speed);
                    if (!Number.isFinite(speed)) return;
                    this.setTimeMultiplier(speed, button);
                });
            });
        }

        this.setTimeMultiplier(this.timeMultiplier);
        this.updateClockDisplay(true);
        this.updateLighting();

        if (this.structureModalElement) {
            const closeButtons = this.structureModalElement.querySelectorAll('[data-action="close-structure"]');
            closeButtons.forEach(button => button.addEventListener('click', () => this.hideStructureModal()));
        }
    }

    setupInteraction() {
        this.handlePointerDown = this.handlePointerDown.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);

        this.renderer.domElement.addEventListener('pointerdown', this.handlePointerDown);
        window.addEventListener('keydown', this.handleKeyDown);
    }

    handlePointerDown(event) {
        if (event.button !== 0) {
            return;
        }

        if (event.target !== this.renderer.domElement) {
            return;
        }

        const rect = this.renderer.domElement.getBoundingClientRect();
        this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        this.raycaster.setFromCamera(this.pointer, this.camera);
        const villageMeshes = this.villagers.map(villager => villager.mesh);
        const structureMeshes = this.homes
            .filter(home => home?.structure)
            .map(home => home.structure);

        const intersections = this.raycaster.intersectObjects([...villageMeshes, ...structureMeshes], true);

        if (intersections.length === 0) {
            if (this.modalVisible) {
                this.hideVillagerModal();
            }
            if (this.structureModalVisible) {
                this.hideStructureModal();
            }
            return;
        }

        let intersect = intersections[0].object;
        while (intersect && !intersect.userData.villager && !intersect.userData.structureId) {
            intersect = intersect.parent;
        }

        if (intersect?.userData?.villager) {
            this.openVillagerModal(intersect.userData.villager, event);
            if (this.structureModalVisible) {
                this.hideStructureModal();
            }
        } else if (intersect?.userData?.structureId) {
            const home = this.getHomeById(intersect.userData.structureId);
            if (home) {
                this.openStructureModal(home, event);
            }
            if (this.modalVisible) {
                this.hideVillagerModal();
            }
        }
    }

    handleKeyDown(event) {
        if (event.key === 'Escape' && this.modalVisible) {
            this.hideVillagerModal();
        }
    }

    openVillagerModal(villager, pointerEvent) {
        this.selectedVillager = villager;
        this.modalVisible = true;
        if (!this.modalElement) return;

        this.modalElement.classList.remove('hidden');
        this.modalElement.classList.add('visible');
        this.modalElement.setAttribute('aria-hidden', 'false');
        const card = this.modalElement.querySelector('.modal-card');
        if (card) {
            card.classList.remove('flip-x');
            card.style.removeProperty('--tooltip-arrow-offset');
        }

        const anchorX = pointerEvent?.clientX ?? window.innerWidth / 2;
        const anchorY = pointerEvent?.clientY ?? window.innerHeight / 2;
        this.modalAnchor = { x: anchorX, y: anchorY };
        this.showVillagerModalView('main');

        this.updateVillagerModal(villager);
    }

    hideVillagerModal() {
        this.modalVisible = false;
        if (!this.modalElement) return;
        this.modalElement.classList.remove('visible');
        this.modalElement.classList.add('hidden');
        this.modalElement.setAttribute('aria-hidden', 'true');
        const card = this.modalElement.querySelector('.modal-card');
        if (card) {
            card.classList.remove('flip-x');
        }
        this.selectedVillager = null;
        this.modalAnchor = null;
        this.showVillagerModalView('main');
    }

    updateVillagerModal(villager) {
        if (!this.modalElement) return;

        if (this.modalNameField) {
            this.modalNameField.textContent = villager.name;
        }
        if (this.modalProfessionSelect) {
            const current = villager.profession ?? 'gatherer';
            if (this.modalProfessionSelect.value !== current) {
                this.modalProfessionSelect.value = current;
            }
        }

        // Show/hide build menu button for laborers
        if (this.professionIconButton) {
            const isLaborer = villager.profession === 'laborer';
            if (isLaborer) {
                this.professionIconButton.classList.remove('hidden');
            } else {
                this.professionIconButton.classList.add('hidden');
            }
        }

        if (this.modalProfessionDescription) {
            const def = this.getProfessionDefinition(villager.profession ?? 'gatherer');
            this.modalProfessionDescription.textContent = def?.description || 'Villagers without a chosen craft default to gathering nearby resources.';
        }

        if (this.modalSocialMeterFill) {
            const ratio = Math.max(0, Math.min(1, villager.socialMeter / 100));
            this.modalSocialMeterFill.style.transform = `scaleX(${ratio})`;
        }
        if (this.modalSocialMeterLabel) {
            this.modalSocialMeterLabel.textContent = `${Math.round(villager.socialMeter)}%`; 
        }

        if (this.modalRelationshipsContainer) {
            this.modalRelationshipsContainer.innerHTML = '';
            const relationships = this.getRelationshipSummaries(villager);
            if (relationships.length === 0) {
                const empty = document.createElement('li');
                empty.className = 'relationship-item';
                empty.style.cursor = 'default';
                empty.textContent = 'No notable bonds yet.';
                this.modalRelationshipsContainer.appendChild(empty);
            } else {
                relationships.forEach(rel => {
                    const item = document.createElement('li');
                    item.className = 'relationship-item';
                    const info = document.createElement('div');
                    info.className = 'info';
                    const name = document.createElement('div');
                    name.className = 'name';
                    name.textContent = rel.name;
                    const status = document.createElement('div');
                    status.className = 'status';
                    status.textContent = rel.status;
                    info.appendChild(name);
                    info.appendChild(status);
                    const score = document.createElement('div');
                    score.className = 'score';
                    score.textContent = `${rel.score}`;
                    item.appendChild(info);
                    item.appendChild(score);
                    item.addEventListener('click', () => {
                        const other = this.getVillagerById(rel.id);
                        if (other) {
                            this.openVillagerModal(other);
                        }
                    });
                    this.modalRelationshipsContainer.appendChild(item);
                });
            }
        }

        this.applyTooltipPosition();
    }

    updateResourceDisplay() {
        if (!this.resourceLabels) return;
        Object.entries(this.inventory).forEach(([key, amount]) => {
            const label = this.resourceLabels[key];
            if (label) {
                label.textContent = amount.toString();
            }
        });
    }

    setTimeMultiplier(multiplier, sourceButton) {
        if (!Number.isFinite(multiplier) || multiplier <= 0) {
            multiplier = 1;
        }
        this.timeMultiplier = multiplier;
        this.updateTimeButtonStates(sourceButton);
    }

    updateTimeButtonStates(activeButton) {
        if (!this.timeSpeedButtons) return;
        this.timeSpeedButtons.forEach(button => {
            const speed = parseFloat(button.dataset.speed);
            const isActive = activeButton
                ? button === activeButton
                : Math.abs(speed - this.timeMultiplier) < 0.0001;
            button.classList.toggle('active', !!isActive);
        });
    }

    showVillagerModalView(view = 'main') {
        if (!this.modalMainView || !this.modalRelationshipsView || !this.modalBuildMenuView) return;
        this.modalMainView.classList.toggle('active', view === 'main');
        this.modalRelationshipsView.classList.toggle('active', view === 'relationships');
        this.modalBuildMenuView.classList.toggle('active', view === 'build-menu');
        this.activeModalView = view;
    }

    populateBuildMenu(villager) {
        if (!this.modalBuildListContainer) return;
        this.modalBuildListContainer.innerHTML = '';

        // Define buildable structures
        const buildables = [];

        // Storehouse
        if (!this.storehouse || !this.storehouse.built) {
            buildables.push({
                id: 'storehouse',
                name: 'Storehouse & Yard',
                description: 'A large storage facility for village resources',
                requirements: this.storehouseRequirements,
                icon: '🏚️',
                canBuild: this.canAffordStorehouse(),
            });
        }

        if (buildables.length === 0) {
            const empty = document.createElement('li');
            empty.className = 'relationship-item';
            empty.style.cursor = 'default';
            empty.textContent = 'All structures have been built.';
            this.modalBuildListContainer.appendChild(empty);
            return;
        }

        buildables.forEach(buildable => {
            const item = document.createElement('li');
            item.className = 'relationship-item';
            item.style.cursor = buildable.canBuild ? 'pointer' : 'default';
            item.style.opacity = buildable.canBuild ? '1' : '0.5';

            const info = document.createElement('div');
            info.className = 'info';

            const name = document.createElement('div');
            name.className = 'name';
            name.textContent = `${buildable.icon} ${buildable.name}`;

            const status = document.createElement('div');
            status.className = 'status';
            const req = buildable.requirements;
            status.textContent = `${req.wood} wood, ${req.stone} stone, ${req.leaves} leaves`;
            status.style.fontSize = '0.85em';

            info.appendChild(name);
            info.appendChild(status);

            const score = document.createElement('div');
            score.className = 'score';
            score.textContent = buildable.canBuild ? '✓' : '✗';
            score.style.color = buildable.canBuild ? '#4ade80' : '#f87171';

            item.appendChild(info);
            item.appendChild(score);

            if (buildable.canBuild) {
                item.addEventListener('click', () => {
                    this.startBuildingStructure(buildable.id, villager);
                });
            }

            this.modalBuildListContainer.appendChild(item);
        });
    }

    canAffordStorehouse() {
        const req = this.storehouseRequirements;
        return this.inventory.wood >= req.wood &&
               this.inventory.stone >= req.stone &&
               this.inventory.leaves >= req.leaves;
    }

    populateProfessionSelect() {
        if (!this.modalProfessionSelect) return;
        this.modalProfessionSelect.innerHTML = '';

        this.professionRegistry.forEach(prof => {
            const option = document.createElement('option');
            option.value = prof.id;
            option.textContent = prof.name;
            this.modalProfessionSelect.appendChild(option);
        });
    }

    getProfessionDefinition(id) {
        return this.professionRegistry.find(entry => entry.id === id) || null;
    }

    advanceTime(deltaSeconds) {
        if (deltaSeconds <= 0) {
            return;
        }
        const minutesAdvanced = deltaSeconds * this.gameMinutesPerSecond;
        if (minutesAdvanced === 0) return;

        this.totalElapsedMinutes += minutesAdvanced;
        if (this.totalElapsedMinutes < 0) {
            this.totalElapsedMinutes = 0;
        }

        this.gameMinutes = this.totalElapsedMinutes % this.dayLengthMinutes;
        if (this.gameMinutes < 0) {
            this.gameMinutes += this.dayLengthMinutes;
        }
        this.currentDay = Math.floor(this.totalElapsedMinutes / this.dayLengthMinutes);

        this.updateClockDisplay();
        this.updateLighting();
        this.maybeTriggerBonfireBuild();
        this.updateBonfireNightCycle();
        this.maybeTriggerHomeBuild();
        this.maybeTriggerBedBuild();
    }

    updateClockDisplay(force = false) {
        if (!this.clockDisplayElement) return;
        const minuteInt = Math.floor(this.gameMinutes);
        if (!force && minuteInt === this.lastClockMinute) {
            return;
        }
        this.lastClockMinute = minuteInt;

        const hours = Math.floor(minuteInt / 60) % 24;
        const minutes = minuteInt % 60;
        const formatted = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        this.clockDisplayElement.textContent = formatted;
    }

    updateLighting() {
        if (!this.ambientLight || !this.directionalLight) return;

        const fraction = (this.gameMinutes % this.dayLengthMinutes) / this.dayLengthMinutes;
        const sunAngle = fraction * Math.PI * 2 - Math.PI / 2; // Sunrise near 6:00
        const elevation = Math.sin(sunAngle);
        const lightStrength = THREE.MathUtils.clamp((elevation + 0.2) / 1.2, 0, 1);

        const ambientIntensity = THREE.MathUtils.lerp(0.18, 0.72, lightStrength);
        const dirIntensity = THREE.MathUtils.lerp(0.08, 0.95, lightStrength);
        this.ambientLight.intensity = ambientIntensity;
        this.directionalLight.intensity = dirIntensity;

        const ambientColor = new THREE.Color().setHSL(0.58, 0.18, THREE.MathUtils.lerp(0.18, 0.52, lightStrength));
        this.ambientLight.color.copy(ambientColor);

        const sunColor = new THREE.Color().setHSL(THREE.MathUtils.lerp(0.07, 0.13, lightStrength), 0.65, THREE.MathUtils.lerp(0.45, 0.72, lightStrength));
        this.directionalLight.color.copy(sunColor);

        const radius = 120;
        const sunHeight = THREE.MathUtils.lerp(12, 100, Math.max(0, elevation));
        this.directionalLight.position.set(
            Math.cos(sunAngle) * radius,
            elevation >= 0 ? sunHeight : Math.max(8, sunHeight * 0.4),
            Math.sin(sunAngle) * radius
        );
        this.directionalLight.target.updateMatrixWorld();

        if (this.skyColor) {
            this.skyColor.setHSL(THREE.MathUtils.lerp(0.58, 0.62, lightStrength), 0.45, THREE.MathUtils.lerp(0.05, 0.55, lightStrength));
            this.renderer.setClearColor(this.skyColor);
            this.scene.background = this.skyColor;
        }
    }

    getCurrentHour() {
        return Math.floor(this.gameMinutes / 60) % 24;
    }

    isNight() {
        const hour = this.getCurrentHour();
        return hour >= 19 || hour < 6;
    }

    getBonfireHangoutPoint() {
        const radius = 1.6 + Math.random() * 1.1;
        const angle = Math.random() * Math.PI * 2;
        return new THREE.Vector3(
            this.bonfire.location.x + Math.cos(angle) * radius,
            0,
            this.bonfire.location.z + Math.sin(angle) * radius
        );
    }

    getBonfireConstructionPoint() {
        const radius = 3.6 + Math.random() * 0.6;
        const angle = Math.random() * Math.PI * 2;
        return new THREE.Vector3(
            this.bonfire.location.x + Math.cos(angle) * radius,
            0,
            this.bonfire.location.z + Math.sin(angle) * radius
        );
    }

    maybeTriggerBonfireBuild() {
        if (this.bonfire.built || this.bonfire.building) return;
        const req = this.bonfireRequirements;
        if (this.inventory.wood < req.wood || this.inventory.stone < req.stone) return;

        let builder = this.villagers.find(villager => villager.canTakeConstruction() && !villager.isGatheringProfession());
        if (!builder) {
            builder = this.villagers.find(villager => villager.canTakeConstruction());
        }
        if (!builder) {
            return;
        }

        this.inventory.wood -= req.wood;
        this.inventory.stone -= req.stone;
        this.updateResourceDisplay();

        this.bonfire.building = true;
        this.bonfire.builder = builder;
        builder.assignBonfireConstruction(this.bonfire);
    }

    finishBonfireConstruction(villager) {
        if (!this.bonfire.building || villager !== this.bonfire.builder) {
            return;
        }
        this.bonfire.building = false;
        this.bonfire.builder = null;
        this.bonfire.built = true;
        this.createBonfireStructure();
        this.extinguishBonfire();
        this.updateBonfireNightCycle();
    }

    createBonfireStructure() {
        if (this.bonfire.structure) {
            this.scene.remove(this.bonfire.structure);
        }

        const group = new THREE.Group();
        const baseGeometry = new THREE.CircleGeometry(2.6, 48);
        const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x2d2015, roughness: 0.9, metalness: 0.05 });
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        base.rotation.x = -Math.PI / 2;
        base.position.y = 0.02;
        group.add(base);

        const ringGeometry = new THREE.TorusGeometry(2.1, 0.24, 12, 42);
        const ringMaterial = new THREE.MeshStandardMaterial({ color: 0x7b7670, roughness: 0.85, metalness: 0.2 });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = 0.18;
        group.add(ring);

        const stoneMaterial = new THREE.MeshStandardMaterial({ color: 0x6a635b, roughness: 0.9, metalness: 0.15 });
        for (let i = 0; i < 6; i++) {
            const blockGeometry = new THREE.CylinderGeometry(0.35, 0.5, 0.5, 6);
            const block = new THREE.Mesh(blockGeometry, stoneMaterial);
            const angle = (Math.PI * 2 * i) / 6;
            const radius = 1.95 + Math.random() * 0.1;
            block.position.set(Math.cos(angle) * radius, 0.25, Math.sin(angle) * radius);
            block.rotation.x = Math.PI / 2;
            block.rotation.z = Math.random() * 0.3 - 0.15;
            group.add(block);
        }

        const logGeometry = new THREE.CylinderGeometry(0.18, 0.22, 3.4, 10);
        const logMaterial = new THREE.MeshStandardMaterial({ color: 0x5a341a, roughness: 0.75, metalness: 0.05 });
        for (let i = 0; i < 4; i++) {
            const log = new THREE.Mesh(logGeometry, logMaterial);
            const angle = (Math.PI / 2) * i + Math.random() * 0.3 - 0.15;
            log.position.set(Math.cos(angle) * 0.45, 0.9, Math.sin(angle) * 0.45);
            log.rotation.z = Math.PI / 2;
            log.rotation.y = angle;
            group.add(log);
        }

        const flameMaterial = new THREE.MeshStandardMaterial({
            color: 0xffa347,
            emissive: 0xff7b32,
            emissiveIntensity: 0,
            transparent: true,
            opacity: 0.92,
            roughness: 0.32,
            metalness: 0.05,
        });
        const flame = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.7, 14), flameMaterial);
        flame.position.y = 1.0;
        group.add(flame);

        const emberMaterial = new THREE.MeshStandardMaterial({
            color: 0xffd37d,
            emissive: 0xffa347,
            emissiveIntensity: 0,
            transparent: true,
            opacity: 0.85,
            roughness: 0.4,
        });
        const ember = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), emberMaterial);
        ember.position.y = 0.35;
        group.add(ember);

        const light = new THREE.PointLight(0xffc97a, 0, 26, 2.2);
        light.position.set(0, 2.4, 0);
        group.add(light);

        group.position.copy(this.bonfire.location);
        this.scene.add(group);
        if (!group.userData) {
            group.userData = {};
        }
        group.userData.structureId = 'bonfire';

        this.bonfire.structure = group;
        this.bonfire.flameMaterial = flameMaterial;
        this.bonfire.emberMaterial = emberMaterial;
        this.bonfire.flameMesh = flame;
        this.bonfire.emberMesh = ember;
        this.bonfire.light = light;
        this.bonfire.isLit = false;
    }

    lightBonfire() {
        if (!this.bonfire.structure || !this.bonfire.light) return;
        this.bonfire.isLit = true;
        this.bonfire.lastLitDay = this.currentDay;
        this.bonfire.flickerPhase = Math.random() * Math.PI * 2;
        this.bonfire.randomOffset = Math.random() * 6;
        if (this.bonfire.light) {
            this.bonfire.light.intensity = this.bonfire.baseLightIntensity;
        }
        if (this.bonfire.flameMaterial) {
            this.bonfire.flameMaterial.emissiveIntensity = 1.6;
            this.bonfire.flameMaterial.opacity = 0.95;
        }
        if (this.bonfire.emberMaterial) {
            this.bonfire.emberMaterial.emissiveIntensity = 0.8;
        }
    }

    extinguishBonfire() {
        if (!this.bonfire.structure || !this.bonfire.light) return;
        this.bonfire.isLit = false;
        if (this.bonfire.light) {
            this.bonfire.light.intensity = 0.2;
        }
        if (this.bonfire.flameMaterial) {
            this.bonfire.flameMaterial.emissiveIntensity = 0.05;
            this.bonfire.flameMaterial.opacity = 0.4;
        }
        if (this.bonfire.emberMaterial) {
            this.bonfire.emberMaterial.emissiveIntensity = 0.1;
        }
    }

    updateBonfireNightCycle() {
        if (!this.bonfire.built) return;

        if (this.isNight()) {
            if (!this.bonfire.isLit) {
                if (this.inventory.wood >= this.bonfireRequirements.nightlyFuel) {
                    this.inventory.wood -= this.bonfireRequirements.nightlyFuel;
                    this.updateResourceDisplay();
                    this.lightBonfire();
                }
            }
        } else if (this.bonfire.isLit) {
            this.extinguishBonfire();
        }
    }

    maybeTriggerHomeBuild() {
        if (this.homes.some(home => home.building)) {
            return;
        }

        const singles = this.villagers.filter(villager => {
            if (villager.romanticPartnerId) return false;
            if (villager.homeId) return false;
            if (villager.specialTask) return false;
            const pending = this.homes.find(home => home.occupantId === villager.id && !home.built);
            return !pending;
        });

        if (singles.length === 0) {
            return;
        }

        const req = this.homeRequirements;
        if (this.inventory.wood < req.wood || this.inventory.stone < req.stone) {
            return;
        }

        const occupant = singles.sort((a, b) => a.socialMeter - b.socialMeter)[0];
        const isCoupleHome = !!occupant.romanticPartnerId;
        const partner = isCoupleHome ? this.getVillagerById(occupant.romanticPartnerId) : null;
        if (isCoupleHome && partner) {
            if (partner.homeId) {
                return;
            }
        }

        let builder = this.villagers.find(villager => villager !== occupant && villager.canTakeConstruction() && !villager.isGatheringProfession());
        if (!builder) {
            builder = this.villagers.find(villager => villager !== occupant && villager.canTakeConstruction());
        }
        if (!builder) {
            return;
        }

        const location = this.findHomeLocation();
        if (!location) {
            return;
        }

        this.inventory.wood -= req.wood;
        this.inventory.stone -= req.stone;
        this.updateResourceDisplay();

        const home = {
            id: `home-${this.homeCounter++}`,
            occupantId: occupant.id,
            partnerId: partner?.id ?? null,
            location,
            built: false,
            building: true,
            builderId: builder.id,
            structure: null,
            type: isCoupleHome ? 'family' : 'single',
            beds: {}, // Track beds for each occupant: { [villagerId]: { built, builderId, building } }
            occupantsInside: new Set(), // Track which villagers are currently inside (hidden from 3D world)
        };
        this.homes.push(home);
        occupant.homeId = home.id;
        occupant.homeLocation = location.clone();
        if (partner) {
            partner.homeId = home.id;
            partner.homeLocation = location.clone();
        }

        // Initialize bed entries for each occupant
        home.beds[occupant.id] = { built: false, builderId: null, building: false };
        if (partner) {
            home.beds[partner.id] = { built: false, builderId: null, building: false };
        }

        builder.assignHomeConstruction(home);
    }

    maybeTriggerBedBuild() {
        // Check if any homes need beds
        const homesNeedingBeds = this.getHomesNeedingBeds();
        if (homesNeedingBeds.length === 0) return;

        // Check if we have resources for at least one bed
        const req = this.bedRequirements;
        if (this.inventory.wood < req.wood || this.inventory.leaves < req.leaves) {
            return;
        }

        // Find an idle laborer to build the bed
        const builder = this.villagers.find(villager =>
            villager.canTakeConstruction() && !villager.isGatheringProfession()
        );
        if (!builder) return;

        // Pick the first home needing a bed and find which occupant needs it
        const home = homesNeedingBeds[0];
        const occupantIds = [home.occupantId, home.partnerId].filter(Boolean);
        const occupantId = occupantIds.find(id => {
            const bedEntry = home.beds[id];
            return bedEntry && !bedEntry.built && !bedEntry.building;
        });

        if (!occupantId) return;

        // Start building the bed
        this.startBedConstruction(home, occupantId, builder);
    }

    findHomeLocation() {
        const maxAttempts = 30;
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
            const radius = this.townCenterRadius + 3 + Math.random() * 5;
            const angle = Math.random() * Math.PI * 2;
            const position = new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);

            const tooCloseToCenter = position.length() < this.townCenterRadius + 2.5;
            if (tooCloseToCenter) continue;

            const collision = this.homes.some(home => home.location.distanceTo(position) < 4.5);
            if (collision) continue;

            return position;
        }
        return null;
    }

    findStorehouseLocation() {
        const maxAttempts = 50;
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
            // Place on the edge of the town center circle
            const radius = this.townCenterRadius + 0.5 + Math.random() * 1.5; // Just outside the plaza
            const angle = Math.random() * Math.PI * 2;
            const position = new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);

            // Check collision with homes (storehouse is larger, so need more space)
            const collisionWithHomes = this.homes.some(home => home.location.distanceTo(position) < 8);
            if (collisionWithHomes) continue;

            // Check collision with bonfire
            if (this.bonfire && this.bonfire.location && this.bonfire.location.distanceTo(position) < 8) {
                continue;
            }

            return position;
        }
        return null;
    }

    startBuildingStructure(structureId, builder) {
        if (structureId === 'storehouse') {
            this.startStorehouseConstruction(builder);
        }
        // Hide modal after starting construction
        this.hideVillagerModal();
    }

    startStorehouseConstruction(builder) {
        if (this.storehouse && (this.storehouse.built || this.storehouse.building)) {
            alert('Storehouse is already built or being built.');
            return;
        }

        // Check resources
        const req = this.storehouseRequirements;
        if (!this.canAffordStorehouse()) {
            alert(`Not enough resources! Need ${req.wood} wood, ${req.stone} stone, ${req.leaves} leaves.`);
            return;
        }

        // Find location
        const location = this.findStorehouseLocation();
        if (!location) {
            alert('Could not find a suitable location for the storehouse.');
            return;
        }

        // Consume resources
        this.inventory.wood -= req.wood;
        this.inventory.stone -= req.stone;
        this.inventory.leaves -= req.leaves;
        this.updateResourceDisplay();

        // Create storehouse data
        this.storehouse = {
            location,
            built: false,
            building: true,
            builderId: builder.id,
            structure: null,
        };

        // Assign builder
        builder.assignStorehouseConstruction(this.storehouse);
    }

    finishHomeConstruction(home, builder) {
        if (!home || home.built) return;
        home.building = false;
        home.builderId = null;
        home.built = true;
        this.createHomeStructure(home);
        const occupant = this.getVillagerById(home.occupantId);
        if (occupant) {
            occupant.homeLocation = home.location.clone();
        }
    }

    finishStorehouseConstruction() {
        if (!this.storehouse || this.storehouse.built) return;
        this.storehouse.building = false;
        this.storehouse.builderId = null;
        this.storehouse.built = true;
        this.createStorehouseStructure(this.storehouse);
    }

    finishBedConstruction(home, occupantId) {
        if (!home || !home.beds[occupantId]) return;
        const bedEntry = home.beds[occupantId];
        if (bedEntry.built) return;

        bedEntry.built = true;
        bedEntry.building = false;
        bedEntry.builderId = null;

        // Update visual indicator if home structure exists
        if (home.structure) {
            this.updateHomeVisuals(home);
        }
    }

    // Method to check if home needs beds built
    getHomesNeedingBeds() {
        return this.homes.filter(home => {
            if (!home.built) return false;
            const occupantIds = [home.occupantId, home.partnerId].filter(Boolean);
            return occupantIds.some(id => {
                const bedEntry = home.beds[id];
                return bedEntry && !bedEntry.built && !bedEntry.building;
            });
        });
    }

    // Method to start bed construction
    startBedConstruction(home, occupantId, builder) {
        const bedEntry = home.beds[occupantId];
        if (!bedEntry || bedEntry.built || bedEntry.building) return false;

        // Check resources
        const req = this.bedRequirements;
        if (this.inventory.wood < req.wood || this.inventory.leaves < req.leaves) {
            return false;
        }

        // Consume resources
        this.inventory.wood -= req.wood;
        this.inventory.leaves -= req.leaves;
        this.updateResourceDisplay();

        // Mark as building
        bedEntry.building = true;
        bedEntry.builderId = builder.id;

        // Assign task to builder
        builder.assignBedConstruction(home, occupantId);
        return true;
    }

    // Method to handle manual bed building requests from UI
    requestManualBedBuild(home, occupantId) {
        const bedEntry = home.beds[occupantId];
        if (!bedEntry || bedEntry.built || bedEntry.building) {
            console.log('Bed already exists or is being built');
            return;
        }

        const occupant = this.getVillagerById(occupantId);
        if (!occupant) {
            console.log('Occupant not found');
            return;
        }

        // Check resources
        const req = this.bedRequirements;
        const hasResources = this.inventory.wood >= req.wood && this.inventory.leaves >= req.leaves;

        // Find available builder (prefer laborers)
        let builder = this.villagers.find(villager =>
            villager !== occupant && villager.canTakeConstruction() && !villager.isGatheringProfession()
        );

        if (!builder && occupant.canTakeConstruction()) {
            builder = occupant;
        } else if (!builder) {
            builder = this.villagers.find(villager => villager !== occupant && villager.canTakeConstruction());
        }

        // If no builder available OR no resources, have the occupant gather and build themselves
        if (!builder || !hasResources) {
            if (!occupant.canTakeConstruction()) {
                alert(`${occupant.name} is busy right now. Try again later.`);
                return;
            }

            // Have the occupant gather resources and build the bed themselves
            bedEntry.building = true;
            bedEntry.builderId = occupant.id;
            occupant.assignSelfBedConstruction(home, occupantId);

            // Refresh the modal
            if (this.structureModalVisible && this.activeStructureContext?.homeId === home.id) {
                this.populateStructureModal(home);
            }
            return;
        }

        // Start construction with available resources and builder
        const success = this.startBedConstruction(home, occupantId, builder);
        if (success) {
            // Refresh the modal to show updated state
            if (this.structureModalVisible && this.activeStructureContext?.homeId === home.id) {
                this.populateStructureModal(home);
            }
        }
    }

    createHomeStructure(home) {
        const group = new THREE.Group();

        const isFamilyHome = home.type === 'family';

        const foundationGeometry = new THREE.BoxGeometry(isFamilyHome ? 5.2 : 3.6, 0.4, isFamilyHome ? 4.6 : 3.2);
        const foundationMaterial = new THREE.MeshStandardMaterial({ color: isFamilyHome ? 0x5f4c3b : 0x6d5845, roughness: 0.8 });
        const foundation = new THREE.Mesh(foundationGeometry, foundationMaterial);
        foundation.position.y = 0.2;
        group.add(foundation);

        const wallGeometry = new THREE.BoxGeometry(isFamilyHome ? 4.6 : 3.2, isFamilyHome ? 2.6 : 2.2, isFamilyHome ? 3.8 : 2.8);
        const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xd7c3a3, roughness: 0.7 });
        const walls = new THREE.Mesh(wallGeometry, wallMaterial);
        walls.position.y = isFamilyHome ? 1.8 : 1.5;
        group.add(walls);

        const roofMaterial = new THREE.MeshStandardMaterial({ color: isFamilyHome ? 0x6b2415 : 0x7a2d1c, roughness: 0.5 });
        const roof = new THREE.Mesh(new THREE.ConeGeometry(isFamilyHome ? 3.6 : 2.6, isFamilyHome ? 2.2 : 1.8, 6), roofMaterial);
        roof.position.y = isFamilyHome ? 4.1 : 3.3;
        group.add(roof);

        const doorGeometry = new THREE.BoxGeometry(isFamilyHome ? 1.2 : 0.9, isFamilyHome ? 1.9 : 1.6, 0.08);
        const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x4d2f1b, roughness: 0.6 });
        const door = new THREE.Mesh(doorGeometry, doorMaterial);
        door.position.set(isFamilyHome ? -0.6 : 0, isFamilyHome ? 1.05 : 0.95, isFamilyHome ? 1.86 : 1.44);
        group.add(door);

        const windowMaterial = new THREE.MeshStandardMaterial({ color: 0xcfe6ff, transparent: true, opacity: 0.85, roughness: 0.2 });
        if (isFamilyHome) {
            const windowLeft = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.7, 0.06), windowMaterial);
            windowLeft.position.set(1.4, 1.8, 0.4);
            group.add(windowLeft);
            const windowRight = windowLeft.clone();
            windowRight.position.z = -0.4;
            group.add(windowRight);
        } else {
            const windowLeft = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.6, 0.06), windowMaterial);
            windowLeft.position.set(-1.1, 1.6, 0);
            group.add(windowLeft);
            const windowRight = windowLeft.clone();
            windowRight.position.x = 1.1;
            group.add(windowRight);
        }

        const lanternMaterial = new THREE.MeshStandardMaterial({ color: 0xffd27a, emissive: 0xffb347, emissiveIntensity: 0.4 });
        const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), lanternMaterial);
        lantern.position.set(isFamilyHome ? 0.9 : 0.6, isFamilyHome ? 1.6 : 1.4, isFamilyHome ? 2.05 : 1.5);
        group.add(lantern);
        const lanternLight = new THREE.PointLight(0xffb066, isFamilyHome ? 1.2 : 0.8, isFamilyHome ? 11 : 8);
        lanternLight.position.copy(lantern.position);
        group.add(lanternLight);

        // Add chimney
        const chimneyMaterial = new THREE.MeshStandardMaterial({ color: 0x4a3426, roughness: 0.9 });
        const chimneyHeight = isFamilyHome ? 1.4 : 1.2;
        const chimneyRadius = isFamilyHome ? 0.22 : 0.18;
        const chimney = new THREE.Mesh(
            new THREE.CylinderGeometry(chimneyRadius, chimneyRadius * 1.1, chimneyHeight, 8),
            chimneyMaterial
        );
        chimney.position.set(isFamilyHome ? -1.5 : -1.0, isFamilyHome ? 4.5 : 3.7, isFamilyHome ? 0.8 : 0.6);
        group.add(chimney);

        // Add chimney cap
        const capMaterial = new THREE.MeshStandardMaterial({ color: 0x3a2416, roughness: 0.8 });
        const cap = new THREE.Mesh(
            new THREE.CylinderGeometry(chimneyRadius * 1.3, chimneyRadius * 1.3, 0.15, 8),
            capMaterial
        );
        cap.position.copy(chimney.position);
        cap.position.y += chimneyHeight / 2 + 0.1;
        group.add(cap);

        // Create smoke particle system
        const smokeParticles = this.createSmokeParticles(chimney.position, isFamilyHome);
        smokeParticles.forEach(particle => group.add(particle));

        // Store smoke data for animation
        home.smokeData = {
            particles: smokeParticles,
            chimneyPosition: chimney.position.clone(),
            isFamilyHome: isFamilyHome,
            time: Math.random() * Math.PI * 2, // Random phase for natural variation
        };

        group.position.copy(home.location);
        group.position.y = 0;
        group.lookAt(0, 0, 0);
        this.scene.add(group);
        this.obstacles.push(group);

        home.structure = group;
        if (!group.userData) {
            group.userData = {};
        }
        group.userData.structureId = home.id;

        // Add bed indicators
        this.updateHomeVisuals(home);

        // Initially hide smoke (will show when villagers are inside)
        this.updateHomeSmoke(home);
    }

    createSmokeParticles(chimneyPosition, isFamilyHome) {
        // Create smoke texture using canvas
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        // Create radial gradient for soft smoke puff
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(220, 220, 220, 0.8)');
        gradient.addColorStop(0.4, 'rgba(200, 200, 200, 0.5)');
        gradient.addColorStop(0.7, 'rgba(180, 180, 180, 0.2)');
        gradient.addColorStop(1, 'rgba(160, 160, 160, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);

        const texture = new THREE.CanvasTexture(canvas);
        const smokeMaterial = new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
            opacity: 0,
            depthWrite: false,
            blending: THREE.NormalBlending,
        });

        // Create multiple smoke puffs for continuous effect
        const particleCount = isFamilyHome ? 5 : 4;
        const particles = [];

        for (let i = 0; i < particleCount; i++) {
            const particle = new THREE.Sprite(smokeMaterial.clone());
            const baseScale = isFamilyHome ? 0.4 : 0.35;
            particle.scale.set(baseScale, baseScale, 1);

            // Store particle-specific data
            particle.userData = {
                offset: (i / particleCount) * Math.PI * 2, // Phase offset for staggered appearance
                baseY: chimneyPosition.y + (isFamilyHome ? 0.75 : 0.65),
                progress: i / particleCount, // Stagger initial positions
                driftPhase: Math.random() * Math.PI * 2,
            };

            // Initial position at chimney top
            particle.position.copy(chimneyPosition);
            particle.position.y = particle.userData.baseY + particle.userData.progress * 1.5;

            particles.push(particle);
        }

        return particles;
    }

    updateHomeSmoke(home) {
        if (!home.smokeData || !home.structure) return;

        const hasOccupants = home.occupantsInside && home.occupantsInside.size > 0;
        const particles = home.smokeData.particles;

        // Show/hide smoke based on occupancy
        particles.forEach(particle => {
            if (particle.material) {
                // Fade in/out smoothly
                const targetOpacity = hasOccupants ? 1 : 0;
                particle.material.opacity = THREE.MathUtils.lerp(
                    particle.material.opacity,
                    targetOpacity,
                    0.05
                );
            }
        });
    }

    animateHomeSmoke(home, delta) {
        if (!home.smokeData || !home.structure) return;
        if (!home.occupantsInside || home.occupantsInside.size === 0) return;

        const data = home.smokeData;
        data.time += delta * 0.5;

        data.particles.forEach((particle) => {
            const userData = particle.userData;

            // Update particle progress (rise)
            userData.progress += delta * 0.15; // Rise speed

            // Reset when particle reaches top
            if (userData.progress > 1) {
                userData.progress = 0;
                userData.driftPhase = Math.random() * Math.PI * 2;
            }

            // Calculate position
            const riseHeight = 1.5 * userData.progress;
            const drift = Math.sin(data.time + userData.driftPhase) * 0.3 * userData.progress;

            particle.position.x = data.chimneyPosition.x + drift;
            particle.position.y = userData.baseY + riseHeight;
            particle.position.z = data.chimneyPosition.z + Math.cos(data.time + userData.driftPhase) * 0.15 * userData.progress;

            // Scale grows as it rises
            const scale = (data.isFamilyHome ? 0.4 : 0.35) * (1 + userData.progress * 0.8);
            particle.scale.set(scale, scale, 1);

            // Opacity fades as it rises
            if (particle.material) {
                const fadeStart = 0.6;
                let opacity = 1.0;

                if (userData.progress > fadeStart) {
                    opacity = 1 - ((userData.progress - fadeStart) / (1 - fadeStart));
                }

                // Also fade based on general visibility
                opacity *= Math.min(1, particle.material.opacity * 2);
                particle.material.opacity = opacity * 0.7; // Max opacity 0.7 for subtle effect
            }
        });
    }

    createStorehouseStructure(storehouse) {
        const group = new THREE.Group();

        // Create foundation/yard area (larger flat surface)
        const yardGeometry = new THREE.BoxGeometry(10, 0.3, 8);
        const yardMaterial = new THREE.MeshStandardMaterial({ color: 0x786950, roughness: 0.85 });
        const yard = new THREE.Mesh(yardGeometry, yardMaterial);
        yard.position.y = 0.15;
        group.add(yard);

        // Main building foundation
        const foundationGeometry = new THREE.BoxGeometry(7, 0.4, 5.5);
        const foundationMaterial = new THREE.MeshStandardMaterial({ color: 0x5a4a38, roughness: 0.9 });
        const foundation = new THREE.Mesh(foundationGeometry, foundationMaterial);
        foundation.position.y = 0.5;
        group.add(foundation);

        // Main walls (barn-style)
        const wallGeometry = new THREE.BoxGeometry(6.5, 3.5, 5);
        const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513, roughness: 0.8 });
        const walls = new THREE.Mesh(wallGeometry, wallMaterial);
        walls.position.y = 2.2;
        group.add(walls);

        // Wooden planks detailing (vertical supports)
        const plankMaterial = new THREE.MeshStandardMaterial({ color: 0x6b3410, roughness: 0.85 });
        for (let i = -2; i <= 2; i++) {
            const plank = new THREE.Mesh(
                new THREE.BoxGeometry(0.15, 3.5, 0.15),
                plankMaterial
            );
            plank.position.set(i * 1.5, 2.2, 2.55);
            group.add(plank);
        }

        // Pitched roof (barn-style)
        const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x5a2d0c, roughness: 0.6 });
        const roofLeft = new THREE.Mesh(
            new THREE.BoxGeometry(7.2, 0.2, 3.5),
            roofMaterial
        );
        roofLeft.position.set(0, 4.5, -0.8);
        roofLeft.rotation.z = Math.PI * 0.25;
        group.add(roofLeft);

        const roofRight = new THREE.Mesh(
            new THREE.BoxGeometry(7.2, 0.2, 3.5),
            roofMaterial
        );
        roofRight.position.set(0, 4.5, 0.8);
        roofRight.rotation.z = -Math.PI * 0.25;
        group.add(roofRight);

        // Large barn doors
        const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x3d2010, roughness: 0.7 });
        const leftDoor = new THREE.Mesh(new THREE.BoxGeometry(1.4, 2.8, 0.12), doorMaterial);
        leftDoor.position.set(-0.75, 1.9, 2.56);
        group.add(leftDoor);

        const rightDoor = new THREE.Mesh(new THREE.BoxGeometry(1.4, 2.8, 0.12), doorMaterial);
        rightDoor.position.set(0.75, 1.9, 2.56);
        group.add(rightDoor);

        // Door handles
        const handleMaterial = new THREE.MeshStandardMaterial({ color: 0x4a4a4a, metalness: 0.6, roughness: 0.4 });
        const handleLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 8), handleMaterial);
        handleLeft.position.set(-0.3, 1.9, 2.62);
        handleLeft.rotation.z = Math.PI / 2;
        group.add(handleLeft);

        const handleRight = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 8), handleMaterial);
        handleRight.position.set(1.2, 1.9, 2.62);
        handleRight.rotation.z = Math.PI / 2;
        group.add(handleRight);

        // Windows on sides
        const windowMaterial = new THREE.MeshStandardMaterial({ color: 0xa0876e, transparent: true, opacity: 0.7, roughness: 0.3 });
        const windowLeft1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.8, 0.9), windowMaterial);
        windowLeft1.position.set(-3.29, 2.5, 0.8);
        group.add(windowLeft1);

        const windowLeft2 = windowLeft1.clone();
        windowLeft2.position.z = -0.8;
        group.add(windowLeft2);

        const windowRight1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.8, 0.9), windowMaterial);
        windowRight1.position.set(3.29, 2.5, 0.8);
        group.add(windowRight1);

        const windowRight2 = windowRight1.clone();
        windowRight2.position.z = -0.8;
        group.add(windowRight2);

        // Storage crates in yard (decorative)
        const crateMaterial = new THREE.MeshStandardMaterial({ color: 0x6b5d4f, roughness: 0.9 });
        for (let i = 0; i < 3; i++) {
            const crate = new THREE.Mesh(
                new THREE.BoxGeometry(0.6, 0.6, 0.6),
                crateMaterial
            );
            const angle = (i / 3) * Math.PI * 2;
            crate.position.set(
                3.5 + Math.cos(angle) * 0.8,
                0.6,
                -2 + Math.sin(angle) * 0.8
            );
            crate.rotation.y = Math.random() * Math.PI / 4;
            group.add(crate);
        }

        // Fence posts around yard
        const fencePostMaterial = new THREE.MeshStandardMaterial({ color: 0x5a4a3a, roughness: 0.85 });
        const fencePositions = [
            { x: -5, z: -4 }, { x: -2.5, z: -4 }, { x: 0, z: -4 }, { x: 2.5, z: -4 }, { x: 5, z: -4 },
            { x: -5, z: 4 }, { x: -2.5, z: 4 }, { x: 0, z: 4 }, { x: 2.5, z: 4 }, { x: 5, z: 4 },
            { x: -5, z: -2 }, { x: -5, z: 0 }, { x: -5, z: 2 },
            { x: 5, z: -2 }, { x: 5, z: 0 }, { x: 5, z: 2 },
        ];

        fencePositions.forEach(pos => {
            const post = new THREE.Mesh(
                new THREE.CylinderGeometry(0.08, 0.08, 1.2, 8),
                fencePostMaterial
            );
            post.position.set(pos.x, 0.9, pos.z);
            group.add(post);
        });

        // Lantern lighting
        const lanternMaterial = new THREE.MeshStandardMaterial({
            color: 0xffd27a,
            emissive: 0xffb347,
            emissiveIntensity: 0.5
        });
        const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), lanternMaterial);
        lantern.position.set(2.2, 2.8, 2.8);
        group.add(lantern);

        const lanternLight = new THREE.PointLight(0xffb066, 1.5, 14);
        lanternLight.position.copy(lantern.position);
        group.add(lanternLight);

        // Position and add to scene
        group.position.copy(storehouse.location);
        group.position.y = 0;
        group.lookAt(0, 0, 0); // Face town center
        this.scene.add(group);
        this.obstacles.push(group);

        storehouse.structure = group;
        if (!group.userData) {
            group.userData = {};
        }
        group.userData.structureType = 'storehouse';
    }

    updateHomeVisuals(home) {
        if (!home.structure) return;

        // Remove existing bed indicators
        const bedIndicators = home.structure.children.filter(child => child.userData?.isBedIndicator);
        bedIndicators.forEach(indicator => home.structure.remove(indicator));

        // Count built beds
        const occupantIds = [home.occupantId, home.partnerId].filter(Boolean);
        const builtBeds = occupantIds.filter(id => {
            const bedEntry = home.beds[id];
            return bedEntry && bedEntry.built;
        }).length;

        // Add bed indicators for built beds
        const isFamilyHome = home.type === 'family';
        const bedMaterial = new THREE.MeshStandardMaterial({
            color: 0x8b7355, // Bed frame color
            roughness: 0.7
        });
        const blanketMaterial = new THREE.MeshStandardMaterial({
            color: 0xe6d7c3, // Light blanket color
            roughness: 0.8
        });

        if (builtBeds > 0) {
            // Position bed indicators visible through or near windows
            const bedPositions = isFamilyHome ?
                [{ x: -1.3, y: 0.6, z: 0.5 }, { x: -1.3, y: 0.6, z: -0.5 }] :
                [{ x: 0, y: 0.5, z: 0 }];

            for (let i = 0; i < builtBeds && i < bedPositions.length; i++) {
                const bedGroup = new THREE.Group();
                bedGroup.userData.isBedIndicator = true;

                // Bed frame
                const frameGeometry = new THREE.BoxGeometry(0.4, 0.15, 0.7);
                const frame = new THREE.Mesh(frameGeometry, bedMaterial);
                bedGroup.add(frame);

                // Mattress/blanket
                const mattressGeometry = new THREE.BoxGeometry(0.35, 0.1, 0.65);
                const mattress = new THREE.Mesh(mattressGeometry, blanketMaterial);
                mattress.position.y = 0.125;
                bedGroup.add(mattress);

                // Pillow
                const pillowGeometry = new THREE.BoxGeometry(0.25, 0.08, 0.2);
                const pillow = new THREE.Mesh(pillowGeometry, new THREE.MeshStandardMaterial({
                    color: 0xf0e6d2,
                    roughness: 0.9
                }));
                pillow.position.set(0, 0.17, -0.2);
                bedGroup.add(pillow);

                // Position the bed
                const pos = bedPositions[i];
                bedGroup.position.set(pos.x, pos.y, pos.z);
                bedGroup.rotation.y = Math.PI / 2; // Rotate to face properly

                home.structure.add(bedGroup);
            }
        }
    }

    getHomeById(id) {
        return this.homes.find(home => home.id === id) || null;
    }

    getHomeForVillager(villager) {
        if (!villager.homeId) return null;
        return this.getHomeById(villager.homeId);
    }

    openStructureModal(home, pointerEvent) {
        if (!this.structureModalElement) return;
        this.activeStructureContext = {
            type: 'home',
            homeId: home.id,
        };
        this.structureModalElement.classList.remove('hidden');
        this.structureModalElement.classList.add('visible');
        this.structureModalElement.setAttribute('aria-hidden', 'false');
        this.structureModalVisible = true;
        this.populateStructureModal(home);
    }

    hideStructureModal() {
        if (!this.structureModalElement) return;
        this.structureModalElement.classList.remove('visible');
        this.structureModalElement.classList.add('hidden');
        this.structureModalElement.setAttribute('aria-hidden', 'true');
        this.structureModalVisible = false;
        this.activeStructureContext = null;
    }

    populateStructureModal(home) {
        if (!this.structureModalElement) return;
        const title = this.structureModalElement.querySelector('[data-field="structure-title"]');
        const list = this.structureModalElement.querySelector('[data-field="structure-occupants"]');
        const details = this.structureModalElement.querySelector('[data-field="structure-details"]');

        if (title) {
            title.textContent = home.type === 'family' ? 'Family Home' : 'Cottage';
        }

        if (list) {
            list.innerHTML = '';
            const occupantIds = [home.occupantId, home.partnerId].filter(Boolean);
            if (occupantIds.length === 0) {
                const empty = document.createElement('li');
                empty.className = 'occupant-item';
                empty.style.cursor = 'default';
                empty.textContent = 'No residents yet.';
                list.appendChild(empty);
            } else {
                occupantIds.forEach(id => {
                    const villager = this.getVillagerById(id);
                    if (!villager) return;
                    const item = document.createElement('li');
                    item.className = 'occupant-item';
                    const info = document.createElement('div');
                    info.className = 'info';
                    const name = document.createElement('div');
                    name.className = 'name';
                    name.textContent = villager.name;

                    // Add "inside home" icon if villager is currently inside
                    const isInside = home.occupantsInside && home.occupantsInside.has(id);
                    if (isInside) {
                        const insideIcon = document.createElement('span');
                        insideIcon.textContent = ' 🏠';
                        insideIcon.style.fontSize = '0.9em';
                        insideIcon.title = 'Currently inside home';
                        name.appendChild(insideIcon);
                    }

                    // Add bed icon if villager has a bed
                    const bedEntry = home.beds[id];
                    if (bedEntry && bedEntry.built) {
                        const bedIcon = document.createElement('span');
                        bedIcon.textContent = ' 🛏️';
                        bedIcon.style.fontSize = '0.9em';
                        bedIcon.title = 'Has a bed';
                        name.appendChild(bedIcon);
                    }

                    const tag = document.createElement('div');
                    tag.className = 'tag';
                    if (home.partnerId && id === home.partnerId) {
                        tag.textContent = 'Partner';
                    } else {
                        tag.textContent = home.partnerId ? 'Spouse' : 'Resident';
                    }
                    info.appendChild(name);
                    info.appendChild(tag);
                    const status = document.createElement('div');
                    status.className = 'status';
                    status.textContent = villager.getProfessionLabel();
                    item.appendChild(info);
                    item.appendChild(status);

                    // Add "Build Bed" button if no bed and home is built
                    if (home.built && bedEntry && !bedEntry.built && !bedEntry.building) {
                        const buildBedBtn = document.createElement('button');
                        const req = this.bedRequirements;
                        const hasResources = this.inventory.wood >= req.wood && this.inventory.leaves >= req.leaves;

                        if (hasResources) {
                            buildBedBtn.textContent = 'Build Bed';
                            buildBedBtn.title = `Use ${req.wood} wood, ${req.leaves} leaves from village stores`;
                        } else {
                            buildBedBtn.textContent = 'Gather & Build';
                            buildBedBtn.title = `${villager.name} will gather ${req.wood} wood & ${req.leaves} leaves, then build the bed`;
                        }

                        buildBedBtn.className = 'build-bed-btn';
                        buildBedBtn.style.cssText = 'padding: 4px 8px; font-size: 0.8em; margin-left: 8px; cursor: pointer;';

                        buildBedBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            this.requestManualBedBuild(home, id);
                        });
                        item.appendChild(buildBedBtn);
                    } else if (bedEntry && bedEntry.building) {
                        const buildingText = document.createElement('span');

                        // Check if villager is gathering resources themselves
                        if (villager.specialTask && villager.specialTask.type === 'buildOwnBed') {
                            const task = villager.specialTask;
                            if (task.state === 'gatherWood') {
                                buildingText.textContent = `Gathering wood (${task.woodGathered}/${task.woodNeeded})`;
                            } else if (task.state === 'gatherLeaves') {
                                buildingText.textContent = `Gathering leaves (${task.leavesGathered}/${task.leavesNeeded})`;
                            } else if (task.state === 'buildBed') {
                                buildingText.textContent = 'Building...';
                            }
                        } else {
                            buildingText.textContent = 'Building...';
                        }

                        buildingText.style.cssText = 'font-size: 0.8em; color: #888; margin-left: 8px;';
                        item.appendChild(buildingText);
                    }

                    // Make the name area clickable to open villager modal
                    info.addEventListener('click', () => {
                        this.hideStructureModal();
                        this.openVillagerModal(villager);
                    });
                    info.style.cursor = 'pointer';

                    list.appendChild(item);
                });
            }
        }

        if (details) {
            let detailText = home.built ? 'This home is ready and welcoming.' : 'Construction is underway.';

            // Show who's currently inside the home
            if (home.occupantsInside && home.occupantsInside.size > 0) {
                const insideNames = Array.from(home.occupantsInside)
                    .map(id => this.getVillagerById(id))
                    .filter(Boolean)
                    .map(v => v.name);

                if (insideNames.length > 0) {
                    detailText += `\n\nCurrently inside: ${insideNames.join(', ')}`;
                }
            }

            details.textContent = detailText;
        }
    }

    updateStructureModalPosition() {
        if (!this.structureModalVisible || !this.activeStructureContext) return;
        if (this.activeStructureContext.type !== 'home') return;
        const home = this.getHomeById(this.activeStructureContext.homeId);
        if (!home || !home.structure) {
            this.hideStructureModal();
            return;
        }

        // Periodically refresh modal content to show bed building progress
        if (!this.structureModalRefreshTimer) {
            this.structureModalRefreshTimer = 0;
        }
        this.structureModalRefreshTimer += 0.016; // Approximate delta for 60fps
        if (this.structureModalRefreshTimer >= 1.0) { // Refresh every second
            this.structureModalRefreshTimer = 0;
            this.populateStructureModal(home);
        }
    }

    updateBonfireFlicker(delta) {
        if (!this.bonfire.isLit || !this.bonfire.light) return;
        this.bonfire.flickerPhase += delta * 6;
        const oscillation = Math.sin(this.bonfire.flickerPhase) * 0.2 + Math.sin(this.bonfire.flickerPhase * 1.7 + this.bonfire.randomOffset) * 0.15;
        const intensity = this.bonfire.baseLightIntensity * (1 + oscillation * 0.3);
        this.bonfire.light.intensity = intensity;
        if (this.bonfire.flameMesh) {
            const scale = 1 + oscillation * 0.25;
            this.bonfire.flameMesh.scale.set(scale, scale * 1.35, scale);
        }
        if (this.bonfire.flameMaterial) {
            this.bonfire.flameMaterial.emissiveIntensity = 1.4 + oscillation * 0.5;
        }
        if (this.bonfire.emberMaterial) {
            this.bonfire.emberMaterial.emissiveIntensity = 0.6 + oscillation * 0.3;
        }
    }

    shouldVillagerAttendBonfire(villager) {
        if (!this.bonfire.built || !this.bonfire.isLit) return false;
        if (!this.isNight()) return false;
        if (!villager || villager.specialTask?.type === 'buildBonfire') return false;
        if (villager === this.bonfire.builder) return false;
        if (villager.hasHome()) return false;
        if (villager.isGatheringProfession()) {
            if (villager.carrying) return false;
            const reserveThreshold = this.bonfireRequirements.nightlyFuel * 2;
            if (this.inventory.wood < reserveThreshold) {
                return false;
            }
        }
        return true;
    }

    applyTooltipPosition() {
        if (!this.modalVisible || !this.modalElement || !this.modalAnchor) {
            return;
        }

        const card = this.modalElement.querySelector('.modal-card');
        if (!card) return;

        const margin = 18;
        const cardRect = card.getBoundingClientRect();
        const cardWidth = cardRect.width || card.offsetWidth;
        const cardHeight = cardRect.height || card.offsetHeight;
        if (!cardWidth || !cardHeight) {
            return;
        }

        let left = this.modalAnchor.x + 24;
        let top = this.modalAnchor.y - cardHeight / 2;
        card.classList.remove('flip-x');

        if (left + cardWidth + margin > window.innerWidth) {
            left = this.modalAnchor.x - cardWidth - 24;
            card.classList.add('flip-x');
        }

        if (left < margin) {
            left = margin;
        }

        if (top < margin) {
            top = margin;
        } else if (top + cardHeight > window.innerHeight - margin) {
            top = window.innerHeight - margin - cardHeight;
        }

        this.modalElement.style.left = `${Math.round(left)}px`;
        this.modalElement.style.top = `${Math.round(top)}px`;

        const arrowOffset = Math.max(18, Math.min(this.modalAnchor.y - top, cardHeight - 18));
        card.style.setProperty('--tooltip-arrow-offset', `${Math.round(arrowOffset)}px`);
    }

    getAllResourceNodes() {
        return [
            ...this.resourceNodes.trees,
            ...this.resourceNodes.stones,
            ...this.resourceNodes.bushes,
        ];
    }

    getPreferredResourceTypes() {
        const priorities = [];
        const reserveWood = this.bonfireRequirements.nightlyFuel * 4;
        if (this.inventory.wood < reserveWood) {
            priorities.push('wood');
        }

        if (this.inventory.leaves < 80) {
            priorities.push('leaves');
        }

        if (this.inventory.stone < 150) {
            priorities.push('stone');
        }

        ['wood', 'leaves', 'stone'].forEach(type => {
            if (!priorities.includes(type)) {
                priorities.push(type);
            }
        });

        return priorities;
    }

    getVillagerName(gender) {
        const pool = this.namePools[gender] ?? [];
        if (pool.length > 0) {
            const index = Math.floor(Math.random() * pool.length);
            const [name] = pool.splice(index, 1);
            return name;
        }
        return `${gender === 'male' ? 'Brother' : 'Sister'} ${String(this.nextVillagerId).padStart(2, '0')}`;
    }

    findResourceNodeForVillager(villager, preferredType = null) {
        if (villager.currentResource && !villager.currentResource.depleted && villager.currentResource.remaining > 0) {
            return villager.currentResource;
        }

        const pools = {
            wood: this.resourceNodes.trees,
            stone: this.resourceNodes.stones,
            leaves: this.resourceNodes.bushes,
        };

        // If a specific type is requested, only search for that type
        const typeOrder = preferredType ? [preferredType] : this.getPreferredResourceTypes();

        for (const type of typeOrder) {
            const pool = pools[type];
            if (!pool || pool.length === 0) continue;

            const candidates = pool.filter(node => !node.depleted && node.remaining > 0 && (!node.claimedBy || node.claimedBy === villager.id));
            if (candidates.length === 0) continue;

            candidates.sort((a, b) => {
                const aDist = villager.mesh.position.distanceToSquared(a.object.position);
                const bDist = villager.mesh.position.distanceToSquared(b.object.position);
                return aDist - bDist;
            });

            const choice = candidates[0];
            choice.claimedBy = villager.id;
            return choice;
        }

        return null;
    }

    getVillagerById(id) {
        return this.villagerById.get(id) || null;
    }

    updateSocialSystems(delta) {
        const readyVillagers = [];
        this.villagers.forEach(villager => {
            villager.updateSocialNeeds(delta);
            if (villager.shouldSeekSocial()) {
                readyVillagers.push(villager);
            }
        });

        readyVillagers.forEach(villager => {
            if (!villager.isAvailableForSocial()) return;
            const partner = this.findSocialPartner(villager);
            if (partner) {
                this.startSocialInteraction(villager, partner);
            }
        });
    }

    findSocialPartner(villager) {
        const searchRadius = 12;
        const candidates = this.villagers.filter(other => {
            if (other === villager) return false;
            if (!other.isAvailableForSocial()) return false;
            if (other.socialCooldown > 0) return false;
            const distance = villager.mesh.position.distanceTo(other.mesh.position);
            if (distance > searchRadius) return false;
            return true;
        });

        if (candidates.length === 0) {
            return null;
        }

        candidates.sort((a, b) => {
            const scoreA = villager.getRelationshipScore(a.id);
            const scoreB = villager.getRelationshipScore(b.id);
            if (Math.abs(scoreA - scoreB) > 1) {
                return scoreB - scoreA;
            }
            const distA = villager.mesh.position.distanceToSquared(a.mesh.position);
            const distB = villager.mesh.position.distanceToSquared(b.mesh.position);
            return distA - distB;
        });

        return candidates[0] || null;
    }

    startSocialInteraction(a, b) {
        const key = this.getInteractionKey(a, b);
        if (this.activeSocialInteractions.has(key)) {
            return;
        }
        this.activeSocialInteractions.add(key);
        const midpoint = a.mesh.position.clone().add(b.mesh.position).multiplyScalar(0.5);
        midpoint.y = 0;
        a.beginSocialInteraction(b, midpoint);
        b.beginSocialInteraction(a, midpoint);
    }

    completeSocialInteraction(a, b, quality = 1) {
        const deltaScore = 6 + Math.random() * 4 + quality;
        this.adjustRelationship(a, b, deltaScore);
        a.socialMeter = Math.min(100, a.socialMeter + 28);
        b.socialMeter = Math.min(100, b.socialMeter + 28);
        a.socialCooldown = 10 + Math.random() * 5;
        b.socialCooldown = 10 + Math.random() * 5;
        if (a.specialTask && a.specialTask.type === 'socialize') {
            a.specialTask.completed = true;
            a.specialTask.state = 'wrap';
        }
        if (b.specialTask && b.specialTask.type === 'socialize') {
            b.specialTask.completed = true;
            b.specialTask.state = 'wrap';
        }
        this.activeSocialInteractions.delete(this.getInteractionKey(a, b));
    }

    adjustRelationship(a, b, delta) {
        if (!a || !b) return;
        const entryA = this.ensureRelationshipEntry(a, b);
        const entryB = this.ensureRelationshipEntry(b, a);

        entryA.score = THREE.MathUtils.clamp((entryA.score ?? 10) + delta, 0, 100);
        entryB.score = THREE.MathUtils.clamp((entryB.score ?? 10) + delta, 0, 100);
        entryA.lastInteraction = this.totalElapsedMinutes;
        entryB.lastInteraction = this.totalElapsedMinutes;

        this.relationshipCheckRomance(a, b, entryA.score, entryB.score);
        this.relationshipCheckRomance(b, a, entryB.score, entryA.score);
    }

    ensureRelationshipEntry(fromVillager, toVillager) {
        if (!fromVillager.relationships) {
            fromVillager.relationships = new Map();
        }
        if (!fromVillager.relationships.has(toVillager.id)) {
            fromVillager.relationships.set(toVillager.id, {
                score: 12,
                lastInteraction: this.totalElapsedMinutes,
            });
        }
        return fromVillager.relationships.get(toVillager.id);
    }

    relationshipCheckRomance(a, b, scoreAB, scoreBA) {
        if (!a || !b) return;
        if (a.gender === b.gender) return;
        const minScore = Math.min(scoreAB, scoreBA);

        const romanceThreshold = 78;
        const breakupThreshold = 52;

        if (a.romanticPartnerId === b.id && b.romanticPartnerId === a.id) {
            if (minScore < breakupThreshold) {
                a.romanticPartnerId = null;
                b.romanticPartnerId = null;
                this.handleCoupleSeparation(a, b);
            }
            return;
        }

        if (minScore >= romanceThreshold) {
            if (!a.romanticPartnerId && !b.romanticPartnerId) {
                a.romanticPartnerId = b.id;
                b.romanticPartnerId = a.id;
                this.handleCoupleFormed(a, b);
            }
        }
    }

    getRelationshipSummaries(villager) {
        if (!villager.relationships) return [];
        const summaries = [];
        villager.relationships.forEach((entry, otherId) => {
            const other = this.getVillagerById(otherId);
            if (!other) return;
            const score = Math.round(entry.score ?? 0);
            const isRomantic = villager.romanticPartnerId === otherId && other.romanticPartnerId === villager.id;
            const status = this.getRelationshipStatus(score, isRomantic);
            summaries.push({
                id: otherId,
                name: other.name,
                score,
                status,
                isRomantic,
            });
        });

        summaries.sort((a, b) => b.score - a.score);
        return summaries.slice(0, 8);
    }

    getRelationshipStatus(score, isRomantic) {
        if (isRomantic) {
            if (score >= 95) return 'Beloved';
            if (score >= 85) return 'Partner';
            return 'Courtship';
        }
        if (score >= 90) return 'Kindred';
        if (score >= 70) return 'Best Friend';
        if (score >= 50) return 'Good Friend';
        if (score >= 30) return 'Friend';
        if (score >= 15) return 'Acquaintance';
        return 'Stranger';
    }

    getInteractionKey(a, b) {
        const ids = [a.id, b.id].sort((x, y) => x - y);
        return ids.join(':');
    }

    handleCoupleFormed(a, b) {
        if (!a || !b) return;
        if (!a.homeLocation && b.homeLocation) {
            a.homeId = b.homeId;
            a.homeLocation = b.homeLocation?.clone();
        } else if (a.homeLocation && !b.homeLocation) {
            b.homeId = a.homeId;
            b.homeLocation = a.homeLocation?.clone();
        }

        this.homes.forEach(home => {
            if (!home) return;
            if (!home.built) return;
            if (home.occupantId === a.id || home.occupantId === b.id) {
                home.occupantId = null;
            }
        });
    }

    handleCoupleSeparation(a, b) {
        if (!a || !b) return;
        a.homeId = null;
        a.homeLocation = null;
        b.homeId = null;
        b.homeLocation = null;
    }

    releaseResourceClaim(node, villager) {
        if (!node) return;
        if (!villager || node.claimedBy === villager.id) {
            node.claimedBy = null;
        }
    }

    markResourceDepleted(node) {
        if (!node || node.depleted) return;
        node.depleted = true;
        node.remaining = 0;
        if (node.object?.visible !== undefined) {
            node.object.visible = false;
        }
        this.removeObstacle(node.object);
    }

    removeObstacle(object) {
        const index = this.obstacles.indexOf(object);
        if (index !== -1) {
            this.obstacles.splice(index, 1);
        }
    }

    depositResources(payload) {
        if (!payload || payload.amount <= 0) {
            return;
        }
        if (this.inventory[payload.type] !== undefined) {
            this.inventory[payload.type] += payload.amount;
            this.updateResourceDisplay();
            this.maybeTriggerBonfireBuild();
        }
    }

    getTownCenterDropPoint() {
        const radius = Math.random() * 2.2;
        const angle = Math.random() * Math.PI * 2;
        return new THREE.Vector3(
            Math.cos(angle) * radius,
            0,
            Math.sin(angle) * radius
        );
    }

    createVillageCenter() {
        const group = new THREE.Group();
        const obstacles = [];

        const plazaGeometry = new THREE.CircleGeometry(this.townCenterRadius * 0.9, 48);
        const plazaMaterial = new THREE.MeshStandardMaterial({ color: 0x8b7b5b, roughness: 0.9 });
        const plaza = new THREE.Mesh(plazaGeometry, plazaMaterial);
        plaza.rotation.x = -Math.PI / 2;
        plaza.position.y = 0.02;
        group.add(plaza);

        const borderGeometry = new THREE.RingGeometry(this.townCenterRadius * 0.9, this.townCenterRadius, 48);
        const borderMaterial = new THREE.MeshStandardMaterial({ color: 0x3d2b1f, side: THREE.DoubleSide, roughness: 0.8 });
        const border = new THREE.Mesh(borderGeometry, borderMaterial);
        border.rotation.x = -Math.PI / 2;
        border.position.y = 0.025;
        group.add(border);

        const pathGeometry = new THREE.PlaneGeometry(3, 10);
        const pathMaterial = new THREE.MeshStandardMaterial({ color: 0x6f5741, roughness: 0.95, side: THREE.DoubleSide });
        const path = new THREE.Mesh(pathGeometry, pathMaterial);
        path.rotation.x = -Math.PI / 2;
        path.position.set(0, 0.021, -6);
        group.add(path);

        const foundationGeometry = new THREE.BoxGeometry(12, 1, 12);
        const foundationMaterial = new THREE.MeshStandardMaterial({ color: 0x705b41, roughness: 0.6 });
        const foundation = new THREE.Mesh(foundationGeometry, foundationMaterial);
        foundation.position.y = 0.5;
        group.add(foundation);
        obstacles.push(foundation);

        const hallGeometry = new THREE.BoxGeometry(8, 4, 6);
        const hallMaterial = new THREE.MeshStandardMaterial({ color: 0xcbb59d, roughness: 0.5 });
        const hall = new THREE.Mesh(hallGeometry, hallMaterial);
        hall.position.y = 3;
        group.add(hall);
        obstacles.push(hall);

        const roofGeometry = new THREE.ConeGeometry(6, 4, 4);
        const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x4a2414, roughness: 0.4, metalness: 0.1 });
        const roof = new THREE.Mesh(roofGeometry, roofMaterial);
        roof.position.y = 7;
        roof.rotation.y = Math.PI / 4;
        group.add(roof);

        const porchPlatformGeometry = new THREE.BoxGeometry(5, 0.4, 3);
        const porchPlatformMaterial = new THREE.MeshStandardMaterial({ color: 0x5a4632, roughness: 0.7 });
        const porchPlatform = new THREE.Mesh(porchPlatformGeometry, porchPlatformMaterial);
        porchPlatform.position.set(0, 1.2, 4.6);
        group.add(porchPlatform);
        obstacles.push(porchPlatform);

        const porchRoofGeometry = new THREE.BoxGeometry(5.2, 0.3, 3.2);
        const porchRoofMaterial = new THREE.MeshStandardMaterial({ color: 0x3b2212, roughness: 0.5 });
        const porchRoof = new THREE.Mesh(porchRoofGeometry, porchRoofMaterial);
        porchRoof.position.set(0, 2.7, 4.6);
        group.add(porchRoof);

        const beamGeometry = new THREE.CylinderGeometry(0.18, 0.22, 2.8, 6);
        const beamMaterial = new THREE.MeshStandardMaterial({ color: 0x6a4321, roughness: 0.8 });
        const leftBeam = new THREE.Mesh(beamGeometry, beamMaterial);
        leftBeam.position.set(-2.3, 1.9, 5.8);
        group.add(leftBeam);
        obstacles.push(leftBeam);

        const rightBeam = leftBeam.clone();
        rightBeam.position.x = 2.3;
        group.add(rightBeam);
        obstacles.push(rightBeam);

        const doorGeometry = new THREE.BoxGeometry(1.8, 2.6, 0.2);
        const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x3a2314, roughness: 0.7 });
        const door = new THREE.Mesh(doorGeometry, doorMaterial);
        door.position.set(0, 2.3, 3.3);
        group.add(door);

        const doorHandleGeometry = new THREE.SphereGeometry(0.1, 8, 8);
        const doorHandleMaterial = new THREE.MeshStandardMaterial({ color: 0xd89b3c, metalness: 0.8, roughness: 0.3 });
        const doorHandle = new THREE.Mesh(doorHandleGeometry, doorHandleMaterial);
        doorHandle.position.set(0.8, 2.3, 3.4);
        group.add(doorHandle);

        const windowGeometry = new THREE.BoxGeometry(1.2, 1.2, 0.1);
        const windowMaterial = new THREE.MeshStandardMaterial({ color: 0xdbe7f3, roughness: 0.2, metalness: 0.1, transparent: true, opacity: 0.85 });
        const leftWindow = new THREE.Mesh(windowGeometry, windowMaterial);
        leftWindow.position.set(-2.2, 3.4, 3.1);
        group.add(leftWindow);

        const rightWindow = leftWindow.clone();
        rightWindow.position.x = 2.2;
        group.add(rightWindow);

        const bannerGeometry = new THREE.PlaneGeometry(1, 2.4);
        const bannerMaterial = new THREE.MeshStandardMaterial({ color: 0x6b1a2f, side: THREE.DoubleSide, roughness: 0.8 });
        const leftBanner = new THREE.Mesh(bannerGeometry, bannerMaterial);
        leftBanner.position.set(-3.4, 3, 3.4);
        leftBanner.rotation.y = Math.PI / 8;
        group.add(leftBanner);

        const rightBanner = leftBanner.clone();
        rightBanner.position.x = 3.4;
        rightBanner.rotation.y = -Math.PI / 8;
        group.add(rightBanner);

        const crestGeometry = new THREE.CylinderGeometry(0, 0.4, 0.8, 4);
        const crestMaterial = new THREE.MeshStandardMaterial({ color: 0xd8c16f, roughness: 0.4, metalness: 0.5 });
        const crest = new THREE.Mesh(crestGeometry, crestMaterial);
        crest.position.set(0, 5.4, 3.1);
        group.add(crest);

        const chimneyGeometry = new THREE.BoxGeometry(1, 2, 1);
        const chimneyMaterial = new THREE.MeshStandardMaterial({ color: 0x6b5241, roughness: 0.7 });
        const chimney = new THREE.Mesh(chimneyGeometry, chimneyMaterial);
        chimney.position.set(-2.5, 6.5, -1.5);
        group.add(chimney);
        obstacles.push(chimney);

        const lanternHolderGeometry = new THREE.CylinderGeometry(0.05, 0.07, 0.6, 6);
        const lanternHolderMaterial = new THREE.MeshStandardMaterial({ color: 0x3d2b1a });
        const leftLanternHolder = new THREE.Mesh(lanternHolderGeometry, lanternHolderMaterial);
        leftLanternHolder.position.set(-2.2, 2.8, 5.9);
        leftLanternHolder.rotation.z = Math.PI / 2;
        group.add(leftLanternHolder);
        obstacles.push(leftLanternHolder);

        const rightLanternHolder = leftLanternHolder.clone();
        rightLanternHolder.position.x = 2.2;
        group.add(rightLanternHolder);
        obstacles.push(rightLanternHolder);

        const lanternGeometry = new THREE.SphereGeometry(0.15, 10, 10);
        const lanternMaterial = new THREE.MeshStandardMaterial({ color: 0xf6d27b, emissive: 0xffae58, emissiveIntensity: 0.6 });
        const leftLantern = new THREE.Mesh(lanternGeometry, lanternMaterial);
        leftLantern.position.copy(leftLanternHolder.position).add(new THREE.Vector3(0.5, -0.1, 0));
        group.add(leftLantern);

        const rightLantern = leftLantern.clone();
        rightLantern.position.copy(rightLanternHolder.position).add(new THREE.Vector3(-0.5, -0.1, 0));
        group.add(rightLantern);

        const leftLight = new THREE.PointLight(0xffad66, 0.7, 12);
        leftLight.position.copy(leftLantern.position).add(new THREE.Vector3(0, 0.2, 0));
        group.add(leftLight);

        const rightLight = leftLight.clone();
        rightLight.position.copy(rightLantern.position).add(new THREE.Vector3(0, 0.2, 0));
        group.add(rightLight);

        const wellOuterGeometry = new THREE.CylinderGeometry(1.5, 1.5, 1.2, 16);
        const wellOuterMaterial = new THREE.MeshStandardMaterial({ color: 0x8d8d8d, roughness: 0.85 });
        const wellOuter = new THREE.Mesh(wellOuterGeometry, wellOuterMaterial);
        wellOuter.position.set(-5, 0.6, -3);
        group.add(wellOuter);
        obstacles.push(wellOuter);

        const wellInnerGeometry = new THREE.CylinderGeometry(1.2, 1.2, 0.4, 16);
        const wellInnerMaterial = new THREE.MeshStandardMaterial({ color: 0x3d5d8f, roughness: 0.3, metalness: 0.1 });
        const wellInner = new THREE.Mesh(wellInnerGeometry, wellInnerMaterial);
        wellInner.position.set(-5, 0.3, -3);
        group.add(wellInner);

        const noticePostGeometry = new THREE.CylinderGeometry(0.12, 0.15, 2.5, 6);
        const noticePostMaterial = new THREE.MeshStandardMaterial({ color: 0x7b5633, roughness: 0.75 });
        const noticePost = new THREE.Mesh(noticePostGeometry, noticePostMaterial);
        noticePost.position.set(4.5, 1.25, -2.5);
        group.add(noticePost);
        obstacles.push(noticePost);

        const noticeBoardGeometry = new THREE.BoxGeometry(2.2, 1.4, 0.15);
        const noticeBoardMaterial = new THREE.MeshStandardMaterial({ color: 0xb48a5a, roughness: 0.8 });
        const noticeBoard = new THREE.Mesh(noticeBoardGeometry, noticeBoardMaterial);
        noticeBoard.position.set(4.5, 1.9, -2.5);
        group.add(noticeBoard);

        return { group, obstacles };
    }

    isInsideTownCenter(position, buffer = 0) {
        const radius = Math.sqrt(position.x * position.x + position.z * position.z);
        return radius < this.townCenterRadius + buffer;
    }

    getRandomPosition(range, buffer = 0) {
        let candidate = new THREE.Vector3();
        let attempts = 0;
        const maxAttempts = 50;

        do {
            candidate.set(Math.random() * range * 2 - range, 0, Math.random() * range * 2 - range);
            attempts++;
        } while (this.isInsideTownCenter(candidate, buffer) && attempts < maxAttempts);

        if (this.isInsideTownCenter(candidate, buffer)) {
            const angle = Math.random() * Math.PI * 2;
            const radius = this.townCenterRadius + buffer + 2;
            candidate.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
        }

        return candidate.clone();
    }

    // Procedural generation for trees (trunk + foliage)
    addTrees(count) {
        for (let i = 0; i < count; i++) {
            const position = this.getRandomPosition(40, 2);
            const trunkGeometry = new THREE.CylinderGeometry(0.45, 0.55, 3.5, 8);
            const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8b5a2b });
            const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
            trunk.position.set(position.x, 1.75, position.z);

            const foliageGeometry = new THREE.ConeGeometry(2.8, 4.5, 8);
            const foliageMaterial = new THREE.MeshStandardMaterial({ color: 0x1f5f1a });
            const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
            foliage.position.y = 3;

            trunk.add(foliage);
            this.scene.add(trunk);
            this.obstacles.push(trunk); // For collision later

            const capacity = 60 + Math.floor(Math.random() * 40);
            this.resourceNodes.trees.push({
                id: `tree-${this.resourceNodes.trees.length + 1}`,
                type: 'wood',
                object: trunk,
                position: trunk.position.clone(),
                remaining: capacity,
                capacity,
                claimedBy: null,
                depleted: false,
            });
        }
    }

    // Bushes: Simple spheres
    addBushes(count) {
        for (let i = 0; i < count; i++) {
            const position = this.getRandomPosition(40, 1.5);
            const bushGeometry = new THREE.SphereGeometry(1.1, 8, 8);
            const bushMaterial = new THREE.MeshStandardMaterial({ color: 0x2f7d2f });
            const bush = new THREE.Mesh(bushGeometry, bushMaterial);
            bush.position.set(position.x, 0.55, position.z);
            this.scene.add(bush);
            this.obstacles.push(bush);

            const capacity = 40 + Math.floor(Math.random() * 30);
            this.resourceNodes.bushes.push({
                id: `bush-${this.resourceNodes.bushes.length + 1}`,
                type: 'leaves',
                object: bush,
                position: bush.position.clone(),
                remaining: capacity,
                capacity,
                claimedBy: null,
                depleted: false,
            });
        }
    }

    // Ponds: Flat planes with basic water color (extend with shaders later for ripples)
    addPonds(count) {
        for (let i = 0; i < count; i++) {
            const position = this.getRandomPosition(35, 4);
            const pondGeometry = new THREE.CircleGeometry(3 + Math.random() * 2, 32);
            const pondMaterial = new THREE.MeshStandardMaterial({ color: 0x4169e1, side: THREE.DoubleSide });
            const pond = new THREE.Mesh(pondGeometry, pondMaterial);
            pond.rotation.x = -Math.PI / 2;
            pond.position.set(position.x, 0.02, position.z); // Slightly above ground to avoid z-fighting
            this.scene.add(pond);
            this.obstacles.push(pond); // Treat as obstacle for villagers
        }
    }

    addStoneClusters(count) {
        const baseScale = 1.2;

        for (let i = 0; i < count; i++) {
            const position = this.getRandomPosition(35, 6);
            position.y = 0;

            const cluster = new THREE.Group();
            cluster.position.copy(position);

            const boulderCount = 3 + Math.floor(Math.random() * 3);
            for (let j = 0; j < boulderCount; j++) {
                const radius = baseScale * (0.6 + Math.random() * 0.9);
                const boulderGeometry = new THREE.IcosahedronGeometry(radius, 1);
                const hueVariation = 0.05 * Math.random();
                const boulderMaterial = new THREE.MeshStandardMaterial({
                    color: new THREE.Color().setHSL(0.6 - hueVariation, 0.1, 0.45 + Math.random() * 0.1),
                    roughness: 0.95,
                    metalness: 0.05,
                });
                const boulder = new THREE.Mesh(boulderGeometry, boulderMaterial);

                const offsetRadius = 0.4 + Math.random() * 1.5;
                const offsetAngle = Math.random() * Math.PI * 2;
                boulder.position.set(
                    Math.cos(offsetAngle) * offsetRadius,
                    radius * 0.4,
                    Math.sin(offsetAngle) * offsetRadius
                );
                boulder.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
                cluster.add(boulder);
            }

            const rubbleGeometry = new THREE.ConeGeometry(0.15, 0.25, 8);
            const rubbleMaterial = new THREE.MeshStandardMaterial({ color: 0x5e5e5e, roughness: 0.9 });
            for (let r = 0; r < 6; r++) {
                const rubble = new THREE.Mesh(rubbleGeometry, rubbleMaterial);
                const radius = 0.6 + Math.random() * 1.2;
                const angle = Math.random() * Math.PI * 2;
                rubble.position.set(Math.cos(angle) * radius, 0.12, Math.sin(angle) * radius);
                rubble.rotation.x = Math.PI / 2 + Math.random() * 0.3;
                rubble.rotation.z = Math.random() * Math.PI;
                cluster.add(rubble);
            }

            const lowRockGeometry = new THREE.CylinderGeometry(0.25, 0.35, 0.3, 8);
            const lowRockMaterial = new THREE.MeshStandardMaterial({ color: 0x767676, roughness: 0.92 });
            for (let r = 0; r < 4; r++) {
                const lowRock = new THREE.Mesh(lowRockGeometry, lowRockMaterial);
                const radius = 0.3 + Math.random() * 0.8;
                const angle = Math.random() * Math.PI * 2;
                lowRock.position.set(Math.cos(angle) * radius, 0.15, Math.sin(angle) * radius);
                lowRock.rotation.y = Math.random() * Math.PI;
                cluster.add(lowRock);
            }

            this.scene.add(cluster);
            this.obstacles.push(cluster);

            const capacity = 140 + Math.floor(Math.random() * 80);
            this.resourceNodes.stones.push({
                id: `stone-${this.resourceNodes.stones.length + 1}`,
                type: 'stone',
                object: cluster,
                position: cluster.position.clone(),
                remaining: capacity,
                capacity,
                claimedBy: null,
                depleted: false,
            });
        }
    }

    // Villager Class: Handles individual AI and rendering
    spawnVillagers(count) {
        for (let i = 0; i < count; i++) {
            const position = this.getRandomVillageSquarePosition();
            const profile = this.getVillagerProfile({ tier: 'basic' });
            const villager = new Villager(this, profile, position, {
                townCenterRadius: this.townCenterRadius,
                wanderRadius: 38,
            });
            this.scene.add(villager.mesh);
            this.villagers.push(villager);
            this.villagerById.set(villager.id, villager);
        }
    }

    getRandomVillageSquarePosition() {
        const minRadius = 7;
        const maxRadius = Math.max(minRadius + 1, this.townCenterRadius - 1);
        const angle = Math.random() * Math.PI * 2;
        const radius = minRadius + Math.random() * (maxRadius - minRadius);
        const position = new THREE.Vector3(
            Math.cos(angle) * radius,
            0,
            Math.sin(angle) * radius
        );
        return position;
    }

    getVillagerProfile({ tier = 'basic' } = {}) {
        const genders = ['male', 'female'];
        const gender = genders[Math.floor(Math.random() * genders.length)];
        return {
            gender,
            tier,
            name: this.getVillagerName(gender),
            profession: 'gatherer',
            outfit: this.getVillagerOutfit(gender, tier),
        };
    }

    getVillagerOutfit(gender, tier) {
        const maleOutfits = {
            basic: [
                { tunic: 0x70593e, trim: 0x3c2f21, accent: 0xa48662, boots: 0x2c2117, hat: 0x423225, hood: 0x423225, hair: 0x342416, beard: 0x2b1b10 },
                { tunic: 0x5f4b34, trim: 0x2d2317, accent: 0x9a7e52, boots: 0x261c13, hat: 0x3d2c1f, hood: 0x3d2c1f, hair: 0x32251a, beard: 0x2a1f14 },
                { tunic: 0x7a6148, trim: 0x433325, accent: 0xb69674, boots: 0x342519, hat: 0x4a3829, hood: 0x4a3829, hair: 0x3a2a1d, beard: 0x312215 },
            ],
            standard: [
                { tunic: 0x6b8d47, trim: 0x2e3d1f, accent: 0xd4b483, boots: 0x3a2c20, hat: 0x2d1b0b, hood: 0x44533b, hair: 0x2f2415, beard: 0x2b1a0c },
                { tunic: 0x8c4f2b, trim: 0x402218, accent: 0xc9a66b, boots: 0x2f2117, hat: 0x3b2616, hood: 0x5c3c28, hair: 0x3d2a1a, beard: 0x26160d },
                { tunic: 0x4d6a99, trim: 0x20304f, accent: 0xbfc3d6, boots: 0x2a2d3a, hat: 0x1f2a3d, hood: 0x374869, hair: 0x1f1f26, beard: 0x1a1a20 },
                { tunic: 0x9c7f5a, trim: 0x4e3a20, accent: 0xe4c389, boots: 0x3a2f1f, hat: 0x5d4024, hood: 0x6e5435, hair: 0x362211, beard: 0x301d0e },
                { tunic: 0x536454, trim: 0x2c342b, accent: 0xcdbb8d, boots: 0x272218, hat: 0x1f241c, hood: 0x3a4a3c, hair: 0x27251c, beard: 0x231f16 },
            ],
        };

        const femaleOutfits = {
            basic: [
                { tunic: 0x8c6b52, trim: 0x493425, accent: 0xcda37d, boots: 0x3a2a21, hat: 0x5a4331, hood: 0x5a4331, hair: 0x3a2620 },
                { tunic: 0x9b7a5f, trim: 0x553a28, accent: 0xe0be92, boots: 0x422f22, hat: 0x6c4f38, hood: 0x6c4f38, hair: 0x442b1f },
                { tunic: 0x77624b, trim: 0x3f2d20, accent: 0xbf9c73, boots: 0x35271d, hat: 0x53402d, hood: 0x53402d, hair: 0x36251b },
            ],
            standard: [
                { tunic: 0xb3736b, trim: 0x5a2d28, accent: 0xf1c6b2, boots: 0x4a2a27, hat: 0x754043, hood: 0xc49492, hair: 0x4d2e28 },
                { tunic: 0x6d8c62, trim: 0x43513f, accent: 0xdfd6ad, boots: 0x3b3225, hat: 0x5c4a34, hood: 0x8b805f, hair: 0x3d2d1d },
                { tunic: 0x8477aa, trim: 0x3f375d, accent: 0xdccceb, boots: 0x322c44, hat: 0x47385f, hood: 0x695a8b, hair: 0x2f2644 },
                { tunic: 0xc0996b, trim: 0x6e4f32, accent: 0xf3d6a5, boots: 0x4e3624, hat: 0x845e3d, hood: 0xb08456, hair: 0x4a3120 },
                { tunic: 0x7b94a3, trim: 0x3c4f5a, accent: 0xc8dde5, boots: 0x2f3a43, hat: 0x465860, hood: 0x67818f, hair: 0x2c3a44 },
            ],
        };

        const paletteSets = gender === 'male' ? maleOutfits : femaleOutfits;
        const options = paletteSets[tier] ?? paletteSets.basic;
        return options[Math.floor(Math.random() * options.length)];
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        const rawDelta = this.clock.getDelta();
        const worldDelta = rawDelta * this.timeMultiplier;

        this.advanceTime(worldDelta);
        this.updateSocialSystems(worldDelta);

        // Update simulation: Move villagers
        this.villagers.forEach(villager => villager.update(worldDelta, this.obstacles));

        this.updateBonfireFlicker(worldDelta);

        // Update chimney smoke for all homes
        this.homes.forEach(home => {
            if (home.built && home.smokeData) {
                this.updateHomeSmoke(home);
                this.animateHomeSmoke(home, worldDelta);
            }
        });

        if (this.structureModalVisible) {
            this.updateStructureModalPosition();
        }

        this.renderer.render(this.scene, this.camera);
    }
}

class Villager {
    constructor(manager, profile, position, options = {}) {
        const { gender, outfit, tier = 'basic', name } = profile;
        const { townCenterRadius = 12, wanderRadius = 40 } = options;

        this.manager = manager;
        this.id = manager.nextVillagerId++;
        this.name = name ?? `Villager ${String(this.id).padStart(2, '0')}`;
        this.gender = gender;
        this.outfit = outfit;
        this.tier = tier;

        this.innerAvoidRadius = Math.max(6, townCenterRadius - 6);
        this.plazaRadius = Math.max(this.innerAvoidRadius + 1, townCenterRadius - 0.5);
        this.wanderRadius = wanderRadius;

        this.profession = profile.profession ?? 'gatherer';
        this.state = this.isGatheringProfession() ? 'seekingResource' : 'wandering';
        this.currentResource = null;
        this.carrying = null;
        this.gatherTimer = 0;

        this.mesh = new THREE.Group();
        this.createAppearance();
        this.mesh.position.copy(position);
        this.mesh.userData.villager = this;
        this.mesh.name = this.name;

        this.speed = 1.4 + Math.random() * 0.9;
        this.target = this.isGatheringProfession() ? null : this.getRandomTarget();
        this.timeToNextTarget = Math.random() * 3 + 2;
        this.specialTask = null;
        this.relationships = new Map();
        this.romanticPartnerId = null;
        this.socialMeter = 60 + Math.random() * 25;
        this.socialCooldown = Math.random() * 5;
        this.energy = 100; // Energy system: 0-100, depletes during day, restores at night (faster with bed)
    }

    setProfession(professionId) {
        const next = professionId || 'gatherer';
        const previous = this.profession || 'gatherer';

        if (this.specialTask && this.specialTask.type === 'buildBonfire') {
            return;
        }

        if (this.specialTask && this.specialTask.type === 'bonfireHangout') {
            this.finishSpecialTask();
        }

        if (next === previous) {
            return;
        }

        const wasGathering = this.isGatheringProfession(previous);
        const willGather = this.isGatheringProfession(next);

        if (wasGathering && !willGather) {
            if (this.carrying) {
                this.manager.depositResources(this.carrying);
                this.carrying = null;
            }
            this.manager.releaseResourceClaim(this.currentResource, this);
            this.currentResource = null;
        }

        this.profession = next;

        if (willGather) {
            this.state = 'seekingResource';
            this.target = null;
            this.timeToNextTarget = 0;
        } else {
            this.state = 'wandering';
            this.target = this.getRandomTarget();
            this.timeToNextTarget = Math.random() * 3 + 2;
        }
    }

    isGatheringProfession(prof = this.profession) {
        return !prof || prof === 'gatherer';
    }

    getProfessionLabel() {
        const def = this.manager.getProfessionDefinition(this.profession || 'gatherer');
        return def?.name || 'Gatherer';
    }

    hasHome() {
        const home = this.manager.getHomeForVillager(this);
        return !!(home && home.built);
    }

    update(delta, obstacles) {
        // Gradual energy depletion during the day (not at night when resting)
        if (!this.manager.isNight() && this.energy > 0) {
            this.energy = Math.max(0, this.energy - 0.015); // Slow depletion
        }

        if (this.specialTask) {
            if (this.updateSpecialTask(delta, obstacles)) {
                return;
            }
        }

        if (this.shouldReturnHome()) {
            this.beginHomeRest();
            if (this.updateSpecialTask(delta, obstacles)) {
                return;
            }
        }

        if (this.manager.shouldVillagerAttendBonfire(this) && (!this.specialTask || this.specialTask.type !== 'buildBonfire')) {
            if (!this.specialTask || this.specialTask.type !== 'bonfireHangout') {
                this.beginBonfireHangout();
            }
            if (this.updateSpecialTask(delta, obstacles)) {
                return;
            }
        }

        if (this.isGatheringProfession()) {
            this.updateGatherer(delta, obstacles);
        } else {
            this.updateCommoner(delta, obstacles);
        }
    }

    updateCommoner(delta, obstacles) {
        this.state = 'wandering';
        if (!this.target) {
            this.target = this.getRandomTarget();
        }

        const reached = this.moveTowardsTarget(delta);
        this.timeToNextTarget -= delta;

        if (reached || this.timeToNextTarget <= 0) {
            this.target = this.getRandomTarget();
            this.timeToNextTarget = Math.random() * 5 + 2;
        }

        this.avoidObstacles(obstacles);
    }

    updateGatherer(delta, obstacles) {
        switch (this.state) {
            case 'seekingResource': {
                const node = this.manager.findResourceNodeForVillager(this);
                if (node) {
                    this.currentResource = node;
                    this.target = this.getResourceApproachPoint(node);
                    this.state = 'movingToResource';
                } else {
                    if (!this.target || this.mesh.position.distanceTo(this.target) < 0.8) {
                        this.target = this.getRandomTarget(true);
                    }
                    this.moveTowardsTarget(delta, 0.8);
                    this.avoidObstacles(obstacles, true);
                }
                break;
            }
            case 'movingToResource': {
                const node = this.currentResource;
                if (!node || node.depleted || node.remaining <= 0) {
                    this.manager.releaseResourceClaim(node, this);
                    this.currentResource = null;
                    this.state = 'seekingResource';
                    this.target = null;
                    break;
                }
                this.target = this.getResourceApproachPoint(node);
                if (this.moveTowardsTarget(delta, 0.9)) {
                    this.state = 'gathering';
                    this.gatherTimer = 0;
                }
                break;
            }
            case 'gathering': {
                const node = this.currentResource;
                if (!node || node.depleted || node.remaining <= 0) {
                    this.manager.releaseResourceClaim(node, this);
                    this.currentResource = null;
                    this.state = 'seekingResource';
                    this.target = null;
                    break;
                }
                this.gatherTimer += delta;
                if (this.gatherTimer >= 2.2) {
                    const collected = Math.min(8, node.remaining);
                    node.remaining -= collected;
                    this.carrying = { type: node.type, amount: collected };
                    if (node.remaining <= 0) {
                        this.manager.markResourceDepleted(node);
                    } else {
                        this.manager.releaseResourceClaim(node, this);
                    }
                    this.currentResource = null;
                    this.target = this.manager.getTownCenterDropPoint();
                    this.state = 'returning';
                }
                break;
            }
            case 'returning': {
                if (!this.target) {
                    this.target = this.manager.getTownCenterDropPoint();
                }
                if (this.moveTowardsTarget(delta, 1.2)) {
                    if (this.carrying) {
                        this.manager.depositResources(this.carrying);
                        this.carrying = null;
                    }
                    this.state = 'seekingResource';
                    this.target = null;
                }
                break;
            }
            default:
                this.state = 'seekingResource';
                break;
        }
    }

    updateSpecialTask(delta, obstacles) {
        if (!this.specialTask) return false;
        const task = this.specialTask;

        if (task.type === 'buildBonfire') {
            if (!this.manager.bonfire.building || task.bonfire !== this.manager.bonfire) {
                this.finishSpecialTask();
                return false;
            }

            if (!task.target) {
                task.target = this.manager.getBonfireConstructionPoint();
                this.target = task.target.clone();
            }

            if (task.state === 'travel') {
                if (this.moveTowardsTarget(delta, 0.8)) {
                    task.state = 'building';
                    task.buildTimer = 0;
                    task.buildDuration = task.buildDuration ?? (3.2 + Math.random() * 1.6);
                    this.target = null;
                } else {
                    this.avoidObstacles(obstacles, true);
                }
            } else if (task.state === 'building') {
                task.buildTimer += delta;
                if (task.buildTimer >= task.buildDuration) {
                    this.manager.finishBonfireConstruction(this);
                    this.finishSpecialTask();
                } else if (this.manager.bonfire?.location) {
                    this.faceTowards(this.manager.bonfire.location);
                }
            }
            return true;
        }

        if (task.type === 'buildHome') {
            const home = this.manager.getHomeById(task.homeId);
            if (!home || home.builderId !== this.id) {
                this.finishSpecialTask();
                return false;
            }

            if (!task.target) {
                task.target = home.location.clone().add(new THREE.Vector3(Math.random() * 0.6 - 0.3, 0, Math.random() * 0.6 - 0.3));
                this.target = task.target.clone();
            }

            if (task.state === 'travel') {
                // Check if close enough to home to start building (prevents getting stuck on obstacles)
                const distanceToHome = this.mesh.position.distanceTo(home.location);
                const reachedTarget = this.moveTowardsTarget(delta, 0.8);

                // Initialize travel timer to detect if stuck
                if (!task.travelTimer) {
                    task.travelTimer = 0;
                }
                task.travelTimer += delta;

                // Start building if reached target, close enough to home, or stuck for too long
                if (reachedTarget || distanceToHome < 4.5 || task.travelTimer > 8) {
                    task.state = 'building';
                    task.buildTimer = 0;
                    task.buildDuration = task.buildDuration ?? (4 + Math.random() * 2);
                    this.target = null;
                } else {
                    this.avoidObstacles(obstacles, true);
                }
            } else if (task.state === 'building') {
                task.buildTimer += delta;
                if (task.buildTimer >= task.buildDuration) {
                    this.manager.finishHomeConstruction(home, this);
                    this.finishSpecialTask();
                } else {
                    this.faceTowards(home.location);
                }
            }
            return true;
        }

        if (task.type === 'buildBed') {
            const home = this.manager.getHomeById(task.homeId);
            if (!home || !home.beds[task.occupantId]) {
                this.finishSpecialTask();
                return false;
            }

            const bedEntry = home.beds[task.occupantId];
            if (bedEntry.builderId !== this.id || bedEntry.built) {
                this.finishSpecialTask();
                return false;
            }

            if (!task.target) {
                task.target = home.location.clone().add(new THREE.Vector3(Math.random() * 0.4 - 0.2, 0, Math.random() * 0.4 - 0.2));
                this.target = task.target.clone();
            }

            if (task.state === 'travel') {
                // Check if close enough to home to start building (prevents getting stuck on obstacles)
                const distanceToHome = this.mesh.position.distanceTo(home.location);
                const reachedTarget = this.moveTowardsTarget(delta, 0.8);

                // Initialize travel timer to detect if stuck
                if (!task.travelTimer) {
                    task.travelTimer = 0;
                }
                task.travelTimer += delta;

                // Start building if reached target, close enough to home, or stuck for too long
                if (reachedTarget || distanceToHome < 3.5 || task.travelTimer > 8) {
                    task.state = 'building';
                    task.buildTimer = 0;
                    task.buildDuration = task.buildDuration ?? (2.5 + Math.random() * 1);
                    this.target = null;
                } else {
                    this.avoidObstacles(obstacles, true);
                }
            } else if (task.state === 'building') {
                task.buildTimer += delta;
                if (task.buildTimer >= task.buildDuration) {
                    this.manager.finishBedConstruction(home, task.occupantId, this);
                    this.finishSpecialTask();
                } else {
                    this.faceTowards(home.location);
                }
            }
            return true;
        }

        if (task.type === 'buildOwnBed') {
            const home = this.manager.getHomeById(task.homeId);
            if (!home || !home.beds[task.occupantId]) {
                this.finishSpecialTask();
                return false;
            }

            const bedEntry = home.beds[task.occupantId];
            if (bedEntry.builderId !== this.id || bedEntry.built) {
                this.finishSpecialTask();
                return false;
            }

            // State: gatherWood - find and gather wood resources
            if (task.state === 'gatherWood') {
                if (task.woodGathered >= task.woodNeeded) {
                    // Move to gathering leaves
                    task.state = 'gatherLeaves';
                    this.currentResource = null;
                    this.carrying = null;
                    this.target = null;
                    return true;
                }

                // Use normal gathering behavior to get wood
                if (!this.currentResource || this.currentResource.type !== 'wood') {
                    const woodNode = this.manager.findResourceNodeForVillager(this, 'wood');
                    if (woodNode) {
                        this.currentResource = woodNode;
                        this.target = this.getResourceApproachPoint(woodNode);
                        task.subState = 'movingToResource';
                    } else {
                        // Wander looking for wood
                        if (!this.target || this.mesh.position.distanceTo(this.target) < 0.8) {
                            this.target = this.getRandomTarget(true);
                        }
                        this.moveTowardsTarget(delta, 0.8);
                        this.avoidObstacles(obstacles);
                    }
                    return true;
                }

                if (task.subState === 'movingToResource') {
                    if (this.moveTowardsTarget(delta, 0.8)) {
                        task.subState = 'gathering';
                        task.gatherTimer = 0;
                    } else {
                        this.avoidObstacles(obstacles);
                    }
                } else if (task.subState === 'gathering') {
                    task.gatherTimer = (task.gatherTimer || 0) + delta;
                    if (task.gatherTimer >= 2.2) {
                        const amountGathered = Math.min(8, task.woodNeeded - task.woodGathered);
                        task.woodGathered += amountGathered;
                        this.currentResource.remaining -= amountGathered;
                        if (this.currentResource.remaining <= 0) {
                            this.manager.depleteResourceNode(this.currentResource);
                        }
                        this.manager.releaseResourceClaim(this.currentResource, this);
                        this.currentResource = null;
                        this.target = null;
                        task.subState = null;
                        task.gatherTimer = 0;
                    }
                }
                return true;
            }

            // State: gatherLeaves - find and gather leaf resources
            if (task.state === 'gatherLeaves') {
                if (task.leavesGathered >= task.leavesNeeded) {
                    // Move to building
                    task.state = 'buildBed';
                    this.currentResource = null;
                    this.carrying = null;
                    this.target = home.location.clone().add(new THREE.Vector3(Math.random() * 0.4 - 0.2, 0, Math.random() * 0.4 - 0.2));
                    return true;
                }

                // Use normal gathering behavior to get leaves
                if (!this.currentResource || this.currentResource.type !== 'leaves') {
                    const leavesNode = this.manager.findResourceNodeForVillager(this, 'leaves');
                    if (leavesNode) {
                        this.currentResource = leavesNode;
                        this.target = this.getResourceApproachPoint(leavesNode);
                        task.subState = 'movingToResource';
                    } else {
                        // Wander looking for leaves
                        if (!this.target || this.mesh.position.distanceTo(this.target) < 0.8) {
                            this.target = this.getRandomTarget(true);
                        }
                        this.moveTowardsTarget(delta, 0.8);
                        this.avoidObstacles(obstacles);
                    }
                    return true;
                }

                if (task.subState === 'movingToResource') {
                    if (this.moveTowardsTarget(delta, 0.8)) {
                        task.subState = 'gathering';
                        task.gatherTimer = 0;
                    } else {
                        this.avoidObstacles(obstacles);
                    }
                } else if (task.subState === 'gathering') {
                    task.gatherTimer = (task.gatherTimer || 0) + delta;
                    if (task.gatherTimer >= 2.2) {
                        const amountGathered = Math.min(8, task.leavesNeeded - task.leavesGathered);
                        task.leavesGathered += amountGathered;
                        this.currentResource.remaining -= amountGathered;
                        if (this.currentResource.remaining <= 0) {
                            this.manager.depleteResourceNode(this.currentResource);
                        }
                        this.manager.releaseResourceClaim(this.currentResource, this);
                        this.currentResource = null;
                        this.target = null;
                        task.subState = null;
                        task.gatherTimer = 0;
                    }
                }
                return true;
            }

            // State: buildBed - travel to home and build the bed
            if (task.state === 'buildBed') {
                if (task.subState === 'travel' || !task.subState) {
                    task.subState = 'travel';

                    // Check if close enough to home to start building (prevents getting stuck)
                    const distanceToHome = this.mesh.position.distanceTo(home.location);
                    const reachedTarget = this.moveTowardsTarget(delta, 0.8);

                    // Initialize travel timer to detect if stuck
                    if (!task.buildTravelTimer) {
                        task.buildTravelTimer = 0;
                    }
                    task.buildTravelTimer += delta;

                    // Start building if reached target, close enough to home, or stuck for too long
                    if (reachedTarget || distanceToHome < 3.5 || task.buildTravelTimer > 8) {
                        task.subState = 'building';
                        task.buildTimer = 0;
                        task.buildDuration = 2.5 + Math.random() * 1;
                        this.target = null;
                    } else {
                        this.avoidObstacles(obstacles, true);
                    }
                } else if (task.subState === 'building') {
                    task.buildTimer += delta;
                    if (task.buildTimer >= task.buildDuration) {
                        this.manager.finishBedConstruction(home, task.occupantId);
                        this.finishSpecialTask();
                    } else {
                        this.faceTowards(home.location);
                    }
                }
                return true;
            }

            return true;
        }

        if (task.type === 'buildStorehouse') {
            const storehouse = this.manager.storehouse;
            if (!storehouse || storehouse.builderId !== this.id) {
                this.finishSpecialTask();
                return false;
            }

            if (!task.target) {
                task.target = storehouse.location.clone().add(new THREE.Vector3(Math.random() * 0.4 - 0.2, 0, Math.random() * 0.4 - 0.2));
                this.target = task.target.clone();
            }

            if (task.state === 'travel') {
                // Check if close enough to storehouse location to start building
                const distanceToStorehouse = this.mesh.position.distanceTo(storehouse.location);
                const reachedTarget = this.moveTowardsTarget(delta, 0.8);

                // Initialize travel timer to detect if stuck
                if (!task.travelTimer) {
                    task.travelTimer = 0;
                }
                task.travelTimer += delta;

                // Start building if reached target, close enough, or stuck for too long
                if (reachedTarget || distanceToStorehouse < 4.0 || task.travelTimer > 8) {
                    task.state = 'building';
                    task.buildTimer = 0;
                    task.buildDuration = task.buildDuration ?? (8 + Math.random() * 3); // Longer build time for storehouse
                    this.target = null;
                } else {
                    this.avoidObstacles(obstacles, true);
                }
            } else if (task.state === 'building') {
                task.buildTimer += delta;
                if (task.buildTimer >= task.buildDuration) {
                    this.manager.finishStorehouseConstruction();
                    this.finishSpecialTask();
                } else {
                    this.faceTowards(storehouse.location);
                }
            }
            return true;
        }

        if (task.type === 'bonfireHangout') {
            if (!this.manager.shouldVillagerAttendBonfire(this)) {
                this.finishSpecialTask();
                return false;
            }

            if (task.state === 'travel') {
                if (!this.target) {
                    this.target = task.target.clone();
                }
                if (this.moveTowardsTarget(delta, 0.9)) {
                    task.state = 'loiter';
                    task.lingerTimer = 0;
                    task.repositionAfter = 6 + Math.random() * 5;
                    this.target = null;
                }
            } else {
                task.lingerTimer += delta;
                if (task.lingerTimer >= task.repositionAfter) {
                    task.lingerTimer = 0;
                    task.repositionAfter = 6 + Math.random() * 6;
                    task.target = this.manager.getBonfireHangoutPoint();
                    task.state = 'travel';
                    this.target = task.target.clone();
                } else if (this.manager.bonfire?.location) {
                    this.faceTowards(this.manager.bonfire.location);
                }
            }
            return true;
        }

        if (task.type === 'socialize') {
            const partner = this.manager.getVillagerById(task.partnerId);
            if (!partner || !partner.specialTask || partner.specialTask.type !== 'socialize') {
                this.finishSpecialTask();
                return false;
            }

            if (!task.meetPoint) {
                task.meetPoint = partner.mesh.position.clone().add(this.mesh.position).multiplyScalar(0.5);
                task.meetPoint.y = 0;
            }

            if (task.state === 'travel') {
                if (!this.target) {
                    this.target = task.meetPoint.clone();
                }
                if (this.moveTowardsTarget(delta, 0.6)) {
                    task.state = 'chat';
                    task.chatTimer = 0;
                    task.chatDuration = task.chatDuration ?? (3.5 + Math.random() * 2.5);
                    this.target = null;
                } else {
                    this.avoidObstacles(obstacles, true);
                }
            } else if (task.state === 'chat') {
                task.chatTimer += delta;
                this.faceTowards(partner.mesh.position);
                if (task.chatTimer >= task.chatDuration) {
                    task.state = 'wrap';
                    if (!task.completed) {
                        task.completed = true;
                        this.manager.completeSocialInteraction(this, partner, task.chatDuration);
                    }
                }
            } else if (task.state === 'wrap') {
                this.finishSpecialTask();
            }
            return true;
        }

        if (task.type === 'homeRest') {
            const home = this.manager.getHomeById(task.homeId);
            if (!home || !home.built) {
                // Clean up if home is gone
                if (home && home.occupantsInside) {
                    home.occupantsInside.delete(this.id);
                }
                this.mesh.visible = true; // Make sure visible
                this.finishSpecialTask();
                return false;
            }

            if (task.state === 'travel') {
                // Move toward home entrance
                if (!this.target) {
                    this.target = task.target.clone();
                }

                const distanceToHome = this.mesh.position.distanceTo(home.location);
                const reachedTarget = this.moveTowardsTarget(delta, 0.8);

                // Close enough to enter the home
                if (reachedTarget || distanceToHome < 2.0) {
                    task.state = 'entering';
                    this.target = null;
                } else {
                    this.avoidObstacles(obstacles, true);
                }
            } else if (task.state === 'entering') {
                // Transition state: Hide villager and mark as inside
                this.mesh.visible = false;
                home.occupantsInside.add(this.id);
                task.state = 'inside';
            } else if (task.state === 'inside') {
                // Villager is inside home (not visible in 3D world)
                // Restore energy while resting
                const bedEntry = home.beds[this.id];
                const hasBed = bedEntry && bedEntry.built;
                const restoreRate = hasBed ? 0.5 : 0.2; // Faster restoration with bed
                this.energy = Math.min(100, this.energy + restoreRate);

                // Check if it's morning (time to leave)
                if (!this.manager.isNight()) {
                    task.state = 'exiting';
                    // Calculate exit position outside home
                    const angle = Math.random() * Math.PI * 2;
                    const exitDistance = 3.5; // Safely outside the home structure
                    const exitPosition = home.location.clone().add(
                        new THREE.Vector3(
                            Math.cos(angle) * exitDistance,
                            0,
                            Math.sin(angle) * exitDistance
                        )
                    );

                    // Position villager at exit location
                    this.mesh.position.copy(exitPosition);
                    this.mesh.position.y = 0;

                    // Make visible and remove from inside tracking
                    this.mesh.visible = true;
                    home.occupantsInside.delete(this.id);

                    // Complete the rest task
                    this.finishSpecialTask();
                }
            }
            return true;
        }

        return false;
    }

    assignBonfireConstruction(bonfire) {
        this.manager.releaseResourceClaim(this.currentResource, this);
        this.currentResource = null;
        this.carrying = null;
        this.specialTask = {
            type: 'buildBonfire',
            bonfire,
            state: 'travel',
            target: this.manager.getBonfireConstructionPoint(),
        };
        this.target = this.specialTask.target.clone();
        this.state = 'special';
    }

    assignHomeConstruction(home) {
        this.manager.releaseResourceClaim(this.currentResource, this);
        this.currentResource = null;
        this.carrying = null;
        this.specialTask = {
            type: 'buildHome',
            homeId: home.id,
            state: 'travel',
            target: home.location.clone().add(new THREE.Vector3(Math.random() * 0.6 - 0.3, 0, Math.random() * 0.6 - 0.3)),
        };
        this.target = this.specialTask.target.clone();
        this.state = 'special';
    }

    assignBedConstruction(home, occupantId) {
        this.manager.releaseResourceClaim(this.currentResource, this);
        this.currentResource = null;
        this.carrying = null;
        this.specialTask = {
            type: 'buildBed',
            homeId: home.id,
            occupantId: occupantId,
            state: 'travel',
            target: home.location.clone().add(new THREE.Vector3(Math.random() * 0.4 - 0.2, 0, Math.random() * 0.4 - 0.2)),
        };
        this.target = this.specialTask.target.clone();
        this.state = 'special';
    }

    assignSelfBedConstruction(home, occupantId) {
        this.manager.releaseResourceClaim(this.currentResource, this);
        this.currentResource = null;
        this.carrying = null;
        this.specialTask = {
            type: 'buildOwnBed',
            homeId: home.id,
            occupantId: occupantId,
            state: 'gatherWood',
            woodGathered: 0,
            leavesGathered: 0,
            woodNeeded: this.manager.bedRequirements.wood,
            leavesNeeded: this.manager.bedRequirements.leaves,
        };
        this.state = 'special';
        this.target = null;
    }

    assignStorehouseConstruction() {
        this.manager.releaseResourceClaim(this.currentResource, this);
        this.currentResource = null;
        this.carrying = null;
        this.specialTask = {
            type: 'buildStorehouse',
            state: 'travel',
            target: this.manager.storehouse.location.clone().add(new THREE.Vector3(Math.random() * 0.4 - 0.2, 0, Math.random() * 0.4 - 0.2)),
        };
        this.target = this.specialTask.target.clone();
        this.state = 'special';
    }

    isInsideHome() {
        const home = this.manager.getHomeForVillager(this);
        return home && home.occupantsInside && home.occupantsInside.has(this.id);
    }

    shouldReturnHome() {
        if (!this.manager.isNight()) return false;
        const home = this.manager.getHomeForVillager(this);
        if (!home || !home.built) return false;
        if (this.specialTask) return false;
        if (this.isInsideHome()) return false; // Already inside
        if (!this.isGatheringProfession() && this.socialCooldown > 0 && this.socialMeter > 50) {
            return false;
        }
        const distance = this.mesh.position.distanceTo(home.location);
        return distance > 1.4;
    }

    beginHomeRest() {
        const home = this.manager.getHomeForVillager(this);
        if (!home || !home.built) return;
        this.specialTask = {
            type: 'homeRest',
            homeId: home.id,
            state: 'travel',
            target: home.location.clone().add(new THREE.Vector3(Math.random() * 0.4 - 0.2, 0, Math.random() * 0.4 - 0.2)),
        };
        this.target = this.specialTask.target.clone();
        this.state = 'special';
    }

    beginBonfireHangout() {
        if (this.specialTask && this.specialTask.type === 'bonfireHangout') {
            return;
        }
        if (this.specialTask && this.specialTask.type === 'buildBonfire') {
            return;
        }
        if (this.isGatheringProfession()) {
            this.manager.releaseResourceClaim(this.currentResource, this);
            this.currentResource = null;
            if (this.carrying) {
                this.manager.depositResources(this.carrying);
                this.carrying = null;
            }
            this.state = 'seekingResource';
        }

        const target = this.manager.getBonfireHangoutPoint();
        this.specialTask = {
            type: 'bonfireHangout',
            bonfire: this.manager.bonfire,
            state: 'travel',
            target,
            lingerTimer: 0,
            repositionAfter: 6 + Math.random() * 5,
        };
        this.target = target.clone();
    }

    finishSpecialTask() {
        const completedTask = this.specialTask;
        this.specialTask = null;

        // Clean up homeRest state - ensure villager is visible and removed from inside tracking
        if (completedTask?.type === 'homeRest') {
            this.mesh.visible = true; // Always make visible when finishing
            const home = completedTask.homeId ? this.manager.getHomeById(completedTask.homeId) : null;
            if (home && home.occupantsInside) {
                home.occupantsInside.delete(this.id);
            }
        }

        if (completedTask?.type === 'socialize') {
            const partner = completedTask.partnerId ? this.manager.getVillagerById(completedTask.partnerId) : null;
            if (partner) {
                this.manager.activeSocialInteractions.delete(this.manager.getInteractionKey(this, partner));
            }
            this.socialCooldown = Math.max(this.socialCooldown, 6 + Math.random() * 3);
        }
        if (completedTask?.type === 'buildBonfire') {
            this.manager.bonfire.builder = null;
        }
        if (completedTask?.type === 'buildHome') {
            const home = completedTask.homeId ? this.manager.getHomeById(completedTask.homeId) : null;
            if (home && home.builderId === this.id) {
                home.builderId = null;
            }
        }
        if (this.isGatheringProfession()) {
            this.state = 'seekingResource';
            this.target = null;
            this.timeToNextTarget = Math.random() * 2 + 1;
        } else {
            this.state = 'wandering';
            this.target = this.getRandomTarget();
            this.timeToNextTarget = Math.random() * 3 + 1.5;
        }
    }

    canTakeConstruction() {
        if (this.specialTask) return false;
        if (this.isInsideHome()) return false; // Can't take tasks while inside home
        if (!this.isGatheringProfession()) return true;
        return !this.carrying && (!this.currentResource || this.state === 'seekingResource');
    }

    updateSocialNeeds(delta) {
        const decayRate = this.isGatheringProfession() ? 1.6 : 1.1;
        this.socialMeter = THREE.MathUtils.clamp(this.socialMeter - delta * decayRate, 0, 100);
        this.socialCooldown = Math.max(0, this.socialCooldown - delta);
    }

    shouldSeekSocial() {
        return this.socialMeter < 55 && this.socialCooldown <= 0 && this.isAvailableForSocial();
    }

    isAvailableForSocial() {
        if (this.specialTask) return false;
        if (this.manager.bonfire.builder === this) return false;
        if (this.isGatheringProfession()) {
            if (this.carrying) return false;
            if (this.state === 'returning' || this.state === 'movingToResource' || this.state === 'gathering') return false;
        }
        return true;
    }

    getRelationshipScore(partnerId) {
        if (!this.relationships) return 0;
        const entry = this.relationships.get(partnerId);
        return entry ? entry.score ?? 0 : 0;
    }

    beginSocialInteraction(partner, meetPoint) {
        if (this.isGatheringProfession()) {
            this.manager.releaseResourceClaim(this.currentResource, this);
            this.currentResource = null;
            if (this.carrying) {
                this.manager.depositResources(this.carrying);
                this.carrying = null;
            }
        }

        this.specialTask = {
            type: 'socialize',
            partnerId: partner.id,
            state: 'travel',
            meetPoint: meetPoint.clone(),
            chatDuration: 3.5 + Math.random() * 2.5,
            completed: false,
        };
        this.target = meetPoint.clone();
        this.state = 'special';
    }

    faceTowards(position) {
        const direction = position.clone().sub(this.mesh.position);
        direction.y = 0;
        if (direction.lengthSq() > 0.0001) {
            direction.normalize();
            this.mesh.rotation.y = Math.atan2(direction.x, direction.z);
        }
    }

    applyProfessionAdornment(head, isFemale) {
        const profession = this.profession || 'gatherer';
        const headHeight = head.position.y;
        const adornments = {
            gatherer: () => {
                const hatMaterial = new THREE.MeshStandardMaterial({ color: 0x3a4523, roughness: 0.6 });
                const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.68, 0.08, 16), hatMaterial);
                brim.position.y = headHeight + 0.12;
                brim.scale.x = isFemale ? 1.05 : 1;
                brim.scale.z = isFemale ? 1.05 : 1;
                this.mesh.add(brim);

                const crown = new THREE.Mesh(new THREE.ConeGeometry(0.52, 0.85, 16), hatMaterial);
                crown.position.y = headHeight + 0.48;
                this.mesh.add(crown);

                const bandMaterial = new THREE.MeshStandardMaterial({ color: 0xcfa36d, roughness: 0.5 });
                const band = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.05, 10, 18), bandMaterial);
                band.rotation.x = Math.PI / 2;
                band.position.y = headHeight + 0.22;
                this.mesh.add(band);
            },
            laborer: () => {
                const capMaterial = new THREE.MeshStandardMaterial({ color: 0x4a2b24, roughness: 0.65 });
                const cap = new THREE.Mesh(new THREE.SphereGeometry(0.55, 18, 18, 0, Math.PI * 2, 0, Math.PI / 1.3), capMaterial);
                cap.position.set(0, headHeight + 0.18, -0.05);
                this.mesh.add(cap);

                const bandMaterial = new THREE.MeshStandardMaterial({ color: 0xd0b37a, roughness: 0.5 });
                const band = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.06, 12, 18), bandMaterial);
                band.rotation.x = Math.PI / 2;
                band.position.y = headHeight + 0.1;
                this.mesh.add(band);

                const featherMaterial = new THREE.MeshStandardMaterial({ color: 0xf5e6a8, roughness: 0.4 });
                const feather = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.6, 12), featherMaterial);
                feather.position.set(0.3, headHeight + 0.38, -0.05);
                feather.rotation.z = -Math.PI / 5;
                this.mesh.add(feather);
            },
        };

        const adorn = adornments[profession] || adornments.gatherer;
        adorn();
    }

    moveTowardsTarget(delta, stopDistance = 0.6) {
        if (!this.target) {
            return false;
        }

        const toTarget = this.target.clone().sub(this.mesh.position);
        toTarget.y = 0;

        const distance = toTarget.length();
        if (distance <= stopDistance) {
            return true;
        }

        if (distance > 0.0001) {
            const direction = toTarget.normalize();
            const step = direction.clone().multiplyScalar(this.speed * delta);
            const maxStep = Math.max(distance - stopDistance, 0);
            if (step.length() > maxStep) {
                step.setLength(maxStep);
            }
            this.mesh.position.add(step);
            this.mesh.position.y = 0;

            if (step.lengthSq() > 0.00001) {
                this.mesh.rotation.y = Math.atan2(direction.x, direction.z);
            }
        }

        return this.mesh.position.distanceTo(this.target) <= stopDistance + 0.05;
    }

    avoidObstacles(obstacles, force = false) {
        if (!obstacles) return;
        if (!force && this.isGatheringProfession()) return;

        for (const obstacle of obstacles) {
            if (!obstacle || !obstacle.position) continue;
            const offset = this.mesh.position.clone().sub(obstacle.position);
            const distanceSq = offset.lengthSq();
            if (distanceSq < 0.0001) continue;
            if (Math.sqrt(distanceSq) < 1.5) {
                offset.normalize().multiplyScalar(0.8);
                this.mesh.position.add(offset);
                this.mesh.position.y = 0;
                if (!force) {
                    this.target = this.getRandomTarget(true);
                    this.timeToNextTarget = Math.random() * 3 + 1;
                }
                break;
            }
        }
    }

    getResourceApproachPoint(node) {
        const pos = node?.object?.position ?? new THREE.Vector3();
        return new THREE.Vector3(pos.x, 0, pos.z);
    }

    createAppearance() {
        const outfit = this.outfit;
        const isFemale = this.gender === 'female';
        const isBasicTier = this.tier === 'basic';

        const bootsMaterial = new THREE.MeshStandardMaterial({ color: outfit.boots, roughness: 0.85 });
        const bootTopRadius = isFemale ? 0.26 : isBasicTier ? 0.3 : 0.32;
        const bootBottomRadius = isFemale ? 0.22 : isBasicTier ? 0.26 : 0.28;
        const bootHeight = isFemale ? 0.45 : isBasicTier ? 0.42 : 0.4;
        const bootGeometry = new THREE.CylinderGeometry(bootBottomRadius, bootTopRadius, bootHeight, 12);
        const leftBoot = new THREE.Mesh(bootGeometry, bootsMaterial);
        leftBoot.position.set(-0.22, bootHeight / 2, 0);
        this.mesh.add(leftBoot);

        const rightBoot = leftBoot.clone();
        rightBoot.position.x = 0.22;
        this.mesh.add(rightBoot);

        const legMaterial = new THREE.MeshStandardMaterial({ color: outfit.trim, roughness: 0.8 });
        const legTopRadius = isFemale ? 0.22 : isBasicTier ? 0.27 : 0.3;
        const legBottomRadius = isFemale ? 0.18 : isBasicTier ? 0.22 : 0.25;
        const legHeight = isFemale ? 0.9 : isBasicTier ? 0.85 : 0.8;
        const legGeometry = new THREE.CylinderGeometry(legBottomRadius, legTopRadius, legHeight, 12);
        const legs = new THREE.Mesh(legGeometry, legMaterial);
        legs.position.y = bootHeight + legHeight / 2;
        this.mesh.add(legs);

        const tunicMaterial = new THREE.MeshStandardMaterial({ color: outfit.tunic, roughness: 0.85 });
        if (isFemale) {
            const skirtBottom = isBasicTier ? 0.8 : 0.85;
            const skirtTop = isBasicTier ? 0.52 : 0.55;
            const skirtHeight = isBasicTier ? 2.0 : 2.1;
            const skirtGeometry = new THREE.CylinderGeometry(skirtBottom, skirtTop, skirtHeight, 18);
            const skirt = new THREE.Mesh(skirtGeometry, tunicMaterial);
            skirt.position.y = bootHeight + legHeight - 0.1;
            this.mesh.add(skirt);

            const bodiceMaterial = new THREE.MeshStandardMaterial({ color: outfit.accent, roughness: 0.7 });
            const bodiceGeometry = new THREE.CylinderGeometry(isBasicTier ? 0.5 : 0.55, 0.5, isBasicTier ? 0.9 : 1.0, 16);
            const bodice = new THREE.Mesh(bodiceGeometry, bodiceMaterial);
            bodice.position.y = bootHeight + legHeight + 0.7;
            this.mesh.add(bodice);
        } else {
            const tunicTop = isBasicTier ? 0.74 : 0.78;
            const tunicGeometry = new THREE.CylinderGeometry(isBasicTier ? 0.62 : 0.65, tunicTop, isBasicTier ? 1.7 : 1.8, 14);
            const tunic = new THREE.Mesh(tunicGeometry, tunicMaterial);
            tunic.position.y = bootHeight + legHeight + 0.6;
            this.mesh.add(tunic);

            if (!isBasicTier) {
                const vestMaterial = new THREE.MeshStandardMaterial({ color: outfit.accent, roughness: 0.75 });
                const vestGeometry = new THREE.BoxGeometry(1.1, 1.35, 0.7);
                const vest = new THREE.Mesh(vestGeometry, vestMaterial);
                vest.position.set(0, bootHeight + legHeight + 0.95, 0.35);
                this.mesh.add(vest);
            }
        }

        if (!isFemale && !isBasicTier && Math.random() > 0.65) {
            const sashMaterial = new THREE.MeshStandardMaterial({ color: outfit.trim, roughness: 0.6 });
            const sashGeometry = new THREE.BoxGeometry(1.2, 0.35, 0.1);
            const sash = new THREE.Mesh(sashGeometry, sashMaterial);
            sash.position.set(0, bootHeight + legHeight + 1.1, 0.75);
            this.mesh.add(sash);
        }

        const includeApron = isFemale ? true : (!isBasicTier && Math.random() > 0.4);
        if (includeApron) {
            const apronMaterial = new THREE.MeshStandardMaterial({ color: outfit.accent, roughness: 0.75 });
            const apronWidth = isFemale ? (isBasicTier ? 1.05 : 1.2) : 0.9;
            const apronHeight = isFemale ? (isBasicTier ? 1.4 : 1.6) : 1.3;
            const apronGeometry = new THREE.BoxGeometry(apronWidth, apronHeight, 0.12);
            const apron = new THREE.Mesh(apronGeometry, apronMaterial);
            const apronY = isFemale ? bootHeight + legHeight + (isBasicTier ? 0.25 : 0.4) : bootHeight + legHeight - 0.1;
            const apronZ = isFemale ? 0.6 : 0.55;
            apron.position.set(0, apronY, apronZ);
            this.mesh.add(apron);
        }

        const beltMaterial = new THREE.MeshStandardMaterial({ color: outfit.trim, roughness: 0.6 });
        const beltRadius = isFemale ? 0.55 : 0.6;
        const beltThickness = isFemale ? 0.05 : 0.06;
        const beltGeometry = new THREE.TorusGeometry(beltRadius, beltThickness, 10, 18);
        const belt = new THREE.Mesh(beltGeometry, beltMaterial);
        belt.rotation.x = Math.PI / 2;
        belt.position.y = bootHeight + legHeight + (isFemale ? (isBasicTier ? 0.8 : 0.85) : (isBasicTier ? 0.55 : 0.6));
        this.mesh.add(belt);

        const collarMaterial = new THREE.MeshStandardMaterial({ color: outfit.accent, roughness: 0.5 });
        const collarRadius = isFemale ? 0.42 : 0.45;
        const collarThickness = isFemale ? 0.045 : 0.05;
        const collarGeometry = new THREE.TorusGeometry(collarRadius, collarThickness, 10, 18);
        const collar = new THREE.Mesh(collarGeometry, collarMaterial);
        collar.rotation.x = Math.PI / 2;
        collar.position.y = bootHeight + legHeight + (isFemale ? (isBasicTier ? 1.2 : 1.3) : (isBasicTier ? 0.95 : 1));
        this.mesh.add(collar);

        if (isFemale && !isBasicTier && Math.random() > 0.45) {
            const shawlMaterial = new THREE.MeshStandardMaterial({ color: outfit.trim, roughness: 0.7 });
            const shawlGeometry = new THREE.TorusGeometry(0.72, 0.08, 12, 24, Math.PI * 1.3);
            const shawl = new THREE.Mesh(shawlGeometry, shawlMaterial);
            shawl.rotation.x = Math.PI / 2;
            shawl.rotation.z = Math.PI / 16;
            shawl.position.set(0, bootHeight + legHeight + 1.15, 0.05);
            this.mesh.add(shawl);
        }

        const headMaterial = new THREE.MeshStandardMaterial({ color: 0xe4c29c, roughness: 0.5 });
        const headSize = isFemale ? 0.43 : 0.45;
        const headGeometry = new THREE.SphereGeometry(headSize, 16, 16);
        const head = new THREE.Mesh(headGeometry, headMaterial);
        head.position.y = bootHeight + legHeight + (isFemale ? 1.65 : 1.6);
        this.mesh.add(head);

        const hairColor = outfit.hair ?? 0x3f2a1c;
        const hairMaterial = new THREE.MeshStandardMaterial({ color: hairColor, roughness: 0.8 });

        if (isFemale) {
            const hairGeometry = new THREE.SphereGeometry(isBasicTier ? 0.5 : 0.52, 16, 16, 0, Math.PI * 2, 0, Math.PI / 1.25);
            const hair = new THREE.Mesh(hairGeometry, hairMaterial);
            hair.position.set(0, head.position.y - 0.2, -0.05);
            this.mesh.add(hair);

            if (!isBasicTier || Math.random() > 0.5) {
                const braidGeometry = new THREE.CylinderGeometry(0.17, 0.2, 1.0, 12);
                const braid = new THREE.Mesh(braidGeometry, hairMaterial);
                braid.position.set(0, head.position.y - 0.85, -0.25);
                braid.rotation.x = Math.PI / 20;
                this.mesh.add(braid);
            }

            if (!isBasicTier && Math.random() > 0.5) {
                const headbandMaterial = new THREE.MeshStandardMaterial({ color: outfit.accent, roughness: 0.5 });
                const headbandGeometry = new THREE.TorusGeometry(0.5, 0.04, 10, 18);
                const headband = new THREE.Mesh(headbandGeometry, headbandMaterial);
                headband.rotation.x = Math.PI / 2;
                headband.position.y = head.position.y + 0.05;
                this.mesh.add(headband);
            }
        } else {
            const hairGeometry = new THREE.SphereGeometry(0.46, 14, 14, 0, Math.PI * 2, 0, Math.PI / 1.6);
            const hair = new THREE.Mesh(hairGeometry, hairMaterial);
            hair.position.set(0, head.position.y - 0.25, -0.12);
            this.mesh.add(hair);

            if (Math.random() > 0.5 && (!isBasicTier || Math.random() > 0.6)) {
                const beardMaterial = new THREE.MeshStandardMaterial({ color: outfit.beard ?? hairColor, roughness: 0.7 });
                const beardGeometry = new THREE.CylinderGeometry(0.28, 0.35, 0.6, 12);
                const beard = new THREE.Mesh(beardGeometry, beardMaterial);
                beard.position.set(0, head.position.y - 0.55, 0.3);
                this.mesh.add(beard);
            } else if (!isBasicTier && Math.random() > 0.6) {
                const stubbleMaterial = new THREE.MeshStandardMaterial({ color: (outfit.beard ?? hairColor) + 0x111111, roughness: 0.9, metalness: 0.05 });
                const stubbleGeometry = new THREE.TorusGeometry(0.32, 0.05, 10, 18);
                const stubble = new THREE.Mesh(stubbleGeometry, stubbleMaterial);
                stubble.rotation.x = Math.PI / 2;
                stubble.position.y = head.position.y - 0.5;
                this.mesh.add(stubble);
            }
        }

        this.applyProfessionAdornment(head, isFemale);

        const armGeometry = new THREE.CylinderGeometry(0.15, 0.18, 1.2, 8);
        const sleeveMaterial = new THREE.MeshStandardMaterial({ color: outfit.tunic, roughness: 0.85 });
        const leftArm = new THREE.Mesh(armGeometry, sleeveMaterial);
        leftArm.position.set(-0.7, bootHeight + legHeight + (isFemale ? 0.95 : 0.9), isFemale ? 0.1 : 0);
        leftArm.rotation.z = isFemale ? Math.PI / 4.2 : Math.PI / 3;
        this.mesh.add(leftArm);

        const rightArm = leftArm.clone();
        rightArm.position.x = 0.7;
        rightArm.rotation.z = isFemale ? -Math.PI / 4.2 : -Math.PI / 3;
        this.mesh.add(rightArm);

        const handMaterial = new THREE.MeshStandardMaterial({ color: 0xe3b389, roughness: 0.6 });
        const handGeometry = new THREE.SphereGeometry(0.18, 12, 12);
        const leftHand = new THREE.Mesh(handGeometry, handMaterial);
        leftHand.position.set(-0.95, bootHeight + legHeight + (isFemale ? 0.35 : 0.25), 0.12);
        this.mesh.add(leftHand);

        const rightHand = leftHand.clone();
        rightHand.position.x = 0.95;
        this.mesh.add(rightHand);

        if (!isBasicTier && Math.random() > 0.6) {
            const strapMaterial = new THREE.MeshStandardMaterial({ color: outfit.trim, roughness: 0.8 });
            const strapRadius = isFemale ? 0.85 : 0.95;
            const strapGeometry = new THREE.TorusGeometry(strapRadius, 0.05, 10, 24, Math.PI);
            const strap = new THREE.Mesh(strapGeometry, strapMaterial);
            strap.rotation.set(Math.PI / 2.1, 0, isFemale ? Math.PI / 4.5 : Math.PI / 3);
            strap.position.set(isFemale ? -0.05 : -0.1, bootHeight + legHeight + (isFemale ? 0.9 : 0.8), 0.2);
            this.mesh.add(strap);

            const pouchGeometry = new THREE.BoxGeometry(0.55, 0.5, 0.2);
            const pouchMaterial = new THREE.MeshStandardMaterial({ color: outfit.accent, roughness: 0.8 });
            const pouch = new THREE.Mesh(pouchGeometry, pouchMaterial);
            pouch.position.set(-0.65, bootHeight + legHeight + (isFemale ? 0.55 : 0.45), 0.45);
            this.mesh.add(pouch);
        }

        if (!isBasicTier && Math.random() > (isFemale ? 0.8 : 0.75)) {
            const staffGeometry = new THREE.CylinderGeometry(0.07, 0.09, 2.4, 6);
            const staffMaterial = new THREE.MeshStandardMaterial({ color: 0x46321a, roughness: 0.8 });
            const staff = new THREE.Mesh(staffGeometry, staffMaterial);
            staff.position.set(isFemale ? -0.95 : 0.95, bootHeight + legHeight + 0.5, 0.1);
            this.mesh.add(staff);
        }
    }

    getRandomTarget(forceOuter = false) {
        if (!forceOuter && Math.random() < 0.6) {
            return this.getPlazaPoint();
        }

        let target = new THREE.Vector3();
        let attempts = 0;
        do {
            const radius = Math.random() * this.wanderRadius;
            const angle = Math.random() * Math.PI * 2;
            target.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
            attempts++;
        } while (target.length() < this.innerAvoidRadius && attempts < 30);

        if (target.length() < this.innerAvoidRadius) {
            return this.getPlazaPoint();
        }

        return target;
    }

    getPlazaPoint() {
        const minRadius = this.innerAvoidRadius + 0.4;
        const maxRadius = Math.max(minRadius + 0.5, this.plazaRadius);
        const angle = Math.random() * Math.PI * 2;
        const radius = minRadius + Math.random() * (maxRadius - minRadius);
        return new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    const manager = window.sceneManager; // Global for simplicity, refactor later
    manager.camera.aspect = window.innerWidth / window.innerHeight;
    manager.camera.updateProjectionMatrix();
    manager.renderer.setSize(window.innerWidth, window.innerHeight);
    manager.applyTooltipPosition();
});

// Initialize
window.sceneManager = new SceneManager();
