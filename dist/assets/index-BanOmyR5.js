(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ro="180",_i={ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vl=0,Po=1,yl=2,Na=1,Sl=2,mn=3,Cn=0,Ue=1,xe=2,An=0,Xn=1,Io=2,Do=3,Lo=4,El=5,Vn=100,bl=101,Tl=102,wl=103,Al=104,Rl=200,Cl=201,Pl=202,Il=203,mr=204,gr=205,Dl=206,Ll=207,Ul=208,Nl=209,Fl=210,Ol=211,Bl=212,zl=213,Vl=214,_r=0,xr=1,Mr=2,Mi=3,vr=4,yr=5,Sr=6,Er=7,Fa=0,Hl=1,kl=2,Rn=0,Gl=1,Wl=2,Xl=3,ql=4,Yl=5,jl=6,$l=7,Oa=300,vi=301,yi=302,br=303,Tr=304,Is=306,wr=1e3,Gn=1001,Ar=1002,tn=1003,Kl=1004,$i=1005,rn=1006,Fs=1007,Wn=1008,an=1009,Ba=1010,za=1011,zi=1012,oo=1013,qn=1014,gn=1015,Xi=1016,ao=1017,lo=1018,Vi=1020,Va=35902,Ha=35899,ka=1021,Ga=1022,Qe=1023,Hi=1026,ki=1027,Wa=1028,co=1029,Xa=1030,ho=1031,uo=1033,ys=33776,Ss=33777,Es=33778,bs=33779,Rr=35840,Cr=35841,Pr=35842,Ir=35843,Dr=36196,Lr=37492,Ur=37496,Nr=37808,Fr=37809,Or=37810,Br=37811,zr=37812,Vr=37813,Hr=37814,kr=37815,Gr=37816,Wr=37817,Xr=37818,qr=37819,Yr=37820,jr=37821,$r=36492,Kr=36494,Zr=36495,Jr=36283,Qr=36284,to=36285,eo=36286,Zl=3200,Jl=3201,qa=0,Ql=1,wn="",qe="srgb",Si="srgb-linear",ws="linear",ne="srgb",Zn=7680,Uo=519,tc=512,ec=513,nc=514,Ya=515,ic=516,sc=517,rc=518,oc=519,no=35044,No="300 es",on=2e3,As=2001;class $n{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fo=1234567;const Fi=Math.PI/180,Gi=180/Math.PI;function _n(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[s&255]+we[s>>8&255]+we[s>>16&255]+we[s>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Wt(s,t,e){return Math.max(t,Math.min(e,s))}function fo(s,t){return(s%t+t)%t}function ac(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function lc(s,t,e){return s!==t?(e-s)/(t-s):0}function Oi(s,t,e){return(1-e)*s+e*t}function cc(s,t,e,n){return Oi(s,t,1-Math.exp(-e*n))}function hc(s,t=1){return t-Math.abs(fo(s,t*2)-t)}function uc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function dc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function fc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function pc(s,t){return s+Math.random()*(t-s)}function mc(s){return s*(.5-Math.random())}function gc(s){s!==void 0&&(Fo=s);let t=Fo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _c(s){return s*Fi}function xc(s){return s*Gi}function Mc(s){return(s&s-1)===0&&s!==0}function vc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function yc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sc(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Je(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function te(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ue={DEG2RAD:Fi,RAD2DEG:Gi,generateUUID:_n,clamp:Wt,euclideanModulo:fo,mapLinear:ac,inverseLerp:lc,lerp:Oi,damp:cc,pingpong:hc,smoothstep:uc,smootherstep:dc,randInt:fc,randFloat:pc,randFloatSpread:mc,seededRandom:gc,degToRad:_c,radToDeg:xc,isPowerOfTwo:Mc,ceilPowerOfTwo:vc,floorPowerOfTwo:yc,setQuaternionFromProperEuler:Sc,normalize:te,denormalize:Je};class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,E=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const R=Math.sqrt(b),w=Math.atan2(R,f*E);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const v=a*E;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Os.copy(this).projectOnVector(t),this.sub(Os)}reflect(t){return this.sub(Os.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Os=new A,Oo=new Yn;class kt{constructor(t,e,n,i,r,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],E=i[1],b=i[4],v=i[7],R=i[2],w=i[5],P=i[8];return r[0]=o*_+a*E+l*R,r[3]=o*m+a*b+l*w,r[6]=o*f+a*v+l*P,r[1]=c*_+h*E+u*R,r[4]=c*m+h*b+u*w,r[7]=c*f+h*v+u*P,r[2]=d*_+p*E+g*R,r[5]=d*m+p*b+g*w,r[8]=d*f+p*v+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Bs.makeScale(t,e)),this}rotate(t){return this.premultiply(Bs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new kt;function ja(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Rs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ec(){const s=Rs("canvas");return s.style.display="block",s}const Bo={};function Wi(s){s in Bo||(Bo[s]=!0,console.warn(s))}function bc(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const zo=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vo=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tc(){const s={enabled:!0,workingColorSpace:Si,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ne&&(i.r=xn(i.r),i.g=xn(i.g),i.b=xn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wn?ws:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Wi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Wi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Si]:{primaries:t,whitePoint:n,transfer:ws,toXYZ:zo,fromXYZ:Vo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:zo,fromXYZ:Vo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),s}const Kt=Tc();function xn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Jn;class wc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Jn===void 0&&(Jn=Rs("canvas")),Jn.width=t.width,Jn.height=t.height;const i=Jn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Jn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=xn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xn(e[n]/255)*255):e[n]=xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ac=0;class po{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=_n(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(zs(i[o].image)):r.push(zs(i[o]))}else r=zs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function zs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rc=0;const Vs=new A;class Ie extends $n{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=Gn,i=Gn,r=rn,o=Wn,a=Qe,l=an,c=Ie.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=_n(),this.name="",this.source=new po(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vs).x}get height(){return this.source.getSize(Vs).y}get depth(){return this.source.getSize(Vs).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wr:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case Ar:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wr:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case Ar:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Oa;Ie.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,v=(p+1)/2,R=(f+1)/2,w=(h+d)/4,P=(u+_)/4,D=(g+m)/4;return b>v&&b>R?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=w/n,r=P/n):v>R?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=D/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=P/r,i=D/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cc extends $n{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Ie(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new po(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Cc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class $a extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pc extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ki.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ki.copy(n.boundingBox)),Ki.applyMatrix4(t.matrixWorld),this.union(Ki)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ai),Zi.subVectors(this.max,Ai),Qn.subVectors(t.a,Ai),ti.subVectors(t.b,Ai),ei.subVectors(t.c,Ai),Mn.subVectors(ti,Qn),vn.subVectors(ei,ti),Ln.subVectors(Qn,ei);let e=[0,-Mn.z,Mn.y,0,-vn.z,vn.y,0,-Ln.z,Ln.y,Mn.z,0,-Mn.x,vn.z,0,-vn.x,Ln.z,0,-Ln.x,-Mn.y,Mn.x,0,-vn.y,vn.x,0,-Ln.y,Ln.x,0];return!Hs(e,Qn,ti,ei,Zi)||(e=[1,0,0,0,1,0,0,0,1],!Hs(e,Qn,ti,ei,Zi))?!1:(Ji.crossVectors(Mn,vn),e=[Ji.x,Ji.y,Ji.z],Hs(e,Qn,ti,ei,Zi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const hn=[new A,new A,new A,new A,new A,new A,new A,new A],je=new A,Ki=new qi,Qn=new A,ti=new A,ei=new A,Mn=new A,vn=new A,Ln=new A,Ai=new A,Zi=new A,Ji=new A,Un=new A;function Hs(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Un.fromArray(s,r);const a=i.x*Math.abs(Un.x)+i.y*Math.abs(Un.y)+i.z*Math.abs(Un.z),l=t.dot(Un),c=e.dot(Un),h=n.dot(Un);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ic=new qi,Ri=new A,ks=new A;class mo{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ic.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ri.subVectors(t,this.center);const e=Ri.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ri,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ri.copy(t.center).add(ks)),this.expandByPoint(Ri.copy(t.center).sub(ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const un=new A,Gs=new A,Qi=new A,yn=new A,Ws=new A,ts=new A,Xs=new A;class go{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Gs.copy(t).add(e).multiplyScalar(.5),Qi.copy(e).sub(t).normalize(),yn.copy(this.origin).sub(Gs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Qi),a=yn.dot(this.direction),l=-yn.dot(Qi),c=yn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Gs).addScaledVector(Qi,d),p}intersectSphere(t,e){un.subVectors(t.center,this.origin);const n=un.dot(this.direction),i=un.dot(un)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,i,r){Ws.subVectors(e,t),ts.subVectors(n,t),Xs.crossVectors(Ws,ts);let o=this.direction.dot(Xs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yn.subVectors(this.origin,t);const l=a*this.direction.dot(ts.crossVectors(yn,ts));if(l<0)return null;const c=a*this.direction.dot(Ws.cross(yn));if(c<0||l+c>o)return null;const h=-a*yn.dot(Xs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,i,r,o,a,l,c,h,u,d,p,g,_,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ni.setFromMatrixColumn(t,0).length(),r=1/ni.setFromMatrixColumn(t,1).length(),o=1/ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dc,t,Lc)}lookAt(t,e,n){const i=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Sn.crossVectors(n,Be),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Sn.crossVectors(n,Be)),Sn.normalize(),es.crossVectors(Be,Sn),i[0]=Sn.x,i[4]=es.x,i[8]=Be.x,i[1]=Sn.y,i[5]=es.y,i[9]=Be.y,i[2]=Sn.z,i[6]=es.z,i[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],E=n[3],b=n[7],v=n[11],R=n[15],w=i[0],P=i[4],D=i[8],S=i[12],M=i[1],I=i[5],F=i[9],B=i[13],q=i[2],G=i[6],k=i[10],Z=i[14],H=i[3],tt=i[7],at=i[11],lt=i[15];return r[0]=o*w+a*M+l*q+c*H,r[4]=o*P+a*I+l*G+c*tt,r[8]=o*D+a*F+l*k+c*at,r[12]=o*S+a*B+l*Z+c*lt,r[1]=h*w+u*M+d*q+p*H,r[5]=h*P+u*I+d*G+p*tt,r[9]=h*D+u*F+d*k+p*at,r[13]=h*S+u*B+d*Z+p*lt,r[2]=g*w+_*M+m*q+f*H,r[6]=g*P+_*I+m*G+f*tt,r[10]=g*D+_*F+m*k+f*at,r[14]=g*S+_*B+m*Z+f*lt,r[3]=E*w+b*M+v*q+R*H,r[7]=E*P+b*I+v*G+R*tt,r[11]=E*D+b*F+v*k+R*at,r[15]=E*S+b*B+v*Z+R*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*p-n*l*p)+_*(+e*l*p-e*c*d+r*o*d-i*o*p+i*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],E=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,b=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,v=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,R=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,w=e*E+n*b+i*v+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return t[0]=E*P,t[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*P,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*f+n*l*f)*P,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*p-n*l*p)*P,t[4]=b*P,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*P,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*f-e*l*f)*P,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*p+e*l*p)*P,t[8]=v*P,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*P,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*P,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*P,t[12]=R*P,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*P,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*P,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,E=l*c,b=l*h,v=l*u,R=n.x,w=n.y,P=n.z;return i[0]=(1-(_+f))*R,i[1]=(p+v)*R,i[2]=(g-b)*R,i[3]=0,i[4]=(p-v)*w,i[5]=(1-(d+f))*w,i[6]=(m+E)*w,i[7]=0,i[8]=(g+b)*P,i[9]=(m-E)*P,i[10]=(1-(d+_))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ni.set(i[0],i[1],i[2]).length();const o=ni.set(i[4],i[5],i[6]).length(),a=ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],$e.copy(this);const c=1/r,h=1/o,u=1/a;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=h,$e.elements[5]*=h,$e.elements[6]*=h,$e.elements[8]*=u,$e.elements[9]*=u,$e.elements[10]*=u,e.setFromRotationMatrix($e),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=on,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),p=(n+i)/(n-i);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===on)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===As)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=on,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),p=-(n+i)/(n-i);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===on)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===As)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ni=new A,$e=new fe,Dc=new A(0,0,0),Lc=new A(1,1,1),Sn=new A,es=new A,Be=new A,Ho=new fe,ko=new Yn;class ln{constructor(t=0,e=0,n=0,i=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ho.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ho,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ko.setFromEuler(this),this.setFromQuaternion(ko,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class _o{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Uc=0;const Go=new A,ii=new Yn,dn=new fe,ns=new A,Ci=new A,Nc=new A,Fc=new Yn,Wo=new A(1,0,0),Xo=new A(0,1,0),qo=new A(0,0,1),Yo={type:"added"},Oc={type:"removed"},si={type:"childadded",child:null},qs={type:"childremoved",child:null};class Te extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new A,e=new ln,n=new Yn,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new kt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(Wo,t)}rotateY(t){return this.rotateOnAxis(Xo,t)}rotateZ(t){return this.rotateOnAxis(qo,t)}translateOnAxis(t,e){return Go.copy(t).applyQuaternion(this.quaternion),this.position.add(Go.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wo,t)}translateY(t){return this.translateOnAxis(Xo,t)}translateZ(t){return this.translateOnAxis(qo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ns.copy(t):ns.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Ci,ns,this.up):dn.lookAt(ns,Ci,this.up),this.quaternion.setFromRotationMatrix(dn),i&&(dn.extractRotation(i.matrixWorld),ii.setFromRotationMatrix(dn),this.quaternion.premultiply(ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yo),si.child=t,this.dispatchEvent(si),si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Oc),qs.child=t,this.dispatchEvent(qs),qs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yo),si.child=t,this.dispatchEvent(si),si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,t,Nc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,Fc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Te.DEFAULT_UP=new A(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new A,fn=new A,Ys=new A,pn=new A,ri=new A,oi=new A,jo=new A,js=new A,$s=new A,Ks=new A,Zs=new se,Js=new se,Qs=new se;class Ye{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ke.subVectors(i,e),fn.subVectors(n,e),Ys.subVectors(t,e);const o=Ke.dot(Ke),a=Ke.dot(fn),l=Ke.dot(Ys),c=fn.dot(fn),h=fn.dot(Ys),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pn.x),l.addScaledVector(o,pn.y),l.addScaledVector(a,pn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Zs.setScalar(0),Js.setScalar(0),Qs.setScalar(0),Zs.fromBufferAttribute(t,e),Js.fromBufferAttribute(t,n),Qs.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Zs,r.x),o.addScaledVector(Js,r.y),o.addScaledVector(Qs,r.z),o}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),fn.subVectors(t,e),Ke.cross(fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ke.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ri.subVectors(i,n),oi.subVectors(r,n),js.subVectors(t,n);const l=ri.dot(js),c=oi.dot(js);if(l<=0&&c<=0)return e.copy(n);$s.subVectors(t,i);const h=ri.dot($s),u=oi.dot($s);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ri,o);Ks.subVectors(t,r);const p=ri.dot(Ks),g=oi.dot(Ks);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(oi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return jo.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(jo,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(ri,o).addScaledVector(oi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},is={h:0,s:0,l:0};function tr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=fo(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=tr(o,r,t+1/3),this.g=tr(o,r,t),this.b=tr(o,r,t-1/3)}return Kt.colorSpaceToWorking(this,i),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=Ka[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}copyLinearToSRGB(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return Kt.workingToColorSpace(Ae.copy(this),t),Math.round(Wt(Ae.r*255,0,255))*65536+Math.round(Wt(Ae.g*255,0,255))*256+Math.round(Wt(Ae.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,r=Ae.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=qe){Kt.workingToColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(is);const n=Oi(En.h,is.h,e),i=Oi(En.s,is.s,e),r=Oi(En.l,is.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new qt;qt.NAMES=Ka;let Bc=0;class bi extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=Xn,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mr,this.blendDst=gr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xn&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mr&&(n.blendSrc=this.blendSrc),this.blendDst!==gr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Cs extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new A,ss=new At;let zc=0;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=no,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ss.fromBufferAttribute(this,e),ss.applyMatrix3(t),this.setXY(e,ss.x,ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Je(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Je(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Je(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Je(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==no&&(t.usage=this.usage),t}}class Za extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ja extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vc=0;const We=new fe,er=new Te,ai=new A,ze=new qi,Pi=new qi,Ee=new A;class Ne extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ja(t)?Ja:Za)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return er.lookAt(t),er.updateMatrix(),this.applyMatrix4(er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Pi.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(ze.min,Pi.min),ze.expandByPoint(Ee),Ee.addVectors(ze.max,Pi.max),ze.expandByPoint(Ee)):(ze.expandByPoint(Pi.min),ze.expandByPoint(Pi.max))}ze.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ee.fromBufferAttribute(a,c),l&&(ai.fromBufferAttribute(t,c),Ee.add(ai)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new A,l[D]=new A;const c=new A,h=new A,u=new A,d=new At,p=new At,g=new At,_=new A,m=new A;function f(D,S,M){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[D].add(_),a[S].add(_),a[M].add(_),l[D].add(m),l[S].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let D=0,S=E.length;D<S;++D){const M=E[D],I=M.start,F=M.count;for(let B=I,q=I+F;B<q;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const b=new A,v=new A,R=new A,w=new A;function P(D){R.fromBufferAttribute(i,D),w.copy(R);const S=a[D];b.copy(S),b.sub(R.multiplyScalar(R.dot(S))).normalize(),v.crossVectors(w,S);const I=v.dot(l[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,I)}for(let D=0,S=E.length;D<S;++D){const M=E[D],I=M.start,F=M.count;for(let B=I,q=I+F;B<q;B+=3)P(t.getX(B+0)),P(t.getX(B+1)),P(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new en(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $o=new fe,Nn=new go,rs=new mo,Ko=new A,os=new A,as=new A,ls=new A,nr=new A,cs=new A,Zo=new A,hs=new A;class X extends Te{constructor(t=new Ne,e=new Cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){cs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(nr.fromBufferAttribute(u,t),o?cs.addScaledVector(nr,h):cs.addScaledVector(nr.sub(e),h))}e.add(cs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),Nn.copy(t.ray).recast(t.near),!(rs.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(rs,Ko)===null||Nn.origin.distanceToSquared(Ko)>(t.far-t.near)**2))&&($o.copy(r).invert(),Nn.copy(t.ray).applyMatrix4($o),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,R=b;v<R;v+=3){const w=a.getX(v),P=a.getX(v+1),D=a.getX(v+2);i=us(this,f,t,n,c,h,u,w,P,D),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);i=us(this,o,t,n,c,h,u,E,b,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,R=b;v<R;v+=3){const w=v,P=v+1,D=v+2;i=us(this,f,t,n,c,h,u,w,P,D),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,b=m+1,v=m+2;i=us(this,o,t,n,c,h,u,E,b,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Hc(s,t,e,n,i,r,o,a){let l;if(t.side===Ue?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Cn,a),l===null)return null;hs.copy(a),hs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(hs);return c<e.near||c>e.far?null:{distance:c,point:hs.clone(),object:s}}function us(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,os),s.getVertexPosition(l,as),s.getVertexPosition(c,ls);const h=Hc(s,t,e,n,os,as,ls,Zo);if(h){const u=new A;Ye.getBarycoord(Zo,os,as,ls,u),i&&(h.uv=Ye.getInterpolatedAttribute(i,a,l,c,u,new At)),r&&(h.uv1=Ye.getInterpolatedAttribute(r,a,l,c,u,new At)),o&&(h.normal=Ye.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new A,materialIndex:0};Ye.getNormal(os,as,ls,d.normal),h.face=d,h.barycoord=u}return h}class Yt extends Ne{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2));function g(_,m,f,E,b,v,R,w,P,D,S){const M=v/P,I=R/D,F=v/2,B=R/2,q=w/2,G=P+1,k=D+1;let Z=0,H=0;const tt=new A;for(let at=0;at<k;at++){const lt=at*I-B;for(let It=0;It<G;It++){const Ut=It*M-F;tt[_]=Ut*E,tt[m]=lt*b,tt[f]=q,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[f]=w>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(It/P),u.push(1-at/D),Z+=1}}for(let at=0;at<D;at++)for(let lt=0;lt<P;lt++){const It=d+lt+G*at,Ut=d+lt+G*(at+1),Vt=d+(lt+1)+G*(at+1),Nt=d+(lt+1)+G*at;l.push(It,Ut,Nt),l.push(Ut,Vt,Nt),H+=6}a.addGroup(p,H,S),p+=H,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ei(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Pe(s){const t={};for(let e=0;e<s.length;e++){const n=Ei(s[e]);for(const i in n)t[i]=n[i]}return t}function kc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Qa(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Gc={clone:Ei,merge:Pe};var Wc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wc,this.fragmentShader=Xc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=kc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class tl extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bn=new A,Jo=new At,Qo=new At;class He extends tl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(Fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bn.x,bn.y).multiplyScalar(-t/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bn.x,bn.y).multiplyScalar(-t/bn.z)}getViewSize(t,e){return this.getViewBounds(t,Jo,Qo),e.subVectors(Qo,Jo)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,ci=1;class qc extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new He(li,ci,t,e);i.layers=this.layers,this.add(i);const r=new He(li,ci,t,e);r.layers=this.layers,this.add(r);const o=new He(li,ci,t,e);o.layers=this.layers,this.add(o);const a=new He(li,ci,t,e);a.layers=this.layers,this.add(a);const l=new He(li,ci,t,e);l.layers=this.layers,this.add(l);const c=new He(li,ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class el extends Ie{constructor(t=[],e=vi,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yc extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new el(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Yt(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:An});r.uniforms.tEquirect.value=e;const o=new X(i,r),a=e.minFilter;return e.minFilter===Wn&&(e.minFilter=rn),new qc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class de extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jc={type:"move"};class ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jc)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class $c extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Kc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=no,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ce=new A;class Ps{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Je(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Je(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Je(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Je(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new en(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ps(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nl extends bi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let hi;const Ii=new A,ui=new A,di=new A,fi=new At,Di=new At,il=new fe,ds=new A,Li=new A,fs=new A,ta=new At,sr=new At,ea=new At;class Zc extends Te{constructor(t=new nl){if(super(),this.isSprite=!0,this.type="Sprite",hi===void 0){hi=new Ne;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Kc(e,5);hi.setIndex([0,1,2,0,2,3]),hi.setAttribute("position",new Ps(n,3,0,!1)),hi.setAttribute("uv",new Ps(n,2,3,!1))}this.geometry=hi,this.material=t,this.center=new At(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ui.setFromMatrixScale(this.matrixWorld),il.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),di.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ui.multiplyScalar(-di.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;ps(ds.set(-.5,-.5,0),di,o,ui,i,r),ps(Li.set(.5,-.5,0),di,o,ui,i,r),ps(fs.set(.5,.5,0),di,o,ui,i,r),ta.set(0,0),sr.set(1,0),ea.set(1,1);let a=t.ray.intersectTriangle(ds,Li,fs,!1,Ii);if(a===null&&(ps(Li.set(-.5,.5,0),di,o,ui,i,r),sr.set(0,1),a=t.ray.intersectTriangle(ds,fs,Li,!1,Ii),a===null))return;const l=t.ray.origin.distanceTo(Ii);l<t.near||l>t.far||e.push({distance:l,point:Ii.clone(),uv:Ye.getInterpolation(Ii,ds,Li,fs,ta,sr,ea,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ps(s,t,e,n,i,r){fi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Di.x=r*fi.x-i*fi.y,Di.y=i*fi.x+r*fi.y):Di.copy(fi),s.copy(t),s.x+=Di.x,s.y+=Di.y,s.applyMatrix4(il)}const rr=new A,Jc=new A,Qc=new kt;class Tn{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=rr.subVectors(n,e).cross(Jc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(rr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qc.getNormalMatrix(t),i=this.coplanarPoint(rr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new mo,th=new At(.5,.5),ms=new A;class xo{constructor(t=new Tn,e=new Tn,n=new Tn,i=new Tn,r=new Tn,o=new Tn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],E=r[12],b=r[13],v=r[14],R=r[15];if(i[0].setComponents(c-o,p-h,f-g,R-E).normalize(),i[1].setComponents(c+o,p+h,f+g,R+E).normalize(),i[2].setComponents(c+a,p+u,f+_,R+b).normalize(),i[3].setComponents(c-a,p-u,f-_,R-b).normalize(),n)i[4].setComponents(l,d,m,v).normalize(),i[5].setComponents(c-l,p-d,f-m,R-v).normalize();else if(i[4].setComponents(c-l,p-d,f-m,R-v).normalize(),e===on)i[5].setComponents(c+l,p+d,f+m,R+v).normalize();else if(e===As)i[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){Fn.center.set(0,0,0);const e=th.distanceTo(t.center);return Fn.radius=.7071067811865476+e,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ms.x=i.normal.x>0?t.max.x:t.min.x,ms.y=i.normal.y>0?t.max.y:t.min.y,ms.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eh extends Ie{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sl extends Ie{constructor(t,e,n=qn,i,r,o,a=tn,l=tn,c,h=Hi,u=1){if(h!==Hi&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new po(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class rl extends Ie{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Hn extends Ne{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new A,h=new At;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(a,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class jt extends Ne{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;E(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(p,2));function E(){const v=new A,R=new A;let w=0;const P=(e-t)/n;for(let D=0;D<=r;D++){const S=[],M=D/r,I=M*(e-t)+t;for(let F=0;F<=i;F++){const B=F/i,q=B*l+a,G=Math.sin(q),k=Math.cos(q);R.x=I*G,R.y=-M*n+m,R.z=I*k,u.push(R.x,R.y,R.z),v.set(G,P,k).normalize(),d.push(v.x,v.y,v.z),p.push(B,1-M),S.push(g++)}_.push(S)}for(let D=0;D<i;D++)for(let S=0;S<r;S++){const M=_[S][D],I=_[S+1][D],F=_[S+1][D+1],B=_[S][D+1];(t>0||S!==0)&&(h.push(M,I,B),w+=3),(e>0||S!==r-1)&&(h.push(I,F,B),w+=3)}c.addGroup(f,w,0),f+=w}function b(v){const R=g,w=new At,P=new A;let D=0;const S=v===!0?t:e,M=v===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const I=g;for(let F=0;F<=i;F++){const q=F/i*l+a,G=Math.cos(q),k=Math.sin(q);P.x=S*k,P.y=m*M,P.z=S*G,u.push(P.x,P.y,P.z),d.push(0,M,0),w.x=G*.5+.5,w.y=k*.5*M+.5,p.push(w.x,w.y),g++}for(let F=0;F<i;F++){const B=R+F,q=I+F;v===!0?h.push(q,q+1,B):h.push(q+1,q,B),D+=3}c.addGroup(f,D,v===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xe extends jt{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Xe(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ds extends Ne{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const b=new A,v=new A,R=new A;for(let w=0;w<e.length;w+=3)p(e[w+0],b),p(e[w+1],v),p(e[w+2],R),l(b,v,R,E)}function l(E,b,v,R){const w=R+1,P=[];for(let D=0;D<=w;D++){P[D]=[];const S=E.clone().lerp(v,D/w),M=b.clone().lerp(v,D/w),I=w-D;for(let F=0;F<=I;F++)F===0&&D===w?P[D][F]=S:P[D][F]=S.clone().lerp(M,F/I)}for(let D=0;D<w;D++)for(let S=0;S<2*(w-D)-1;S++){const M=Math.floor(S/2);S%2===0?(d(P[D][M+1]),d(P[D+1][M]),d(P[D][M])):(d(P[D][M+1]),d(P[D+1][M+1]),d(P[D+1][M]))}}function c(E){const b=new A;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(E),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function h(){const E=new A;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];const v=m(E)/2/Math.PI+.5,R=f(E)/Math.PI+.5;o.push(v,1-R)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const b=o[E+0],v=o[E+2],R=o[E+4],w=Math.max(b,v,R),P=Math.min(b,v,R);w>.9&&P<.1&&(b<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),R<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function p(E,b){const v=E*3;b.x=t[v+0],b.y=t[v+1],b.z=t[v+2]}function g(){const E=new A,b=new A,v=new A,R=new A,w=new At,P=new At,D=new At;for(let S=0,M=0;S<r.length;S+=9,M+=6){E.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),w.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),D.set(o[M+4],o[M+5]),R.copy(E).add(b).add(v).divideScalar(3);const I=m(R);_(w,M+0,E,I),_(P,M+2,b,I),_(D,M+4,v,I)}}function _(E,b,v,R){R<0&&E.x===1&&(o[b]=E.x-1),v.x===0&&v.z===0&&(o[b]=R/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.vertices,t.indices,t.radius,t.details)}}class Mo extends Ds{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mo(t.radius,t.detail)}}class vo extends Ds{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vo(t.radius,t.detail)}}class Ve extends Ne{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const E=f*d-o;for(let b=0;b<c;b++){const v=b*u-r;g.push(v,-E,0),_.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const b=E+c*f,v=E+c*(f+1),R=E+1+c*(f+1),w=E+1+c*f;p.push(b,v,w),p.push(v,R,w)}this.setIndex(p),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.width,t.height,t.widthSegments,t.heightSegments)}}class Bi extends Ne{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,p=new A,g=new At;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const E=f+m,b=E,v=E+n+1,R=E+n+2,w=E+1;a.push(b,v,w),a.push(v,R,w)}}this.setIndex(a),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class be extends Ne{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new A,d=new A,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const E=[],b=f/n;let v=0;f===0&&o===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const w=R/e;u.x=-t*Math.cos(i+w*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(i+w*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+v,1-b),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){const b=h[f][E+1],v=h[f][E],R=h[f+1][E],w=h[f+1][E+1];(f!==0||o>0)&&p.push(b,v,w),(f!==n-1||l<Math.PI)&&p.push(v,R,w)}this.setIndex(p),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ze extends Ne{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new A,u=new A,d=new A;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,E=(i+1)*p+g;o.push(_,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class J extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qa,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nh extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ih extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class yo extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const or=new fe,na=new A,ia=new A;class ol{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xo,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;na.setFromMatrixPosition(t.matrixWorld),e.position.copy(na),ia.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ia),e.updateMatrixWorld(),or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(or,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(or)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const sa=new fe,Ui=new A,ar=new A;class sh extends ol{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ui.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ui),ar.copy(n.position),ar.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ar),n.updateMatrixWorld(),i.makeTranslation(-Ui.x,-Ui.y,-Ui.z),sa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa,n.coordinateSystem,n.reversedDepth)}}class gs extends yo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class al extends tl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class rh extends ol{constructor(){super(new al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oh extends yo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new rh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ah extends yo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class lh extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ch{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const ra=new fe;class hh{constructor(t,e,n=0,i=1/0){this.ray=new go(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new _o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ra.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ra),this}intersectObject(t,e=!0,n=[]){return io(t,this,n,e),n.sort(oa),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)io(t[i],this,n,e);return n.sort(oa),n}}function oa(s,t){return s.distance-t.distance}function io(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)io(r[o],t,e,!0)}}class aa{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uh extends $n{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function la(s,t,e,n){const i=dh(n);switch(e){case ka:return s*t;case Wa:return s*t/i.components*i.byteLength;case co:return s*t/i.components*i.byteLength;case Xa:return s*t*2/i.components*i.byteLength;case ho:return s*t*2/i.components*i.byteLength;case Ga:return s*t*3/i.components*i.byteLength;case Qe:return s*t*4/i.components*i.byteLength;case uo:return s*t*4/i.components*i.byteLength;case ys:case Ss:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Es:case bs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cr:case Ir:return Math.max(s,16)*Math.max(t,8)/4;case Rr:case Pr:return Math.max(s,8)*Math.max(t,8)/2;case Dr:case Lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Or:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Br:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case zr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Vr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case kr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Gr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case qr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Yr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case jr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case $r:case Kr:case Zr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Jr:case Qr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case to:case eo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dh(s){switch(s){case an:case Ba:return{byteLength:1,components:1};case zi:case za:case Xi:return{byteLength:2,components:1};case ao:case lo:return{byteLength:2,components:4};case qn:case oo:case gn:return{byteLength:4,components:1};case Va:case Ha:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ro);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ll(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function fh(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var ph=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Eh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ah=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Oh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,su=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ru=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ou=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,au=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,du=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_u=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Eu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Au=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ru=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Du=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ou=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ku=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ju=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,td=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,od=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ad=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ld=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Md=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Td=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ad=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Id=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ud=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Od=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:ph,alphahash_pars_fragment:mh,alphamap_fragment:gh,alphamap_pars_fragment:_h,alphatest_fragment:xh,alphatest_pars_fragment:Mh,aomap_fragment:vh,aomap_pars_fragment:yh,batching_pars_vertex:Sh,batching_vertex:Eh,begin_vertex:bh,beginnormal_vertex:Th,bsdfs:wh,iridescence_fragment:Ah,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Ch,clipping_planes_pars_fragment:Ph,clipping_planes_pars_vertex:Ih,clipping_planes_vertex:Dh,color_fragment:Lh,color_pars_fragment:Uh,color_pars_vertex:Nh,color_vertex:Fh,common:Oh,cube_uv_reflection_fragment:Bh,defaultnormal_vertex:zh,displacementmap_pars_vertex:Vh,displacementmap_vertex:Hh,emissivemap_fragment:kh,emissivemap_pars_fragment:Gh,colorspace_fragment:Wh,colorspace_pars_fragment:Xh,envmap_fragment:qh,envmap_common_pars_fragment:Yh,envmap_pars_fragment:jh,envmap_pars_vertex:$h,envmap_physical_pars_fragment:ou,envmap_vertex:Kh,fog_vertex:Zh,fog_pars_vertex:Jh,fog_fragment:Qh,fog_pars_fragment:tu,gradientmap_pars_fragment:eu,lightmap_pars_fragment:nu,lights_lambert_fragment:iu,lights_lambert_pars_fragment:su,lights_pars_begin:ru,lights_toon_fragment:au,lights_toon_pars_fragment:lu,lights_phong_fragment:cu,lights_phong_pars_fragment:hu,lights_physical_fragment:uu,lights_physical_pars_fragment:du,lights_fragment_begin:fu,lights_fragment_maps:pu,lights_fragment_end:mu,logdepthbuf_fragment:gu,logdepthbuf_pars_fragment:_u,logdepthbuf_pars_vertex:xu,logdepthbuf_vertex:Mu,map_fragment:vu,map_pars_fragment:yu,map_particle_fragment:Su,map_particle_pars_fragment:Eu,metalnessmap_fragment:bu,metalnessmap_pars_fragment:Tu,morphinstance_vertex:wu,morphcolor_vertex:Au,morphnormal_vertex:Ru,morphtarget_pars_vertex:Cu,morphtarget_vertex:Pu,normal_fragment_begin:Iu,normal_fragment_maps:Du,normal_pars_fragment:Lu,normal_pars_vertex:Uu,normal_vertex:Nu,normalmap_pars_fragment:Fu,clearcoat_normal_fragment_begin:Ou,clearcoat_normal_fragment_maps:Bu,clearcoat_pars_fragment:zu,iridescence_pars_fragment:Vu,opaque_fragment:Hu,packing:ku,premultiplied_alpha_fragment:Gu,project_vertex:Wu,dithering_fragment:Xu,dithering_pars_fragment:qu,roughnessmap_fragment:Yu,roughnessmap_pars_fragment:ju,shadowmap_pars_fragment:$u,shadowmap_pars_vertex:Ku,shadowmap_vertex:Zu,shadowmask_pars_fragment:Ju,skinbase_vertex:Qu,skinning_pars_vertex:td,skinning_vertex:ed,skinnormal_vertex:nd,specularmap_fragment:id,specularmap_pars_fragment:sd,tonemapping_fragment:rd,tonemapping_pars_fragment:od,transmission_fragment:ad,transmission_pars_fragment:ld,uv_pars_fragment:cd,uv_pars_vertex:hd,uv_vertex:ud,worldpos_vertex:dd,background_vert:fd,background_frag:pd,backgroundCube_vert:md,backgroundCube_frag:gd,cube_vert:_d,cube_frag:xd,depth_vert:Md,depth_frag:vd,distanceRGBA_vert:yd,distanceRGBA_frag:Sd,equirect_vert:Ed,equirect_frag:bd,linedashed_vert:Td,linedashed_frag:wd,meshbasic_vert:Ad,meshbasic_frag:Rd,meshlambert_vert:Cd,meshlambert_frag:Pd,meshmatcap_vert:Id,meshmatcap_frag:Dd,meshnormal_vert:Ld,meshnormal_frag:Ud,meshphong_vert:Nd,meshphong_frag:Fd,meshphysical_vert:Od,meshphysical_frag:Bd,meshtoon_vert:zd,meshtoon_frag:Vd,points_vert:Hd,points_frag:kd,shadow_vert:Gd,shadow_frag:Wd,sprite_vert:Xd,sprite_frag:qd},dt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},sn={basic:{uniforms:Pe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Pe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Pe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Pe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Pe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Pe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Pe([dt.points,dt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Pe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Pe([dt.common,dt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Pe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Pe([dt.sprite,dt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Pe([dt.common,dt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Pe([dt.lights,dt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};sn.physical={uniforms:Pe([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const _s={r:0,b:0,g:0},On=new ln,Yd=new fe;function jd(s,t,e,n,i,r,o){const a=new qt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?e:t).get(v)),v}function _(b){let v=!1;const R=g(b);R===null?f(a,l):R&&R.isColor&&(f(R,1),v=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,v){const R=g(v);R&&(R.isCubeTexture||R.mapping===Is)?(h===void 0&&(h=new X(new Yt(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Ei(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),On.copy(v.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yd.makeRotationFromEuler(On)),h.material.toneMapped=Kt.getTransfer(R.colorSpace)!==ne,(u!==R||d!==R.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,p=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new X(new Ve(2,2),new Pn({name:"BackgroundMaterial",uniforms:Ei(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(R.colorSpace)!==ne,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,p=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,v){b.getRGB(_s,Qa(s)),n.buffers.color.setClear(_s.r,_s.g,_s.b,v,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:_,addToRenderList:m,dispose:E}}function $d(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,I,F,B,q){let G=!1;const k=u(B,F,I);r!==k&&(r=k,c(r.object)),G=p(M,B,F,q),G&&g(M,B,F,q),q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(M,I,F,B),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,I,F){const B=F.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let G=q[I.id];G===void 0&&(G={},q[I.id]=G);let k=G[B];return k===void 0&&(k=d(l()),G[B]=k),k}function d(M){const I=[],F=[],B=[];for(let q=0;q<e;q++)I[q]=0,F[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,I,F,B){const q=r.attributes,G=I.attributes;let k=0;const Z=F.getAttributes();for(const H in Z)if(Z[H].location>=0){const at=q[H];let lt=G[H];if(lt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),at===void 0||at.attribute!==lt||lt&&at.data!==lt.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function g(M,I,F,B){const q={},G=I.attributes;let k=0;const Z=F.getAttributes();for(const H in Z)if(Z[H].location>=0){let at=G[H];at===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const lt={};lt.attribute=at,at&&at.data&&(lt.data=at.data),q[H]=lt,k++}r.attributes=q,r.attributesNum=k,r.index=B}function _(){const M=r.newAttributes;for(let I=0,F=M.length;I<F;I++)M[I]=0}function m(M){f(M,0)}function f(M,I){const F=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;F[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),q[M]!==I&&(s.vertexAttribDivisor(M,I),q[M]=I)}function E(){const M=r.newAttributes,I=r.enabledAttributes;for(let F=0,B=I.length;F<B;F++)I[F]!==M[F]&&(s.disableVertexAttribArray(F),I[F]=0)}function b(M,I,F,B,q,G,k){k===!0?s.vertexAttribIPointer(M,I,F,q,G):s.vertexAttribPointer(M,I,F,B,q,G)}function v(M,I,F,B){_();const q=B.attributes,G=F.getAttributes(),k=I.defaultAttributeValues;for(const Z in G){const H=G[Z];if(H.location>=0){let tt=q[Z];if(tt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const at=tt.normalized,lt=tt.itemSize,It=t.get(tt);if(It===void 0)continue;const Ut=It.buffer,Vt=It.type,Nt=It.bytesPerElement,$=Vt===s.INT||Vt===s.UNSIGNED_INT||tt.gpuType===oo;if(tt.isInterleavedBufferAttribute){const Y=tt.data,rt=Y.stride,ut=tt.offset;if(Y.isInstancedInterleavedBuffer){for(let ht=0;ht<H.locationSize;ht++)f(H.location+ht,Y.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ht=0;ht<H.locationSize;ht++)m(H.location+ht);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let ht=0;ht<H.locationSize;ht++)b(H.location+ht,lt/H.locationSize,Vt,at,rt*Nt,(ut+lt/H.locationSize*ht)*Nt,$)}else{if(tt.isInstancedBufferAttribute){for(let Y=0;Y<H.locationSize;Y++)f(H.location+Y,tt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Y=0;Y<H.locationSize;Y++)m(H.location+Y);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let Y=0;Y<H.locationSize;Y++)b(H.location+Y,lt/H.locationSize,Vt,at,lt*Nt,lt/H.locationSize*Y*Nt,$)}}else if(k!==void 0){const at=k[Z];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(H.location,at);break;case 3:s.vertexAttrib3fv(H.location,at);break;case 4:s.vertexAttrib4fv(H.location,at);break;default:s.vertexAttrib1fv(H.location,at)}}}}E()}function R(){D();for(const M in n){const I=n[M];for(const F in I){const B=I[F];for(const q in B)h(B[q].object),delete B[q];delete I[F]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const F in I){const B=I[F];for(const q in B)h(B[q].object),delete B[q];delete I[F]}delete n[M.id]}function P(M){for(const I in n){const F=n[I];if(F[M.id]===void 0)continue;const B=F[M.id];for(const q in B)h(B[q].object),delete B[q];delete F[M.id]}}function D(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Kd(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zd(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==Qe&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===Xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==an&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==gn&&!D)}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:R,maxSamples:w}}function Jd(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Tn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,b=E*4;let v=f.clippingState||null;l.value=v,v=h(g,d,b,p);for(let R=0;R!==b;++R)v[R]=e[R];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,v=p;b!==_;++b,v+=4)o.copy(u[b]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Qd(s){let t=new WeakMap;function e(o,a){return a===br?o.mapping=vi:a===Tr&&(o.mapping=yi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===br||a===Tr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yc(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const gi=4,ca=[.125,.215,.35,.446,.526,.582],kn=20,lr=new al,ha=new qt;let cr=null,hr=0,ur=0,dr=!1;const zn=(1+Math.sqrt(5))/2,pi=1/zn,ua=[new A(-zn,pi,0),new A(zn,pi,0),new A(-pi,0,zn),new A(pi,0,zn),new A(0,zn,-pi),new A(0,zn,pi),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],tf=new A;class da{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=tf}=r;cr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ma(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cr,hr,ur),this._renderer.xr.enabled=dr,t.scissorTest=!1,xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vi||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Xi,format:Qe,colorSpace:Si,depthBuffer:!1},i=fa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ef(r)),this._blurMaterial=nf(r,t,e)}return i}_compileMaterial(t){const e=new X(this._lodPlanes[0],t);this._renderer.compile(e,lr)}_sceneToCubeUV(t,e,n,i,r){const l=new He(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(ha),u.toneMapping=Rn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const _=new Cs({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),m=new X(new Yt,_);let f=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,f=!0):(_.color.copy(ha),f=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const R=this._cubeSize;xs(i,v*R,b>2?R:0,R,R),u.setRenderTarget(i),f&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===vi||t.mapping===yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ma()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pa());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new X(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,lr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ua[(i-r-1)%ua.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new X(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*kn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):kn;m>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);const f=[];let E=0;for(let P=0;P<kn;++P){const D=P/_,S=Math.exp(-D*D/2);f.push(S),P===0?E+=S:P<m&&(E+=2*S)}for(let P=0;P<f.length;P++)f[P]=f[P]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const v=this._sizeLods[i],R=3*v*(i>b-gi?i-b+gi:0),w=4*(this._cubeSize-v);xs(e,R,w,3*v,2*v),l.setRenderTarget(e),l.render(u,lr)}}function ef(s){const t=[],e=[],n=[];let i=s;const r=s-gi+1+ca.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-gi?l=ca[o-s+gi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),b=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let w=0;w<p;w++){const P=w%3*2/3-1,D=w>2?0:-1,S=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];E.set(S,_*g*w),b.set(d,m*g*w);const M=[w,w,w,w,w,w];v.set(M,f*g*w)}const R=new Ne;R.setAttribute("position",new en(E,_)),R.setAttribute("uv",new en(b,m)),R.setAttribute("faceIndex",new en(v,f)),t.push(R),i>gi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fa(s,t,e){const n=new jn(s,t,e);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function nf(s,t,e){const n=new Float32Array(kn),i=new A(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function pa(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function ma(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function So(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sf(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===br||l===Tr,h=l===vi||l===yi;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new da(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new da(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function rf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Wi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function of(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let b=0,v=E.length;b<v;b+=3){const R=E[b+0],w=E[b+1],P=E[b+2];d.push(R,w,w,P,P,R)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,v=E.length/3-1;b<v;b+=3){const R=b+0,w=b+1,P=b+2;d.push(R,w,w,P,P,R)}}else return;const m=new(ja(d)?Ja:Za)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function af(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*_[E];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function lf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function cf(s,t,e){const n=new WeakMap,i=new se;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const P=new Float32Array(R*w*4*u),D=new $a(P,R,w,u);D.type=gn,D.needsUpdate=!0;const S=v*4;for(let I=0;I<u;I++){const F=f[I],B=E[I],q=b[I],G=R*w*4*I;for(let k=0;k<F.count;k++){const Z=k*S;g===!0&&(i.fromBufferAttribute(F,k),P[G+Z+0]=i.x,P[G+Z+1]=i.y,P[G+Z+2]=i.z,P[G+Z+3]=0),_===!0&&(i.fromBufferAttribute(B,k),P[G+Z+4]=i.x,P[G+Z+5]=i.y,P[G+Z+6]=i.z,P[G+Z+7]=0),m===!0&&(i.fromBufferAttribute(q,k),P[G+Z+8]=i.x,P[G+Z+9]=i.y,P[G+Z+10]=i.z,P[G+Z+11]=q.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new At(R,w)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function hf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const cl=new Ie,ga=new sl(1,1),hl=new $a,ul=new Pc,dl=new el,_a=[],xa=[],Ma=new Float32Array(16),va=new Float32Array(9),ya=new Float32Array(4);function Ti(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=_a[i];if(r===void 0&&(r=new Float32Array(i),_a[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Se(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ls(s,t){let e=xa[t];e===void 0&&(e=new Int32Array(t),xa[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function uf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),Se(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),Se(e,t)}}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),Se(e,t)}}function mf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;ya.set(n),s.uniformMatrix2fv(this.addr,!1,ya),Se(e,n)}}function gf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;va.set(n),s.uniformMatrix3fv(this.addr,!1,va),Se(e,n)}}function _f(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;Ma.set(n),s.uniformMatrix4fv(this.addr,!1,Ma),Se(e,n)}}function xf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2iv(this.addr,t),Se(e,t)}}function vf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3iv(this.addr,t),Se(e,t)}}function yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4iv(this.addr,t),Se(e,t)}}function Sf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2uiv(this.addr,t),Se(e,t)}}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3uiv(this.addr,t),Se(e,t)}}function Tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4uiv(this.addr,t),Se(e,t)}}function wf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ga.compareFunction=Ya,r=ga):r=cl,e.setTexture2D(t||r,i)}function Af(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ul,i)}function Rf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||dl,i)}function Cf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||hl,i)}function Pf(s){switch(s){case 5126:return uf;case 35664:return df;case 35665:return ff;case 35666:return pf;case 35674:return mf;case 35675:return gf;case 35676:return _f;case 5124:case 35670:return xf;case 35667:case 35671:return Mf;case 35668:case 35672:return vf;case 35669:case 35673:return yf;case 5125:return Sf;case 36294:return Ef;case 36295:return bf;case 36296:return Tf;case 35678:case 36198:case 36298:case 36306:case 35682:return wf;case 35679:case 36299:case 36307:return Af;case 35680:case 36300:case 36308:case 36293:return Rf;case 36289:case 36303:case 36311:case 36292:return Cf}}function If(s,t){s.uniform1fv(this.addr,t)}function Df(s,t){const e=Ti(t,this.size,2);s.uniform2fv(this.addr,e)}function Lf(s,t){const e=Ti(t,this.size,3);s.uniform3fv(this.addr,e)}function Uf(s,t){const e=Ti(t,this.size,4);s.uniform4fv(this.addr,e)}function Nf(s,t){const e=Ti(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ff(s,t){const e=Ti(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Of(s,t){const e=Ti(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Bf(s,t){s.uniform1iv(this.addr,t)}function zf(s,t){s.uniform2iv(this.addr,t)}function Vf(s,t){s.uniform3iv(this.addr,t)}function Hf(s,t){s.uniform4iv(this.addr,t)}function kf(s,t){s.uniform1uiv(this.addr,t)}function Gf(s,t){s.uniform2uiv(this.addr,t)}function Wf(s,t){s.uniform3uiv(this.addr,t)}function Xf(s,t){s.uniform4uiv(this.addr,t)}function qf(s,t,e){const n=this.cache,i=t.length,r=Ls(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||cl,r[o])}function Yf(s,t,e){const n=this.cache,i=t.length,r=Ls(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ul,r[o])}function jf(s,t,e){const n=this.cache,i=t.length,r=Ls(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||dl,r[o])}function $f(s,t,e){const n=this.cache,i=t.length,r=Ls(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||hl,r[o])}function Kf(s){switch(s){case 5126:return If;case 35664:return Df;case 35665:return Lf;case 35666:return Uf;case 35674:return Nf;case 35675:return Ff;case 35676:return Of;case 5124:case 35670:return Bf;case 35667:case 35671:return zf;case 35668:case 35672:return Vf;case 35669:case 35673:return Hf;case 5125:return kf;case 36294:return Gf;case 36295:return Wf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return qf;case 35679:case 36299:case 36307:return Yf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return $f}}class Zf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pf(e.type)}}class Jf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kf(e.type)}}class Qf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const fr=/(\w+)(\])?(\[|\.)?/g;function Sa(s,t){s.seq.push(t),s.map[t.id]=t}function tp(s,t,e){const n=s.name,i=n.length;for(fr.lastIndex=0;;){const r=fr.exec(n),o=fr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Sa(e,c===void 0?new Zf(a,s,t):new Jf(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Qf(a),Sa(e,u)),e=u}}}class Ts{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);tp(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ea(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const ep=37297;let np=0;function ip(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ba=new kt;function sp(s){Kt._getMatrix(ba,Kt.workingColorSpace,s);const t=`mat3( ${ba.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(s)){case ws:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ta(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+ip(s.getShaderSource(t),a)}else return r}function rp(s,t){const e=sp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function op(s,t){let e;switch(t){case Gl:e="Linear";break;case Wl:e="Reinhard";break;case Xl:e="Cineon";break;case ql:e="ACESFilmic";break;case jl:e="AgX";break;case $l:e="Neutral";break;case Yl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ms=new A;function ap(){Kt.getLuminanceCoefficients(Ms);const s=Ms.x.toFixed(4),t=Ms.y.toFixed(4),e=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ni).join(`
`)}function cp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ni(s){return s!==""}function wa(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Aa(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const up=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(s){return s.replace(up,fp)}const dp=new Map;function fp(s,t){let e=Gt[t];if(e===void 0){const n=dp.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return so(e)}const pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ra(s){return s.replace(pp,mp)}function mp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ca(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Na?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Sl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mn&&(t="SHADOWMAP_TYPE_VSM"),t}function _p(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vi:case yi:t="ENVMAP_TYPE_CUBE";break;case Is:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Mp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fa:t="ENVMAP_BLENDING_MULTIPLY";break;case Hl:t="ENVMAP_BLENDING_MIX";break;case kl:t="ENVMAP_BLENDING_ADD";break}return t}function vp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function yp(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=gp(e),c=_p(e),h=xp(e),u=Mp(e),d=vp(e),p=lp(e),g=cp(r),_=i.createProgram();let m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ni).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ni).join(`
`),f.length>0&&(f+=`
`)):(m=[Ca(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),f=[Ca(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Rn?op("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,rp("linearToOutputTexel",e.outputColorSpace),ap(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ni).join(`
`)),o=so(o),o=wa(o,e),o=Aa(o,e),a=so(a),a=wa(a,e),a=Aa(a,e),o=Ra(o),a=Ra(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===No?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===No?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=E+m+o,v=E+f+a,R=Ea(i,i.VERTEX_SHADER,b),w=Ea(i,i.FRAGMENT_SHADER,v);i.attachShader(_,R),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(I){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(R)||"",q=i.getShaderInfoLog(w)||"",G=F.trim(),k=B.trim(),Z=q.trim();let H=!0,tt=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,w);else{const at=Ta(i,R,"vertex"),lt=Ta(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+at+`
`+lt)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||Z==="")&&(tt=!1);tt&&(I.diagnostics={runnable:H,programLog:G,vertexShader:{log:k,prefix:m},fragmentShader:{log:Z,prefix:f}})}i.deleteShader(R),i.deleteShader(w),D=new Ts(i,_),S=hp(i,_)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,ep)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=np++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let Sp=0;class Ep{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bp(t),e.set(t,n)),n}}class bp{constructor(t){this.id=Sp++,this.code=t,this.usedTimes=0}}function Tp(s,t,e,n,i,r,o){const a=new _o,l=new Ep,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,I,F,B){const q=F.fog,G=B.geometry,k=S.isMeshStandardMaterial?F.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),H=Z&&Z.mapping===Is?Z.image.height:null,tt=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const at=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,lt=at!==void 0?at.length:0;let It=0;G.morphAttributes.position!==void 0&&(It=1),G.morphAttributes.normal!==void 0&&(It=2),G.morphAttributes.color!==void 0&&(It=3);let Ut,Vt,Nt,$;if(tt){const Jt=sn[tt];Ut=Jt.vertexShader,Vt=Jt.fragmentShader}else Ut=S.vertexShader,Vt=S.fragmentShader,l.update(S),Nt=l.getVertexShaderID(S),$=l.getFragmentShaderID(S);const Y=s.getRenderTarget(),rt=s.state.buffers.depth.getReversed(),ut=B.isInstancedMesh===!0,ht=B.isBatchedMesh===!0,Tt=!!S.map,re=!!S.matcap,C=!!Z,Zt=!!S.aoMap,Ot=!!S.lightMap,Dt=!!S.bumpMap,gt=!!S.normalMap,Qt=!!S.displacementMap,Mt=!!S.emissiveMap,zt=!!S.metalnessMap,pe=!!S.roughnessMap,le=S.anisotropy>0,T=S.clearcoat>0,x=S.dispersion>0,O=S.iridescence>0,j=S.sheen>0,Q=S.transmission>0,W=le&&!!S.anisotropyMap,wt=T&&!!S.clearcoatMap,ot=T&&!!S.clearcoatNormalMap,yt=T&&!!S.clearcoatRoughnessMap,bt=O&&!!S.iridescenceMap,et=O&&!!S.iridescenceThicknessMap,ft=j&&!!S.sheenColorMap,Pt=j&&!!S.sheenRoughnessMap,St=!!S.specularMap,pt=!!S.specularColorMap,Ht=!!S.specularIntensityMap,L=Q&&!!S.transmissionMap,st=Q&&!!S.thicknessMap,ct=!!S.gradientMap,xt=!!S.alphaMap,nt=S.alphaTest>0,K=!!S.alphaHash,Et=!!S.extensions;let Bt=Rn;S.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Bt=s.toneMapping);const ae={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:Ut,fragmentShader:Vt,defines:S.defines,customVertexShaderID:Nt,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ht,batchingColor:ht&&B._colorsTexture!==null,instancing:ut,instancingColor:ut&&B.instanceColor!==null,instancingMorph:ut&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?s.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Si,alphaToCoverage:!!S.alphaToCoverage,map:Tt,matcap:re,envMap:C,envMapMode:C&&Z.mapping,envMapCubeUVHeight:H,aoMap:Zt,lightMap:Ot,bumpMap:Dt,normalMap:gt,displacementMap:d&&Qt,emissiveMap:Mt,normalMapObjectSpace:gt&&S.normalMapType===Ql,normalMapTangentSpace:gt&&S.normalMapType===qa,metalnessMap:zt,roughnessMap:pe,anisotropy:le,anisotropyMap:W,clearcoat:T,clearcoatMap:wt,clearcoatNormalMap:ot,clearcoatRoughnessMap:yt,dispersion:x,iridescence:O,iridescenceMap:bt,iridescenceThicknessMap:et,sheen:j,sheenColorMap:ft,sheenRoughnessMap:Pt,specularMap:St,specularColorMap:pt,specularIntensityMap:Ht,transmission:Q,transmissionMap:L,thicknessMap:st,gradientMap:ct,opaque:S.transparent===!1&&S.blending===Xn&&S.alphaToCoverage===!1,alphaMap:xt,alphaTest:nt,alphaHash:K,combine:S.combine,mapUv:Tt&&_(S.map.channel),aoMapUv:Zt&&_(S.aoMap.channel),lightMapUv:Ot&&_(S.lightMap.channel),bumpMapUv:Dt&&_(S.bumpMap.channel),normalMapUv:gt&&_(S.normalMap.channel),displacementMapUv:Qt&&_(S.displacementMap.channel),emissiveMapUv:Mt&&_(S.emissiveMap.channel),metalnessMapUv:zt&&_(S.metalnessMap.channel),roughnessMapUv:pe&&_(S.roughnessMap.channel),anisotropyMapUv:W&&_(S.anisotropyMap.channel),clearcoatMapUv:wt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(S.sheenRoughnessMap.channel),specularMapUv:St&&_(S.specularMap.channel),specularColorMapUv:pt&&_(S.specularColorMap.channel),specularIntensityMapUv:Ht&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:st&&_(S.thicknessMap.channel),alphaMapUv:xt&&_(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(gt||le),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(Tt||xt),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:rt,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:It,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Tt&&S.map.isVideoTexture===!0&&Kt.getTransfer(S.map.colorSpace)===ne,decodeVideoTextureEmissive:Mt&&S.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(S.emissiveMap.colorSpace)===ne,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===xe,flipSided:S.side===Ue,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Et&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&S.extensions.multiDraw===!0||ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ae.vertexUv1s=c.has(1),ae.vertexUv2s=c.has(2),ae.vertexUv3s=c.has(3),c.clear(),ae}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)M.push(I),M.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(E(M,S),b(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=g[S.type];let I;if(M){const F=sn[M];I=Gc.clone(F.uniforms)}else I=S.uniforms;return I}function R(S,M){let I;for(let F=0,B=h.length;F<B;F++){const q=h[F];if(q.cacheKey===M){I=q,++I.usedTimes;break}}return I===void 0&&(I=new yp(s,M,S,r),h.push(I)),I}function w(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:D}}function wp(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Ap(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Pa(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ia(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,g,_,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Ap),n.length>1&&n.sort(d||Pa),i.length>1&&i.sort(d||Pa)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Rp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ia,s.set(n,[o])):i>=r.length?(o=new Ia,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Cp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new qt};break;case"SpotLight":e={position:new A,direction:new A,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function Pp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Ip=0;function Dp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Lp(s){const t=new Cp,e=Pp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const i=new A,r=new fe,o=new fe;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,b=0,v=0,R=0,w=0,P=0;c.sort(Dp);for(let S=0,M=c.length;S<M;S++){const I=c[S],F=I.color,B=I.intensity,q=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=F.r*B,u+=F.g*B,d+=F.b*B;else if(I.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(I.sh.coefficients[k],B);P++}else if(I.isDirectionalLight){const k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,H=e.get(I);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=I.shadow.matrix,E++}n.directional[p]=k,p++}else if(I.isSpotLight){const k=t.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(F).multiplyScalar(B),k.distance=q,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,n.spot[_]=k;const Z=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,Z.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[_]=Z.matrix,I.castShadow){const H=e.get(I);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=G,v++}_++}else if(I.isRectAreaLight){const k=t.get(I);k.color.copy(F).multiplyScalar(B),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=k,m++}else if(I.isPointLight){const k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){const Z=I.shadow,H=e.get(I);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=k,g++}else if(I.isHemisphereLight){const k=t.get(I);k.skyColor.copy(I.color).multiplyScalar(B),k.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[f]=k,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==E||D.numPointShadows!==b||D.numSpotShadows!==v||D.numSpotMaps!==R||D.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=E,D.numPointShadows=b,D.numSpotShadows=v,D.numSpotMaps=R,D.numLightProbes=P,n.version=Ip++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const b=c[f];if(b.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(b.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Da(s){const t=new Lp(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Up(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Da(s),t.set(i,[a])):r>=o.length?(a=new Da(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Np=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Op(s,t,e){let n=new xo;const i=new At,r=new At,o=new se,a=new nh({depthPacking:Jl}),l=new ih,c={},h=e.maxTextureSize,u={[Cn]:Ue,[Ue]:Cn,[xe]:xe},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:Np,fragmentShader:Fp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new X(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Na;let f=this.type;this.render=function(w,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),F=s.state;F.setBlending(An),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=f!==mn&&this.type===mn,q=f===mn&&this.type!==mn;for(let G=0,k=w.length;G<k;G++){const Z=w[G],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const tt=H.getFrameExtents();if(i.multiply(tt),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,H.mapSize.y=r.y)),H.map===null||B===!0||q===!0){const lt=this.type!==mn?{minFilter:tn,magFilter:tn}:{};H.map!==null&&H.map.dispose(),H.map=new jn(i.x,i.y,lt),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const at=H.getViewportCount();for(let lt=0;lt<at;lt++){const It=H.getViewport(lt);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),F.viewport(o),H.updateMatrices(Z,lt),n=H.getFrustum(),v(P,D,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===mn&&E(H,D),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,I)};function E(w,P){const D=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new jn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(P,null,D,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(P,null,D,p,_,null)}function b(w,P,D,S){let M=null;const I=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)M=I;else if(M=D.isPointLight===!0?l:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=M.uuid,B=P.uuid;let q=c[F];q===void 0&&(q={},c[F]=q);let G=q[B];G===void 0&&(G=M.clone(),q[B]=G,P.addEventListener("dispose",R)),M=G}if(M.visible=P.visible,M.wireframe=P.wireframe,S===mn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=s.properties.get(M);F.light=D}return M}function v(w,P,D,S,M){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===mn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const B=t.update(w),q=w.material;if(Array.isArray(q)){const G=B.groups;for(let k=0,Z=G.length;k<Z;k++){const H=G[k],tt=q[H.materialIndex];if(tt&&tt.visible){const at=b(w,tt,S,M);w.onBeforeShadow(s,w,P,D,B,at,H),s.renderBufferDirect(D,null,B,at,w,H),w.onAfterShadow(s,w,P,D,B,at,H)}}}else if(q.visible){const G=b(w,q,S,M);w.onBeforeShadow(s,w,P,D,B,G,null),s.renderBufferDirect(D,null,B,G,w,null),w.onAfterShadow(s,w,P,D,B,G,null)}}const F=w.children;for(let B=0,q=F.length;B<q;B++)v(F[B],P,D,S,M)}function R(w){w.target.removeEventListener("dispose",R);for(const D in c){const S=c[D],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Bp={[_r]:xr,[Mr]:Sr,[vr]:Er,[Mi]:yr,[xr]:_r,[Sr]:Mr,[Er]:vr,[yr]:Mi};function zp(s,t){function e(){let L=!1;const st=new se;let ct=null;const xt=new se(0,0,0,0);return{setMask:function(nt){ct!==nt&&!L&&(s.colorMask(nt,nt,nt,nt),ct=nt)},setLocked:function(nt){L=nt},setClear:function(nt,K,Et,Bt,ae){ae===!0&&(nt*=Bt,K*=Bt,Et*=Bt),st.set(nt,K,Et,Bt),xt.equals(st)===!1&&(s.clearColor(nt,K,Et,Bt),xt.copy(st))},reset:function(){L=!1,ct=null,xt.set(-1,0,0,0)}}}function n(){let L=!1,st=!1,ct=null,xt=null,nt=null;return{setReversed:function(K){if(st!==K){const Et=t.get("EXT_clip_control");K?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),st=K;const Bt=nt;nt=null,this.setClear(Bt)}},getReversed:function(){return st},setTest:function(K){K?Y(s.DEPTH_TEST):rt(s.DEPTH_TEST)},setMask:function(K){ct!==K&&!L&&(s.depthMask(K),ct=K)},setFunc:function(K){if(st&&(K=Bp[K]),xt!==K){switch(K){case _r:s.depthFunc(s.NEVER);break;case xr:s.depthFunc(s.ALWAYS);break;case Mr:s.depthFunc(s.LESS);break;case Mi:s.depthFunc(s.LEQUAL);break;case vr:s.depthFunc(s.EQUAL);break;case yr:s.depthFunc(s.GEQUAL);break;case Sr:s.depthFunc(s.GREATER);break;case Er:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=K}},setLocked:function(K){L=K},setClear:function(K){nt!==K&&(st&&(K=1-K),s.clearDepth(K),nt=K)},reset:function(){L=!1,ct=null,xt=null,nt=null,st=!1}}}function i(){let L=!1,st=null,ct=null,xt=null,nt=null,K=null,Et=null,Bt=null,ae=null;return{setTest:function(Jt){L||(Jt?Y(s.STENCIL_TEST):rt(s.STENCIL_TEST))},setMask:function(Jt){st!==Jt&&!L&&(s.stencilMask(Jt),st=Jt)},setFunc:function(Jt,cn,nn){(ct!==Jt||xt!==cn||nt!==nn)&&(s.stencilFunc(Jt,cn,nn),ct=Jt,xt=cn,nt=nn)},setOp:function(Jt,cn,nn){(K!==Jt||Et!==cn||Bt!==nn)&&(s.stencilOp(Jt,cn,nn),K=Jt,Et=cn,Bt=nn)},setLocked:function(Jt){L=Jt},setClear:function(Jt){ae!==Jt&&(s.clearStencil(Jt),ae=Jt)},reset:function(){L=!1,st=null,ct=null,xt=null,nt=null,K=null,Et=null,Bt=null,ae=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,b=null,v=null,R=null,w=null,P=new qt(0,0,0),D=0,S=!1,M=null,I=null,F=null,B=null,q=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Z=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=Z>=2);let tt=null,at={};const lt=s.getParameter(s.SCISSOR_BOX),It=s.getParameter(s.VIEWPORT),Ut=new se().fromArray(lt),Vt=new se().fromArray(It);function Nt(L,st,ct,xt){const nt=new Uint8Array(4),K=s.createTexture();s.bindTexture(L,K),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Et=0;Et<ct;Et++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,xt,0,s.RGBA,s.UNSIGNED_BYTE,nt):s.texImage2D(st+Et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,nt);return K}const $={};$[s.TEXTURE_2D]=Nt(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=Nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=Nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=Nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(s.DEPTH_TEST),o.setFunc(Mi),Dt(!1),gt(Po),Y(s.CULL_FACE),Zt(An);function Y(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function rt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function ut(L,st){return u[L]!==st?(s.bindFramebuffer(L,st),u[L]=st,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=st),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=st),!0):!1}function ht(L,st){let ct=p,xt=!1;if(L){ct=d.get(st),ct===void 0&&(ct=[],d.set(st,ct));const nt=L.textures;if(ct.length!==nt.length||ct[0]!==s.COLOR_ATTACHMENT0){for(let K=0,Et=nt.length;K<Et;K++)ct[K]=s.COLOR_ATTACHMENT0+K;ct.length=nt.length,xt=!0}}else ct[0]!==s.BACK&&(ct[0]=s.BACK,xt=!0);xt&&s.drawBuffers(ct)}function Tt(L){return g!==L?(s.useProgram(L),g=L,!0):!1}const re={[Vn]:s.FUNC_ADD,[bl]:s.FUNC_SUBTRACT,[Tl]:s.FUNC_REVERSE_SUBTRACT};re[wl]=s.MIN,re[Al]=s.MAX;const C={[Rl]:s.ZERO,[Cl]:s.ONE,[Pl]:s.SRC_COLOR,[mr]:s.SRC_ALPHA,[Fl]:s.SRC_ALPHA_SATURATE,[Ul]:s.DST_COLOR,[Dl]:s.DST_ALPHA,[Il]:s.ONE_MINUS_SRC_COLOR,[gr]:s.ONE_MINUS_SRC_ALPHA,[Nl]:s.ONE_MINUS_DST_COLOR,[Ll]:s.ONE_MINUS_DST_ALPHA,[Ol]:s.CONSTANT_COLOR,[Bl]:s.ONE_MINUS_CONSTANT_COLOR,[zl]:s.CONSTANT_ALPHA,[Vl]:s.ONE_MINUS_CONSTANT_ALPHA};function Zt(L,st,ct,xt,nt,K,Et,Bt,ae,Jt){if(L===An){_===!0&&(rt(s.BLEND),_=!1);return}if(_===!1&&(Y(s.BLEND),_=!0),L!==El){if(L!==m||Jt!==S){if((f!==Vn||v!==Vn)&&(s.blendEquation(s.FUNC_ADD),f=Vn,v=Vn),Jt)switch(L){case Xn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Io:s.blendFunc(s.ONE,s.ONE);break;case Do:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lo:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Xn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Io:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Do:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,b=null,R=null,w=null,P.set(0,0,0),D=0,m=L,S=Jt}return}nt=nt||st,K=K||ct,Et=Et||xt,(st!==f||nt!==v)&&(s.blendEquationSeparate(re[st],re[nt]),f=st,v=nt),(ct!==E||xt!==b||K!==R||Et!==w)&&(s.blendFuncSeparate(C[ct],C[xt],C[K],C[Et]),E=ct,b=xt,R=K,w=Et),(Bt.equals(P)===!1||ae!==D)&&(s.blendColor(Bt.r,Bt.g,Bt.b,ae),P.copy(Bt),D=ae),m=L,S=!1}function Ot(L,st){L.side===xe?rt(s.CULL_FACE):Y(s.CULL_FACE);let ct=L.side===Ue;st&&(ct=!ct),Dt(ct),L.blending===Xn&&L.transparent===!1?Zt(An):Zt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const xt=L.stencilWrite;a.setTest(xt),xt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Mt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Y(s.SAMPLE_ALPHA_TO_COVERAGE):rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(L){M!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),M=L)}function gt(L){L!==vl?(Y(s.CULL_FACE),L!==I&&(L===Po?s.cullFace(s.BACK):L===yl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):rt(s.CULL_FACE),I=L}function Qt(L){L!==F&&(k&&s.lineWidth(L),F=L)}function Mt(L,st,ct){L?(Y(s.POLYGON_OFFSET_FILL),(B!==st||q!==ct)&&(s.polygonOffset(st,ct),B=st,q=ct)):rt(s.POLYGON_OFFSET_FILL)}function zt(L){L?Y(s.SCISSOR_TEST):rt(s.SCISSOR_TEST)}function pe(L){L===void 0&&(L=s.TEXTURE0+G-1),tt!==L&&(s.activeTexture(L),tt=L)}function le(L,st,ct){ct===void 0&&(tt===null?ct=s.TEXTURE0+G-1:ct=tt);let xt=at[ct];xt===void 0&&(xt={type:void 0,texture:void 0},at[ct]=xt),(xt.type!==L||xt.texture!==st)&&(tt!==ct&&(s.activeTexture(ct),tt=ct),s.bindTexture(L,st||$[L]),xt.type=L,xt.texture=st)}function T(){const L=at[tt];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{s.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{s.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{s.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{s.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{s.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{s.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{s.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(L){Ut.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Ut.copy(L))}function Pt(L){Vt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Vt.copy(L))}function St(L,st){let ct=c.get(st);ct===void 0&&(ct=new WeakMap,c.set(st,ct));let xt=ct.get(L);xt===void 0&&(xt=s.getUniformBlockIndex(st,L.name),ct.set(L,xt))}function pt(L,st){const xt=c.get(st).get(L);l.get(st)!==xt&&(s.uniformBlockBinding(st,xt,L.__bindingPointIndex),l.set(st,xt))}function Ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},tt=null,at={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,b=null,v=null,R=null,w=null,P=new qt(0,0,0),D=0,S=!1,M=null,I=null,F=null,B=null,q=null,Ut.set(0,0,s.canvas.width,s.canvas.height),Vt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:rt,bindFramebuffer:ut,drawBuffers:ht,useProgram:Tt,setBlending:Zt,setMaterial:Ot,setFlipSided:Dt,setCullFace:gt,setLineWidth:Qt,setPolygonOffset:Mt,setScissorTest:zt,activeTexture:pe,bindTexture:le,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:bt,texImage3D:et,updateUBOMapping:St,uniformBlockBinding:pt,texStorage2D:ot,texStorage3D:yt,texSubImage2D:j,texSubImage3D:Q,compressedTexSubImage2D:W,compressedTexSubImage3D:wt,scissor:ft,viewport:Pt,reset:Ht}}function Vp(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):Rs("canvas")}function _(T,x,O){let j=1;const Q=le(T);if((Q.width>O||Q.height>O)&&(j=O/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor(j*Q.width),wt=Math.floor(j*Q.height);u===void 0&&(u=g(W,wt));const ot=x?g(W,wt):u;return ot.width=W,ot.height=wt,ot.getContext("2d").drawImage(T,0,0,W,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+wt+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){s.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(T,x,O,j,Q=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=x;if(x===s.RED&&(O===s.FLOAT&&(W=s.R32F),O===s.HALF_FLOAT&&(W=s.R16F),O===s.UNSIGNED_BYTE&&(W=s.R8)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(W=s.R8UI),O===s.UNSIGNED_SHORT&&(W=s.R16UI),O===s.UNSIGNED_INT&&(W=s.R32UI),O===s.BYTE&&(W=s.R8I),O===s.SHORT&&(W=s.R16I),O===s.INT&&(W=s.R32I)),x===s.RG&&(O===s.FLOAT&&(W=s.RG32F),O===s.HALF_FLOAT&&(W=s.RG16F),O===s.UNSIGNED_BYTE&&(W=s.RG8)),x===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(W=s.RG8UI),O===s.UNSIGNED_SHORT&&(W=s.RG16UI),O===s.UNSIGNED_INT&&(W=s.RG32UI),O===s.BYTE&&(W=s.RG8I),O===s.SHORT&&(W=s.RG16I),O===s.INT&&(W=s.RG32I)),x===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(W=s.RGB8UI),O===s.UNSIGNED_SHORT&&(W=s.RGB16UI),O===s.UNSIGNED_INT&&(W=s.RGB32UI),O===s.BYTE&&(W=s.RGB8I),O===s.SHORT&&(W=s.RGB16I),O===s.INT&&(W=s.RGB32I)),x===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),O===s.UNSIGNED_INT&&(W=s.RGBA32UI),O===s.BYTE&&(W=s.RGBA8I),O===s.SHORT&&(W=s.RGBA16I),O===s.INT&&(W=s.RGBA32I)),x===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(W=s.R11F_G11F_B10F)),x===s.RGBA){const wt=Q?ws:Kt.getTransfer(j);O===s.FLOAT&&(W=s.RGBA32F),O===s.HALF_FLOAT&&(W=s.RGBA16F),O===s.UNSIGNED_BYTE&&(W=wt===ne?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(T,x){let O;return T?x===null||x===qn||x===Vi?O=s.DEPTH24_STENCIL8:x===gn?O=s.DEPTH32F_STENCIL8:x===zi&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===qn||x===Vi?O=s.DEPTH_COMPONENT24:x===gn?O=s.DEPTH_COMPONENT32F:x===zi&&(O=s.DEPTH_COMPONENT16),O}function R(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==tn&&T.minFilter!==rn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function w(T){const x=T.target;x.removeEventListener("dispose",w),D(x),x.isVideoTexture&&h.delete(x)}function P(T){const x=T.target;x.removeEventListener("dispose",P),M(x)}function D(T){const x=n.get(T);if(x.__webglInit===void 0)return;const O=T.source,j=d.get(O);if(j){const Q=j[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(T),Object.keys(j).length===0&&d.delete(O)}n.remove(T)}function S(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const O=T.source,j=d.get(O);delete j[x.__cacheKey],o.memory.textures--}function M(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let Q=0;Q<x.__webglFramebuffer[j].length;Q++)s.deleteFramebuffer(x.__webglFramebuffer[j][Q]);else s.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)s.deleteFramebuffer(x.__webglFramebuffer[j]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=T.textures;for(let j=0,Q=O.length;j<Q;j++){const W=n.get(O[j]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(O[j])}n.remove(T)}let I=0;function F(){I=0}function B(){const T=I;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),I+=1,T}function q(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function G(T,x){const O=n.get(T);if(T.isVideoTexture&&zt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,T,x);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function k(T,x){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){$(O,T,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function Z(T,x){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){$(O,T,x);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function H(T,x){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Y(O,T,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}const tt={[wr]:s.REPEAT,[Gn]:s.CLAMP_TO_EDGE,[Ar]:s.MIRRORED_REPEAT},at={[tn]:s.NEAREST,[Kl]:s.NEAREST_MIPMAP_NEAREST,[$i]:s.NEAREST_MIPMAP_LINEAR,[rn]:s.LINEAR,[Fs]:s.LINEAR_MIPMAP_NEAREST,[Wn]:s.LINEAR_MIPMAP_LINEAR},lt={[tc]:s.NEVER,[oc]:s.ALWAYS,[ec]:s.LESS,[Ya]:s.LEQUAL,[nc]:s.EQUAL,[rc]:s.GEQUAL,[ic]:s.GREATER,[sc]:s.NOTEQUAL};function It(T,x){if(x.type===gn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===rn||x.magFilter===Fs||x.magFilter===$i||x.magFilter===Wn||x.minFilter===rn||x.minFilter===Fs||x.minFilter===$i||x.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,tt[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,tt[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,tt[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,at[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,at[x.minFilter]),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,lt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===tn||x.minFilter!==$i&&x.minFilter!==Wn||x.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ut(T,x){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",w));const j=x.source;let Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));const W=q(x);if(W!==T.__cacheKey){Q[W]===void 0&&(Q[W]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[W].usedTimes++;const wt=Q[T.__cacheKey];wt!==void 0&&(Q[T.__cacheKey].usedTimes--,wt.usedTimes===0&&S(x)),T.__cacheKey=W,T.__webglTexture=Q[W].texture}return O}function Vt(T,x,O){return Math.floor(Math.floor(T/O)/x)}function Nt(T,x,O,j){const W=T.updateRanges;if(W.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,O,j,x.data);else{W.sort((et,ft)=>et.start-ft.start);let wt=0;for(let et=1;et<W.length;et++){const ft=W[wt],Pt=W[et],St=ft.start+ft.count,pt=Vt(Pt.start,x.width,4),Ht=Vt(ft.start,x.width,4);Pt.start<=St+1&&pt===Ht&&Vt(Pt.start+Pt.count-1,x.width,4)===pt?ft.count=Math.max(ft.count,Pt.start+Pt.count-ft.start):(++wt,W[wt]=Pt)}W.length=wt+1;const ot=s.getParameter(s.UNPACK_ROW_LENGTH),yt=s.getParameter(s.UNPACK_SKIP_PIXELS),bt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let et=0,ft=W.length;et<ft;et++){const Pt=W[et],St=Math.floor(Pt.start/4),pt=Math.ceil(Pt.count/4),Ht=St%x.width,L=Math.floor(St/x.width),st=pt,ct=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ht),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),e.texSubImage2D(s.TEXTURE_2D,0,Ht,L,st,ct,O,j,x.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ot),s.pixelStorei(s.UNPACK_SKIP_PIXELS,yt),s.pixelStorei(s.UNPACK_SKIP_ROWS,bt)}}function $(T,x,O){let j=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=s.TEXTURE_3D);const Q=Ut(T,x),W=x.source;e.bindTexture(j,T.__webglTexture,s.TEXTURE0+O);const wt=n.get(W);if(W.version!==wt.__version||Q===!0){e.activeTexture(s.TEXTURE0+O);const ot=Kt.getPrimaries(Kt.workingColorSpace),yt=x.colorSpace===wn?null:Kt.getPrimaries(x.colorSpace),bt=x.colorSpace===wn||ot===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let et=_(x.image,!1,i.maxTextureSize);et=pe(x,et);const ft=r.convert(x.format,x.colorSpace),Pt=r.convert(x.type);let St=b(x.internalFormat,ft,Pt,x.colorSpace,x.isVideoTexture);It(j,x);let pt;const Ht=x.mipmaps,L=x.isVideoTexture!==!0,st=wt.__version===void 0||Q===!0,ct=W.dataReady,xt=R(x,et);if(x.isDepthTexture)St=v(x.format===ki,x.type),st&&(L?e.texStorage2D(s.TEXTURE_2D,1,St,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,St,et.width,et.height,0,ft,Pt,null));else if(x.isDataTexture)if(Ht.length>0){L&&st&&e.texStorage2D(s.TEXTURE_2D,xt,St,Ht[0].width,Ht[0].height);for(let nt=0,K=Ht.length;nt<K;nt++)pt=Ht[nt],L?ct&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,pt.width,pt.height,ft,Pt,pt.data):e.texImage2D(s.TEXTURE_2D,nt,St,pt.width,pt.height,0,ft,Pt,pt.data);x.generateMipmaps=!1}else L?(st&&e.texStorage2D(s.TEXTURE_2D,xt,St,et.width,et.height),ct&&Nt(x,et,ft,Pt)):e.texImage2D(s.TEXTURE_2D,0,St,et.width,et.height,0,ft,Pt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&st&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,St,Ht[0].width,Ht[0].height,et.depth);for(let nt=0,K=Ht.length;nt<K;nt++)if(pt=Ht[nt],x.format!==Qe)if(ft!==null)if(L){if(ct)if(x.layerUpdates.size>0){const Et=la(pt.width,pt.height,x.format,x.type);for(const Bt of x.layerUpdates){const ae=pt.data.subarray(Bt*Et/pt.data.BYTES_PER_ELEMENT,(Bt+1)*Et/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,Bt,pt.width,pt.height,1,ft,ae)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,pt.width,pt.height,et.depth,ft,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,St,pt.width,pt.height,et.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ct&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,pt.width,pt.height,et.depth,ft,Pt,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,St,pt.width,pt.height,et.depth,0,ft,Pt,pt.data)}else{L&&st&&e.texStorage2D(s.TEXTURE_2D,xt,St,Ht[0].width,Ht[0].height);for(let nt=0,K=Ht.length;nt<K;nt++)pt=Ht[nt],x.format!==Qe?ft!==null?L?ct&&e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,St,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ct&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,pt.width,pt.height,ft,Pt,pt.data):e.texImage2D(s.TEXTURE_2D,nt,St,pt.width,pt.height,0,ft,Pt,pt.data)}else if(x.isDataArrayTexture)if(L){if(st&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,St,et.width,et.height,et.depth),ct)if(x.layerUpdates.size>0){const nt=la(et.width,et.height,x.format,x.type);for(const K of x.layerUpdates){const Et=et.data.subarray(K*nt/et.data.BYTES_PER_ELEMENT,(K+1)*nt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,ft,Pt,Et)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ft,Pt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,et.width,et.height,et.depth,0,ft,Pt,et.data);else if(x.isData3DTexture)L?(st&&e.texStorage3D(s.TEXTURE_3D,xt,St,et.width,et.height,et.depth),ct&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ft,Pt,et.data)):e.texImage3D(s.TEXTURE_3D,0,St,et.width,et.height,et.depth,0,ft,Pt,et.data);else if(x.isFramebufferTexture){if(st)if(L)e.texStorage2D(s.TEXTURE_2D,xt,St,et.width,et.height);else{let nt=et.width,K=et.height;for(let Et=0;Et<xt;Et++)e.texImage2D(s.TEXTURE_2D,Et,St,nt,K,0,ft,Pt,null),nt>>=1,K>>=1}}else if(Ht.length>0){if(L&&st){const nt=le(Ht[0]);e.texStorage2D(s.TEXTURE_2D,xt,St,nt.width,nt.height)}for(let nt=0,K=Ht.length;nt<K;nt++)pt=Ht[nt],L?ct&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,ft,Pt,pt):e.texImage2D(s.TEXTURE_2D,nt,St,ft,Pt,pt);x.generateMipmaps=!1}else if(L){if(st){const nt=le(et);e.texStorage2D(s.TEXTURE_2D,xt,St,nt.width,nt.height)}ct&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,Pt,et)}else e.texImage2D(s.TEXTURE_2D,0,St,ft,Pt,et);m(x)&&f(j),wt.__version=W.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Y(T,x,O){if(x.image.length!==6)return;const j=Ut(T,x),Q=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+O);const W=n.get(Q);if(Q.version!==W.__version||j===!0){e.activeTexture(s.TEXTURE0+O);const wt=Kt.getPrimaries(Kt.workingColorSpace),ot=x.colorSpace===wn?null:Kt.getPrimaries(x.colorSpace),yt=x.colorSpace===wn||wt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const bt=x.isCompressedTexture||x.image[0].isCompressedTexture,et=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!bt&&!et?ft[K]=_(x.image[K],!0,i.maxCubemapSize):ft[K]=et?x.image[K].image:x.image[K],ft[K]=pe(x,ft[K]);const Pt=ft[0],St=r.convert(x.format,x.colorSpace),pt=r.convert(x.type),Ht=b(x.internalFormat,St,pt,x.colorSpace),L=x.isVideoTexture!==!0,st=W.__version===void 0||j===!0,ct=Q.dataReady;let xt=R(x,Pt);It(s.TEXTURE_CUBE_MAP,x);let nt;if(bt){L&&st&&e.texStorage2D(s.TEXTURE_CUBE_MAP,xt,Ht,Pt.width,Pt.height);for(let K=0;K<6;K++){nt=ft[K].mipmaps;for(let Et=0;Et<nt.length;Et++){const Bt=nt[Et];x.format!==Qe?St!==null?L?ct&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et,0,0,Bt.width,Bt.height,St,Bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et,Ht,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et,0,0,Bt.width,Bt.height,St,pt,Bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et,Ht,Bt.width,Bt.height,0,St,pt,Bt.data)}}}else{if(nt=x.mipmaps,L&&st){nt.length>0&&xt++;const K=le(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,xt,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(et){L?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,St,pt,ft[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,ft[K].width,ft[K].height,0,St,pt,ft[K].data);for(let Et=0;Et<nt.length;Et++){const ae=nt[Et].image[K].image;L?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et+1,0,0,ae.width,ae.height,St,pt,ae.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et+1,Ht,ae.width,ae.height,0,St,pt,ae.data)}}else{L?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,St,pt,ft[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,St,pt,ft[K]);for(let Et=0;Et<nt.length;Et++){const Bt=nt[Et];L?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et+1,0,0,St,pt,Bt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et+1,Ht,St,pt,Bt.image[K])}}}m(x)&&f(s.TEXTURE_CUBE_MAP),W.__version=Q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function rt(T,x,O,j,Q,W){const wt=r.convert(O.format,O.colorSpace),ot=r.convert(O.type),yt=b(O.internalFormat,wt,ot,O.colorSpace),bt=n.get(x),et=n.get(O);if(et.__renderTarget=x,!bt.__hasExternalTextures){const ft=Math.max(1,x.width>>W),Pt=Math.max(1,x.height>>W);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,W,yt,ft,Pt,x.depth,0,wt,ot,null):e.texImage2D(Q,W,yt,ft,Pt,0,wt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),Mt(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Q,et.__webglTexture,0,Qt(x)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Q,et.__webglTexture,W),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(T,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer){const j=x.depthTexture,Q=j&&j.isDepthTexture?j.type:null,W=v(x.stencilBuffer,Q),wt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=Qt(x);Mt(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,W,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,W,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,W,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,T)}else{const j=x.textures;for(let Q=0;Q<j.length;Q++){const W=j[Q],wt=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),yt=b(W.internalFormat,wt,ot,W.colorSpace),bt=Qt(x);O&&Mt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,yt,x.width,x.height):Mt(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt,yt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,yt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ht(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);const Q=j.__webglTexture,W=Qt(x);if(x.depthTexture.format===Hi)Mt(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(x.depthTexture.format===ki)Mt(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Tt(T){const x=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=j}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const j=T.texture.mipmaps;j&&j.length>0?ht(x.__webglFramebuffer[0],T):ht(x.__webglFramebuffer,T)}else if(O){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=s.createRenderbuffer(),ut(x.__webglDepthbuffer[j],T,!1);else{const Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,W)}}else{const j=T.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),ut(x.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,W)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function re(T,x,O){const j=n.get(T);x!==void 0&&rt(j.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Tt(T)}function C(T){const x=T.texture,O=n.get(T),j=n.get(x);T.addEventListener("dispose",P);const Q=T.textures,W=T.isWebGLCubeRenderTarget===!0,wt=Q.length>1;if(wt||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=x.version,o.memory.textures++),W){O.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ot]=[];for(let yt=0;yt<x.mipmaps.length;yt++)O.__webglFramebuffer[ot][yt]=s.createFramebuffer()}else O.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)O.__webglFramebuffer[ot]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(wt)for(let ot=0,yt=Q.length;ot<yt;ot++){const bt=n.get(Q[ot]);bt.__webglTexture===void 0&&(bt.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&Mt(T)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){const yt=Q[ot];O.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ot]);const bt=r.convert(yt.format,yt.colorSpace),et=r.convert(yt.type),ft=b(yt.internalFormat,bt,et,yt.colorSpace,T.isXRRenderTarget===!0),Pt=Qt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,ft,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,O.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ut(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),It(s.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let yt=0;yt<x.mipmaps.length;yt++)rt(O.__webglFramebuffer[ot][yt],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,yt);else rt(O.__webglFramebuffer[ot],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ot=0,yt=Q.length;ot<yt;ot++){const bt=Q[ot],et=n.get(bt);let ft=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,et.__webglTexture),It(ft,bt),rt(O.__webglFramebuffer,T,bt,s.COLOR_ATTACHMENT0+ot,ft,0),m(bt)&&f(ft)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,j.__webglTexture),It(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let yt=0;yt<x.mipmaps.length;yt++)rt(O.__webglFramebuffer[yt],T,x,s.COLOR_ATTACHMENT0,ot,yt);else rt(O.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,ot,0);m(x)&&f(ot),e.unbindTexture()}T.depthBuffer&&Tt(T)}function Zt(T){const x=T.textures;for(let O=0,j=x.length;O<j;O++){const Q=x[O];if(m(Q)){const W=E(T),wt=n.get(Q).__webglTexture;e.bindTexture(W,wt),f(W),e.unbindTexture()}}}const Ot=[],Dt=[];function gt(T){if(T.samples>0){if(Mt(T)===!1){const x=T.textures,O=T.width,j=T.height;let Q=s.COLOR_BUFFER_BIT;const W=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(T),ot=x.length>1;if(ot)for(let bt=0;bt<x.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const yt=T.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let bt=0;bt<x.length;bt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[bt]);const et=n.get(x[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,O,j,0,0,O,j,Q,s.NEAREST),l===!0&&(Ot.length=0,Dt.length=0,Ot.push(s.COLOR_ATTACHMENT0+bt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ot.push(W),Dt.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Dt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let bt=0;bt<x.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,wt.__webglColorRenderbuffer[bt]);const et=n.get(x[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,et,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Qt(T){return Math.min(i.maxSamples,T.samples)}function Mt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function zt(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function pe(T,x){const O=T.colorSpace,j=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Si&&O!==wn&&(Kt.getTransfer(O)===ne?(j!==Qe||Q!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function le(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=k,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=re,this.setupRenderTarget=C,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Mt}function Hp(s,t){function e(n,i=wn){let r;const o=Kt.getTransfer(i);if(n===an)return s.UNSIGNED_BYTE;if(n===ao)return s.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Va)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ha)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ba)return s.BYTE;if(n===za)return s.SHORT;if(n===zi)return s.UNSIGNED_SHORT;if(n===oo)return s.INT;if(n===qn)return s.UNSIGNED_INT;if(n===gn)return s.FLOAT;if(n===Xi)return s.HALF_FLOAT;if(n===ka)return s.ALPHA;if(n===Ga)return s.RGB;if(n===Qe)return s.RGBA;if(n===Hi)return s.DEPTH_COMPONENT;if(n===ki)return s.DEPTH_STENCIL;if(n===Wa)return s.RED;if(n===co)return s.RED_INTEGER;if(n===Xa)return s.RG;if(n===ho)return s.RG_INTEGER;if(n===uo)return s.RGBA_INTEGER;if(n===ys||n===Ss||n===Es||n===bs)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rr||n===Cr||n===Pr||n===Ir)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ir)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dr||n===Lr||n===Ur)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dr||n===Lr)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ur)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nr||n===Fr||n===Or||n===Br||n===zr||n===Vr||n===Hr||n===kr||n===Gr||n===Wr||n===Xr||n===qr||n===Yr||n===jr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Or)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Br)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$r||n===Kr||n===Zr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===$r)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jr||n===Qr||n===to||n===eo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const kp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new rl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pn({vertexShader:kp,fragmentShader:Gp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new X(new Ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xp extends $n{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Wp,f={},E=e.getContextAttributes();let b=null,v=null;const R=[],w=[],P=new At;let D=null;const S=new He;S.viewport=new se;const M=new He;M.viewport=new se;const I=[S,M],F=new lh;let B=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Y=R[$];return Y===void 0&&(Y=new ir,R[$]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function($){let Y=R[$];return Y===void 0&&(Y=new ir,R[$]=Y),Y.getGripSpace()},this.getHand=function($){let Y=R[$];return Y===void 0&&(Y=new ir,R[$]=Y),Y.getHandSpace()};function G($){const Y=w.indexOf($.inputSource);if(Y===-1)return;const rt=R[Y];rt!==void 0&&(rt.update($.inputSource,$.frame,c||o),rt.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",Z);for(let $=0;$<R.length;$++){const Y=w[$];Y!==null&&(w[$]=null,R[$].disconnect(Y))}B=null,q=null,m.reset();for(const $ in f)delete f[$];t.setRenderTarget(b),p=null,d=null,u=null,i=null,v=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",k),i.addEventListener("inputsourceschange",Z),E.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,ut=null,ht=null;E.depth&&(ht=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=E.stencil?ki:Hi,ut=E.stencil?Vi:qn);const Tt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Tt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new jn(d.textureWidth,d.textureHeight,{format:Qe,type:an,depthTexture:new sl(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const rt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new jn(p.framebufferWidth,p.framebufferHeight,{format:Qe,type:an,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Nt.setContext(i),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z($){for(let Y=0;Y<$.removed.length;Y++){const rt=$.removed[Y],ut=w.indexOf(rt);ut>=0&&(w[ut]=null,R[ut].disconnect(rt))}for(let Y=0;Y<$.added.length;Y++){const rt=$.added[Y];let ut=w.indexOf(rt);if(ut===-1){for(let Tt=0;Tt<R.length;Tt++)if(Tt>=w.length){w.push(rt),ut=Tt;break}else if(w[Tt]===null){w[Tt]=rt,ut=Tt;break}if(ut===-1)break}const ht=R[ut];ht&&ht.connect(rt)}}const H=new A,tt=new A;function at($,Y,rt){H.setFromMatrixPosition(Y.matrixWorld),tt.setFromMatrixPosition(rt.matrixWorld);const ut=H.distanceTo(tt),ht=Y.projectionMatrix.elements,Tt=rt.projectionMatrix.elements,re=ht[14]/(ht[10]-1),C=ht[14]/(ht[10]+1),Zt=(ht[9]+1)/ht[5],Ot=(ht[9]-1)/ht[5],Dt=(ht[8]-1)/ht[0],gt=(Tt[8]+1)/Tt[0],Qt=re*Dt,Mt=re*gt,zt=ut/(-Dt+gt),pe=zt*-Dt;if(Y.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(pe),$.translateZ(zt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ht[10]===-1)$.projectionMatrix.copy(Y.projectionMatrix),$.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const le=re+zt,T=C+zt,x=Qt-pe,O=Mt+(ut-pe),j=Zt*C/T*le,Q=Ot*C/T*le;$.projectionMatrix.makePerspective(x,O,j,Q,le,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function lt($,Y){Y===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Y.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let Y=$.near,rt=$.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),F.near=M.near=S.near=Y,F.far=M.far=S.far=rt,(B!==F.near||q!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,q=F.far),F.layers.mask=$.layers.mask|6,S.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;const ut=$.parent,ht=F.cameras;lt(F,ut);for(let Tt=0;Tt<ht.length;Tt++)lt(ht[Tt],ut);ht.length===2?at(F,S,M):F.projectionMatrix.copy(S.projectionMatrix),It($,F,ut)};function It($,Y,rt){rt===null?$.matrix.copy(Y.matrixWorld):($.matrix.copy(rt.matrixWorld),$.matrix.invert(),$.matrix.multiply(Y.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Y.projectionMatrix),$.projectionMatrixInverse.copy(Y.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Gi*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function($){return f[$]};let Ut=null;function Vt($,Y){if(h=Y.getViewerPose(c||o),g=Y,h!==null){const rt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let ut=!1;rt.length!==F.cameras.length&&(F.cameras.length=0,ut=!0);for(let C=0;C<rt.length;C++){const Zt=rt[C];let Ot=null;if(p!==null)Ot=p.getViewport(Zt);else{const gt=u.getViewSubImage(d,Zt);Ot=gt.viewport,C===0&&(t.setRenderTargetTextures(v,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(v))}let Dt=I[C];Dt===void 0&&(Dt=new He,Dt.layers.enable(C),Dt.viewport=new se,I[C]=Dt),Dt.matrix.fromArray(Zt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Zt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),C===0&&(F.matrix.copy(Dt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ut===!0&&F.cameras.push(Dt)}const ht=i.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const C=u.getDepthInformation(rt[0]);C&&C.isValid&&C.texture&&m.init(C,i.renderState)}if(ht&&ht.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let C=0;C<rt.length;C++){const Zt=rt[C].camera;if(Zt){let Ot=f[Zt];Ot||(Ot=new rl,f[Zt]=Ot);const Dt=u.getCameraImage(Zt);Ot.sourceTexture=Dt}}}}for(let rt=0;rt<R.length;rt++){const ut=w[rt],ht=R[rt];ut!==null&&ht!==void 0&&ht.update(ut,Y,c||o)}Ut&&Ut($,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const Nt=new ll;Nt.setAnimationLoop(Vt),this.setAnimationLoop=function($){Ut=$},this.dispose=function(){}}}const Bn=new ln,qp=new fe;function Yp(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Qa(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,E,b,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ue&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ue&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=t.get(f),b=E.envMap,v=E.envMapRotation;b&&(m.envMap.value=b,Bn.copy(v),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),m.envMapRotation.value.setFromMatrix4(qp.makeRotationFromEuler(Bn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ue&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jp(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const v=b.program;n.uniformBlockBinding(E,v)}function c(E,b){let v=i[E.id];v===void 0&&(g(E),v=h(E),i[E.id]=v,E.addEventListener("dispose",m));const R=b.program;n.updateUBOMapping(E,R);const w=t.render.frame;r[E.id]!==w&&(d(E),r[E.id]=w)}function h(E){const b=u();E.__bindingPointIndex=b;const v=s.createBuffer(),R=E.__size,w=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,R,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=i[E.id],v=E.uniforms,R=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let w=0,P=v.length;w<P;w++){const D=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,M=D.length;S<M;S++){const I=D[S];if(p(I,w,S,R)===!0){const F=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let q=0;for(let G=0;G<B.length;G++){const k=B[G],Z=_(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,F+q,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(E,b,v,R){const w=E.value,P=b+"_"+v;if(R[P]===void 0)return typeof w=="number"||typeof w=="boolean"?R[P]=w:R[P]=w.clone(),!0;{const D=R[P];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return R[P]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(E){const b=E.uniforms;let v=0;const R=16;for(let P=0,D=b.length;P<D;P++){const S=Array.isArray(b[P])?b[P]:[b[P]];for(let M=0,I=S.length;M<I;M++){const F=S[M],B=Array.isArray(F.value)?F.value:[F.value];for(let q=0,G=B.length;q<G;q++){const k=B[q],Z=_(k),H=v%R,tt=H%Z.boundary,at=H+tt;v+=tt,at!==0&&R-at<Z.storage&&(v+=R-at),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=Z.storage}}}const w=v%R;return w>0&&(v+=R-w),E.__size=v,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function f(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class $p{constructor(t={}){const{canvas:e=Ec(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let R=!1;this._outputColorSpace=qe;let w=0,P=0,D=null,S=-1,M=null;const I=new se,F=new se;let B=null;const q=new qt(0);let G=0,k=e.width,Z=e.height,H=1,tt=null,at=null;const lt=new se(0,0,k,Z),It=new se(0,0,k,Z);let Ut=!1;const Vt=new xo;let Nt=!1,$=!1;const Y=new fe,rt=new A,ut=new se,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function re(){return D===null?H:1}let C=n;function Zt(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ro}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),C===null){const U="webgl2";if(C=Zt(U,y),C===null)throw Zt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ot,Dt,gt,Qt,Mt,zt,pe,le,T,x,O,j,Q,W,wt,ot,yt,bt,et,ft,Pt,St,pt,Ht;function L(){Ot=new rf(C),Ot.init(),St=new Hp(C,Ot),Dt=new Zd(C,Ot,t,St),gt=new zp(C,Ot),Dt.reversedDepthBuffer&&d&&gt.buffers.depth.setReversed(!0),Qt=new lf(C),Mt=new wp,zt=new Vp(C,Ot,gt,Mt,Dt,St,Qt),pe=new Qd(v),le=new sf(v),T=new fh(C),pt=new $d(C,T),x=new of(C,T,Qt,pt),O=new hf(C,x,T,Qt),et=new cf(C,Dt,zt),ot=new Jd(Mt),j=new Tp(v,pe,le,Ot,Dt,pt,ot),Q=new Yp(v,Mt),W=new Rp,wt=new Up(Ot),bt=new jd(v,pe,le,gt,O,p,l),yt=new Op(v,O,Dt),Ht=new jp(C,Qt,Dt,gt),ft=new Kd(C,Ot,Qt),Pt=new af(C,Ot,Qt),Qt.programs=j.programs,v.capabilities=Dt,v.extensions=Ot,v.properties=Mt,v.renderLists=W,v.shadowMap=yt,v.state=gt,v.info=Qt}L();const st=new Xp(v,C);this.xr=st,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=Ot.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ot.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(k,Z,!1))},this.getSize=function(y){return y.set(k,Z)},this.setSize=function(y,U,z=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=y,Z=U,e.width=Math.floor(y*H),e.height=Math.floor(U*H),z===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(k*H,Z*H).floor()},this.setDrawingBufferSize=function(y,U,z){k=y,Z=U,H=z,e.width=Math.floor(y*z),e.height=Math.floor(U*z),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(lt)},this.setViewport=function(y,U,z,V){y.isVector4?lt.set(y.x,y.y,y.z,y.w):lt.set(y,U,z,V),gt.viewport(I.copy(lt).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(It)},this.setScissor=function(y,U,z,V){y.isVector4?It.set(y.x,y.y,y.z,y.w):It.set(y,U,z,V),gt.scissor(F.copy(It).multiplyScalar(H).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(y){gt.setScissorTest(Ut=y)},this.setOpaqueSort=function(y){tt=y},this.setTransparentSort=function(y){at=y},this.getClearColor=function(y){return y.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,z=!0){let V=0;if(y){let N=!1;if(D!==null){const it=D.texture.format;N=it===uo||it===ho||it===co}if(N){const it=D.texture.type,mt=it===an||it===qn||it===zi||it===Vi||it===ao||it===lo,vt=bt.getClearColor(),_t=bt.getClearAlpha(),Lt=vt.r,Ft=vt.g,Rt=vt.b;mt?(g[0]=Lt,g[1]=Ft,g[2]=Rt,g[3]=_t,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Lt,_[1]=Ft,_[2]=Rt,_[3]=_t,C.clearBufferiv(C.COLOR,0,_))}else V|=C.COLOR_BUFFER_BIT}U&&(V|=C.DEPTH_BUFFER_BIT),z&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),bt.dispose(),W.dispose(),wt.dispose(),Mt.dispose(),pe.dispose(),le.dispose(),O.dispose(),pt.dispose(),Ht.dispose(),j.dispose(),st.dispose(),st.removeEventListener("sessionstart",nn),st.removeEventListener("sessionend",bo),In.stop()};function ct(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=Qt.autoReset,U=yt.enabled,z=yt.autoUpdate,V=yt.needsUpdate,N=yt.type;L(),Qt.autoReset=y,yt.enabled=U,yt.autoUpdate=z,yt.needsUpdate=V,yt.type=N}function nt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function K(y){const U=y.target;U.removeEventListener("dispose",K),Et(U)}function Et(y){Bt(y),Mt.remove(y)}function Bt(y){const U=Mt.get(y).programs;U!==void 0&&(U.forEach(function(z){j.releaseProgram(z)}),y.isShaderMaterial&&j.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,z,V,N,it){U===null&&(U=ht);const mt=N.isMesh&&N.matrixWorld.determinant()<0,vt=pl(y,U,z,V,N);gt.setMaterial(V,mt);let _t=z.index,Lt=1;if(V.wireframe===!0){if(_t=x.getWireframeAttribute(z),_t===void 0)return;Lt=2}const Ft=z.drawRange,Rt=z.attributes.position;let Xt=Ft.start*Lt,ee=(Ft.start+Ft.count)*Lt;it!==null&&(Xt=Math.max(Xt,it.start*Lt),ee=Math.min(ee,(it.start+it.count)*Lt)),_t!==null?(Xt=Math.max(Xt,0),ee=Math.min(ee,_t.count)):Rt!=null&&(Xt=Math.max(Xt,0),ee=Math.min(ee,Rt.count));const _e=ee-Xt;if(_e<0||_e===1/0)return;pt.setup(N,V,vt,z,_t);let ce,oe=ft;if(_t!==null&&(ce=T.get(_t),oe=Pt,oe.setIndex(ce)),N.isMesh)V.wireframe===!0?(gt.setLineWidth(V.wireframeLinewidth*re()),oe.setMode(C.LINES)):oe.setMode(C.TRIANGLES);else if(N.isLine){let Ct=V.linewidth;Ct===void 0&&(Ct=1),gt.setLineWidth(Ct*re()),N.isLineSegments?oe.setMode(C.LINES):N.isLineLoop?oe.setMode(C.LINE_LOOP):oe.setMode(C.LINE_STRIP)}else N.isPoints?oe.setMode(C.POINTS):N.isSprite&&oe.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Wi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))oe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ct=N._multiDrawStarts,me=N._multiDrawCounts,$t=N._multiDrawCount,Fe=_t?T.get(_t).bytesPerElement:1,Kn=Mt.get(V).currentProgram.getUniforms();for(let Oe=0;Oe<$t;Oe++)Kn.setValue(C,"_gl_DrawID",Oe),oe.render(Ct[Oe]/Fe,me[Oe])}else if(N.isInstancedMesh)oe.renderInstances(Xt,_e,N.count);else if(z.isInstancedBufferGeometry){const Ct=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,me=Math.min(z.instanceCount,Ct);oe.renderInstances(Xt,_e,me)}else oe.render(Xt,_e)};function ae(y,U,z){y.transparent===!0&&y.side===xe&&y.forceSinglePass===!1?(y.side=Ue,y.needsUpdate=!0,ji(y,U,z),y.side=Cn,y.needsUpdate=!0,ji(y,U,z),y.side=xe):ji(y,U,z)}this.compile=function(y,U,z=null){z===null&&(z=y),f=wt.get(z),f.init(U),b.push(f),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),y!==z&&y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const V=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const it=N.material;if(it)if(Array.isArray(it))for(let mt=0;mt<it.length;mt++){const vt=it[mt];ae(vt,z,N),V.add(vt)}else ae(it,z,N),V.add(it)}),f=b.pop(),V},this.compileAsync=function(y,U,z=null){const V=this.compile(y,U,z);return new Promise(N=>{function it(){if(V.forEach(function(mt){Mt.get(mt).currentProgram.isReady()&&V.delete(mt)}),V.size===0){N(y);return}setTimeout(it,10)}Ot.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Jt=null;function cn(y){Jt&&Jt(y)}function nn(){In.stop()}function bo(){In.start()}const In=new ll;In.setAnimationLoop(cn),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(y){Jt=y,st.setAnimationLoop(y),y===null?In.stop():In.start()},st.addEventListener("sessionstart",nn),st.addEventListener("sessionend",bo),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,U,D),f=wt.get(y,b.length),f.init(U),b.push(f),Y.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Vt.setFromProjectionMatrix(Y,on,U.reversedDepth),$=this.localClippingEnabled,Nt=ot.init(this.clippingPlanes,$),m=W.get(y,E.length),m.init(),E.push(m),st.enabled===!0&&st.isPresenting===!0){const it=v.xr.getDepthSensingMesh();it!==null&&Us(it,U,-1/0,v.sortObjects)}Us(y,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(tt,at),Tt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Tt&&bt.addToRenderList(m,y),this.info.render.frame++,Nt===!0&&ot.beginShadows();const z=f.state.shadowsArray;yt.render(z,y,U),Nt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const it=U.cameras;if(N.length>0)for(let mt=0,vt=it.length;mt<vt;mt++){const _t=it[mt];wo(V,N,y,_t)}Tt&&bt.render(y);for(let mt=0,vt=it.length;mt<vt;mt++){const _t=it[mt];To(m,y,_t,_t.viewport)}}else N.length>0&&wo(V,N,y,U),Tt&&bt.render(y),To(m,y,U);D!==null&&P===0&&(zt.updateMultisampleRenderTarget(D),zt.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(v,y,U),pt.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(f=b[b.length-1],Nt===!0&&ot.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Us(y,U,z,V){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Vt.intersectsSprite(y)){V&&ut.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Y);const mt=O.update(y),vt=y.material;vt.visible&&m.push(y,mt,vt,z,ut.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Vt.intersectsObject(y))){const mt=O.update(y),vt=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ut.copy(y.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),ut.copy(mt.boundingSphere.center)),ut.applyMatrix4(y.matrixWorld).applyMatrix4(Y)),Array.isArray(vt)){const _t=mt.groups;for(let Lt=0,Ft=_t.length;Lt<Ft;Lt++){const Rt=_t[Lt],Xt=vt[Rt.materialIndex];Xt&&Xt.visible&&m.push(y,mt,Xt,z,ut.z,Rt)}}else vt.visible&&m.push(y,mt,vt,z,ut.z,null)}}const it=y.children;for(let mt=0,vt=it.length;mt<vt;mt++)Us(it[mt],U,z,V)}function To(y,U,z,V){const N=y.opaque,it=y.transmissive,mt=y.transparent;f.setupLightsView(z),Nt===!0&&ot.setGlobalState(v.clippingPlanes,z),V&&gt.viewport(I.copy(V)),N.length>0&&Yi(N,U,z),it.length>0&&Yi(it,U,z),mt.length>0&&Yi(mt,U,z),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function wo(y,U,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new jn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Xi:an,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const it=f.state.transmissionRenderTarget[V.id],mt=V.viewport||I;it.setSize(mt.z*v.transmissionResolutionScale,mt.w*v.transmissionResolutionScale);const vt=v.getRenderTarget(),_t=v.getActiveCubeFace(),Lt=v.getActiveMipmapLevel();v.setRenderTarget(it),v.getClearColor(q),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Tt&&bt.render(z);const Ft=v.toneMapping;v.toneMapping=Rn;const Rt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),Nt===!0&&ot.setGlobalState(v.clippingPlanes,V),Yi(y,z,V),zt.updateMultisampleRenderTarget(it),zt.updateRenderTargetMipmap(it),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ee=0,_e=U.length;ee<_e;ee++){const ce=U[ee],oe=ce.object,Ct=ce.geometry,me=ce.material,$t=ce.group;if(me.side===xe&&oe.layers.test(V.layers)){const Fe=me.side;me.side=Ue,me.needsUpdate=!0,Ao(oe,z,V,Ct,me,$t),me.side=Fe,me.needsUpdate=!0,Xt=!0}}Xt===!0&&(zt.updateMultisampleRenderTarget(it),zt.updateRenderTargetMipmap(it))}v.setRenderTarget(vt,_t,Lt),v.setClearColor(q,G),Rt!==void 0&&(V.viewport=Rt),v.toneMapping=Ft}function Yi(y,U,z){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,it=y.length;N<it;N++){const mt=y[N],vt=mt.object,_t=mt.geometry,Lt=mt.group;let Ft=mt.material;Ft.allowOverride===!0&&V!==null&&(Ft=V),vt.layers.test(z.layers)&&Ao(vt,U,z,_t,Ft,Lt)}}function Ao(y,U,z,V,N,it){y.onBeforeRender(v,U,z,V,N,it),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(v,U,z,V,y,it),N.transparent===!0&&N.side===xe&&N.forceSinglePass===!1?(N.side=Ue,N.needsUpdate=!0,v.renderBufferDirect(z,U,V,N,y,it),N.side=Cn,N.needsUpdate=!0,v.renderBufferDirect(z,U,V,N,y,it),N.side=xe):v.renderBufferDirect(z,U,V,N,y,it),y.onAfterRender(v,U,z,V,N,it)}function ji(y,U,z){U.isScene!==!0&&(U=ht);const V=Mt.get(y),N=f.state.lights,it=f.state.shadowsArray,mt=N.state.version,vt=j.getParameters(y,N.state,it,U,z),_t=j.getProgramCacheKey(vt);let Lt=V.programs;V.environment=y.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(y.isMeshStandardMaterial?le:pe).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Lt===void 0&&(y.addEventListener("dispose",K),Lt=new Map,V.programs=Lt);let Ft=Lt.get(_t);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===mt)return Co(y,vt),Ft}else vt.uniforms=j.getUniforms(y),y.onBeforeCompile(vt,v),Ft=j.acquireProgram(vt,_t),Lt.set(_t,Ft),V.uniforms=vt.uniforms;const Rt=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Rt.clippingPlanes=ot.uniform),Co(y,vt),V.needsLights=gl(y),V.lightsStateVersion=mt,V.needsLights&&(Rt.ambientLightColor.value=N.state.ambient,Rt.lightProbe.value=N.state.probe,Rt.directionalLights.value=N.state.directional,Rt.directionalLightShadows.value=N.state.directionalShadow,Rt.spotLights.value=N.state.spot,Rt.spotLightShadows.value=N.state.spotShadow,Rt.rectAreaLights.value=N.state.rectArea,Rt.ltc_1.value=N.state.rectAreaLTC1,Rt.ltc_2.value=N.state.rectAreaLTC2,Rt.pointLights.value=N.state.point,Rt.pointLightShadows.value=N.state.pointShadow,Rt.hemisphereLights.value=N.state.hemi,Rt.directionalShadowMap.value=N.state.directionalShadowMap,Rt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Rt.spotShadowMap.value=N.state.spotShadowMap,Rt.spotLightMatrix.value=N.state.spotLightMatrix,Rt.spotLightMap.value=N.state.spotLightMap,Rt.pointShadowMap.value=N.state.pointShadowMap,Rt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function Ro(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Ts.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Co(y,U){const z=Mt.get(y);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function pl(y,U,z,V,N){U.isScene!==!0&&(U=ht),zt.resetTextureUnits();const it=U.fog,mt=V.isMeshStandardMaterial?U.environment:null,vt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Si,_t=(V.isMeshStandardMaterial?le:pe).get(V.envMap||mt),Lt=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ft=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Rt=!!z.morphAttributes.position,Xt=!!z.morphAttributes.normal,ee=!!z.morphAttributes.color;let _e=Rn;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(_e=v.toneMapping);const ce=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,oe=ce!==void 0?ce.length:0,Ct=Mt.get(V),me=f.state.lights;if(Nt===!0&&($===!0||y!==M)){const Re=y===M&&V.id===S;ot.setState(V,y,Re)}let $t=!1;V.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==me.state.version||Ct.outputColorSpace!==vt||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isBatchedMesh&&Ct.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ct.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==_t||V.fog===!0&&Ct.fog!==it||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==ot.numPlanes||Ct.numIntersection!==ot.numIntersection)||Ct.vertexAlphas!==Lt||Ct.vertexTangents!==Ft||Ct.morphTargets!==Rt||Ct.morphNormals!==Xt||Ct.morphColors!==ee||Ct.toneMapping!==_e||Ct.morphTargetsCount!==oe)&&($t=!0):($t=!0,Ct.__version=V.version);let Fe=Ct.currentProgram;$t===!0&&(Fe=ji(V,U,N));let Kn=!1,Oe=!1,wi=!1;const ge=Fe.getUniforms(),ke=Ct.uniforms;if(gt.useProgram(Fe.program)&&(Kn=!0,Oe=!0,wi=!0),V.id!==S&&(S=V.id,Oe=!0),Kn||M!==y){gt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ge.setValue(C,"projectionMatrix",y.projectionMatrix),ge.setValue(C,"viewMatrix",y.matrixWorldInverse);const De=ge.map.cameraPosition;De!==void 0&&De.setValue(C,rt.setFromMatrixPosition(y.matrixWorld)),Dt.logarithmicDepthBuffer&&ge.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ge.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Oe=!0,wi=!0)}if(N.isSkinnedMesh){ge.setOptional(C,N,"bindMatrix"),ge.setOptional(C,N,"bindMatrixInverse");const Re=N.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),ge.setValue(C,"boneTexture",Re.boneTexture,zt))}N.isBatchedMesh&&(ge.setOptional(C,N,"batchingTexture"),ge.setValue(C,"batchingTexture",N._matricesTexture,zt),ge.setOptional(C,N,"batchingIdTexture"),ge.setValue(C,"batchingIdTexture",N._indirectTexture,zt),ge.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&ge.setValue(C,"batchingColorTexture",N._colorsTexture,zt));const Ge=z.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&et.update(N,z,Fe),(Oe||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,ge.setValue(C,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ke.envMap.value=_t,ke.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(ke.envMapIntensity.value=U.environmentIntensity),Oe&&(ge.setValue(C,"toneMappingExposure",v.toneMappingExposure),Ct.needsLights&&ml(ke,wi),it&&V.fog===!0&&Q.refreshFogUniforms(ke,it),Q.refreshMaterialUniforms(ke,V,H,Z,f.state.transmissionRenderTarget[y.id]),Ts.upload(C,Ro(Ct),ke,zt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ts.upload(C,Ro(Ct),ke,zt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ge.setValue(C,"center",N.center),ge.setValue(C,"modelViewMatrix",N.modelViewMatrix),ge.setValue(C,"normalMatrix",N.normalMatrix),ge.setValue(C,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Re=V.uniformsGroups;for(let De=0,Ns=Re.length;De<Ns;De++){const Dn=Re[De];Ht.update(Dn,Fe),Ht.bind(Dn,Fe)}}return Fe}function ml(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function gl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,U,z){const V=Mt.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Mt.get(y.texture).__webglTexture=U,Mt.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const z=Mt.get(y);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const _l=C.createFramebuffer();this.setRenderTarget=function(y,U=0,z=0){D=y,w=U,P=z;let V=!0,N=null,it=!1,mt=!1;if(y){const _t=Mt.get(y);if(_t.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(_t.__webglFramebuffer===void 0)zt.setupRenderTarget(y);else if(_t.__hasExternalTextures)zt.rebindTextures(y,Mt.get(y.texture).__webglTexture,Mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Rt=y.depthTexture;if(_t.__boundDepthTexture!==Rt){if(Rt!==null&&Mt.has(Rt)&&(y.width!==Rt.image.width||y.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(y)}}const Lt=y.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(mt=!0);const Ft=Mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?N=Ft[U][z]:N=Ft[U],it=!0):y.samples>0&&zt.useMultisampledRTT(y)===!1?N=Mt.get(y).__webglMultisampledFramebuffer:Array.isArray(Ft)?N=Ft[z]:N=Ft,I.copy(y.viewport),F.copy(y.scissor),B=y.scissorTest}else I.copy(lt).multiplyScalar(H).floor(),F.copy(It).multiplyScalar(H).floor(),B=Ut;if(z!==0&&(N=_l),gt.bindFramebuffer(C.FRAMEBUFFER,N)&&V&&gt.drawBuffers(y,N),gt.viewport(I),gt.scissor(F),gt.setScissorTest(B),it){const _t=Mt.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,z)}else if(mt){const _t=U;for(let Lt=0;Lt<y.textures.length;Lt++){const Ft=Mt.get(y.textures[Lt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Lt,Ft.__webglTexture,z,_t)}}else if(y!==null&&z!==0){const _t=Mt.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_t.__webglTexture,z)}S=-1},this.readRenderTargetPixels=function(y,U,z,V,N,it,mt,vt=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&mt!==void 0&&(_t=_t[mt]),_t){gt.bindFramebuffer(C.FRAMEBUFFER,_t);try{const Lt=y.textures[vt],Ft=Lt.format,Rt=Lt.type;if(!Dt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-V&&z>=0&&z<=y.height-N&&(y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+vt),C.readPixels(U,z,V,N,St.convert(Ft),St.convert(Rt),it))}finally{const Lt=D!==null?Mt.get(D).__webglFramebuffer:null;gt.bindFramebuffer(C.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(y,U,z,V,N,it,mt,vt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&mt!==void 0&&(_t=_t[mt]),_t)if(U>=0&&U<=y.width-V&&z>=0&&z<=y.height-N){gt.bindFramebuffer(C.FRAMEBUFFER,_t);const Lt=y.textures[vt],Ft=Lt.format,Rt=Lt.type;if(!Dt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Xt),C.bufferData(C.PIXEL_PACK_BUFFER,it.byteLength,C.STREAM_READ),y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+vt),C.readPixels(U,z,V,N,St.convert(Ft),St.convert(Rt),0);const ee=D!==null?Mt.get(D).__webglFramebuffer:null;gt.bindFramebuffer(C.FRAMEBUFFER,ee);const _e=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await bc(C,_e,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Xt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,it),C.deleteBuffer(Xt),C.deleteSync(_e),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,z=0){const V=Math.pow(2,-z),N=Math.floor(y.image.width*V),it=Math.floor(y.image.height*V),mt=U!==null?U.x:0,vt=U!==null?U.y:0;zt.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,mt,vt,N,it),gt.unbindTexture()};const xl=C.createFramebuffer(),Ml=C.createFramebuffer();this.copyTextureToTexture=function(y,U,z=null,V=null,N=0,it=null){it===null&&(N!==0?(Wi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=N,N=0):it=0);let mt,vt,_t,Lt,Ft,Rt,Xt,ee,_e;const ce=y.isCompressedTexture?y.mipmaps[it]:y.image;if(z!==null)mt=z.max.x-z.min.x,vt=z.max.y-z.min.y,_t=z.isBox3?z.max.z-z.min.z:1,Lt=z.min.x,Ft=z.min.y,Rt=z.isBox3?z.min.z:0;else{const Ge=Math.pow(2,-N);mt=Math.floor(ce.width*Ge),vt=Math.floor(ce.height*Ge),y.isDataArrayTexture?_t=ce.depth:y.isData3DTexture?_t=Math.floor(ce.depth*Ge):_t=1,Lt=0,Ft=0,Rt=0}V!==null?(Xt=V.x,ee=V.y,_e=V.z):(Xt=0,ee=0,_e=0);const oe=St.convert(U.format),Ct=St.convert(U.type);let me;U.isData3DTexture?(zt.setTexture3D(U,0),me=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(zt.setTexture2DArray(U,0),me=C.TEXTURE_2D_ARRAY):(zt.setTexture2D(U,0),me=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const $t=C.getParameter(C.UNPACK_ROW_LENGTH),Fe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Kn=C.getParameter(C.UNPACK_SKIP_PIXELS),Oe=C.getParameter(C.UNPACK_SKIP_ROWS),wi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ce.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ce.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Lt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ft),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Rt);const ge=y.isDataArrayTexture||y.isData3DTexture,ke=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const Ge=Mt.get(y),Re=Mt.get(U),De=Mt.get(Ge.__renderTarget),Ns=Mt.get(Re.__renderTarget);gt.bindFramebuffer(C.READ_FRAMEBUFFER,De.__webglFramebuffer),gt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ns.__webglFramebuffer);for(let Dn=0;Dn<_t;Dn++)ge&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.get(y).__webglTexture,N,Rt+Dn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.get(U).__webglTexture,it,_e+Dn)),C.blitFramebuffer(Lt,Ft,mt,vt,Xt,ee,mt,vt,C.DEPTH_BUFFER_BIT,C.NEAREST);gt.bindFramebuffer(C.READ_FRAMEBUFFER,null),gt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||Mt.has(y)){const Ge=Mt.get(y),Re=Mt.get(U);gt.bindFramebuffer(C.READ_FRAMEBUFFER,xl),gt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ml);for(let De=0;De<_t;De++)ge?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ge.__webglTexture,N,Rt+De):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ge.__webglTexture,N),ke?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Re.__webglTexture,it,_e+De):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Re.__webglTexture,it),N!==0?C.blitFramebuffer(Lt,Ft,mt,vt,Xt,ee,mt,vt,C.COLOR_BUFFER_BIT,C.NEAREST):ke?C.copyTexSubImage3D(me,it,Xt,ee,_e+De,Lt,Ft,mt,vt):C.copyTexSubImage2D(me,it,Xt,ee,Lt,Ft,mt,vt);gt.bindFramebuffer(C.READ_FRAMEBUFFER,null),gt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ke?y.isDataTexture||y.isData3DTexture?C.texSubImage3D(me,it,Xt,ee,_e,mt,vt,_t,oe,Ct,ce.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(me,it,Xt,ee,_e,mt,vt,_t,oe,ce.data):C.texSubImage3D(me,it,Xt,ee,_e,mt,vt,_t,oe,Ct,ce):y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,it,Xt,ee,mt,vt,oe,Ct,ce.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,it,Xt,ee,ce.width,ce.height,oe,ce.data):C.texSubImage2D(C.TEXTURE_2D,it,Xt,ee,mt,vt,oe,Ct,ce);C.pixelStorei(C.UNPACK_ROW_LENGTH,$t),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Fe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Kn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Oe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,wi),it===0&&U.generateMipmaps&&C.generateMipmap(me),gt.unbindTexture()},this.initRenderTarget=function(y){Mt.get(y).__webglFramebuffer===void 0&&zt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?zt.setTextureCube(y,0):y.isData3DTexture?zt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?zt.setTexture2DArray(y,0):zt.setTexture2D(y,0),gt.unbindTexture()},this.resetState=function(){w=0,P=0,D=null,gt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}const La={type:"change"},Eo={type:"start"},fl={type:"end"},vs=new go,Ua=new Tn,Kp=Math.cos(70*ue.DEG2RAD),ve=new A,Le=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pr=1e-6;class Zp extends uh{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_i.ROTATE,MIDDLE:_i.DOLLY,RIGHT:_i.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Yn,this._lastTargetPosition=new A,this._quat=new Yn().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new aa,this._sphericalDelta=new aa,this._scale=1,this._panOffset=new A,this._rotateStart=new At,this._rotateEnd=new At,this._rotateDelta=new At,this._panStart=new At,this._panEnd=new At,this._panDelta=new At,this._dollyStart=new At,this._dollyEnd=new At,this._dollyDelta=new At,this._dollyDirection=new A,this._mouse=new At,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qp.bind(this),this._onPointerDown=Jp.bind(this),this._onPointerUp=tm.bind(this),this._onContextMenu=am.bind(this),this._onMouseWheel=im.bind(this),this._onKeyDown=sm.bind(this),this._onTouchStart=rm.bind(this),this._onTouchMove=om.bind(this),this._onMouseDown=em.bind(this),this._onMouseMove=nm.bind(this),this._interceptControlDown=lm.bind(this),this._interceptControlUp=cm.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(La),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;ve.copy(e).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Le:n>Math.PI&&(n-=Le),i<-Math.PI?i+=Le:i>Math.PI&&(i-=Le),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ve.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(vs.origin.copy(this.object.position),vs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vs.direction))<Kp?this.object.lookAt(this.target):(Ua.setFromNormalAndCoplanarPoint(this.object.up,this.target),vs.intersectPlane(Ua,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>pr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pr||this._lastTargetPosition.distanceToSquared(this.target)>pr?(this.dispatchEvent(La),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Le/60*this.autoRotateSpeed*t:Le/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ve.setFromMatrixColumn(e,0),ve.multiplyScalar(-t),this._panOffset.add(ve)}_panUp(t,e){this.screenSpacePanning===!0?ve.setFromMatrixColumn(e,1):(ve.setFromMatrixColumn(e,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(t),this._panOffset.add(ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;ve.copy(i).sub(this.target);let r=ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Le*this._rotateDelta.x/e.clientHeight),this._rotateUp(Le*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Le*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Le*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Le*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Le*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Le*this._rotateDelta.x/e.clientHeight),this._rotateUp(Le*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new At,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Jp(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Qp(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function tm(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fl),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function em(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case _i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ie.DOLLY;break;case _i.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ie.ROTATE}break;case _i.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Eo)}function nm(s){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function im(s){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(s.preventDefault(),this.dispatchEvent(Eo),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(fl))}function sm(s){this.enabled!==!1&&this._handleKeyDown(s)}function rm(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case mi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ie.TOUCH_ROTATE;break;case mi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ie.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Eo)}function om(s){switch(this._trackPointer(s),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ie.NONE}}function am(s){this.enabled!==!1&&s.preventDefault()}function lm(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cm(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const hm=["Aldric","Beren","Cedric","Darian","Edric","Faelan","Garron","Hadrian","Ivor","Jareth","Kellan","Leoric","Merrick","Niall","Orin","Perrin","Quint","Roderick","Stefan","Tavian","Ulric","Varyn","Wystan","Yorick","Alaric","Balin","Corwin","Derrin","Eldan","Fintan"],um=["Aelene","Brienne","Cerys","Delyth","Elowen","Fiora","Gwyneth","Helena","Isolde","Jaselle","Kaelin","Liora","Maela","Nerida","Ophelia","Perin","Quilla","Rowena","Seren","Tamsin","Una","Vesper","Wynn","Ysara","Arielle","Brynna","Celine","Daria","Eira","Ffion"];class dm{constructor(){this.scene=new $c,this.camera=new He(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new $p,this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.controls=new Zp(this.camera,this.renderer.domElement),this.clock=new ch,this.villagers=[],this.villagerById=new Map,this.obstacles=[],this.townCenterRadius=14,this.townCenterDropPoint=new A(0,0,0),this.resourceNodes={trees:[],bushes:[],stones:[],crops:[],seedPatches:[]},this.inventory={wood:0,stone:0,leaves:0,grain:0},this.nextVillagerId=1,this.namePools={male:[...hm],female:[...um]},this.professionRegistry=[{id:"gatherer",name:"Gatherer",description:"Harvests wood, stone, and wild greens to sustain the town."},{id:"laborer",name:"Laborer",description:"Stays near town ready to help with construction and future crafts."},{id:"forester",name:"Forester",description:"Replants felled groves and tends the woodland so lumber stores stay healthy."},{id:"farmer",name:"Farmer",description:"Plants and harvests wheat crops to feed the village."}],this.professionActions={laborer:{icon:"🔨",mode:"build",buttonClass:"laborer",menuTitle:"Build Menu"},forester:{icon:"🌲",mode:"plant",buttonClass:"forester",menuTitle:"Forestry Plantings"},farmer:{icon:"🌾",mode:"farm",buttonClass:"farmer",menuTitle:"Farming Actions"}},this.foresterPlantables=[{id:"oak-sapling",name:"Oak Sapling",description:"Replant a hearty oak that will mature into a dependable wood source.",icon:"🌱",scale:.9,capacity:64,minSpacing:4.2,growthDays:{min:1,max:3}}],this.farmerPlantables=[{id:"wheat-crop",name:"Wheat Plot",description:"Plant wheat seeds that will grow into golden grain for harvest.",icon:"🌾",scale:.5,capacity:16,minSpacing:1.8,growthDays:{min:3,max:4.5},requiresSeeds:!0,seedCost:1}],this.gameMinutes=480,this.totalElapsedMinutes=this.gameMinutes,this.lastClockMinute=-1,this.gameMinutesPerSecond=10,this.dayLengthMinutes=1440,this.timeMultiplier=1,this.currentDay=Math.floor(this.totalElapsedMinutes/this.dayLengthMinutes),this.clockDisplayElement=null,this.timeSpeedButtons=[],this.bonfireRequirements={wood:40,stone:20,nightlyFuel:8},this.bonfire={location:new A(0,0,this.townCenterRadius*.82),built:!1,building:!1,builder:null,structure:null,flameMaterial:null,emberMaterial:null,flameMesh:null,emberMesh:null,light:null,isLit:!1,lastLitDay:null,flickerPhase:Math.random()*Math.PI*2,baseLightIntensity:3.2,randomOffset:Math.random()*8},this.homes=[],this.homeRequirements={wood:70,stone:25},this.bedRequirements={wood:5,leaves:10},this.homeCounter=1,this.activeSocialInteractions=new Set,this.storehouse=null,this.storehouseRequirements={wood:120,stone:80,leaves:40},this.structureModalElement=null,this.structureModalVisible=!1,this.activeStructureContext=null,this.storehouseModalElement=null,this.storehouseModalVisible=!1,this.storehouseModalFields=null,this.cropTooltipVisible=!1,this.selectedCrop=null,this.actionHintElement=null,this.raycaster=new hh,this.pointer=new At,this.selectedVillager=null,this.modalVisible=!1,this.modalAnchor=null,this.activeProfessionActionMode=null,this.pendingPlanting=null,this.professionInstructionOverride=null,this.groundMesh=null,this.currentActionHint="",this.plantingPreview=null,this.pointerHoverPoint=null,this.treeGrowthAccumulator=0,this.activePlantingHint=null,this.modalGenderIcon=null,this.modalEnergyMeterFill=null,this.modalEnergyLabel=null,this.modalHungerMeterFill=null,this.modalHungerLabel=null,this.modalVitalityContainer=null,this.modalIntelligenceLabel=null,this.modalStrengthLabel=null,this.cropTooltipAnchor=null,this.cropTooltipCard=null,this._cropTooltipWorld=new A,this._cropTooltipProjected=new A,this.simulationPaused=!1,this.pausedBecausePlacement=!1,this.modalRestoreVillagerId=null,this.modalRestoreAnchor=null,this.modalRestoreView=null,this.activeModalView="main",this.initScene(),this.setupUI(),this.setupInteraction(),this.animate()}initScene(){const t=new ah(16777215,.6);this.scene.add(t);const e=new oh(16777215,.8);e.position.set(50,50,50),e.castShadow=!1,e.target.position.set(0,0,0),this.scene.add(e),this.scene.add(e.target),this.ambientLight=t,this.directionalLight=e,this.skyColor=new qt(856345),this.scene.background=this.skyColor,this.renderer.setClearColor(this.skyColor);const n=new Ve(100,100),i=new J({color:2263842}),r=new X(n,i);r.rotation.x=-Math.PI/2,this.scene.add(r),this.groundMesh=r;const{group:o,obstacles:a}=this.createVillageCenter();this.scene.add(o),this.obstacles.push(...a),this.addTrees(10),this.addBushes(15),this.addPonds(3),this.addStoneClusters(12),this.addWheatSeedPatches(8),this.spawnVillagers(10),this.camera.position.set(0,20,20),this.camera.lookAt(0,0,0)}setupUI(){var e,n,i,r,o,a,l,c,h,u,d,p,g,_;const t=document.getElementById("resource-panel");t?this.resourceLabels={wood:t.querySelector('[data-resource="wood"] .value'),stone:t.querySelector('[data-resource="stone"] .value'),leaves:t.querySelector('[data-resource="leaves"] .value'),grain:t.querySelector('[data-resource="grain"] .value')}:this.resourceLabels={},this.updateResourceDisplay(),this.modalElement=document.getElementById("villager-modal"),this.structureModalElement=document.getElementById("structure-modal"),this.cropTooltipElement=document.getElementById("crop-tooltip"),this.cropTooltipCard=((e=this.cropTooltipElement)==null?void 0:e.querySelector(".card"))||null,this.storehouseModalElement=document.getElementById("storehouse-modal"),this.cropTooltipTitle=(n=this.cropTooltipElement)==null?void 0:n.querySelector('[data-field="crop-title"]'),this.cropTooltipStatus=(i=this.cropTooltipElement)==null?void 0:i.querySelector('[data-field="crop-status"]'),this.cropTooltipGrowthPercent=(r=this.cropTooltipElement)==null?void 0:r.querySelector('[data-field="crop-growth-percent"]'),this.cropTooltipGrowthBar=(o=this.cropTooltipElement)==null?void 0:o.querySelector('[data-field="crop-growth-bar"]'),this.cropTooltipPlanter=(a=this.cropTooltipElement)==null?void 0:a.querySelector('[data-field="crop-planter"]'),this.cropTooltipTimeRemaining=(l=this.cropTooltipElement)==null?void 0:l.querySelector('[data-field="crop-time-remaining"]'),this.cropTooltipYield=(c=this.cropTooltipElement)==null?void 0:c.querySelector('[data-field="crop-yield"]'),this.actionHintElement=document.getElementById("action-hint"),this.modalElement&&(this.modalNameField=this.modalElement.querySelector('[data-field="name"]'),this.modalProfessionSelect=this.modalElement.querySelector('[data-field="profession-select"]'),this.modalProfessionDescription=this.modalElement.querySelector('[data-field="profession-description"]'),this.modalSocialMeterFill=this.modalElement.querySelector('[data-field="social-meter"]'),this.modalSocialMeterLabel=this.modalElement.querySelector('[data-field="social-meter-label"]'),this.modalRelationshipsContainer=this.modalElement.querySelector('[data-field="relationships"]'),this.modalMainView=this.modalElement.querySelector('[data-view="main"]'),this.modalRelationshipsView=this.modalElement.querySelector('[data-view="relationships"]'),this.modalActionMenuView=this.modalElement.querySelector('[data-view="action-menu"]'),this.modalInventoryView=this.modalElement.querySelector('[data-view="inventory"]'),this.modalActionListContainer=this.modalElement.querySelector('[data-field="action-list"]'),this.modalActionMenuTitle=this.modalElement.querySelector('[data-field="action-menu-title"]'),this.modalGenderIcon=this.modalElement.querySelector('[data-field="gender-icon"]'),this.modalEnergyMeterFill=this.modalElement.querySelector('[data-field="energy-meter"]'),this.modalEnergyLabel=this.modalElement.querySelector('[data-field="energy-label"]'),this.modalHungerMeterFill=this.modalElement.querySelector('[data-field="hunger-meter"]'),this.modalHungerLabel=this.modalElement.querySelector('[data-field="hunger-label"]'),this.modalVitalityContainer=this.modalElement.querySelector('[data-field="vitality"]'),this.modalIntelligenceLabel=this.modalElement.querySelector('[data-field="intelligence-label"]'),this.modalStrengthLabel=this.modalElement.querySelector('[data-field="strength-label"]'),this.modalOpenRelationshipsButton=this.modalElement.querySelector('[data-action="open-relationships"]'),this.modalCloseRelationshipsButton=this.modalElement.querySelector('[data-action="close-relationships"]'),this.modalCloseActionMenuButton=this.modalElement.querySelector('[data-action="close-action-menu"]'),this.modalOpenInventoryButton=this.modalElement.querySelector('[data-action="open-inventory"]'),this.modalCloseInventoryButton=this.modalElement.querySelector('[data-action="close-inventory"]'),this.modalInventoryGrid=this.modalElement.querySelector('[data-field="inventory-grid"]'),this.professionIconButton=document.getElementById("profession-icon-button"),this.modalElement.querySelectorAll('[data-action="close-modal"]').forEach(f=>f.addEventListener("click",()=>this.hideVillagerModal())),this.modalProfessionSelect&&(this.populateProfessionSelect(),this.modalProfessionSelect.addEventListener("change",f=>{if(!this.selectedVillager)return;const E=f.target.value||"gatherer";this.selectedVillager.setProfession(E),this.cancelPendingPlanting(),this.updateVillagerModal(this.selectedVillager)})),(h=this.modalOpenRelationshipsButton)==null||h.addEventListener("click",()=>{this.showVillagerModalView("relationships")}),(u=this.modalCloseRelationshipsButton)==null||u.addEventListener("click",()=>{this.showVillagerModalView("main")}),(d=this.modalCloseActionMenuButton)==null||d.addEventListener("click",()=>{this.showVillagerModalView("main"),this.activeProfessionActionMode=null,this.selectedVillager&&this.updateVillagerModal(this.selectedVillager)}),(p=this.modalOpenInventoryButton)==null||p.addEventListener("click",()=>{this.showVillagerModalView("inventory"),this.selectedVillager&&this.populateInventoryView(this.selectedVillager)}),(g=this.modalCloseInventoryButton)==null||g.addEventListener("click",()=>{this.showVillagerModalView("main")}),(_=this.professionIconButton)==null||_.addEventListener("click",()=>{if(!this.selectedVillager)return;const f=this.getProfessionActionConfig(this.selectedVillager.profession);f&&(this.activeProfessionActionMode=f.mode,this.modalActionMenuTitle&&(this.modalActionMenuTitle.textContent=f.menuTitle),this.showVillagerModalView("action-menu"),this.populateActionMenu(this.selectedVillager,f.mode))})),this.clockDisplayElement=document.getElementById("clock-display"),this.timeSpeedButtons=Array.from(document.querySelectorAll("#time-speed-buttons button")),this.timeSpeedButtons.length>0&&this.timeSpeedButtons.forEach(m=>{m.addEventListener("click",()=>{const f=parseFloat(m.dataset.speed);Number.isFinite(f)&&this.setTimeMultiplier(f,m)})}),this.setTimeMultiplier(this.timeMultiplier),this.updateClockDisplay(!0),this.updateLighting(),this.structureModalElement&&this.structureModalElement.querySelectorAll('[data-action="close-structure"]').forEach(f=>f.addEventListener("click",()=>this.hideStructureModal())),this.cropTooltipElement&&this.cropTooltipElement.querySelectorAll('[data-action="close-crop-tooltip"]').forEach(f=>f.addEventListener("click",()=>this.hideCropTooltip())),this.storehouseModalElement&&(this.storehouseModalFields={woodValue:this.storehouseModalElement.querySelector('[data-storehouse="wood"] .value'),stoneValue:this.storehouseModalElement.querySelector('[data-storehouse="stone"] .value'),leavesValue:this.storehouseModalElement.querySelector('[data-storehouse="leaves"] .value'),grainValue:this.storehouseModalElement.querySelector('[data-storehouse="grain"] .value'),totalValue:this.storehouseModalElement.querySelector('[data-storehouse="total"]')},this.storehouseModalElement.querySelectorAll('[data-action="close-storehouse"]').forEach(f=>f.addEventListener("click",()=>this.hideStorehouseModal()))),this.populateStorehouseModal()}setupInteraction(){this.handlePointerDown=this.handlePointerDown.bind(this),this.handlePointerMove=this.handlePointerMove.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointermove",this.handlePointerMove),window.addEventListener("keydown",this.handleKeyDown)}handlePointerDown(t){var c,h,u;if(t.button!==0||t.target!==this.renderer.domElement)return;if(this.updatePointerFromEvent(t),this.raycaster.setFromCamera(this.pointer,this.camera),this.pendingPlanting){const d=this.getGroundIntersectionPoint();d?(this.pointerHoverPoint=d.clone(),this.handlePlantingSelection(d)):(this.pointerHoverPoint=null,this.showActionHint("Aim for open ground to plant the sapling."));return}const e=this.villagers.map(d=>d.mesh),n=this.homes.filter(d=>d==null?void 0:d.structure).map(d=>d.structure),i=this.resourceNodes.crops.filter(d=>d==null?void 0:d.object).map(d=>d.object),r=(d,p)=>d?(this.showCropInfo(d,p),this.modalVisible&&this.hideVillagerModal(),this.structureModalVisible&&this.hideStructureModal(),!0):!1,o=()=>r(this.getCropAtPointer(),t),a=this.raycaster.intersectObjects([...e,...n,...i],!0);if(a.length===0){if(o())return;this.modalVisible&&this.hideVillagerModal(),this.structureModalVisible&&this.hideStructureModal(),this.storehouseModalVisible&&this.hideStorehouseModal(),this.cropTooltipVisible&&this.hideCropTooltip();return}let l=a[0].object;for(;l&&!l.userData.villager&&!l.userData.structureId&&!l.userData.cropNodeId;)l=l.parent;if((c=l==null?void 0:l.userData)!=null&&c.villager){this.openVillagerModal(l.userData.villager,t),this.structureModalVisible&&this.hideStructureModal(),this.storehouseModalVisible&&this.hideStorehouseModal(),this.cropTooltipVisible&&this.hideCropTooltip();return}else if((h=l==null?void 0:l.userData)!=null&&h.structureId){const d=l.userData.structureId;if(d==="storehouse"){this.openStorehouseModal(t),this.modalVisible&&this.hideVillagerModal(),this.structureModalVisible&&this.hideStructureModal(),this.cropTooltipVisible&&this.hideCropTooltip();return}const p=this.getHomeById(d);p&&this.openStructureModal(p,t),this.modalVisible&&this.hideVillagerModal(),this.storehouseModalVisible&&this.hideStorehouseModal(),this.cropTooltipVisible&&this.hideCropTooltip();return}else if((u=l==null?void 0:l.userData)!=null&&u.cropNodeId){const d=l.userData.cropNodeId,p=this.resourceNodes.crops.find(g=>g.id===d);if(r(p,t))return}o()||(this.modalVisible&&this.hideVillagerModal(),this.structureModalVisible&&this.hideStructureModal(),this.storehouseModalVisible&&this.hideStorehouseModal(),this.cropTooltipVisible&&this.hideCropTooltip())}handlePointerMove(t){if(t.target!==this.renderer.domElement||(this.updatePointerFromEvent(t),this.raycaster.setFromCamera(this.pointer,this.camera),!this.pendingPlanting))return;const e=this.getGroundIntersectionPoint();if(!e){this.updatePlantingPreview(null),this.pointerHoverPoint=null;return}this.pointerHoverPoint=e.clone(),this.updatePlantingPreview(e)}updatePointerFromEvent(t){const e=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1}handleKeyDown(t){if(t.key==="Escape"){if(this.pendingPlanting){this.cancelPendingPlanting();return}this.modalVisible&&this.hideVillagerModal(),this.structureModalVisible&&this.hideStructureModal(),this.storehouseModalVisible&&this.hideStorehouseModal(),this.cropTooltipVisible&&this.hideCropTooltip()}}openVillagerModal(t,e){if(this.pendingPlanting&&this.pendingPlanting.villagerId!==t.id&&this.cancelPendingPlanting({silent:!0,reopenModal:!1}),this.selectedVillager=t,this.modalVisible=!0,!this.modalElement)return;this.modalElement.classList.remove("hidden"),this.modalElement.classList.add("visible"),this.modalElement.setAttribute("aria-hidden","false");const n=this.modalElement.querySelector(".modal-card");n&&(n.classList.remove("flip-x"),n.style.removeProperty("--tooltip-arrow-offset"));const i=(e==null?void 0:e.clientX)??window.innerWidth/2,r=(e==null?void 0:e.clientY)??window.innerHeight/2;this.modalAnchor={x:i,y:r},this.showVillagerModalView("main"),this.updateVillagerModal(t)}hideVillagerModal(){if(this.modalVisible=!1,!this.modalElement)return;this.modalElement.classList.remove("visible"),this.modalElement.classList.add("hidden"),this.modalElement.setAttribute("aria-hidden","true");const t=this.modalElement.querySelector(".modal-card");t&&t.classList.remove("flip-x"),this.selectedVillager=null,this.modalAnchor=null,this.activeProfessionActionMode=null,this.showVillagerModalView("main")}updateVillagerModal(t){if(!this.modalElement)return;if(this.modalNameField&&(this.modalNameField.textContent=t.name),this.modalGenderIcon){const n=t.gender??"unknown",i=n==="female"?"♀":n==="male"?"♂":"⚧",r=n==="female"?"Female":n==="male"?"Male":"Unspecified";this.modalGenderIcon.textContent=i,this.modalGenderIcon.classList.toggle("male",n==="male"),this.modalGenderIcon.classList.toggle("female",n==="female"),this.modalGenderIcon.setAttribute("aria-label",r),this.modalGenderIcon.setAttribute("title",r)}if(this.modalProfessionSelect){const n=t.profession??"gatherer";this.modalProfessionSelect.value!==n&&(this.modalProfessionSelect.value=n)}if(this.professionIconButton){const n=this.getProfessionActionConfig(t.profession??"gatherer");this.professionIconButton.classList.remove("laborer","forester","active"),this.professionIconButton.removeAttribute("data-mode"),n?(this.professionIconButton.classList.remove("hidden"),this.professionIconButton.textContent=n.icon,this.professionIconButton.title=n.menuTitle,this.professionIconButton.setAttribute("aria-label",n.menuTitle),n.buttonClass&&this.professionIconButton.classList.add(n.buttonClass),this.professionIconButton.dataset.mode=n.mode,n.mode==="plant"&&this.pendingPlanting&&this.pendingPlanting.villagerId===t.id&&this.professionIconButton.classList.add("active")):(this.professionIconButton.classList.add("hidden"),this.professionIconButton.textContent="",this.professionIconButton.title="",this.professionIconButton.removeAttribute("aria-label"))}if(this.modalProfessionDescription){const n=this.getProfessionDefinition(t.profession??"gatherer");let i=(n==null?void 0:n.description)||"Villagers without a chosen craft default to gathering nearby resources.";this.professionInstructionOverride&&this.professionInstructionOverride.villagerId===t.id&&(i=this.professionInstructionOverride.message),this.modalProfessionDescription.textContent=i}if(this.modalSocialMeterFill){const n=Math.max(0,Math.min(1,t.socialMeter/100));this.modalSocialMeterFill.style.transform=`scaleX(${n})`}if(this.modalSocialMeterLabel&&(this.modalSocialMeterLabel.textContent=`${Math.round(t.socialMeter)}%`),this.modalRelationshipsContainer){this.modalRelationshipsContainer.innerHTML="";const n=this.getRelationshipSummaries(t);if(n.length===0){const i=document.createElement("li");i.className="relationship-item",i.style.cursor="default",i.textContent="No notable bonds yet.",this.modalRelationshipsContainer.appendChild(i)}else n.forEach(i=>{const r=document.createElement("li");r.className="relationship-item";const o=document.createElement("div");o.className="info";const a=document.createElement("div");a.className="name",a.textContent=i.name;const l=document.createElement("div");l.className="status",l.textContent=i.status,o.appendChild(a),o.appendChild(l);const c=document.createElement("div");c.className="score",c.textContent=`${i.score}`,r.appendChild(o),r.appendChild(c),r.addEventListener("click",()=>{const h=this.getVillagerById(i.id);h&&this.openVillagerModal(h)}),this.modalRelationshipsContainer.appendChild(r)})}this.updateMeterStat(this.modalEnergyMeterFill,this.modalEnergyLabel,t.energy,{warnBelow:45,alertBelow:20}),this.modalEnergyLabel&&this.modalEnergyLabel.setAttribute("title",`${Math.round(t.energy)}%`);const e=this.getHungerDescriptor(t.hunger);if(this.updateMeterStat(this.modalHungerMeterFill,this.modalHungerLabel,t.hunger,{warnAbove:65,alertAbove:85,formatter:()=>e}),this.modalHungerLabel&&this.modalHungerLabel.setAttribute("title",`${Math.round(t.hunger)}%`),this.modalVitalityContainer){const n=Math.max(1,t.maxVitality??3),i=Math.max(0,Math.min(n,Math.floor(t.vitality??0))),r=Math.max(0,n-i);this.modalVitalityContainer.textContent="❤️".repeat(i)+"🤍".repeat(r),this.modalVitalityContainer.setAttribute("title",`${i}/${n} vitality`)}if(this.modalIntelligenceLabel){const n=Math.round(t.intelligence??0);this.modalIntelligenceLabel.textContent=n.toString(),this.modalIntelligenceLabel.classList.toggle("alert",n<=25),this.modalIntelligenceLabel.classList.toggle("warn",n>25&&n<=40),this.modalIntelligenceLabel.setAttribute("title",`${n}`)}if(this.modalStrengthLabel){const n=Math.round(t.strength??0);this.modalStrengthLabel.textContent=n.toString(),this.modalStrengthLabel.classList.toggle("alert",n<=25),this.modalStrengthLabel.classList.toggle("warn",n>25&&n<=40),this.modalStrengthLabel.setAttribute("title",`${n}`)}this.applyTooltipPosition()}updateResourceDisplay(){this.resourceLabels&&(Object.entries(this.inventory).forEach(([t,e])=>{const n=this.resourceLabels[t];n&&(n.textContent=e.toString())}),this.updateStorehouseResourceDisplays())}setTimeMultiplier(t,e){(!Number.isFinite(t)||t<=0)&&(t=1),this.timeMultiplier=t,this.updateTimeButtonStates(e)}updateTimeButtonStates(t){this.timeSpeedButtons&&this.timeSpeedButtons.forEach(e=>{const n=parseFloat(e.dataset.speed),i=t?e===t:Math.abs(n-this.timeMultiplier)<1e-4;e.classList.toggle("active",!!i)})}showActionHint(t){this.actionHintElement&&this.currentActionHint!==t&&(this.currentActionHint=t,this.actionHintElement.textContent=t,this.actionHintElement.classList.add("visible"))}hideActionHint(){this.actionHintElement&&this.currentActionHint&&(this.currentActionHint="",this.actionHintElement.textContent="",this.actionHintElement.classList.remove("visible"))}showVillagerModalView(t="main"){!this.modalMainView||!this.modalRelationshipsView||!this.modalActionMenuView||!this.modalInventoryView||(this.modalMainView.classList.toggle("active",t==="main"),this.modalRelationshipsView.classList.toggle("active",t==="relationships"),this.modalActionMenuView.classList.toggle("active",t==="action-menu"),this.modalInventoryView.classList.toggle("active",t==="inventory"),this.activeModalView=t)}populateInventoryView(t){if(!this.modalInventoryGrid||!t)return;this.modalInventoryGrid.innerHTML="";const e=[],n=t.inventory.wheatSeeds||0;if(n>0&&e.push({id:"wheatSeeds",name:"Wheat Seeds",icon:"🌾",description:"Seeds for planting wheat crops",count:n}),t.carrying&&t.carrying.amount>0){const r=t.carrying,a={grain:{name:"Harvested Grain",icon:"🌾",description:"Freshly cut sheaves destined for town stores"},wood:{name:"Wood Logs",icon:"🪵",description:"Bundles of timber being hauled to storage"},stone:{name:"Stone Blocks",icon:"🪨",description:"Quarried stone being carried back to camp"},leaves:{name:"Foraged Greens",icon:"🌿",description:"Leafy bundles gathered for bedding and crafts"},wheatSeeds:{name:"Wheat Seeds",icon:"🌾",description:"Seeds collected from wild patches"}}[r.type]??{name:"Supplies",icon:"📦",description:"Resources currently in transit"};e.push({id:`carrying-${r.type}`,name:`${a.name} (In Transit)`,icon:a.icon,description:a.description,count:r.amount})}if(!(e.length>0)){const r=document.createElement("div");r.style.textAlign="center",r.style.color="rgba(214, 229, 245, 0.6)",r.style.padding="20px",r.textContent="No items in inventory",this.modalInventoryGrid.appendChild(r);return}e.forEach(r=>{if(r.count>0){const o=document.createElement("div");o.className="relationship-item",o.style.cursor="default",o.style.display="flex",o.style.justifyContent="space-between",o.style.alignItems="center";const a=document.createElement("div");a.className="info";const l=document.createElement("div");l.className="name",l.textContent=`${r.icon} ${r.name}`;const c=document.createElement("div");c.className="status",c.textContent=r.description,a.appendChild(l),a.appendChild(c);const h=document.createElement("div");h.className="score",h.textContent=`×${r.count}`,h.style.fontSize="1.1rem",h.style.fontWeight="600",o.appendChild(a),o.appendChild(h),this.modalInventoryGrid.appendChild(o)}})}notifyVillagerInventoryChange(t){t&&this.selectedVillager&&this.selectedVillager.id===t.id&&this.activeModalView==="inventory"&&this.populateInventoryView(t)}populateActionMenu(t,e){if(e==="build"){this.populateBuildMenu(t);return}if(e==="plant"||e==="farm"){this.populatePlantingMenu(t);return}if(!this.modalActionListContainer)return;this.modalActionListContainer.innerHTML="";const n=document.createElement("li");n.className="relationship-item",n.style.cursor="default",n.textContent="No actions available for this profession yet.",this.modalActionListContainer.appendChild(n)}populateBuildMenu(t){if(!this.modalActionListContainer)return;this.modalActionListContainer.innerHTML="";const e=[];if((!this.storehouse||!this.storehouse.built)&&e.push({id:"storehouse",name:"Storehouse & Yard",description:"A large storage facility for village resources",requirements:this.storehouseRequirements,icon:"🏚️",canBuild:this.canAffordStorehouse()}),e.length===0){const n=document.createElement("li");n.className="relationship-item",n.style.cursor="default",n.textContent="All structures have been built.",this.modalActionListContainer.appendChild(n);return}e.forEach(n=>{const i=document.createElement("li");i.className="relationship-item",i.style.cursor=n.canBuild?"pointer":"default",i.style.opacity=n.canBuild?"1":"0.5";const r=document.createElement("div");r.className="info";const o=document.createElement("div");o.className="name",o.textContent=`${n.icon} ${n.name}`;const a=document.createElement("div");a.className="status";const l=n.requirements;a.textContent=`${l.wood} wood, ${l.stone} stone, ${l.leaves} leaves`,a.style.fontSize="0.85em",r.appendChild(o),r.appendChild(a);const c=document.createElement("div");c.className="score",c.textContent=n.canBuild?"✓":"✗",c.style.color=n.canBuild?"#4ade80":"#f87171",i.appendChild(r),i.appendChild(c),n.canBuild&&i.addEventListener("click",()=>{this.startBuildingStructure(n.id,t)}),this.modalActionListContainer.appendChild(i)})}populatePlantingMenu(t){if(!this.modalActionListContainer)return;this.modalActionListContainer.innerHTML="";const e=this.getPlantablesForProfession(t==null?void 0:t.profession);if(!e||e.length===0){const n=document.createElement("li");n.className="relationship-item",n.style.cursor="default",n.textContent="No plantings are available yet.",this.modalActionListContainer.appendChild(n);return}e.forEach(n=>{const i=document.createElement("li");i.className="relationship-item";const r=!!t&&(t.profession==="forester"||t.profession==="farmer");let o=!0,a="";if(n.requiresSeeds&&t){const p=t.inventory.wheatSeeds||0,g=n.seedCost||1;o=p>=g,a=o?` (Seeds: ${p})`:` (Need ${g} seed${g>1?"s":""}, have ${p})`}const l=r&&o;i.style.cursor=l?"pointer":"default",i.style.opacity=l?"1":"0.58";const c=document.createElement("div");c.className="info";const h=document.createElement("div");h.className="name",h.textContent=`${n.icon} ${n.name}${a}`;const u=document.createElement("div");u.className="status",u.textContent=n.description,u.style.fontSize="0.85em",c.appendChild(h),c.appendChild(u);const d=document.createElement("div");d.className="score",d.textContent=l?"✓":"✗",d.style.color=l?"#4ade80":"#f87171",i.appendChild(c),i.appendChild(d),l&&i.addEventListener("click",()=>{this.beginPlanting(t,n)}),this.modalActionListContainer.appendChild(i)})}beginPlanting(t,e){if(!t||t.profession!=="forester"&&t.profession!=="farmer")return;if(!e){console.warn("No planting option provided for planting action.");return}if(e.requiresSeeds){const r=t.inventory.wheatSeeds||0,o=e.seedCost||1;if(r<o){this.showActionHint("Not enough seeds! Gather wheat seeds from wild patches first.");return}}const n=this.activeModalView||"main";this.prepareVillagerForManualAction(t),this.cancelPendingPlanting({silent:!0,reopenModal:!1}),this.createPlantingPreview(e),this.pendingPlanting={villagerId:t.id,plantableId:e.id},this.professionInstructionOverride={villagerId:t.id,message:`Select a planting spot for the ${e.name}.`},this.activeProfessionActionMode=null,this.pauseSimulationForPlacement(t,n);const i=`Click on open ground to plant the ${e.name}.`;this.activePlantingHint=i,this.showActionHint(i)}createPlantingPreview(t){if(this.disposePlantingPreview(),!t)return;const e=Math.max((t==null?void 0:t.minSpacing)??4,2.6),n=new de,i=new Hn(e,48),r=new Cs({color:4906624,opacity:.24,transparent:!0,side:xe,depthWrite:!1}),o=new X(i,r);o.rotation.x=-Math.PI/2,o.position.y=.02,n.add(o);const a=new Bi(Math.max(e-.35,e*.7),e,48),l=new Cs({color:14154728,opacity:.52,transparent:!0,side:xe,depthWrite:!1}),c=new X(a,l);c.rotation.x=-Math.PI/2,c.position.y=.025,n.add(c);const u=t.id==="wheat-crop"?this.buildWheatPlotPreview(t.scale??.5,{preview:!0}):this.buildSaplingVisual(t.scale??.9,{preview:!0});n.add(u),n.visible=!1,this.scene.add(n),this.plantingPreview={plantable:t,group:n,highlight:o,ring:c,sapling:u,valid:!1,lastValidation:null},this.pointerHoverPoint&&this.updatePlantingPreview(this.pointerHoverPoint.clone())}updatePlantingPreview(t){var a;if(!this.plantingPreview)return null;const e=this.plantingPreview;if(!t)return e.group.visible=!1,e.lastValidation=null,e.valid=!1,null;e.group.visible=!0,e.group.position.set(t.x,0,t.z);const n=this.validatePlantingLocation(t,e.plantable);e.lastValidation=n,e.valid=n.valid;const i=n.valid?4906624:16347926,r=n.valid?.26:.34;e.highlight.material.color.setHex(i),e.highlight.material.opacity=r,e.highlight.material.needsUpdate=!0,(a=e.ring)!=null&&a.material&&(e.ring.material.color.setHex(n.valid?14680046:16036477),e.ring.material.opacity=n.valid?.55:.75,e.ring.material.needsUpdate=!0);const o=n.valid?.82:.42;return e.sapling.traverse(l=>{l.isMesh&&l.material&&(l.material.opacity=o,l.material.needsUpdate=!0)}),n.valid&&this.pendingPlanting&&this.activePlantingHint&&this.currentActionHint!==this.activePlantingHint&&this.showActionHint(this.activePlantingHint),n}disposePlantingPreview(){if(!this.plantingPreview)return;const{group:t}=this.plantingPreview;t&&(this.scene.remove(t),t.traverse(e=>{var n,i,r,o;e.isMesh&&((i=(n=e.geometry)==null?void 0:n.dispose)==null||i.call(n),(o=(r=e.material)==null?void 0:r.dispose)==null||o.call(r))})),this.plantingPreview=null,this.pointerHoverPoint=null}handlePlantingSelection(t){if(!this.pendingPlanting)return;const e=this.pendingPlanting,n=this.getVillagerById(e.villagerId),i=this.getPlantableDefinition(e.plantableId);if(!n||!i){this.cancelPendingPlanting({silent:!0});return}const r=t.clone();r.y=0;let o=this.updatePlantingPreview(r);if(o||(o=this.validatePlantingLocation(r,i)),!o.valid){o.message&&this.showActionHint(o.message);return}this.prepareVillagerForManualAction(n),this.startTreePlantingTask(n,i,r)}getGroundIntersectionPoint(){if(!this.groundMesh)return null;const t=this.raycaster.intersectObject(this.groundMesh,!1);if(!t||t.length===0)return null;const e=t[0].point.clone();return e.y=0,e}getCropNearPoint(t,e=1.6){var r;if(!t)return null;let n=null,i=1/0;for(const o of this.resourceNodes.crops){if(!(o!=null&&o.object))continue;const a=o.object.position,l=Math.hypot(a.x-t.x,a.z-t.z),c=e*(((r=o.growth)==null?void 0:r.baseScale)??1);l<=c&&l<i&&(n=o,i=l)}return n}getCropAtPointer(t=1.6){const e=this.getGroundIntersectionPoint();return e?this.getCropNearPoint(e,t):null}positionCropTooltip(t,e=null){var f,E;if(!this.cropTooltipVisible||!this.cropTooltipCard||!t)return;this.cropTooltipAnchor?this.cropTooltipAnchor.cropId!==((t==null?void 0:t.id)??null)&&(this.cropTooltipAnchor.cropId=(t==null?void 0:t.id)??null):this.cropTooltipAnchor={cropId:(t==null?void 0:t.id)??null,side:"right"},e&&(this.cropTooltipAnchor.side=e.clientX>window.innerWidth/2?"left":"right");const n=this.cropTooltipCard,i=16;let r=window.innerWidth/2,o=window.innerHeight/2,a=!1;if((f=t==null?void 0:t.object)!=null&&f.position){const b=this._cropTooltipWorld;b.copy(t.object.position),b.y+=.45*(((E=t.growth)==null?void 0:E.baseScale)??1);const v=this._cropTooltipProjected;v.copy(b).project(this.camera);const R=(v.x*.5+.5)*window.innerWidth,w=(-v.y*.5+.5)*window.innerHeight;Number.isFinite(R)&&Number.isFinite(w)&&(r=R,o=w,a=!0)}a||(e?(r=e.clientX,o=e.clientY):(r=window.innerWidth/2,o=window.innerHeight/2));const l=n.getBoundingClientRect(),c=l.width||n.offsetWidth||320,h=l.height||n.offsetHeight||240,u=this.cropTooltipAnchor.side==="left"?"left":"right",d=28;let p=u==="left"?r-c-d:r+d,g=o-h-36;g<i&&(g=o+32);const _=window.innerWidth-c-i,m=window.innerHeight-h-i;p=Math.min(Math.max(i,p),_),g=Math.min(Math.max(i,g),m),n.style.left=`${Math.round(p)}px`,n.style.top=`${Math.round(g)}px`}validatePlantingLocation(t,e){var c,h,u;const n=(e==null?void 0:e.minSpacing)??4,i=this.townCenterRadius+1.8,r=48;if(t.length()<i)return{valid:!1,message:"Keep new plantings outside the village square."};if(t.length()>r)return{valid:!1,message:"That location is too far from town."};const o=this.resourceNodes.trees.filter(d=>d&&!d.depleted);for(const d of o){const p=d.position??((c=d.object)==null?void 0:c.position);if(p&&p.distanceTo(t)<n)return{valid:!1,message:"Give nearby trees more space to grow."}}const a=Math.max(3,n-1),l=Math.max(2.6,n-1.4);for(const d of this.resourceNodes.bushes)if(!(!d||d.depleted)&&d.position.distanceTo(t)<l)return{valid:!1,message:"Clear some space away from shrubs first."};for(const d of this.resourceNodes.stones)if(!(!d||d.depleted)&&d.position.distanceTo(t)<a)return{valid:!1,message:"Large stones are in the way there."};if((h=this.storehouse)!=null&&h.location&&this.storehouse.location.distanceTo(t)<7.5)return{valid:!1,message:"Leave room around the storehouse yard."};if((u=this.bonfire)!=null&&u.location&&this.bonfire.location.distanceTo(t)<4.5)return{valid:!1,message:"Keep trees clear of the bonfire."};for(const d of this.homes)if(!(!d||!d.location)&&d.location.distanceTo(t)<5.2)return{valid:!1,message:"Residents need breathing room around their homes."};return{valid:!0}}pauseSimulationForPlacement(t,e=this.activeModalView||"main"){if(this.pausedBecausePlacement){this.modalRestoreVillagerId=(t==null?void 0:t.id)??this.modalRestoreVillagerId,this.modalRestoreView||(this.modalRestoreView=e||"main");return}this.pausedBecausePlacement=!0,this.simulationPaused=!0,this.modalRestoreVillagerId=(t==null?void 0:t.id)??null,this.modalRestoreAnchor=this.modalAnchor?{...this.modalAnchor}:null,this.modalRestoreView=e||"main",this.modalVisible&&this.hideVillagerModal()}resumeSimulationFromPlacement({reopenModal:t=!0}={}){if(!this.pausedBecausePlacement)return;this.pausedBecausePlacement=!1,this.simulationPaused=!1;const e=this.modalRestoreVillagerId,n=this.modalRestoreAnchor,i=this.modalRestoreView||"main";if(this.modalRestoreVillagerId=null,this.modalRestoreAnchor=null,this.modalRestoreView=null,!t||!e)return;const r=this.getVillagerById(e);if(!r)return;const o=n?{clientX:n.x,clientY:n.y}:null;if(this.openVillagerModal(r,o),i!=="main"&&(this.showVillagerModalView(i),i==="action-menu")){const a=this.getProfessionActionConfig(r.profession);a&&(this.activeProfessionActionMode=a.mode,this.populateActionMenu(r,a.mode))}}startTreePlantingTask(t,e,n){t.assignTreePlanting(n,e),this.disposePlantingPreview(),this.pendingPlanting=null,this.activeProfessionActionMode=null,this.activePlantingHint=null,this.professionInstructionOverride={villagerId:t.id,message:`${t.name} is heading out to plant the ${e.name}.`},this.resumeSimulationFromPlacement(),this.professionIconButton&&this.professionIconButton.classList.remove("active"),this.selectedVillager&&this.selectedVillager.id===t.id&&this.updateVillagerModal(t),this.showActionHint(`${t.name} is heading out to plant the ${e.name}.`)}cancelPendingPlanting({silent:t=!1,message:e="Planting task cancelled.",reopenModal:n=!0}={}){if(!(!!this.pendingPlanting||!!this.plantingPreview)){t||this.hideActionHint(),this.resumeSimulationFromPlacement({reopenModal:n});return}this.pendingPlanting=null,this.professionInstructionOverride=null,this.disposePlantingPreview(),this.activePlantingHint=null,this.professionIconButton&&this.professionIconButton.classList.remove("active"),this.selectedVillager&&this.updateVillagerModal(this.selectedVillager),!t&&e?this.showActionHint(e):this.hideActionHint(),this.resumeSimulationFromPlacement({reopenModal:n})}completeTreePlanting(t,e){if(!e||!e.location)return;const n=e.plantableId?this.getPlantableDefinition(e.plantableId):null,i=(n==null?void 0:n.id)==="wheat-crop";if(n!=null&&n.requiresSeeds&&t){const g=n.seedCost||1;t.inventory.wheatSeeds=Math.max(0,(t.inventory.wheatSeeds||0)-g),this.notifyVillagerInventoryChange(t)}const r={plantedBy:(t==null?void 0:t.id)??null};n!=null&&n.capacity&&(r.capacity=n.capacity),n!=null&&n.scale&&(r.scale=n.scale);const o=(n==null?void 0:n.growthDays)||{min:1,max:3},a=Math.max(.25,o.min??1),l=Math.max(a,o.max??a),c=a+Math.random()*(l-a),h=c*this.dayLengthMinutes;r.stage="sapling",r.matureInMinutes=h,r.growDays=c;const u=i?this.createCropResource(e.location,r):this.createTreeResource(e.location,r);u.plantedOnDay=this.currentDay,u.plantedAtMinute=this.totalElapsedMinutes,u.object&&(u.object.userData=u.object.userData||{},i?u.object.userData.cropNodeId=u.id:u.object.userData.treeNodeId=u.id),u.growth&&(u.growth.growDays=c),t&&(this.professionInstructionOverride={villagerId:t.id,message:`${t.name} planted a new ${(n==null?void 0:n.name)||"sapling"} for the village.`},this.selectedVillager&&this.selectedVillager.id===t.id&&this.updateVillagerModal(t));const d=(t==null?void 0:t.name)||"A forester",p=(n==null?void 0:n.name)||"sapling";this.showActionHint(`${d} planted a new ${p}!`)}canAffordStorehouse(){const t=this.storehouseRequirements;return this.inventory.wood>=t.wood&&this.inventory.stone>=t.stone&&this.inventory.leaves>=t.leaves}populateProfessionSelect(){this.modalProfessionSelect&&(this.modalProfessionSelect.innerHTML="",this.professionRegistry.forEach(t=>{const e=document.createElement("option");e.value=t.id,e.textContent=t.name,this.modalProfessionSelect.appendChild(e)}))}getProfessionDefinition(t){return this.professionRegistry.find(e=>e.id===t)||null}getProfessionActionConfig(t){return this.professionActions[t]||null}getPlantablesForProfession(t){return t==="forester"?this.foresterPlantables:t==="farmer"?this.farmerPlantables:[]}getPlantableDefinition(t){let e=this.foresterPlantables.find(n=>n.id===t);return e||(e=this.farmerPlantables.find(n=>n.id===t),e||null)}setMeterValue(t,e){if(!t)return;const n=ue.clamp((e??0)/100,0,1);t.style.transform=`scaleX(${n})`}updateMeterStat(t,e,n,i={}){if(this.setMeterValue(t,n),!e)return;const{warnAbove:r,alertAbove:o,warnBelow:a,alertBelow:l,formatter:c}=i,h=typeof c=="function"?c(n):`${Math.round(n??0)}%`;e.textContent=h,e.classList.remove("warn","alert"),typeof o=="number"&&n>=o||typeof l=="number"&&n<=l?e.classList.add("alert"):(typeof r=="number"&&n>=r||typeof a=="number"&&n<=a)&&e.classList.add("warn")}getHungerDescriptor(t){return t<=15?"Content":t<=35?"Peckish":t<=60?"Hungry":t<=80?"Very Hungry":"Starving"}prepareVillagerForManualAction(t){t&&t.abortCurrentActivities()}advanceTime(t){if(t<=0)return;const e=t*this.gameMinutesPerSecond;e!==0&&(this.totalElapsedMinutes+=e,this.totalElapsedMinutes<0&&(this.totalElapsedMinutes=0),this.gameMinutes=this.totalElapsedMinutes%this.dayLengthMinutes,this.gameMinutes<0&&(this.gameMinutes+=this.dayLengthMinutes),this.currentDay=Math.floor(this.totalElapsedMinutes/this.dayLengthMinutes),this.updateClockDisplay(),this.updateLighting(),this.maybeTriggerBonfireBuild(),this.updateBonfireNightCycle(),this.maybeTriggerHomeBuild(),this.maybeTriggerBedBuild())}updateClockDisplay(t=!1){if(!this.clockDisplayElement)return;const e=Math.floor(this.gameMinutes);if(!t&&e===this.lastClockMinute)return;this.lastClockMinute=e;const n=Math.floor(e/60)%24,i=e%60,r=`${n.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`;this.clockDisplayElement.textContent=r}updateLighting(){if(!this.ambientLight||!this.directionalLight)return;const e=this.gameMinutes%this.dayLengthMinutes/this.dayLengthMinutes*Math.PI*2-Math.PI/2,n=Math.sin(e),i=ue.clamp((n+.2)/1.2,0,1),r=ue.lerp(.18,.72,i),o=ue.lerp(.08,.95,i);this.ambientLight.intensity=r,this.directionalLight.intensity=o;const a=new qt().setHSL(.58,.18,ue.lerp(.18,.52,i));this.ambientLight.color.copy(a);const l=new qt().setHSL(ue.lerp(.07,.13,i),.65,ue.lerp(.45,.72,i));this.directionalLight.color.copy(l);const c=120,h=ue.lerp(12,100,Math.max(0,n));this.directionalLight.position.set(Math.cos(e)*c,n>=0?h:Math.max(8,h*.4),Math.sin(e)*c),this.directionalLight.target.updateMatrixWorld(),this.skyColor&&(this.skyColor.setHSL(ue.lerp(.58,.62,i),.45,ue.lerp(.05,.55,i)),this.renderer.setClearColor(this.skyColor),this.scene.background=this.skyColor)}getCurrentHour(){return Math.floor(this.gameMinutes/60)%24}isNight(){const t=this.getCurrentHour();return t>=19||t<6}getBonfireHangoutPoint(){const t=1.6+Math.random()*1.1,e=Math.random()*Math.PI*2;return new A(this.bonfire.location.x+Math.cos(e)*t,0,this.bonfire.location.z+Math.sin(e)*t)}getBonfireConstructionPoint(){const t=3.6+Math.random()*.6,e=Math.random()*Math.PI*2;return new A(this.bonfire.location.x+Math.cos(e)*t,0,this.bonfire.location.z+Math.sin(e)*t)}maybeTriggerBonfireBuild(){if(this.bonfire.built||this.bonfire.building)return;const t=this.bonfireRequirements;if(this.inventory.wood<t.wood||this.inventory.stone<t.stone)return;let e=this.villagers.find(n=>n.canTakeConstruction()&&!n.isGatheringProfession());e||(e=this.villagers.find(n=>n.canTakeConstruction())),e&&(this.inventory.wood-=t.wood,this.inventory.stone-=t.stone,this.updateResourceDisplay(),this.bonfire.building=!0,this.bonfire.builder=e,e.assignBonfireConstruction(this.bonfire))}finishBonfireConstruction(t){!this.bonfire.building||t!==this.bonfire.builder||(this.bonfire.building=!1,this.bonfire.builder=null,this.bonfire.built=!0,this.createBonfireStructure(),this.extinguishBonfire(),this.updateBonfireNightCycle())}createBonfireStructure(){this.bonfire.structure&&this.scene.remove(this.bonfire.structure);const t=new de,e=new Hn(2.6,48),n=new J({color:2957333,roughness:.9,metalness:.05}),i=new X(e,n);i.rotation.x=-Math.PI/2,i.position.y=.02,t.add(i);const r=new Ze(2.1,.24,12,42),o=new J({color:8091248,roughness:.85,metalness:.2}),a=new X(r,o);a.rotation.x=Math.PI/2,a.position.y=.18,t.add(a);const l=new J({color:6972251,roughness:.9,metalness:.15});for(let m=0;m<6;m++){const f=new jt(.35,.5,.5,6),E=new X(f,l),b=Math.PI*2*m/6,v=1.95+Math.random()*.1;E.position.set(Math.cos(b)*v,.25,Math.sin(b)*v),E.rotation.x=Math.PI/2,E.rotation.z=Math.random()*.3-.15,t.add(E)}const c=new jt(.18,.22,3.4,10),h=new J({color:5911578,roughness:.75,metalness:.05});for(let m=0;m<4;m++){const f=new X(c,h),E=Math.PI/2*m+Math.random()*.3-.15;f.position.set(Math.cos(E)*.45,.9,Math.sin(E)*.45),f.rotation.z=Math.PI/2,f.rotation.y=E,t.add(f)}const u=new J({color:16753479,emissive:16743218,emissiveIntensity:0,transparent:!0,opacity:.92,roughness:.32,metalness:.05}),d=new X(new Xe(.6,1.7,14),u);d.position.y=1,t.add(d);const p=new J({color:16765821,emissive:16753479,emissiveIntensity:0,transparent:!0,opacity:.85,roughness:.4}),g=new X(new be(.4,12,12),p);g.position.y=.35,t.add(g);const _=new gs(16763258,0,26,2.2);_.position.set(0,2.4,0),t.add(_),t.position.copy(this.bonfire.location),this.scene.add(t),t.userData||(t.userData={}),t.userData.structureId="bonfire",this.bonfire.structure=t,this.bonfire.flameMaterial=u,this.bonfire.emberMaterial=p,this.bonfire.flameMesh=d,this.bonfire.emberMesh=g,this.bonfire.light=_,this.bonfire.isLit=!1}lightBonfire(){!this.bonfire.structure||!this.bonfire.light||(this.bonfire.isLit=!0,this.bonfire.lastLitDay=this.currentDay,this.bonfire.flickerPhase=Math.random()*Math.PI*2,this.bonfire.randomOffset=Math.random()*6,this.bonfire.light&&(this.bonfire.light.intensity=this.bonfire.baseLightIntensity),this.bonfire.flameMaterial&&(this.bonfire.flameMaterial.emissiveIntensity=1.6,this.bonfire.flameMaterial.opacity=.95),this.bonfire.emberMaterial&&(this.bonfire.emberMaterial.emissiveIntensity=.8))}extinguishBonfire(){!this.bonfire.structure||!this.bonfire.light||(this.bonfire.isLit=!1,this.bonfire.light&&(this.bonfire.light.intensity=.2),this.bonfire.flameMaterial&&(this.bonfire.flameMaterial.emissiveIntensity=.05,this.bonfire.flameMaterial.opacity=.4),this.bonfire.emberMaterial&&(this.bonfire.emberMaterial.emissiveIntensity=.1))}updateBonfireNightCycle(){this.bonfire.built&&(this.isNight()?this.bonfire.isLit||this.inventory.wood>=this.bonfireRequirements.nightlyFuel&&(this.inventory.wood-=this.bonfireRequirements.nightlyFuel,this.updateResourceDisplay(),this.lightBonfire()):this.bonfire.isLit&&this.extinguishBonfire())}maybeTriggerHomeBuild(){if(this.homes.some(c=>c.building))return;const t=this.villagers.filter(c=>c.romanticPartnerId||c.homeId||c.specialTask?!1:!this.homes.find(u=>u.occupantId===c.id&&!u.built));if(t.length===0)return;const e=this.homeRequirements;if(this.inventory.wood<e.wood||this.inventory.stone<e.stone)return;const n=t.sort((c,h)=>c.socialMeter-h.socialMeter)[0],i=!!n.romanticPartnerId,r=i?this.getVillagerById(n.romanticPartnerId):null;if(i&&r&&r.homeId)return;let o=this.villagers.find(c=>c!==n&&c.canTakeConstruction()&&!c.isGatheringProfession());if(o||(o=this.villagers.find(c=>c!==n&&c.canTakeConstruction())),!o)return;const a=this.findHomeLocation();if(!a)return;this.inventory.wood-=e.wood,this.inventory.stone-=e.stone,this.updateResourceDisplay();const l={id:`home-${this.homeCounter++}`,occupantId:n.id,partnerId:(r==null?void 0:r.id)??null,location:a,built:!1,building:!0,builderId:o.id,structure:null,type:i?"family":"single",beds:{},occupantsInside:new Set};this.homes.push(l),n.homeId=l.id,n.homeLocation=a.clone(),r&&(r.homeId=l.id,r.homeLocation=a.clone()),l.beds[n.id]={built:!1,builderId:null,building:!1},r&&(l.beds[r.id]={built:!1,builderId:null,building:!1}),o.assignHomeConstruction(l)}maybeTriggerBedBuild(){const t=this.getHomesNeedingBeds();if(t.length===0)return;const e=this.bedRequirements;if(this.inventory.wood<e.wood||this.inventory.leaves<e.leaves)return;const n=this.villagers.find(a=>a.canTakeConstruction()&&!a.isGatheringProfession());if(!n)return;const i=t[0],o=[i.occupantId,i.partnerId].filter(Boolean).find(a=>{const l=i.beds[a];return l&&!l.built&&!l.building});o&&this.startBedConstruction(i,o,n)}findHomeLocation(){for(let e=0;e<30;e++){const n=this.townCenterRadius+3+Math.random()*5,i=Math.random()*Math.PI*2,r=new A(Math.cos(i)*n,0,Math.sin(i)*n);if(!(r.length()<this.townCenterRadius+2.5||this.homes.some(l=>l.location.distanceTo(r)<4.5)))return r}return null}findStorehouseLocation(){for(let e=0;e<50;e++){const n=this.townCenterRadius+.5+Math.random()*1.5,i=Math.random()*Math.PI*2,r=new A(Math.cos(i)*n,0,Math.sin(i)*n);if(!this.homes.some(a=>a.location.distanceTo(r)<8)&&!(this.bonfire&&this.bonfire.location&&this.bonfire.location.distanceTo(r)<8))return r}return null}startBuildingStructure(t,e){t==="storehouse"&&this.startStorehouseConstruction(e),this.hideVillagerModal()}startStorehouseConstruction(t){if(!t){console.warn("Cannot assign storehouse construction without a villager.");return}if(this.storehouse&&(this.storehouse.built||this.storehouse.building)){alert("Storehouse is already built or being built.");return}const e=this.storehouseRequirements;if(!this.canAffordStorehouse()){alert(`Not enough resources! Need ${e.wood} wood, ${e.stone} stone, ${e.leaves} leaves.`);return}const n=this.findStorehouseLocation();if(!n){alert("Could not find a suitable location for the storehouse.");return}t&&this.prepareVillagerForManualAction(t),this.inventory.wood-=e.wood,this.inventory.stone-=e.stone,this.inventory.leaves-=e.leaves,this.updateResourceDisplay(),this.storehouse={location:n,built:!1,building:!0,builderId:t.id,structure:null,resourceDisplays:null,dropPointLocal:null,dropPoint:null},t.assignStorehouseConstruction(this.storehouse)}finishHomeConstruction(t,e){if(!t||t.built)return;t.building=!1,t.builderId=null,t.built=!0,this.createHomeStructure(t);const n=this.getVillagerById(t.occupantId);n&&(n.homeLocation=t.location.clone())}finishStorehouseConstruction(){if(!this.storehouse||this.storehouse.built)return;this.storehouse.building=!1,this.storehouse.builderId=null,this.storehouse.built=!0,this.createStorehouseStructure(this.storehouse),this.updateStorehouseDropPoint(),this.updateStorehouseResourceDisplays(),this.showActionHint("Villagers begin relocating supplies to the new storehouse yard.");const t=this.getStorehouseDropPoint();t&&this.villagers.forEach(e=>{e&&(e.specialTask||(e.state==="returning"||e.carrying)&&(e.target=t.clone(),e.state!=="returning"&&(e.state="returning")))})}finishBedConstruction(t,e){if(!t||!t.beds[e])return;const n=t.beds[e];n.built||(n.built=!0,n.building=!1,n.builderId=null,t.structure&&this.updateHomeVisuals(t))}getHomesNeedingBeds(){return this.homes.filter(t=>t.built?[t.occupantId,t.partnerId].filter(Boolean).some(n=>{const i=t.beds[n];return i&&!i.built&&!i.building}):!1)}startBedConstruction(t,e,n){const i=t.beds[e];if(!i||i.built||i.building)return!1;const r=this.bedRequirements;return this.inventory.wood<r.wood||this.inventory.leaves<r.leaves?!1:(this.inventory.wood-=r.wood,this.inventory.leaves-=r.leaves,this.updateResourceDisplay(),i.building=!0,i.builderId=n.id,n.assignBedConstruction(t,e),!0)}requestManualBedBuild(t,e){var c,h;const n=t.beds[e];if(!n||n.built||n.building){console.log("Bed already exists or is being built");return}const i=this.getVillagerById(e);if(!i){console.log("Occupant not found");return}const r=this.bedRequirements,o=this.inventory.wood>=r.wood&&this.inventory.leaves>=r.leaves;let a=this.villagers.find(u=>u!==i&&u.canTakeConstruction()&&!u.isGatheringProfession());if(!a&&i.canTakeConstruction()?a=i:a||(a=this.villagers.find(u=>u!==i&&u.canTakeConstruction())),!a||!o){if(!i.canTakeConstruction()){alert(`${i.name} is busy right now. Try again later.`);return}n.building=!0,n.builderId=i.id,i.assignSelfBedConstruction(t,e),this.structureModalVisible&&((c=this.activeStructureContext)==null?void 0:c.homeId)===t.id&&this.populateStructureModal(t);return}this.startBedConstruction(t,e,a)&&this.structureModalVisible&&((h=this.activeStructureContext)==null?void 0:h.homeId)===t.id&&this.populateStructureModal(t)}createHomeStructure(t){const e=new de,n=t.type==="family",i=new Yt(n?5.2:3.6,.4,n?4.6:3.2),r=new J({color:n?6245435:7166021,roughness:.8}),o=new X(i,r);o.position.y=.2,e.add(o);const a=new Yt(n?4.6:3.2,n?2.6:2.2,n?3.8:2.8),l=new J({color:14140323,roughness:.7}),c=new X(a,l);c.position.y=n?1.8:1.5,e.add(c);const h=new J({color:n?7021589:8006940,roughness:.5}),u=new X(new Xe(n?3.6:2.6,n?2.2:1.8,6),h);u.position.y=n?4.1:3.3,e.add(u);const d=new Yt(n?1.2:.9,n?1.9:1.6,.08),p=new J({color:5058331,roughness:.6}),g=new X(d,p);g.position.set(n?-.6:0,n?1.05:.95,n?1.86:1.44),e.add(g);const _=new J({color:13625087,transparent:!0,opacity:.85,roughness:.2});if(n){const M=new X(new Yt(.9,.7,.06),_);M.position.set(1.4,1.8,.4),e.add(M);const I=M.clone();I.position.z=-.4,e.add(I)}else{const M=new X(new Yt(.7,.6,.06),_);M.position.set(-1.1,1.6,0),e.add(M);const I=M.clone();I.position.x=1.1,e.add(I)}const m=new J({color:16765562,emissive:16757575,emissiveIntensity:.4}),f=new X(new be(.18,12,12),m);f.position.set(n?.9:.6,n?1.6:1.4,n?2.05:1.5),e.add(f);const E=new gs(16756838,n?1.2:.8,n?11:8);E.position.copy(f.position),e.add(E);const b=new J({color:4863014,roughness:.9}),v=n?1.4:1.2,R=n?.22:.18,w=new X(new jt(R,R*1.1,v,8),b);w.position.set(n?-1.5:-1,n?4.5:3.7,n?.8:.6),e.add(w);const P=new J({color:3810326,roughness:.8}),D=new X(new jt(R*1.3,R*1.3,.15,8),P);D.position.copy(w.position),D.position.y+=v/2+.1,e.add(D);const S=this.createSmokeParticles(w.position,n);S.forEach(M=>e.add(M)),t.smokeData={particles:S,chimneyPosition:w.position.clone(),isFamilyHome:n,time:Math.random()*Math.PI*2},e.position.copy(t.location),e.position.y=0,e.lookAt(0,0,0),this.scene.add(e),this.obstacles.push(c),this.obstacles.push(o),t.structure=e,e.userData||(e.userData={}),e.userData.structureId=t.id,this.updateHomeVisuals(t),this.updateHomeSmoke(t)}createSmokeParticles(t,e){const n=document.createElement("canvas");n.width=64,n.height=64;const i=n.getContext("2d"),r=i.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(220, 220, 220, 0.8)"),r.addColorStop(.4,"rgba(200, 200, 200, 0.5)"),r.addColorStop(.7,"rgba(180, 180, 180, 0.2)"),r.addColorStop(1,"rgba(160, 160, 160, 0)"),i.fillStyle=r,i.fillRect(0,0,64,64);const o=new eh(n),a=new nl({map:o,transparent:!0,opacity:0,depthWrite:!1,blending:Xn}),l=e?5:4,c=[];for(let h=0;h<l;h++){const u=new Zc(a.clone()),d=e?.4:.35;u.scale.set(d,d,1),u.userData={offset:h/l*Math.PI*2,baseY:t.y+(e?.75:.65),progress:h/l,driftPhase:Math.random()*Math.PI*2},u.position.copy(t),u.position.y=u.userData.baseY+u.userData.progress*1.5,c.push(u)}return c}updateHomeSmoke(t){if(!t.smokeData||!t.structure)return;const e=t.occupantsInside&&t.occupantsInside.size>0;t.smokeData.particles.forEach(i=>{if(i.material){const r=e?1:0;i.material.opacity=ue.lerp(i.material.opacity,r,.05)}})}animateHomeSmoke(t,e){if(!t.smokeData||!t.structure||!t.occupantsInside||t.occupantsInside.size===0)return;const n=t.smokeData;n.time+=e*.5,n.particles.forEach(i=>{const r=i.userData;r.progress+=e*.15,r.progress>1&&(r.progress=0,r.driftPhase=Math.random()*Math.PI*2);const o=1.5*r.progress,a=Math.sin(n.time+r.driftPhase)*.3*r.progress;i.position.x=n.chimneyPosition.x+a,i.position.y=r.baseY+o,i.position.z=n.chimneyPosition.z+Math.cos(n.time+r.driftPhase)*.15*r.progress;const l=(n.isFamilyHome?.4:.35)*(1+r.progress*.8);if(i.scale.set(l,l,1),i.material){let h=1;r.progress>.6&&(h=1-(r.progress-.6)/(1-.6)),h*=Math.min(1,i.material.opacity*2),i.material.opacity=h*.7}})}createStorehouseStructure(t){const e=new de,n=new Ve(14,10),i=new J({color:7164214,roughness:.95,side:xe}),r=new X(n,i);r.rotation.x=-Math.PI/2,r.position.set(0,.01,0),e.add(r);const o=new Bi(6.8,7.2,32,1,Math.PI*.15,Math.PI*1.7),a=new J({color:10128248,side:xe,roughness:.85}),l=new X(o,a);l.rotation.x=-Math.PI/2,l.position.set(0,.012,0),e.add(l);const c=new Yt(6.8,.4,5.2),h=new J({color:4930090,roughness:.9}),u=new X(c,h);u.position.y=.2,u.position.x=-2.2,e.add(u);const d=new Yt(6.2,3.6,4.6),p=new J({color:9261872,roughness:.75}),g=new X(d,p);g.position.set(-2.2,2,0),e.add(g);const _=new J({color:6107925,roughness:.7});for(let tt=-2;tt<=2;tt++){const at=new X(new Yt(.18,3.5,.2),_);at.position.set(-2.2+tt*1.45,2,2.45),e.add(at);const lt=at.clone();lt.position.z=-2.45,e.add(lt)}const m=new J({color:4858640,roughness:.6}),f=new X(new Ve(7.2,4.8),m);f.rotation.x=Math.PI/2,f.rotation.z=Math.PI*.28,f.position.set(-2.2,4.3,-.2),e.add(f);const E=f.clone();E.rotation.z=-Math.PI*.28,E.position.set(-2.2,4.3,.2),e.add(E);const b=new X(new Yt(1.2,.8,1.2),new J({color:7225378,roughness:.7}));b.position.set(-2.2,4.75,0),e.add(b);const v=new X(new Xe(.9,.6,4),new J({color:3545613,roughness:.5}));v.position.copy(b.position),v.position.y+=.6,v.rotation.y=Math.PI/4,e.add(v);const R=new J({color:3875604,roughness:.65}),w=new X(new Yt(1.5,2.8,.12),R);w.position.set(-3.7,1.7,2.41),e.add(w);const P=w.clone();P.position.z=-2.41,e.add(P);const D=new X(new Yt(4.2,.3,1.2),new J({color:6041365,roughness:.6}));D.position.set(-3.6,3.2,0),D.rotation.z=Math.PI*.18,e.add(D);const S=new de;S.position.set(3.7,0,0),e.add(S);const M=new J({color:7033140,roughness:.85}),I=(tt,at)=>{const lt=new X(new Yt(tt,.18,at),M);return lt.position.y=.09,lt},F={},B=(tt,at)=>{const lt=new de;lt.position.copy(at.position),S.add(lt),lt.userData=lt.userData||{},lt.userData.structureId="storehouse",lt.userData.structureType="storehouse";const It=I(at.palletSize.x,at.palletSize.z);lt.add(It),It.userData=It.userData||{},It.userData.structureId="storehouse",It.userData.structureType="storehouse";let Ut;if(tt==="wood"){Ut=new de;for(let Vt=0;Vt<6;Vt++){const Nt=new X(new jt(.18,.2,1.4,12),new J({color:9067314,roughness:.7}));Nt.rotation.z=Math.PI/2,Nt.position.set(0,.22+.18*Vt,0),Nt.rotation.y=(Vt%2===0?1:-1)*.2,Ut.add(Nt)}}else if(tt==="stone")Ut=new X(new Mo(.85,1),new J({color:7368816,roughness:.85}));else if(tt==="leaves")Ut=new X(new be(.8,16,12),new J({color:5140532,roughness:.8}));else if(tt==="grain"){Ut=new de;const Vt=new J({color:13083243,roughness:.75});for(let Nt=0;Nt<4;Nt++){const $=new X(new jt(.28,.28,.8,12),Vt);$.position.set(Nt%2===0?-.22:.22,.4+Math.floor(Nt/2)*.45,Nt%2===0?-.24:.24),Ut.add($)}}else Ut=new X(new Yt(.8,.8,.8),new J({color:9206374,roughness:.8}));Ut.position.y=at.basePileY??.45,lt.add(Ut),Ut.userData=Ut.userData||{},Ut.userData.structureId="storehouse",Ut.userData.structureType="storehouse",F[tt]={group:lt,pile:Ut},lt.traverse(Vt=>{Vt.userData=Vt.userData||{},Vt.userData.structureId="storehouse",Vt.userData.structureType="storehouse"})};B("wood",{position:new A(.2,0,-2.6),palletSize:new A(2.4,1.6),basePileY:.45}),B("stone",{position:new A(.3,0,0),palletSize:new A(2,2),basePileY:.4}),B("leaves",{position:new A(.3,0,2.6),palletSize:new A(2.2,1.8),basePileY:.35}),B("grain",{position:new A(-2.4,0,0),palletSize:new A(1.8,1.6),basePileY:.45});const q=new J({color:16765562,emissive:16757575,emissiveIntensity:.6}),G=new X(new be(.22,12,12),q);G.position.set(2.1,2.6,2.6),e.add(G);const k=new gs(16756838,1.4,12);k.position.copy(G.position),e.add(k);const Z=new J({color:5914668,roughness:.85});[[-5.8,-4.6],[-3.2,-4.7],[-.6,-4.6],[2,-4.2],[4.3,-3.5],[5.6,-2],[5.8,1.8],[4.7,3.8],[2.2,4.6],[-.6,4.8],[-3,4.6],[-5.7,3.2]].forEach(([tt,at])=>{const lt=new X(new jt(.08,.08,1.1,8),Z);lt.position.set(tt,.55,at),e.add(lt)}),e.position.copy(t.location),e.position.y=0,e.lookAt(0,0,0),this.scene.add(e),this.obstacles.push(g),this.obstacles.push(u),e.traverse(tt=>{tt.userData=tt.userData||{},tt.userData.structureType="storehouse",tt.userData.structureId="storehouse"}),t.structure=e,t.resourceDisplays=F,t.dropPointLocal=new A(4.2,0,-1.2),this.updateStorehouseDropPoint(),this.updateStorehouseResourceDisplays()}updateHomeVisuals(t){if(!t.structure)return;t.structure.children.filter(l=>{var c;return(c=l.userData)==null?void 0:c.isBedIndicator}).forEach(l=>t.structure.remove(l));const i=[t.occupantId,t.partnerId].filter(Boolean).filter(l=>{const c=t.beds[l];return c&&c.built}).length,r=t.type==="family",o=new J({color:9139029,roughness:.7}),a=new J({color:15128515,roughness:.8});if(i>0){const l=r?[{x:-1.3,y:.6,z:.5},{x:-1.3,y:.6,z:-.5}]:[{x:0,y:.5,z:0}];for(let c=0;c<i&&c<l.length;c++){const h=new de;h.userData.isBedIndicator=!0;const u=new Yt(.4,.15,.7),d=new X(u,o);h.add(d);const p=new Yt(.35,.1,.65),g=new X(p,a);g.position.y=.125,h.add(g);const _=new Yt(.25,.08,.2),m=new X(_,new J({color:15787730,roughness:.9}));m.position.set(0,.17,-.2),h.add(m);const f=l[c];h.position.set(f.x,f.y,f.z),h.rotation.y=Math.PI/2,t.structure.add(h)}}}getHomeById(t){return this.homes.find(e=>e.id===t)||null}getHomeForVillager(t){return t.homeId?this.getHomeById(t.homeId):null}openStructureModal(t,e){this.structureModalElement&&(this.activeStructureContext={type:"home",homeId:t.id},this.structureModalElement.classList.remove("hidden"),this.structureModalElement.classList.add("visible"),this.structureModalElement.setAttribute("aria-hidden","false"),this.structureModalVisible=!0,this.populateStructureModal(t))}hideStructureModal(){this.structureModalElement&&(this.structureModalElement.classList.remove("visible"),this.structureModalElement.classList.add("hidden"),this.structureModalElement.setAttribute("aria-hidden","true"),this.structureModalVisible=!1,this.activeStructureContext=null)}openStorehouseModal(t=null){this.storehouseModalElement&&(this.storehouseModalElement.classList.remove("hidden"),this.storehouseModalElement.classList.add("visible"),this.storehouseModalElement.setAttribute("aria-hidden","false"),this.storehouseModalVisible=!0,this.populateStorehouseModal())}hideStorehouseModal(){this.storehouseModalElement&&(this.storehouseModalElement.classList.remove("visible"),this.storehouseModalElement.classList.add("hidden"),this.storehouseModalElement.setAttribute("aria-hidden","true"),this.storehouseModalVisible=!1)}showCropInfo(t,e=null){this.cropTooltipElement&&(this.selectedCrop=t,(!this.cropTooltipAnchor||this.cropTooltipAnchor.cropId!==((t==null?void 0:t.id)??null))&&(this.cropTooltipAnchor={cropId:(t==null?void 0:t.id)??null,side:"right"}),this.cropTooltipElement.classList.remove("hidden"),this.cropTooltipElement.classList.add("visible"),this.cropTooltipElement.setAttribute("aria-hidden","false"),this.cropTooltipVisible=!0,this.populateCropTooltip(t),this.positionCropTooltip(t,e))}hideCropTooltip(){this.cropTooltipElement&&(this.cropTooltipElement.classList.remove("visible"),this.cropTooltipElement.classList.add("hidden"),this.cropTooltipElement.setAttribute("aria-hidden","true"),this.cropTooltipVisible=!1,this.selectedCrop=null,this.cropTooltipAnchor=null)}populateCropTooltip(t){if(!t||!t.growth)return;const e=t.growth,n=e.stage==="mature";let i=n?100:typeof e.progressExact=="number"?e.progressExact:e.progressPercent??0;if(!n&&typeof e.durationMinutes=="number"&&e.durationMinutes>0){const o=typeof e.elapsedMinutes=="number"?e.elapsedMinutes:this.totalElapsedMinutes-(e.createdAtMinutes||0);i=ue.clamp(o/Math.max(e.durationMinutes,1e-4),0,.999)*100}n&&(i=100);const r=ue.clamp(i,0,100);if(e.progressExact=r,e.progressPercent=Math.round(r),this.cropTooltipTitle&&(this.cropTooltipTitle.textContent="Wheat Plot"),this.cropTooltipStatus&&(n?(this.cropTooltipStatus.textContent="Ready to Harvest",this.cropTooltipStatus.style.color="#4ade80"):(this.cropTooltipStatus.textContent="Growing",this.cropTooltipStatus.style.color="#fbbf24")),this.cropTooltipGrowthPercent){const o=n?"100%":`${r.toFixed(1)}%`;this.cropTooltipGrowthPercent.textContent=o,n?this.cropTooltipGrowthPercent.style.color="#4ade80":r>66?this.cropTooltipGrowthPercent.style.color="#a3e635":r>33?this.cropTooltipGrowthPercent.style.color="#fbbf24":this.cropTooltipGrowthPercent.style.color="#fb923c"}if(this.cropTooltipGrowthBar&&(this.cropTooltipGrowthBar.style.width=`${r}%`),this.cropTooltipPlanter)if(t.plantedBy){const o=this.getVillagerById(t.plantedBy);this.cropTooltipPlanter.textContent=(o==null?void 0:o.name)||"Unknown"}else this.cropTooltipPlanter.textContent="Unknown";if(this.cropTooltipTimeRemaining)if(n)this.cropTooltipTimeRemaining.textContent="Complete",this.cropTooltipTimeRemaining.style.color="#4ade80";else if(typeof e.matureAtMinutes=="number"){const a=Math.max(0,e.matureAtMinutes-this.totalElapsedMinutes)/this.dayLengthMinutes;this.cropTooltipTimeRemaining.textContent=`${a.toFixed(1)} days`,this.cropTooltipTimeRemaining.style.color="#f0f7ff"}else this.cropTooltipTimeRemaining.textContent="Unknown";if(this.cropTooltipYield){const o=t.capacity||16;this.cropTooltipYield.textContent=`${o} grain`}}populateStorehouseModal(){if(!this.storehouseModalFields)return;const t=this.storehouseModalFields,e=this.inventory||{},n=i=>(i??0).toLocaleString();if(t.woodValue&&(t.woodValue.textContent=n(e.wood)),t.stoneValue&&(t.stoneValue.textContent=n(e.stone)),t.leavesValue&&(t.leavesValue.textContent=n(e.leaves)),t.grainValue&&(t.grainValue.textContent=n(e.grain)),t.totalValue){const i=(e.wood??0)+(e.stone??0)+(e.leaves??0)+(e.grain??0);t.totalValue.textContent=i.toLocaleString()}}populateStructureModal(t){if(!this.structureModalElement)return;const e=this.structureModalElement.querySelector('[data-field="structure-title"]'),n=this.structureModalElement.querySelector('[data-field="structure-occupants"]'),i=this.structureModalElement.querySelector('[data-field="structure-details"]');if(e&&(e.textContent=t.type==="family"?"Family Home":"Cottage"),n){n.innerHTML="";const r=[t.occupantId,t.partnerId].filter(Boolean);if(r.length===0){const o=document.createElement("li");o.className="occupant-item",o.style.cursor="default",o.textContent="No residents yet.",n.appendChild(o)}else r.forEach(o=>{const a=this.getVillagerById(o);if(!a)return;const l=document.createElement("li");l.className="occupant-item";const c=document.createElement("div");c.className="info";const h=document.createElement("div");if(h.className="name",h.textContent=a.name,t.occupantsInside&&t.occupantsInside.has(o)){const _=document.createElement("span");_.textContent=" 🏠",_.style.fontSize="0.9em",_.title="Currently inside home",h.appendChild(_)}const d=t.beds[o];if(d&&d.built){const _=document.createElement("span");_.textContent=" 🛏️",_.style.fontSize="0.9em",_.title="Has a bed",h.appendChild(_)}const p=document.createElement("div");p.className="tag",t.partnerId&&o===t.partnerId?p.textContent="Partner":p.textContent=t.partnerId?"Spouse":"Resident",c.appendChild(h),c.appendChild(p);const g=document.createElement("div");if(g.className="status",g.textContent=a.getProfessionLabel(),l.appendChild(c),l.appendChild(g),t.built&&d&&!d.built&&!d.building){const _=document.createElement("button"),m=this.bedRequirements;this.inventory.wood>=m.wood&&this.inventory.leaves>=m.leaves?(_.textContent="Build Bed",_.title=`Use ${m.wood} wood, ${m.leaves} leaves from village stores`):(_.textContent="Gather & Build",_.title=`${a.name} will gather ${m.wood} wood & ${m.leaves} leaves, then build the bed`),_.className="build-bed-btn",_.style.cssText="padding: 4px 8px; font-size: 0.8em; margin-left: 8px; cursor: pointer;",_.addEventListener("click",E=>{E.stopPropagation(),this.requestManualBedBuild(t,o)}),l.appendChild(_)}else if(d&&d.building){const _=document.createElement("span");if(a.specialTask&&a.specialTask.type==="buildOwnBed"){const m=a.specialTask;m.state==="gatherWood"?_.textContent=`Gathering wood (${m.woodGathered}/${m.woodNeeded})`:m.state==="gatherLeaves"?_.textContent=`Gathering leaves (${m.leavesGathered}/${m.leavesNeeded})`:m.state==="buildBed"&&(_.textContent="Building...")}else _.textContent="Building...";_.style.cssText="font-size: 0.8em; color: #888; margin-left: 8px;",l.appendChild(_)}c.addEventListener("click",()=>{this.hideStructureModal(),this.openVillagerModal(a)}),c.style.cursor="pointer",n.appendChild(l)})}if(i){let r=t.built?"This home is ready and welcoming.":"Construction is underway.";if(t.occupantsInside&&t.occupantsInside.size>0){const o=Array.from(t.occupantsInside).map(a=>this.getVillagerById(a)).filter(Boolean).map(a=>a.name);o.length>0&&(r+=`

Currently inside: ${o.join(", ")}`)}i.textContent=r}}updateStructureModalPosition(){if(!this.structureModalVisible||!this.activeStructureContext||this.activeStructureContext.type!=="home")return;const t=this.getHomeById(this.activeStructureContext.homeId);if(!t||!t.structure){this.hideStructureModal();return}this.structureModalRefreshTimer||(this.structureModalRefreshTimer=0),this.structureModalRefreshTimer+=.016,this.structureModalRefreshTimer>=1&&(this.structureModalRefreshTimer=0,this.populateStructureModal(t))}updateBonfireFlicker(t){if(!this.bonfire.isLit||!this.bonfire.light)return;this.bonfire.flickerPhase+=t*6;const e=Math.sin(this.bonfire.flickerPhase)*.2+Math.sin(this.bonfire.flickerPhase*1.7+this.bonfire.randomOffset)*.15,n=this.bonfire.baseLightIntensity*(1+e*.3);if(this.bonfire.light.intensity=n,this.bonfire.flameMesh){const i=1+e*.25;this.bonfire.flameMesh.scale.set(i,i*1.35,i)}this.bonfire.flameMaterial&&(this.bonfire.flameMaterial.emissiveIntensity=1.4+e*.5),this.bonfire.emberMaterial&&(this.bonfire.emberMaterial.emissiveIntensity=.6+e*.3)}shouldVillagerAttendBonfire(t){var e;if(!this.bonfire.built||!this.bonfire.isLit||!this.isNight()||!t||((e=t.specialTask)==null?void 0:e.type)==="buildBonfire"||t===this.bonfire.builder||t.hasHome())return!1;if(t.isGatheringProfession()){if(t.carrying)return!1;const n=this.bonfireRequirements.nightlyFuel*2;if(this.inventory.wood<n)return!1}return!0}applyTooltipPosition(){if(!this.modalVisible||!this.modalElement||!this.modalAnchor)return;const t=this.modalElement.querySelector(".modal-card");if(!t)return;const e=18,n=t.getBoundingClientRect(),i=n.width||t.offsetWidth,r=n.height||t.offsetHeight;if(!i||!r)return;let o=this.modalAnchor.x+24,a=this.modalAnchor.y-r/2;t.classList.remove("flip-x"),o+i+e>window.innerWidth&&(o=this.modalAnchor.x-i-24,t.classList.add("flip-x")),o<e&&(o=e),a<e?a=e:a+r>window.innerHeight-e&&(a=window.innerHeight-e-r),this.modalElement.style.left=`${Math.round(o)}px`,this.modalElement.style.top=`${Math.round(a)}px`;const l=Math.max(18,Math.min(this.modalAnchor.y-a,r-18));t.style.setProperty("--tooltip-arrow-offset",`${Math.round(l)}px`)}getAllResourceNodes(){return[...this.resourceNodes.trees,...this.resourceNodes.stones,...this.resourceNodes.bushes]}getPreferredResourceTypes(){const t=[],e=this.bonfireRequirements.nightlyFuel*4;return this.inventory.wood<e&&t.push("wood"),this.inventory.grain<100&&t.push("grain"),this.inventory.leaves<80&&t.push("leaves"),this.inventory.stone<150&&t.push("stone"),["wood","grain","leaves","stone"].forEach(n=>{t.includes(n)||t.push(n)}),t}getVillagerName(t){const e=this.namePools[t]??[];if(e.length>0){const n=Math.floor(Math.random()*e.length),[i]=e.splice(n,1);return i}return`${t==="male"?"Brother":"Sister"} ${String(this.nextVillagerId).padStart(2,"0")}`}findResourceNodeForVillager(t,e=null){if(t.currentResource&&!t.currentResource.depleted&&t.currentResource.remaining>0)return t.currentResource;const n={wood:this.resourceNodes.trees,stone:this.resourceNodes.stones,leaves:this.resourceNodes.bushes,grain:this.resourceNodes.crops,wheatSeeds:this.resourceNodes.seedPatches},i=e?[e]:this.getPreferredResourceTypes();for(const r of i){const o=n[r];if(!o||o.length===0)continue;const a=o.filter(c=>!c.depleted&&c.remaining>0&&(!c.claimedBy||c.claimedBy===t.id));if(a.length===0)continue;a.sort((c,h)=>{const u=t.mesh.position.distanceToSquared(c.object.position),d=t.mesh.position.distanceToSquared(h.object.position);return u-d});const l=a[0];return l.claimedBy=t.id,l}return null}getVillagerById(t){return this.villagerById.get(t)||null}updateSocialSystems(t){const e=[];this.villagers.forEach(n=>{n.updateSocialNeeds(t),n.shouldSeekSocial()&&e.push(n)}),e.forEach(n=>{if(!n.isAvailableForSocial())return;const i=this.findSocialPartner(n);i&&this.startSocialInteraction(n,i)})}findSocialPartner(t){const n=this.villagers.filter(i=>!(i===t||!i.isAvailableForSocial()||i.socialCooldown>0||t.mesh.position.distanceTo(i.mesh.position)>12));return n.length===0?null:(n.sort((i,r)=>{const o=t.getRelationshipScore(i.id),a=t.getRelationshipScore(r.id);if(Math.abs(o-a)>1)return a-o;const l=t.mesh.position.distanceToSquared(i.mesh.position),c=t.mesh.position.distanceToSquared(r.mesh.position);return l-c}),n[0]||null)}startSocialInteraction(t,e){const n=this.getInteractionKey(t,e);if(this.activeSocialInteractions.has(n))return;this.activeSocialInteractions.add(n);const i=t.mesh.position.clone().add(e.mesh.position).multiplyScalar(.5);i.y=0,t.beginSocialInteraction(e,i),e.beginSocialInteraction(t,i)}completeSocialInteraction(t,e,n=1){const i=6+Math.random()*4+n;this.adjustRelationship(t,e,i),t.socialMeter=Math.min(100,t.socialMeter+28),e.socialMeter=Math.min(100,e.socialMeter+28),t.socialCooldown=10+Math.random()*5,e.socialCooldown=10+Math.random()*5,t.specialTask&&t.specialTask.type==="socialize"&&(t.specialTask.completed=!0,t.specialTask.state="wrap"),e.specialTask&&e.specialTask.type==="socialize"&&(e.specialTask.completed=!0,e.specialTask.state="wrap"),this.activeSocialInteractions.delete(this.getInteractionKey(t,e))}adjustRelationship(t,e,n){if(!t||!e)return;const i=this.ensureRelationshipEntry(t,e),r=this.ensureRelationshipEntry(e,t);i.score=ue.clamp((i.score??10)+n,0,100),r.score=ue.clamp((r.score??10)+n,0,100),i.lastInteraction=this.totalElapsedMinutes,r.lastInteraction=this.totalElapsedMinutes,this.relationshipCheckRomance(t,e,i.score,r.score),this.relationshipCheckRomance(e,t,r.score,i.score)}ensureRelationshipEntry(t,e){return t.relationships||(t.relationships=new Map),t.relationships.has(e.id)||t.relationships.set(e.id,{score:12,lastInteraction:this.totalElapsedMinutes}),t.relationships.get(e.id)}relationshipCheckRomance(t,e,n,i){if(!t||!e||t.gender===e.gender)return;const r=Math.min(n,i),o=78,a=52;if(t.romanticPartnerId===e.id&&e.romanticPartnerId===t.id){r<a&&(t.romanticPartnerId=null,e.romanticPartnerId=null,this.handleCoupleSeparation(t,e));return}r>=o&&!t.romanticPartnerId&&!e.romanticPartnerId&&(t.romanticPartnerId=e.id,e.romanticPartnerId=t.id,this.handleCoupleFormed(t,e))}getRelationshipSummaries(t){if(!t.relationships)return[];const e=[];return t.relationships.forEach((n,i)=>{const r=this.getVillagerById(i);if(!r)return;const o=Math.round(n.score??0),a=t.romanticPartnerId===i&&r.romanticPartnerId===t.id,l=this.getRelationshipStatus(o,a);e.push({id:i,name:r.name,score:o,status:l,isRomantic:a})}),e.sort((n,i)=>i.score-n.score),e.slice(0,8)}getRelationshipStatus(t,e){return e?t>=95?"Beloved":t>=85?"Partner":"Courtship":t>=90?"Kindred":t>=70?"Best Friend":t>=50?"Good Friend":t>=30?"Friend":t>=15?"Acquaintance":"Stranger"}getInteractionKey(t,e){return[t.id,e.id].sort((i,r)=>i-r).join(":")}handleCoupleFormed(t,e){var n,i;!t||!e||(!t.homeLocation&&e.homeLocation?(t.homeId=e.homeId,t.homeLocation=(n=e.homeLocation)==null?void 0:n.clone()):t.homeLocation&&!e.homeLocation&&(e.homeId=t.homeId,e.homeLocation=(i=t.homeLocation)==null?void 0:i.clone()),this.homes.forEach(r=>{r&&r.built&&(r.occupantId===t.id||r.occupantId===e.id)&&(r.occupantId=null)}))}handleCoupleSeparation(t,e){!t||!e||(t.homeId=null,t.homeLocation=null,e.homeId=null,e.homeLocation=null)}releaseResourceClaim(t,e){t&&(!e||t.claimedBy===e.id)&&(t.claimedBy=null)}markResourceDepleted(t){var e;!t||t.depleted||(t.depleted=!0,t.remaining=0,((e=t.object)==null?void 0:e.visible)!==void 0&&(t.object.visible=!1),this.removeObstacle(t.object))}removeObstacle(t){const e=this.obstacles.indexOf(t);e!==-1&&this.obstacles.splice(e,1)}depositResources(t){!t||t.amount<=0||this.inventory[t.type]!==void 0&&(this.inventory[t.type]+=t.amount,this.updateResourceDisplay(),this.maybeTriggerBonfireBuild())}getTownCenterDropPoint(){const t=Math.random()*2.2,e=Math.random()*Math.PI*2;return new A(Math.cos(e)*t,0,Math.sin(e)*t)}getResourceDropPoint(){const t=this.getStorehouseDropPoint();return t||this.getTownCenterDropPoint()}getStorehouseDropPoint(){if(!this.storehouse||!this.storehouse.built||!this.storehouse.structure)return null;const t=this.updateStorehouseDropPoint();return t?t.clone():null}updateStorehouseDropPoint(){if(!this.storehouse||!this.storehouse.built||!this.storehouse.structure)return null;const e=(this.storehouse.dropPointLocal??new A(4.2,0,-1.2)).clone();return this.storehouse.structure.localToWorld(e),e.y=0,this.storehouse.dropPoint=e,e}updateStorehouseResourceDisplays(){if(!this.storehouse||!this.storehouse.built)return;this.storehouse.resourceDisplays||(this.storehouse.resourceDisplays={});const t=this.inventory||{},e=this.storehouse.resourceDisplays,n=(o,a)=>{o!=null&&o.group&&(o.group.visible=a)},i=(o,a,l)=>{if(!(o!=null&&o.pile))return;const c=l.maxAmount??200,h=Math.min(1,a/Math.max(1,c));if(l.uniform){const g=l.baseUniform??.7,_=l.uniformRange??.6,m=g+h*_;if(o.pile.scale.set(m,m,m),l.adjustY&&o.pile.position){const f=l.baseY??.35;o.pile.position.y=f+(m-g)*(l.offsetMultiplier??.35)}return}const u=l.baseScaleY??.3,d=l.scaleRange??1.6,p=u+h*d;o.pile.scale.y=p,l.adjustY&&o.pile.position&&(o.pile.position.y=l.baseY??.4+(p-u)*(l.offsetMultiplier??.4))};Object.entries({wood:{maxAmount:240,baseScaleY:.4,scaleRange:1.8,baseY:.45,offsetMultiplier:.45,adjustY:!0},stone:{maxAmount:240,uniform:!0,baseUniform:.7,uniformRange:.6,baseY:.38,offsetMultiplier:.4,adjustY:!0},leaves:{maxAmount:160,uniform:!0,baseUniform:.6,uniformRange:.55,baseY:.35,offsetMultiplier:.45,adjustY:!0},grain:{maxAmount:120,uniform:!0,baseUniform:.75,uniformRange:.5,baseY:.4,offsetMultiplier:.4,adjustY:!0}}).forEach(([o,a])=>{const l=t[o]??0,c=e[o];n(c,l>.01),i(c,l,a)}),this.storehouseModalVisible&&this.populateStorehouseModal()}createVillageCenter(){const t=new de,e=[],n=new Hn(this.townCenterRadius*.9,48),i=new J({color:9141083,roughness:.9}),r=new X(n,i);r.rotation.x=-Math.PI/2,r.position.y=.02,t.add(r);const o=new Bi(this.townCenterRadius*.9,this.townCenterRadius,48),a=new J({color:4008735,side:xe,roughness:.8}),l=new X(o,a);l.rotation.x=-Math.PI/2,l.position.y=.025,t.add(l);const c=new Ve(3,10),h=new J({color:7296833,roughness:.95,side:xe}),u=new X(c,h);u.rotation.x=-Math.PI/2,u.position.set(0,.021,-6),t.add(u);const d=new Yt(12,1,12),p=new J({color:7363393,roughness:.6}),g=new X(d,p);g.position.y=.5,t.add(g),e.push(g);const _=new Yt(8,4,6),m=new J({color:13350301,roughness:.5}),f=new X(_,m);f.position.y=3,t.add(f),e.push(f);const E=new Xe(6,4,4),b=new J({color:4858900,roughness:.4,metalness:.1}),v=new X(E,b);v.position.y=7,v.rotation.y=Math.PI/4,t.add(v);const R=new Yt(5,.4,3),w=new J({color:5916210,roughness:.7}),P=new X(R,w);P.position.set(0,1.2,4.6),t.add(P),e.push(P);const D=new Yt(5.2,.3,3.2),S=new J({color:3875346,roughness:.5}),M=new X(D,S);M.position.set(0,2.7,4.6),t.add(M);const I=new jt(.18,.22,2.8,6),F=new J({color:6964001,roughness:.8}),B=new X(I,F);B.position.set(-2.3,1.9,5.8),t.add(B),e.push(B);const q=B.clone();q.position.x=2.3,t.add(q),e.push(q);const G=new Yt(1.8,2.6,.2),k=new J({color:3810068,roughness:.7}),Z=new X(G,k);Z.position.set(0,2.3,3.3),t.add(Z);const H=new be(.1,8,8),tt=new J({color:14195516,metalness:.8,roughness:.3}),at=new X(H,tt);at.position.set(.8,2.3,3.4),t.add(at);const lt=new Yt(1.2,1.2,.1),It=new J({color:14411763,roughness:.2,metalness:.1,transparent:!0,opacity:.85}),Ut=new X(lt,It);Ut.position.set(-2.2,3.4,3.1),t.add(Ut);const Vt=Ut.clone();Vt.position.x=2.2,t.add(Vt);const Nt=new Ve(1,2.4),$=new J({color:7019055,side:xe,roughness:.8}),Y=new X(Nt,$);Y.position.set(-3.4,3,3.4),Y.rotation.y=Math.PI/8,t.add(Y);const rt=Y.clone();rt.position.x=3.4,rt.rotation.y=-Math.PI/8,t.add(rt);const ut=new jt(0,.4,.8,4),ht=new J({color:14205295,roughness:.4,metalness:.5}),Tt=new X(ut,ht);Tt.position.set(0,5.4,3.1),t.add(Tt);const re=new Yt(1,2,1),C=new J({color:7033409,roughness:.7}),Zt=new X(re,C);Zt.position.set(-2.5,6.5,-1.5),t.add(Zt),e.push(Zt);const Ot=new jt(.05,.07,.6,6),Dt=new J({color:4008730}),gt=new X(Ot,Dt);gt.position.set(-2.2,2.8,5.9),gt.rotation.z=Math.PI/2,t.add(gt),e.push(gt);const Qt=gt.clone();Qt.position.x=2.2,t.add(Qt),e.push(Qt);const Mt=new be(.15,10,10),zt=new J({color:16175739,emissive:16756312,emissiveIntensity:.6}),pe=new X(Mt,zt);pe.position.copy(gt.position).add(new A(.5,-.1,0)),t.add(pe);const le=pe.clone();le.position.copy(Qt.position).add(new A(-.5,-.1,0)),t.add(le);const T=new gs(16756070,.7,12);T.position.copy(pe.position).add(new A(0,.2,0)),t.add(T);const x=T.clone();x.position.copy(le.position).add(new A(0,.2,0)),t.add(x);const O=new jt(1.5,1.5,1.2,16),j=new J({color:9276813,roughness:.85}),Q=new X(O,j);Q.position.set(-5,.6,-3),t.add(Q),e.push(Q);const W=new jt(1.2,1.2,.4,16),wt=new J({color:4021647,roughness:.3,metalness:.1}),ot=new X(W,wt);ot.position.set(-5,.3,-3),t.add(ot);const yt=new jt(.12,.15,2.5,6),bt=new J({color:8082995,roughness:.75}),et=new X(yt,bt);et.position.set(4.5,1.25,-2.5),t.add(et),e.push(et);const ft=new Yt(2.2,1.4,.15),Pt=new J({color:11831898,roughness:.8}),St=new X(ft,Pt);return St.position.set(4.5,1.9,-2.5),t.add(St),{group:t,obstacles:e}}isInsideTownCenter(t,e=0){return Math.sqrt(t.x*t.x+t.z*t.z)<this.townCenterRadius+e}getRandomPosition(t,e=0){let n=new A,i=0;const r=50;do n.set(Math.random()*t*2-t,0,Math.random()*t*2-t),i++;while(this.isInsideTownCenter(n,e)&&i<r);if(this.isInsideTownCenter(n,e)){const o=Math.random()*Math.PI*2,a=this.townCenterRadius+e+2;n.set(Math.cos(o)*a,0,Math.sin(o)*a)}return n.clone()}createTreeResource(t,e={}){const n=e.scale??1,i=e.stage??"mature",r=new de;r.position.set(t.x,t.y??0,t.z);const o=i==="sapling",a=o?this.buildSaplingVisual(n,{preview:!1}):this.buildMatureTreeVisual(n);r.add(a),r.rotation.y=Math.random()*Math.PI*2,this.scene.add(r),this.obstacles.push(r);const l=e.capacity??60+Math.floor(Math.random()*40),c=Math.max(20,Math.round(l)),h=o?0:c,u=`tree-${this.resourceNodes.trees.length+1}`;r.userData=r.userData||{},r.userData.treeNodeId=u,r.userData.growthStage=i;const d=o?Math.max(0,e.matureInMinutes??this.dayLengthMinutes*2):null,p={id:u,type:"wood",object:r,position:r.position.clone(),remaining:h,capacity:c,claimedBy:null,depleted:!1,plantedBy:e.plantedBy??null,visual:a,growth:{stage:i,baseScale:n,createdAtMinutes:this.totalElapsedMinutes,matureAtMinutes:o&&d?this.totalElapsedMinutes+d:null,durationMinutes:d,growDays:e.growDays??null}};return this.resourceNodes.trees.push(p),o&&this.updateSaplingVisual(p,0),p}createCropResource(t,e={}){const n=e.scale??1,i=e.stage??"mature",r=new de;r.position.set(t.x,t.y??0,t.z);const o=i==="sapling",a=o?this.buildWheatSeedlingVisual(n,{preview:!1}):this.buildMatureWheatVisual(n);r.add(a),r.rotation.y=Math.random()*Math.PI*2,this.scene.add(r),this.obstacles.push(r);const l=e.capacity??16,c=Math.max(8,Math.round(l)),h=o?0:c,u=`crop-${this.resourceNodes.crops.length+1}`;r.userData=r.userData||{},r.userData.cropNodeId=u,r.userData.growthStage=i,r.traverse(g=>{g.userData=g.userData||{},g.userData.cropNodeId=u});const d=o?Math.max(0,e.matureInMinutes??this.dayLengthMinutes*1):null,p={id:u,type:"grain",object:r,position:r.position.clone(),remaining:h,capacity:c,claimedBy:null,depleted:!1,plantedBy:e.plantedBy??null,visual:a,growth:{stage:i,baseScale:n,createdAtMinutes:this.totalElapsedMinutes,matureAtMinutes:o&&d?this.totalElapsedMinutes+d:null,durationMinutes:d,growDays:e.growDays??null,progress:o?0:1,progressPercent:o?0:100,progressExact:o?0:100,elapsedMinutes:o?0:d??0}};return this.resourceNodes.crops.push(p),o&&this.updateCropSeedlingVisual(p,0),p}buildMatureTreeVisual(t=1,e={}){const n=new de,i=3.5*t,r=.45*t,o=.55*t,a=new J({color:9132587}),l=new jt(r,o,i,10),c=new X(l,a);c.position.y=i/2,c.castShadow=!1,c.receiveShadow=!1,n.add(c);const h=new Xe(2.8*t,4.4*t,12),u=new J({color:2055962}),d=new X(h,u);d.position.y=i*.92,d.castShadow=!1,d.receiveShadow=!1,n.add(d);const p=new Xe(2*t,3*t,10),g=new J({color:2451997}),_=new X(p,g);return _.position.y=d.position.y+1.4*t,n.add(_),e.preview&&n.traverse(m=>{m.isMesh&&(m.material=m.material.clone(),m.material.transparent=!0,m.material.opacity=.6,m.material.depthWrite=!1)}),n}buildSaplingVisual(t=1,{preview:e=!1}={}){const n=new de,i=1.8*t,r=new jt(.12*t,.2*t,i,8),o=new J({color:9068856}),a=new X(r,o);a.position.y=i/2,n.add(a);const l=new be(.62*t,10,10),c=new J({color:3045942}),h=new X(l,c);h.position.y=i*.78,n.add(h);const u=new Xe(.45*t,.95*t,10),d=new J({color:3313723}),p=new X(u,d);return p.position.y=h.position.y+.6*t,n.add(p),e&&n.traverse(g=>{g.isMesh&&(g.material=g.material.clone(),g.material.transparent=!0,g.material.opacity=.65,g.material.depthWrite=!1)}),n}buildWheatPlotPreview(t=1,{preview:e=!1}={}){const n=new de,i=3*t,r=new Ve(i,i),o=new J({color:7033668,roughness:.95,side:xe}),a=new X(r,o);a.rotation.x=-Math.PI/2,a.position.y=.01,n.add(a);const l=.08*t,c=new J({color:5915957,roughness:.9});return[{width:i,height:l,x:0,z:i/2+l/2},{width:i,height:l,x:0,z:-i/2-l/2},{width:l,height:i+l*2,x:i/2+l/2,z:0},{width:l,height:i+l*2,x:-i/2-l/2,z:0}].forEach(u=>{const d=new Ve(u.width,u.height),p=new X(d,c);p.rotation.x=-Math.PI/2,p.position.set(u.x,.015,u.z),n.add(p)}),e&&n.traverse(u=>{u.isMesh&&(u.material=u.material.clone(),u.material.transparent=!0,u.material.opacity=.7,u.material.depthWrite=!1)}),n}buildWheatSeedlingVisual(t=1,{preview:e=!1}={}){const n=new de,i=3*t,r=new Ve(i,i),o=new J({color:7033668,roughness:.95,side:xe}),a=new X(r,o);return a.rotation.x=-Math.PI/2,a.position.y=.01,n.add(a),[{x:0,z:0},{x:.6,z:.6},{x:-.6,z:.6},{x:.6,z:-.6},{x:-.6,z:-.6},{x:.9,z:0},{x:-.9,z:0},{x:0,z:.9},{x:0,z:-.9},{x:.6,z:0},{x:-.6,z:0},{x:0,z:.6},{x:0,z:-.6}].forEach(c=>{const h=(.08+Math.random()*.04)*t,u=new jt(.008*t,.012*t,h,4),d=new J({color:8170798}),p=new X(u,d);p.position.set(c.x*t,h/2,c.z*t),n.add(p);const g=new be(.025*t,4,4),_=new J({color:9159498}),m=new X(g,_);m.position.set(c.x*t,h,c.z*t),m.scale.set(1,.5,.8),n.add(m)}),e&&n.traverse(c=>{c.isMesh&&(c.material=c.material.clone(),c.material.transparent=!0,c.material.opacity=.65,c.material.depthWrite=!1)}),n}buildMatureWheatVisual(t=1,{preview:e=!1}={}){const n=new de,i=3*t,r=new Ve(i,i),o=new J({color:8021328,roughness:.9,side:xe}),a=new X(r,o);return a.rotation.x=-Math.PI/2,a.position.y=.01,n.add(a),[{x:-1,z:-1},{x:-1,z:-.75},{x:-1,z:-.5},{x:-1,z:-.25},{x:-1,z:0},{x:-1,z:.25},{x:-1,z:.5},{x:-1,z:.75},{x:-1,z:1},{x:-.75,z:-1},{x:-.75,z:-.75},{x:-.75,z:-.5},{x:-.75,z:-.25},{x:-.75,z:0},{x:-.75,z:.25},{x:-.75,z:.5},{x:-.75,z:.75},{x:-.75,z:1},{x:-.5,z:-1},{x:-.5,z:-.75},{x:-.5,z:-.5},{x:-.5,z:-.25},{x:-.5,z:0},{x:-.5,z:.25},{x:-.5,z:.5},{x:-.5,z:.75},{x:-.5,z:1},{x:-.25,z:-1},{x:-.25,z:-.75},{x:-.25,z:-.5},{x:-.25,z:-.25},{x:-.25,z:0},{x:-.25,z:.25},{x:-.25,z:.5},{x:-.25,z:.75},{x:-.25,z:1},{x:0,z:-1},{x:0,z:-.75},{x:0,z:-.5},{x:0,z:-.25},{x:0,z:0},{x:0,z:.25},{x:0,z:.5},{x:0,z:.75},{x:0,z:1},{x:.25,z:-1},{x:.25,z:-.75},{x:.25,z:-.5},{x:.25,z:-.25},{x:.25,z:0},{x:.25,z:.25},{x:.25,z:.5},{x:.25,z:.75},{x:.25,z:1},{x:.5,z:-1},{x:.5,z:-.75},{x:.5,z:-.5},{x:.5,z:-.25},{x:.5,z:0},{x:.5,z:.25},{x:.5,z:.5},{x:.5,z:.75},{x:.5,z:1},{x:.75,z:-1},{x:.75,z:-.75},{x:.75,z:-.5},{x:.75,z:-.25},{x:.75,z:0},{x:.75,z:.25},{x:.75,z:.5},{x:.75,z:.75},{x:.75,z:1},{x:1,z:-1},{x:1,z:-.75},{x:1,z:-.5},{x:1,z:-.25},{x:1,z:0},{x:1,z:.25},{x:1,z:.5},{x:1,z:.75},{x:1,z:1}].forEach(h=>{const u=(.7+Math.random()*.15)*t,d=new jt(.015*t,.02*t,u,5),p=new J({color:13934615}),g=new X(d,p);g.position.set(h.x*t,u/2,h.z*t),g.rotation.z=(Math.random()-.5)*.1,n.add(g);const _=new Yt(.06*t,.12*t,.05*t),m=new J({color:16041008}),f=new X(_,m);f.position.set(h.x*t,u+.06*t,h.z*t),f.rotation.y=Math.random()*Math.PI,n.add(f)}),[{x:.15,z:0},{x:-.15,z:.05},{x:0,z:.18}].forEach(h=>{const u=(.9+Math.random()*.1)*t,d=new jt(.018*t,.025*t,u,6),p=new J({color:14923045}),g=new X(d,p);g.position.set(h.x*t,u/2,h.z*t),n.add(g);const _=new be(.045*t,6,6),m=new J({color:16766720}),f=new X(_,m);f.position.set(h.x*t,u+.04*t,h.z*t),f.scale.set(1,1.4,.9),n.add(f)}),e&&n.traverse(h=>{h.isMesh&&(h.material=h.material.clone(),h.material.transparent=!0,h.material.opacity=.65,h.material.depthWrite=!1)}),n}buildWheatSeedPatchVisual(t=1){const e=new de;[{x:0,z:0},{x:.15,z:.1},{x:-.12,z:.08},{x:.08,z:-.15},{x:-.1,z:-.12}].forEach(a=>{const l=(.4+Math.random()*.15)*t,c=new jt(.015*t,.02*t,l,5),h=new J({color:12096299}),u=new X(c,h);u.position.set(a.x*t,l/2,a.z*t),u.rotation.z=(Math.random()-.5)*.15,e.add(u);const d=new be(.06*t,6,6),p=new J({color:14927207}),g=new X(d,p);g.position.set(a.x*t,l+.05*t,a.z*t),g.scale.set(1,1.3,.8),e.add(g)});const i=new Hn(.25*t,8),r=new J({color:7048739,side:xe}),o=new X(i,r);return o.rotation.x=-Math.PI/2,o.position.y=.01,e.add(o),e}updateTreeGrowth(){var e;if(!((e=this.resourceNodes)!=null&&e.trees))return;const t=this.totalElapsedMinutes;this.resourceNodes.trees.forEach(n=>{if(!n||n.depleted)return;const i=n.growth;if(i&&i.stage==="sapling"){if(i.matureAtMinutes!==null&&t>=i.matureAtMinutes){this.matureTree(n);return}if(i.durationMinutes){const r=t-(i.createdAtMinutes??t),o=ue.clamp(r/Math.max(i.durationMinutes,1e-4),0,.999);this.updateSaplingVisual(n,o)}}})}updateSaplingVisual(t,e){if(!(t!=null&&t.object))return;const n=ue.smoothstep(e,0,1),i=ue.lerp(.7,1,n);t.object.scale.setScalar(i)}matureTree(t){if(!t||!t.object)return;const e=t.growth||(t.growth={});[...t.object.children].forEach(o=>{t.object.remove(o),o.traverse(a=>{var l,c,h,u;a.isMesh&&((c=(l=a.geometry)==null?void 0:l.dispose)==null||c.call(l),(u=(h=a.material)==null?void 0:h.dispose)==null||u.call(h))})});const i=this.buildMatureTreeVisual(e.baseScale??1);t.object.add(i),t.object.scale.setScalar(1),t.visual=i,t.remaining=t.capacity,t.position=t.object.position.clone(),t.claimedBy=null,t.depleted=!1;const r=e.durationMinutes??e.elapsedMinutes??0;if(e.stage="mature",e.matureAtMinutes=null,e.durationMinutes=null,e.progress=1,e.progressPercent=100,e.progressExact=100,e.elapsedMinutes=r,t.object.userData=t.object.userData||{},t.object.userData.treeNodeId=t.id,t.object.userData.growthStage="mature",!e.notifiedMature){const o=t.plantedBy?this.getVillagerById(t.plantedBy):null,a=(o==null?void 0:o.name)||"A forester";this.showActionHint(`${a}'s sapling has grown into a sturdy tree!`),e.notifiedMature=!0}}updateCropGrowth(){var e;if(!((e=this.resourceNodes)!=null&&e.crops))return;const t=this.totalElapsedMinutes;this.resourceNodes.crops.forEach(n=>{if(!n||n.depleted)return;const i=n.growth;if(i&&i.stage==="sapling"){if(i.matureAtMinutes!==null&&t>=i.matureAtMinutes){this.matureCrop(n);return}if(i.durationMinutes){const r=t-(i.createdAtMinutes??t),o=ue.clamp(r/Math.max(i.durationMinutes,1e-4),0,.999);i.elapsedMinutes=Math.max(0,r),i.progress=o;const a=o*100;i.progressExact=Math.min(99.9,a),i.progressPercent=Math.min(99,Math.round(a)),this.updateCropSeedlingVisual(n,o)}}})}updateCropSeedlingVisual(t,e){if(!(t!=null&&t.object))return;const n=ue.smoothstep(e,0,1),i=ue.lerp(.6,1,n);t.object.scale.setScalar(i)}matureCrop(t){if(!t||!t.object)return;const e=t.growth||(t.growth={});[...t.object.children].forEach(o=>{t.object.remove(o),o.traverse(a=>{var l,c,h,u;a.isMesh&&((c=(l=a.geometry)==null?void 0:l.dispose)==null||c.call(l),(u=(h=a.material)==null?void 0:h.dispose)==null||u.call(h))})});const i=this.buildMatureWheatVisual(e.baseScale??1);t.object.add(i),t.object.scale.setScalar(1),t.visual=i,t.remaining=t.capacity,t.position=t.object.position.clone(),t.claimedBy=null,t.depleted=!1;const r=e.durationMinutes??e.elapsedMinutes??0;if(e.stage="mature",e.matureAtMinutes=null,e.durationMinutes=null,e.progress=1,e.progressPercent=100,e.progressExact=100,e.elapsedMinutes=r,t.object.userData=t.object.userData||{},t.object.userData.cropNodeId=t.id,t.object.userData.growthStage="mature",t.object.traverse(o=>{o.userData=o.userData||{},o.userData.cropNodeId=t.id}),!e.notifiedMature){const o=t.plantedBy?this.getVillagerById(t.plantedBy):null,a=(o==null?void 0:o.name)||"A farmer";this.showActionHint(`${a}'s wheat has ripened and is ready for harvest!`),e.notifiedMature=!0}}addTrees(t){for(let e=0;e<t;e++){const n=this.getRandomPosition(40,2),i=60+Math.floor(Math.random()*40),r=.9+Math.random()*.25;this.createTreeResource(n,{capacity:i,scale:r,stage:"mature"})}}addBushes(t){for(let e=0;e<t;e++){const n=this.getRandomPosition(40,1.5),i=new be(1.1,8,8),r=new J({color:3112239}),o=new X(i,r);o.position.set(n.x,.55,n.z),this.scene.add(o),this.obstacles.push(o);const a=40+Math.floor(Math.random()*30);this.resourceNodes.bushes.push({id:`bush-${this.resourceNodes.bushes.length+1}`,type:"leaves",object:o,position:o.position.clone(),remaining:a,capacity:a,claimedBy:null,depleted:!1})}}addWheatSeedPatches(t){for(let e=0;e<t;e++){const n=this.getRandomPosition(38,2),i=.8+Math.random()*.4,r=this.buildWheatSeedPatchVisual(i);r.position.set(n.x,0,n.z),r.rotation.y=Math.random()*Math.PI*2,this.scene.add(r);const o=4+Math.floor(Math.random()*5),a={id:`seed-patch-${this.resourceNodes.seedPatches.length+1}`,type:"wheatSeeds",object:r,position:r.position.clone(),remaining:o,capacity:o,claimedBy:null,depleted:!1};r.userData.seedPatchNodeId=a.id,this.resourceNodes.seedPatches.push(a)}}addPonds(t){for(let e=0;e<t;e++){const n=this.getRandomPosition(35,4),i=new Hn(3+Math.random()*2,32),r=new J({color:4286945,side:xe}),o=new X(i,r);o.rotation.x=-Math.PI/2,o.position.set(n.x,.02,n.z),this.scene.add(o),this.obstacles.push(o)}}addStoneClusters(t){for(let n=0;n<t;n++){const i=this.getRandomPosition(35,6);i.y=0;const r=new de;r.position.copy(i);const o=3+Math.floor(Math.random()*3);for(let d=0;d<o;d++){const p=1.2*(.6+Math.random()*.9),g=new vo(p,1),_=.05*Math.random(),m=new J({color:new qt().setHSL(.6-_,.1,.45+Math.random()*.1),roughness:.95,metalness:.05}),f=new X(g,m),E=.4+Math.random()*1.5,b=Math.random()*Math.PI*2;f.position.set(Math.cos(b)*E,p*.4,Math.sin(b)*E),f.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),r.add(f)}const a=new Xe(.15,.25,8),l=new J({color:6184542,roughness:.9});for(let d=0;d<6;d++){const p=new X(a,l),g=.6+Math.random()*1.2,_=Math.random()*Math.PI*2;p.position.set(Math.cos(_)*g,.12,Math.sin(_)*g),p.rotation.x=Math.PI/2+Math.random()*.3,p.rotation.z=Math.random()*Math.PI,r.add(p)}const c=new jt(.25,.35,.3,8),h=new J({color:7763574,roughness:.92});for(let d=0;d<4;d++){const p=new X(c,h),g=.3+Math.random()*.8,_=Math.random()*Math.PI*2;p.position.set(Math.cos(_)*g,.15,Math.sin(_)*g),p.rotation.y=Math.random()*Math.PI,r.add(p)}this.scene.add(r),this.obstacles.push(r);const u=140+Math.floor(Math.random()*80);this.resourceNodes.stones.push({id:`stone-${this.resourceNodes.stones.length+1}`,type:"stone",object:r,position:r.position.clone(),remaining:u,capacity:u,claimedBy:null,depleted:!1})}}spawnVillagers(t){for(let e=0;e<t;e++){const n=this.getRandomVillageSquarePosition(),i=this.getVillagerProfile({tier:"basic"}),r=new fm(this,i,n,{townCenterRadius:this.townCenterRadius,wanderRadius:38});this.scene.add(r.mesh),this.villagers.push(r),this.villagerById.set(r.id,r)}}getRandomVillageSquarePosition(){const e=Math.max(8,this.townCenterRadius-1),n=Math.random()*Math.PI*2,i=7+Math.random()*(e-7);return new A(Math.cos(n)*i,0,Math.sin(n)*i)}getVillagerProfile({tier:t="basic"}={}){const e=["male","female"],n=e[Math.floor(Math.random()*e.length)];return{gender:n,tier:t,name:this.getVillagerName(n),profession:"gatherer",outfit:this.getVillagerOutfit(n,t)}}getVillagerOutfit(t,e){const r=t==="male"?{basic:[{tunic:7362878,trim:3944225,accent:10782306,boots:2892055,hat:4338213,hood:4338213,hair:3417110,beard:2824976},{tunic:6245172,trim:2958103,accent:10124882,boots:2497555,hat:4008991,hood:4008991,hair:3286298,beard:2760468},{tunic:8020296,trim:4404005,accent:11966068,boots:3417369,hat:4864041,hood:4864041,hair:3811869,beard:3219989}],standard:[{tunic:7048519,trim:3030303,accent:13939843,boots:3812384,hat:2956043,hood:4477755,hair:3089429,beard:2824716},{tunic:9195307,trim:4203032,accent:13215339,boots:3088663,hat:3876374,hood:6044712,hair:4008474,beard:2496013},{tunic:5073561,trim:2109519,accent:12567510,boots:2764090,hat:2042429,hood:3623017,hair:2039590,beard:1710624},{tunic:10256218,trim:5126688,accent:14992265,boots:3813151,hat:6111268,hood:7230517,hair:3547665,beard:3153166},{tunic:5465172,trim:2896939,accent:13482893,boots:2564632,hat:2040860,hood:3820092,hair:2565404,beard:2301718}]}:{basic:[{tunic:9202514,trim:4797477,accent:13476733,boots:3811873,hat:5915441,hood:5915441,hair:3810848},{tunic:10189407,trim:5585448,accent:14728850,boots:4337442,hat:7098168,hood:7098168,hair:4467487},{tunic:7823947,trim:4140320,accent:12557427,boots:3483421,hat:5455917,hood:5455917,hair:3548443}],standard:[{tunic:11760491,trim:5909800,accent:15845042,boots:4860455,hat:7684163,hood:12883090,hair:5058088},{tunic:7179362,trim:4411711,accent:14669485,boots:3879461,hat:6048308,hood:9142367,hair:4009245},{tunic:8681386,trim:4142941,accent:14470379,boots:3288132,hat:4667487,hood:6904459,hair:3089988},{tunic:12622187,trim:7229234,accent:15980197,boots:5125668,hat:8674877,hood:11568214,hair:4862240},{tunic:8098979,trim:3952474,accent:13164005,boots:3095107,hat:4610144,hood:6783375,hair:2898500}]},o=r[e]??r.basic;return o[Math.floor(Math.random()*o.length)]}animate(){requestAnimationFrame(()=>this.animate());const t=this.clock.getDelta(),e=this.simulationPaused?0:t*this.timeMultiplier;if(!this.simulationPaused){this.advanceTime(e),this.updateSocialSystems(e),this.villagers.forEach(i=>i.update(e,this.obstacles)),this.updateBonfireFlicker(e),this.homes.forEach(i=>{i.built&&i.smokeData&&(this.updateHomeSmoke(i),this.animateHomeSmoke(i,e))}),this.treeGrowthAccumulator+=e;const n=.6;for(;this.treeGrowthAccumulator>=n;)this.updateTreeGrowth(),this.updateCropGrowth(),this.treeGrowthAccumulator-=n}this.structureModalVisible&&this.updateStructureModalPosition(),this.cropTooltipVisible&&this.selectedCrop&&this.positionCropTooltip(this.selectedCrop),this.renderer.render(this.scene,this.camera)}}class fm{constructor(t,e,n,i={}){const{gender:r,outfit:o,tier:a="basic",name:l}=e,{townCenterRadius:c=12,wanderRadius:h=40}=i;this.manager=t,this.id=t.nextVillagerId++,this.name=l??`Villager ${String(this.id).padStart(2,"0")}`,this.gender=r,this.outfit=o,this.tier=a,this.innerAvoidRadius=Math.max(6,c-6),this.plazaRadius=Math.max(this.innerAvoidRadius+1,c-.5),this.wanderRadius=h,this.profession=e.profession??"gatherer",this.state=this.isGatheringProfession()?"seekingResource":"wandering",this.currentResource=null,this.carrying=null,this.gatherTimer=0,this.mesh=new de,this.createAppearance(),this.mesh.position.copy(n),this.mesh.userData.villager=this,this.mesh.name=this.name,this.speed=1.4+Math.random()*.9,this.target=this.isGatheringProfession()?null:this.getRandomTarget(),this.timeToNextTarget=Math.random()*3+2,this.specialTask=null,this.relationships=new Map,this.romanticPartnerId=null,this.socialMeter=60+Math.random()*25,this.socialCooldown=Math.random()*5,this.energy=100,this.hunger=20+Math.random()*25,this.intelligence=45+Math.random()*35,this.strength=45+Math.random()*35,this.vitality=3,this.maxVitality=3,this.inventory={wheatSeeds:0}}setProfession(t){const e=t||"gatherer",n=this.profession||"gatherer";if(this.specialTask&&this.specialTask.type==="buildBonfire"||(this.specialTask&&this.specialTask.type==="bonfireHangout"&&this.finishSpecialTask(),e===n))return;const i=this.isGatheringProfession(n),r=this.isGatheringProfession(e);i&&!r&&(this.carrying&&(this.manager.depositResources(this.carrying),this.carrying=null),this.manager.releaseResourceClaim(this.currentResource,this),this.currentResource=null),this.profession=e,r?(this.state="seekingResource",this.target=null,this.timeToNextTarget=0):(this.state="wandering",this.target=this.getRandomTarget(),this.timeToNextTarget=Math.random()*3+2)}isGatheringProfession(t=this.profession){return!t||t==="gatherer"||t==="farmer"}getProfessionLabel(){const t=this.manager.getProfessionDefinition(this.profession||"gatherer");return(t==null?void 0:t.name)||"Gatherer"}hasHome(){const t=this.manager.getHomeForVillager(this);return!!(t&&t.built)}update(t,e){!this.manager.isNight()&&this.energy>0&&(this.energy=Math.max(0,this.energy-.015));const n=t*(this.manager.isNight()?-.05:.08);this.hunger=ue.clamp((this.hunger??0)+n,0,100),this.hunger>=85&&(this.energy=Math.max(0,this.energy-t*.035)),!(this.specialTask&&this.updateSpecialTask(t,e))&&(this.shouldReturnHome()&&(this.beginHomeRest(),this.updateSpecialTask(t,e))||this.manager.shouldVillagerAttendBonfire(this)&&(!this.specialTask||this.specialTask.type!=="buildBonfire")&&((!this.specialTask||this.specialTask.type!=="bonfireHangout")&&this.beginBonfireHangout(),this.updateSpecialTask(t,e))||(this.isGatheringProfession()?this.updateGatherer(t,e):this.updateCommoner(t,e)))}updateCommoner(t,e){this.state="wandering",this.target||(this.target=this.getRandomTarget());const n=this.moveTowardsTarget(t);this.timeToNextTarget-=t,(n||this.timeToNextTarget<=0)&&(this.target=this.getRandomTarget(),this.timeToNextTarget=Math.random()*5+2),this.avoidObstacles(e)}updateGatherer(t,e){switch(this.state){case"seekingResource":{let n=null;this.profession==="farmer"&&(this.inventory.wheatSeeds||0)===0&&(n="wheatSeeds");const i=this.manager.findResourceNodeForVillager(this,n);i?(this.currentResource=i,this.target=this.getResourceApproachPoint(i),this.state="movingToResource"):((!this.target||this.mesh.position.distanceTo(this.target)<.8)&&(this.target=this.getRandomTarget(!0)),this.moveTowardsTarget(t,.8),this.avoidObstacles(e,!0));break}case"movingToResource":{const n=this.currentResource;if(!n||n.depleted||n.remaining<=0){this.manager.releaseResourceClaim(n,this),this.currentResource=null,this.state="seekingResource",this.target=null;break}this.target=this.getResourceApproachPoint(n),this.moveTowardsTarget(t,.9)&&(this.state="gathering",this.gatherTimer=0);break}case"gathering":{const n=this.currentResource;if(!n||n.depleted||n.remaining<=0){this.manager.releaseResourceClaim(n,this),this.currentResource=null,this.state="seekingResource",this.target=null;break}if(this.gatherTimer+=t,this.gatherTimer>=2.2){const i=Math.min(8,n.remaining);n.remaining-=i,this.carrying={type:n.type,amount:i},this.manager.notifyVillagerInventoryChange(this),n.remaining<=0?this.manager.markResourceDepleted(n):this.manager.releaseResourceClaim(n,this),this.currentResource=null,this.target=this.manager.getResourceDropPoint(),this.state="returning"}break}case"returning":{this.target||(this.target=this.manager.getResourceDropPoint()),this.moveTowardsTarget(t,1.2)&&(this.carrying&&(this.carrying.type==="wheatSeeds"?(this.inventory.wheatSeeds=(this.inventory.wheatSeeds||0)+this.carrying.amount,this.carrying=null,this.manager.notifyVillagerInventoryChange(this)):(this.manager.depositResources(this.carrying),this.carrying=null,this.manager.notifyVillagerInventoryChange(this))),this.state="seekingResource",this.target=null);break}default:this.state="seekingResource";break}}updateSpecialTask(t,e){var i,r;if(!this.specialTask)return!1;const n=this.specialTask;if(n.type==="buildBonfire")return!this.manager.bonfire.building||n.bonfire!==this.manager.bonfire?(this.finishSpecialTask(),!1):(n.target||(n.target=this.manager.getBonfireConstructionPoint(),this.target=n.target.clone()),n.state==="travel"?this.moveTowardsTarget(t,.8)?(n.state="building",n.buildTimer=0,n.buildDuration=n.buildDuration??3.2+Math.random()*1.6,this.target=null):this.avoidObstacles(e,!0):n.state==="building"&&(n.buildTimer+=t,n.buildTimer>=n.buildDuration?(this.manager.finishBonfireConstruction(this),this.finishSpecialTask()):(i=this.manager.bonfire)!=null&&i.location&&this.faceTowards(this.manager.bonfire.location)),!0);if(n.type==="buildHome"){const o=this.manager.getHomeById(n.homeId);if(!o||o.builderId!==this.id)return this.finishSpecialTask(),!1;if(n.target||(n.target=o.location.clone().add(new A(Math.random()*.6-.3,0,Math.random()*.6-.3)),this.target=n.target.clone()),n.state==="travel"){const a=this.mesh.position.distanceTo(o.location),l=this.moveTowardsTarget(t,.8);n.travelTimer||(n.travelTimer=0),n.travelTimer+=t,l||a<4.5||n.travelTimer>8?(n.state="building",n.buildTimer=0,n.buildDuration=n.buildDuration??4+Math.random()*2,this.target=null):this.avoidObstacles(e,!0)}else n.state==="building"&&(n.buildTimer+=t,n.buildTimer>=n.buildDuration?(this.manager.finishHomeConstruction(o,this),this.finishSpecialTask()):this.faceTowards(o.location));return!0}if(n.type==="buildBed"){const o=this.manager.getHomeById(n.homeId);if(!o||!o.beds[n.occupantId])return this.finishSpecialTask(),!1;const a=o.beds[n.occupantId];if(a.builderId!==this.id||a.built)return this.finishSpecialTask(),!1;if(n.target||(n.target=o.location.clone().add(new A(Math.random()*.4-.2,0,Math.random()*.4-.2)),this.target=n.target.clone()),n.state==="travel"){const l=this.mesh.position.distanceTo(o.location),c=this.moveTowardsTarget(t,.8);n.travelTimer||(n.travelTimer=0),n.travelTimer+=t,c||l<3.5||n.travelTimer>8?(n.state="building",n.buildTimer=0,n.buildDuration=n.buildDuration??2.5+Math.random()*1,this.target=null):this.avoidObstacles(e,!0)}else n.state==="building"&&(n.buildTimer+=t,n.buildTimer>=n.buildDuration?(this.manager.finishBedConstruction(o,n.occupantId,this),this.finishSpecialTask()):this.faceTowards(o.location));return!0}if(n.type==="plantTree"){if(!n.location)return this.finishSpecialTask(),!1;if(n.target||(n.target=n.location.clone().add(new A(Math.random()*.6-.3,0,Math.random()*.6-.3)),this.target=n.target.clone()),n.state==="travel"){const o=this.mesh.position.distanceTo(n.location);this.moveTowardsTarget(t,.8)||o<1?(n.state="planting",n.timer=0,n.duration=n.duration??2.6+Math.random(),this.target=null):this.avoidObstacles(e,!0)}else if(n.state==="planting"){n.timer=(n.timer||0)+t;const o=n.duration??2.8;n.timer>=o?(this.manager.completeTreePlanting(this,n),this.finishSpecialTask()):this.faceTowards(n.location)}return!0}if(n.type==="buildOwnBed"){const o=this.manager.getHomeById(n.homeId);if(!o||!o.beds[n.occupantId])return this.finishSpecialTask(),!1;const a=o.beds[n.occupantId];if(a.builderId!==this.id||a.built)return this.finishSpecialTask(),!1;if(n.state==="gatherWood"){if(n.woodGathered>=n.woodNeeded)return n.state="gatherLeaves",this.currentResource=null,this.carrying=null,this.target=null,!0;if(!this.currentResource||this.currentResource.type!=="wood"){const l=this.manager.findResourceNodeForVillager(this,"wood");return l?(this.currentResource=l,this.target=this.getResourceApproachPoint(l),n.subState="movingToResource"):((!this.target||this.mesh.position.distanceTo(this.target)<.8)&&(this.target=this.getRandomTarget(!0)),this.moveTowardsTarget(t,.8),this.avoidObstacles(e)),!0}if(n.subState==="movingToResource")this.moveTowardsTarget(t,.8)?(n.subState="gathering",n.gatherTimer=0):this.avoidObstacles(e);else if(n.subState==="gathering"&&(n.gatherTimer=(n.gatherTimer||0)+t,n.gatherTimer>=2.2)){const l=Math.min(8,n.woodNeeded-n.woodGathered);n.woodGathered+=l,this.currentResource.remaining-=l,this.currentResource.remaining<=0&&this.manager.depleteResourceNode(this.currentResource),this.manager.releaseResourceClaim(this.currentResource,this),this.currentResource=null,this.target=null,n.subState=null,n.gatherTimer=0}return!0}if(n.state==="gatherLeaves"){if(n.leavesGathered>=n.leavesNeeded)return n.state="buildBed",this.currentResource=null,this.carrying=null,this.target=o.location.clone().add(new A(Math.random()*.4-.2,0,Math.random()*.4-.2)),!0;if(!this.currentResource||this.currentResource.type!=="leaves"){const l=this.manager.findResourceNodeForVillager(this,"leaves");return l?(this.currentResource=l,this.target=this.getResourceApproachPoint(l),n.subState="movingToResource"):((!this.target||this.mesh.position.distanceTo(this.target)<.8)&&(this.target=this.getRandomTarget(!0)),this.moveTowardsTarget(t,.8),this.avoidObstacles(e)),!0}if(n.subState==="movingToResource")this.moveTowardsTarget(t,.8)?(n.subState="gathering",n.gatherTimer=0):this.avoidObstacles(e);else if(n.subState==="gathering"&&(n.gatherTimer=(n.gatherTimer||0)+t,n.gatherTimer>=2.2)){const l=Math.min(8,n.leavesNeeded-n.leavesGathered);n.leavesGathered+=l,this.currentResource.remaining-=l,this.currentResource.remaining<=0&&this.manager.depleteResourceNode(this.currentResource),this.manager.releaseResourceClaim(this.currentResource,this),this.currentResource=null,this.target=null,n.subState=null,n.gatherTimer=0}return!0}if(n.state==="buildBed"){if(n.subState==="travel"||!n.subState){n.subState="travel";const l=this.mesh.position.distanceTo(o.location),c=this.moveTowardsTarget(t,.8);n.buildTravelTimer||(n.buildTravelTimer=0),n.buildTravelTimer+=t,c||l<3.5||n.buildTravelTimer>8?(n.subState="building",n.buildTimer=0,n.buildDuration=2.5+Math.random()*1,this.target=null):this.avoidObstacles(e,!0)}else n.subState==="building"&&(n.buildTimer+=t,n.buildTimer>=n.buildDuration?(this.manager.finishBedConstruction(o,n.occupantId),this.finishSpecialTask()):this.faceTowards(o.location));return!0}return!0}if(n.type==="buildStorehouse"){const o=this.manager.storehouse;if(!o||o.builderId!==this.id)return this.finishSpecialTask(),!1;if(n.target||(n.target=o.location.clone().add(new A(Math.random()*.4-.2,0,Math.random()*.4-.2)),this.target=n.target.clone()),n.state==="travel"){const a=this.mesh.position.distanceTo(o.location),l=this.moveTowardsTarget(t,.8);n.travelTimer||(n.travelTimer=0),n.travelTimer+=t,l||a<4||n.travelTimer>8?(n.state="building",n.buildTimer=0,n.buildDuration=n.buildDuration??8+Math.random()*3,this.target=null):this.avoidObstacles(e,!0)}else n.state==="building"&&(n.buildTimer+=t,n.buildTimer>=n.buildDuration?(this.manager.finishStorehouseConstruction(),this.finishSpecialTask()):this.faceTowards(o.location));return!0}if(n.type==="bonfireHangout")return this.manager.shouldVillagerAttendBonfire(this)?(n.state==="travel"?(this.target||(this.target=n.target.clone()),this.moveTowardsTarget(t,.9)&&(n.state="loiter",n.lingerTimer=0,n.repositionAfter=6+Math.random()*5,this.target=null)):(n.lingerTimer+=t,n.lingerTimer>=n.repositionAfter?(n.lingerTimer=0,n.repositionAfter=6+Math.random()*6,n.target=this.manager.getBonfireHangoutPoint(),n.state="travel",this.target=n.target.clone()):(r=this.manager.bonfire)!=null&&r.location&&this.faceTowards(this.manager.bonfire.location)),!0):(this.finishSpecialTask(),!1);if(n.type==="socialize"){const o=this.manager.getVillagerById(n.partnerId);return!o||!o.specialTask||o.specialTask.type!=="socialize"?(this.finishSpecialTask(),!1):(n.meetPoint||(n.meetPoint=o.mesh.position.clone().add(this.mesh.position).multiplyScalar(.5),n.meetPoint.y=0),n.state==="travel"?(this.target||(this.target=n.meetPoint.clone()),this.moveTowardsTarget(t,.6)?(n.state="chat",n.chatTimer=0,n.chatDuration=n.chatDuration??3.5+Math.random()*2.5,this.target=null):this.avoidObstacles(e,!0)):n.state==="chat"?(n.chatTimer+=t,this.faceTowards(o.mesh.position),n.chatTimer>=n.chatDuration&&(n.state="wrap",n.completed||(n.completed=!0,this.manager.completeSocialInteraction(this,o,n.chatDuration)))):n.state==="wrap"&&this.finishSpecialTask(),!0)}if(n.type==="homeRest"){const o=this.manager.getHomeById(n.homeId);if(!o||!o.built)return o&&o.occupantsInside&&o.occupantsInside.delete(this.id),this.mesh.visible=!0,this.finishSpecialTask(),!1;if(n.state==="travel"){this.target||(this.target=n.target.clone());const a=this.mesh.position.distanceTo(o.location);this.moveTowardsTarget(t,.8)||a<2?(n.state="entering",this.target=null):this.avoidObstacles(e,!0)}else if(n.state==="entering")this.mesh.visible=!1,o.occupantsInside.add(this.id),n.state="inside";else if(n.state==="inside"){const a=o.beds[this.id],l=a&&a.built,c=l?.5:.2;this.energy=Math.min(100,this.energy+c);const h=l?.55:.32;if(this.hunger=Math.max(0,this.hunger-h*t),!this.manager.isNight()){n.state="exiting";const u=Math.random()*Math.PI*2,d=3.5,p=o.location.clone().add(new A(Math.cos(u)*d,0,Math.sin(u)*d));this.mesh.position.copy(p),this.mesh.position.y=0,this.mesh.visible=!0,o.occupantsInside.delete(this.id),this.finishSpecialTask()}}return!0}return!1}assignBonfireConstruction(t){this.manager.releaseResourceClaim(this.currentResource,this),this.currentResource=null,this.carrying=null,this.specialTask={type:"buildBonfire",bonfire:t,state:"travel",target:this.manager.getBonfireConstructionPoint()},this.target=this.specialTask.target.clone(),this.state="special"}assignHomeConstruction(t){this.manager.releaseResourceClaim(this.currentResource,this),this.currentResource=null,this.carrying=null,this.specialTask={type:"buildHome",homeId:t.id,state:"travel",target:t.location.clone().add(new A(Math.random()*.6-.3,0,Math.random()*.6-.3))},this.target=this.specialTask.target.clone(),this.state="special"}assignBedConstruction(t,e){this.manager.releaseResourceClaim(this.currentResource,this),this.currentResource=null,this.carrying=null,this.specialTask={type:"buildBed",homeId:t.id,occupantId:e,state:"travel",target:t.location.clone().add(new A(Math.random()*.4-.2,0,Math.random()*.4-.2))},this.target=this.specialTask.target.clone(),this.state="special"}assignSelfBedConstruction(t,e){this.manager.releaseResourceClaim(this.currentResource,this),this.currentResource=null,this.carrying=null,this.specialTask={type:"buildOwnBed",homeId:t.id,occupantId:e,state:"gatherWood",woodGathered:0,leavesGathered:0,woodNeeded:this.manager.bedRequirements.wood,leavesNeeded:this.manager.bedRequirements.leaves},this.state="special",this.target=null}assignStorehouseConstruction(){this.manager.releaseResourceClaim(this.currentResource,this),this.currentResource=null,this.carrying=null,this.specialTask={type:"buildStorehouse",state:"travel",target:this.manager.storehouse.location.clone().add(new A(Math.random()*.4-.2,0,Math.random()*.4-.2))},this.target=this.specialTask.target.clone(),this.state="special"}assignTreePlanting(t,e){this.manager.releaseResourceClaim(this.currentResource,this),this.currentResource=null,this.carrying=null;const n=new A(Math.random()*.6-.3,0,Math.random()*.6-.3),i=t.clone().add(n);this.specialTask={type:"plantTree",location:t.clone(),plantableId:(e==null?void 0:e.id)??null,plantableName:(e==null?void 0:e.name)??"sapling",state:"travel",target:i,duration:2.6+Math.random()*1.2},this.target=i.clone(),this.state="special"}abortCurrentActivities(){this.specialTask&&this.finishSpecialTask(),this.carrying&&(this.manager.depositResources(this.carrying),this.carrying=null,this.manager.notifyVillagerInventoryChange(this)),this.currentResource&&(this.manager.releaseResourceClaim(this.currentResource,this),this.currentResource=null),this.target=null,this.timeToNextTarget=0,this.isGatheringProfession()?this.state="seekingResource":this.state="wandering"}isInsideHome(){const t=this.manager.getHomeForVillager(this);return t&&t.occupantsInside&&t.occupantsInside.has(this.id)}shouldReturnHome(){if(!this.manager.isNight())return!1;const t=this.manager.getHomeForVillager(this);return!t||!t.built||this.specialTask||this.isInsideHome()||!this.isGatheringProfession()&&this.socialCooldown>0&&this.socialMeter>50?!1:this.mesh.position.distanceTo(t.location)>1.4}beginHomeRest(){const t=this.manager.getHomeForVillager(this);!t||!t.built||(this.specialTask={type:"homeRest",homeId:t.id,state:"travel",target:t.location.clone().add(new A(Math.random()*.4-.2,0,Math.random()*.4-.2))},this.target=this.specialTask.target.clone(),this.state="special")}beginBonfireHangout(){if(this.specialTask&&this.specialTask.type==="bonfireHangout"||this.specialTask&&this.specialTask.type==="buildBonfire")return;this.isGatheringProfession()&&(this.manager.releaseResourceClaim(this.currentResource,this),this.currentResource=null,this.carrying&&(this.manager.depositResources(this.carrying),this.carrying=null,this.manager.notifyVillagerInventoryChange(this)),this.state="seekingResource");const t=this.manager.getBonfireHangoutPoint();this.specialTask={type:"bonfireHangout",bonfire:this.manager.bonfire,state:"travel",target:t,lingerTimer:0,repositionAfter:6+Math.random()*5},this.target=t.clone()}finishSpecialTask(){const t=this.specialTask;if(this.specialTask=null,(t==null?void 0:t.type)==="homeRest"){this.mesh.visible=!0;const e=t.homeId?this.manager.getHomeById(t.homeId):null;e&&e.occupantsInside&&e.occupantsInside.delete(this.id)}if((t==null?void 0:t.type)==="socialize"){const e=t.partnerId?this.manager.getVillagerById(t.partnerId):null;e&&this.manager.activeSocialInteractions.delete(this.manager.getInteractionKey(this,e)),this.socialCooldown=Math.max(this.socialCooldown,6+Math.random()*3)}if((t==null?void 0:t.type)==="buildBonfire"&&(this.manager.bonfire.builder=null),(t==null?void 0:t.type)==="buildHome"){const e=t.homeId?this.manager.getHomeById(t.homeId):null;e&&e.builderId===this.id&&(e.builderId=null)}(t==null?void 0:t.type)==="buildStorehouse"&&this.manager.storehouse&&this.manager.storehouse.builderId===this.id&&(this.manager.storehouse.builderId=null),this.isGatheringProfession()?(this.state="seekingResource",this.target=null,this.timeToNextTarget=Math.random()*2+1):(this.state="wandering",this.target=this.getRandomTarget(),this.timeToNextTarget=Math.random()*3+1.5)}canTakeConstruction(){return this.specialTask||this.isInsideHome()?!1:this.isGatheringProfession()?!this.carrying&&(!this.currentResource||this.state==="seekingResource"):!0}updateSocialNeeds(t){const e=this.isGatheringProfession()?1.6:1.1;this.socialMeter=ue.clamp(this.socialMeter-t*e,0,100),this.socialCooldown=Math.max(0,this.socialCooldown-t)}shouldSeekSocial(){return this.socialMeter<55&&this.socialCooldown<=0&&this.isAvailableForSocial()}isAvailableForSocial(){return!(this.specialTask||this.manager.bonfire.builder===this||this.isGatheringProfession()&&(this.carrying||this.state==="returning"||this.state==="movingToResource"||this.state==="gathering"))}getRelationshipScore(t){if(!this.relationships)return 0;const e=this.relationships.get(t);return e?e.score??0:0}beginSocialInteraction(t,e){this.isGatheringProfession()&&(this.manager.releaseResourceClaim(this.currentResource,this),this.currentResource=null,this.carrying&&(this.manager.depositResources(this.carrying),this.carrying=null,this.manager.notifyVillagerInventoryChange(this))),this.specialTask={type:"socialize",partnerId:t.id,state:"travel",meetPoint:e.clone(),chatDuration:3.5+Math.random()*2.5,completed:!1},this.target=e.clone(),this.state="special"}faceTowards(t){const e=t.clone().sub(this.mesh.position);e.y=0,e.lengthSq()>1e-4&&(e.normalize(),this.mesh.rotation.y=Math.atan2(e.x,e.z))}applyProfessionAdornment(t,e){const n=this.profession||"gatherer",i=t.position.y,r={gatherer:()=>{const a=new J({color:3818787,roughness:.6}),l=new X(new jt(.68,.68,.08,16),a);l.position.y=i+.12,l.scale.x=e?1.05:1,l.scale.z=e?1.05:1,this.mesh.add(l);const c=new X(new Xe(.52,.85,16),a);c.position.y=i+.48,this.mesh.add(c);const h=new J({color:13607789,roughness:.5}),u=new X(new Ze(.46,.05,10,18),h);u.rotation.x=Math.PI/2,u.position.y=i+.22,this.mesh.add(u)},laborer:()=>{const a=new J({color:4860708,roughness:.65}),l=new X(new be(.55,18,18,0,Math.PI*2,0,Math.PI/1.3),a);l.position.set(0,i+.18,-.05),this.mesh.add(l);const c=new J({color:13677434,roughness:.5}),h=new X(new Ze(.5,.06,12,18),c);h.rotation.x=Math.PI/2,h.position.y=i+.1,this.mesh.add(h);const u=new J({color:16115368,roughness:.4}),d=new X(new Xe(.06,.6,12),u);d.position.set(.3,i+.38,-.05),d.rotation.z=-Math.PI/5,this.mesh.add(d)}};(r[n]||r.gatherer)()}moveTowardsTarget(t,e=.6){if(!this.target)return!1;const n=this.target.clone().sub(this.mesh.position);n.y=0;const i=n.length();if(i<=e)return!0;if(i>1e-4){const r=n.normalize(),o=r.clone().multiplyScalar(this.speed*t),a=Math.max(i-e,0);o.length()>a&&o.setLength(a),this.mesh.position.add(o),this.mesh.position.y=0,o.lengthSq()>1e-5&&(this.mesh.rotation.y=Math.atan2(r.x,r.z))}return this.mesh.position.distanceTo(this.target)<=e+.05}avoidObstacles(t,e=!1){if(t&&!(!e&&this.isGatheringProfession()))for(const n of t){if(!n||!n.position)continue;const i=this.mesh.position.clone().sub(n.position),r=i.lengthSq();if(!(r<1e-4)&&Math.sqrt(r)<1.5){i.normalize().multiplyScalar(.8),this.mesh.position.add(i),this.mesh.position.y=0,e||(this.target=this.getRandomTarget(!0),this.timeToNextTarget=Math.random()*3+1);break}}}getResourceApproachPoint(t){var n;const e=((n=t==null?void 0:t.object)==null?void 0:n.position)??new A;return new A(e.x,0,e.z)}createAppearance(){const t=this.outfit,e=this.gender==="female",n=this.tier==="basic",i=new J({color:t.boots,roughness:.85}),r=e?.26:n?.3:.32,o=e?.22:n?.26:.28,a=e?.45:n?.42:.4,l=new jt(o,r,a,12),c=new X(l,i);c.position.set(-.22,a/2,0),this.mesh.add(c);const h=c.clone();h.position.x=.22,this.mesh.add(h);const u=new J({color:t.trim,roughness:.8}),d=e?.22:n?.27:.3,p=e?.18:n?.22:.25,g=e?.9:n?.85:.8,_=new jt(p,d,g,12),m=new X(_,u);m.position.y=a+g/2,this.mesh.add(m);const f=new J({color:t.tunic,roughness:.85});if(e){const Y=n?.8:.85,rt=n?.52:.55,ut=n?2:2.1,ht=new jt(Y,rt,ut,18),Tt=new X(ht,f);Tt.position.y=a+g-.1,this.mesh.add(Tt);const re=new J({color:t.accent,roughness:.7}),C=new jt(n?.5:.55,.5,n?.9:1,16),Zt=new X(C,re);Zt.position.y=a+g+.7,this.mesh.add(Zt)}else{const Y=n?.74:.78,rt=new jt(n?.62:.65,Y,n?1.7:1.8,14),ut=new X(rt,f);if(ut.position.y=a+g+.6,this.mesh.add(ut),!n){const ht=new J({color:t.accent,roughness:.75}),Tt=new Yt(1.1,1.35,.7),re=new X(Tt,ht);re.position.set(0,a+g+.95,.35),this.mesh.add(re)}}if(!e&&!n&&Math.random()>.65){const Y=new J({color:t.trim,roughness:.6}),rt=new Yt(1.2,.35,.1),ut=new X(rt,Y);ut.position.set(0,a+g+1.1,.75),this.mesh.add(ut)}if(e?!0:!n&&Math.random()>.4){const Y=new J({color:t.accent,roughness:.75}),rt=e?n?1.05:1.2:.9,ut=e?n?1.4:1.6:1.3,ht=new Yt(rt,ut,.12),Tt=new X(ht,Y),re=e?a+g+(n?.25:.4):a+g-.1,C=e?.6:.55;Tt.position.set(0,re,C),this.mesh.add(Tt)}const b=new J({color:t.trim,roughness:.6}),v=e?.55:.6,R=e?.05:.06,w=new Ze(v,R,10,18),P=new X(w,b);P.rotation.x=Math.PI/2,P.position.y=a+g+(e?n?.8:.85:n?.55:.6),this.mesh.add(P);const D=new J({color:t.accent,roughness:.5}),S=e?.42:.45,M=e?.045:.05,I=new Ze(S,M,10,18),F=new X(I,D);if(F.rotation.x=Math.PI/2,F.position.y=a+g+(e?n?1.2:1.3:n?.95:1),this.mesh.add(F),e&&!n&&Math.random()>.45){const Y=new J({color:t.trim,roughness:.7}),rt=new Ze(.72,.08,12,24,Math.PI*1.3),ut=new X(rt,Y);ut.rotation.x=Math.PI/2,ut.rotation.z=Math.PI/16,ut.position.set(0,a+g+1.15,.05),this.mesh.add(ut)}const B=new J({color:14992028,roughness:.5}),q=e?.43:.45,G=new be(q,16,16),k=new X(G,B);k.position.y=a+g+(e?1.65:1.6),this.mesh.add(k);const Z=t.hair??4139548,H=new J({color:Z,roughness:.8});if(e){const Y=new be(n?.5:.52,16,16,0,Math.PI*2,0,Math.PI/1.25),rt=new X(Y,H);if(rt.position.set(0,k.position.y-.2,-.05),this.mesh.add(rt),!n||Math.random()>.5){const ut=new jt(.17,.2,1,12),ht=new X(ut,H);ht.position.set(0,k.position.y-.85,-.25),ht.rotation.x=Math.PI/20,this.mesh.add(ht)}if(!n&&Math.random()>.5){const ut=new J({color:t.accent,roughness:.5}),ht=new Ze(.5,.04,10,18),Tt=new X(ht,ut);Tt.rotation.x=Math.PI/2,Tt.position.y=k.position.y+.05,this.mesh.add(Tt)}}else{const Y=new be(.46,14,14,0,Math.PI*2,0,Math.PI/1.6),rt=new X(Y,H);if(rt.position.set(0,k.position.y-.25,-.12),this.mesh.add(rt),Math.random()>.5&&(!n||Math.random()>.6)){const ut=new J({color:t.beard??Z,roughness:.7}),ht=new jt(.28,.35,.6,12),Tt=new X(ht,ut);Tt.position.set(0,k.position.y-.55,.3),this.mesh.add(Tt)}else if(!n&&Math.random()>.6){const ut=new J({color:(t.beard??Z)+1118481,roughness:.9,metalness:.05}),ht=new Ze(.32,.05,10,18),Tt=new X(ht,ut);Tt.rotation.x=Math.PI/2,Tt.position.y=k.position.y-.5,this.mesh.add(Tt)}}this.applyProfessionAdornment(k,e);const tt=new jt(.15,.18,1.2,8),at=new J({color:t.tunic,roughness:.85}),lt=new X(tt,at);lt.position.set(-.7,a+g+(e?.95:.9),e?.1:0),lt.rotation.z=e?Math.PI/4.2:Math.PI/3,this.mesh.add(lt);const It=lt.clone();It.position.x=.7,It.rotation.z=e?-Math.PI/4.2:-Math.PI/3,this.mesh.add(It);const Ut=new J({color:14922633,roughness:.6}),Vt=new be(.18,12,12),Nt=new X(Vt,Ut);Nt.position.set(-.95,a+g+(e?.35:.25),.12),this.mesh.add(Nt);const $=Nt.clone();if($.position.x=.95,this.mesh.add($),!n&&Math.random()>.6){const Y=new J({color:t.trim,roughness:.8}),rt=e?.85:.95,ut=new Ze(rt,.05,10,24,Math.PI),ht=new X(ut,Y);ht.rotation.set(Math.PI/2.1,0,e?Math.PI/4.5:Math.PI/3),ht.position.set(e?-.05:-.1,a+g+(e?.9:.8),.2),this.mesh.add(ht);const Tt=new Yt(.55,.5,.2),re=new J({color:t.accent,roughness:.8}),C=new X(Tt,re);C.position.set(-.65,a+g+(e?.55:.45),.45),this.mesh.add(C)}if(!n&&Math.random()>(e?.8:.75)){const Y=new jt(.07,.09,2.4,6),rt=new J({color:4600346,roughness:.8}),ut=new X(Y,rt);ut.position.set(e?-.95:.95,a+g+.5,.1),this.mesh.add(ut)}}getRandomTarget(t=!1){if(!t&&Math.random()<.6)return this.getPlazaPoint();let e=new A,n=0;do{const i=Math.random()*this.wanderRadius,r=Math.random()*Math.PI*2;e.set(Math.cos(r)*i,0,Math.sin(r)*i),n++}while(e.length()<this.innerAvoidRadius&&n<30);return e.length()<this.innerAvoidRadius?this.getPlazaPoint():e}getPlazaPoint(){const t=this.innerAvoidRadius+.4,e=Math.max(t+.5,this.plazaRadius),n=Math.random()*Math.PI*2,i=t+Math.random()*(e-t);return new A(Math.cos(n)*i,0,Math.sin(n)*i)}}window.addEventListener("resize",()=>{const s=window.sceneManager;s.camera.aspect=window.innerWidth/window.innerHeight,s.camera.updateProjectionMatrix(),s.renderer.setSize(window.innerWidth,window.innerHeight),s.applyTooltipPosition(),s.cropTooltipVisible&&s.selectedCrop&&s.positionCropTooltip(s.selectedCrop)});window.sceneManager=new dm;
