import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
        this.obstacles = []; // For future collision detection (trees, etc.)

        this.initScene();
        this.animate();
    }

    initScene() {
        // Lighting: Basic ambient + directional for natural look
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(50, 50, 50);
        this.scene.add(directionalLight);

        // Ground: Flat plane for sandbox
        const groundGeometry = new THREE.PlaneGeometry(100, 100);
        const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 }); // Green grass-like
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        this.scene.add(ground);

        // Town Center: Simple raised platform with a central "fountain" (cylinder)
        const townCenterGeometry = new THREE.BoxGeometry(20, 1, 20);
        const townCenterMaterial = new THREE.MeshStandardMaterial({ color: 0xA0522D }); // Brick-like
        const townCenter = new THREE.Mesh(townCenterGeometry, townCenterMaterial);
        townCenter.position.y = 0.5;
        this.scene.add(townCenter);

        const fountainGeometry = new THREE.CylinderGeometry(2, 2, 3, 32);
        const fountainMaterial = new THREE.MeshStandardMaterial({ color: 0x4682B4 }); // Blue stone
        const fountain = new THREE.Mesh(fountainGeometry, fountainMaterial);
        fountain.position.y = 2;
        this.scene.add(fountain);

        // Add basic environment elements
        this.addTrees(10); // Procedural trees
        this.addBushes(15); // Procedural bushes
        this.addPonds(3); // Procedural ponds

        // Spawn villagers around town center
        this.spawnVillagers(10);

        // Camera position: Overhead view for sandbox
        this.camera.position.set(0, 20, 20);
        this.camera.lookAt(0, 0, 0);
    }

    // Procedural generation for trees (trunk + foliage)
    addTrees(count) {
        for (let i = 0; i < count; i++) {
            const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 8);
            const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
            const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
            trunk.position.set(Math.random() * 80 - 40, 1.5, Math.random() * 80 - 40); // Random position

            const foliageGeometry = new THREE.SphereGeometry(2, 8, 8);
            const foliageMaterial = new THREE.MeshStandardMaterial({ color: 0x006400 });
            const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
            foliage.position.y = 3;

            trunk.add(foliage);
            this.scene.add(trunk);
            this.obstacles.push(trunk); // For collision later
        }
    }

    // Bushes: Simple spheres
    addBushes(count) {
        for (let i = 0; i < count; i++) {
            const bushGeometry = new THREE.SphereGeometry(1, 8, 8);
            const bushMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 });
            const bush = new THREE.Mesh(bushGeometry, bushMaterial);
            bush.position.set(Math.random() * 80 - 40, 0.5, Math.random() * 80 - 40);
            this.scene.add(bush);
            this.obstacles.push(bush);
        }
    }

    // Ponds: Flat planes with basic water color (extend with shaders later for ripples)
    addPonds(count) {
        for (let i = 0; i < count; i++) {
            const pondGeometry = new THREE.CircleGeometry(3 + Math.random() * 2, 32);
            const pondMaterial = new THREE.MeshStandardMaterial({ color: 0x4169E1, side: THREE.DoubleSide });
            const pond = new THREE.Mesh(pondGeometry, pondMaterial);
            pond.rotation.x = -Math.PI / 2;
            pond.position.set(Math.random() * 80 - 40, 0.01, Math.random() * 80 - 40); // Slightly above ground to avoid z-fighting
            this.scene.add(pond);
            this.obstacles.push(pond); // Treat as obstacle for villagers
        }
    }

    // Villager Class: Handles individual AI and rendering
    spawnVillagers(count) {
        for (let i = 0; i < count; i++) {
            const gender = Math.random() > 0.5 ? 'male' : 'female'; // Random gender
            const color = gender === 'male' ? 0x0000FF : 0xFF00FF; // Blue for male, pink for female (placeholder)

            const villager = new Villager(color, new THREE.Vector3(Math.random() * 10 - 5, 1, Math.random() * 10 - 5)); // Spawn near town center
            this.scene.add(villager.mesh);
            this.villagers.push(villager);
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        const delta = this.clock.getDelta(); // Time delta for smooth movement

        // Update simulation: Move villagers
        this.villagers.forEach(villager => villager.update(delta, this.obstacles));

        this.renderer.render(this.scene, this.camera);
    }
}

class Villager {
    constructor(color, position) {
        // Simple capsule body (placeholder for model)
        const geometry = new THREE.CapsuleGeometry(0.5, 1, 4, 8);
        const material = new THREE.MeshStandardMaterial({ color });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.copy(position);

        // AI State: Target position for walking, speed, etc.
        this.speed = 2 + Math.random(); // Varied speed
        this.target = this.getRandomTarget();
        this.timeToNextTarget = 0; // Timer for changing direction
    }

    update(delta, obstacles) {
        // Basic AI: Move towards target, avoid simple collisions, change target periodically
        const direction = this.target.clone().sub(this.mesh.position).normalize();
        const move = direction.multiplyScalar(this.speed * delta);
        this.mesh.position.add(move);

        // Check for arrival or timeout
        if (this.mesh.position.distanceTo(this.target) < 1 || this.timeToNextTarget <= 0) {
            this.target = this.getRandomTarget();
            this.timeToNextTarget = Math.random() * 5 + 2; // 2-7 seconds before new target
        }
        this.timeToNextTarget -= delta;

        // Basic collision avoidance: If close to obstacle, adjust target
        obstacles.forEach(obstacle => {
            if (this.mesh.position.distanceTo(obstacle.position) < 2) {
                this.target = this.getRandomTarget(); // Reroute
            }
        });

        // Simulation hook: Could add idle animations, interactions here later
    }

    getRandomTarget() {
        // Random point within sandbox bounds (-40 to 40)
        return new THREE.Vector3(Math.random() * 80 - 40, 1, Math.random() * 80 - 40);
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    const manager = window.sceneManager; // Global for simplicity, refactor later
    manager.camera.aspect = window.innerWidth / window.innerHeight;
    manager.camera.updateProjectionMatrix();
    manager.renderer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize
window.sceneManager = new SceneManager();