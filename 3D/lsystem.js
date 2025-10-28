// lsystem.js
// מודול עצמאי ליצירת והצגת L-System תלת־ממדי בתוך אלמנט HTML
// שימוש: generateLSystem3D(containerElement, config)
//
//  <script type="importmap">
//  {
//    "imports": {
//      "three": "https://unpkg.com/three@0.152.2/build/three.module.js",
//      "three/": "https://unpkg.com/three@0.152.2/",
//      "three/examples/jsm/": "https://unpkg.com/three@0.152.2/examples/jsm/"
//    }
//  }
//  </script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// ===============================
// פונקציות עזר ל-L-System
// ===============================
function expandLSystem(axiom, rules, iterations = 0) {
  let current = axiom;
  for (let i = 0; i < iterations; i++) {
    let next = '';
    for (let ch of current) {
      const options = rules[ch];
      next += options ? options[0] : ch;
    }
    current = next;
  }
  return current;
}

function rotateQuat(quat, axis, angleDeg) {
  const axisVec = new THREE.Vector3(...axis).normalize();
  const half = (angleDeg * Math.PI / 180) / 2;
  const s = Math.sin(half);
  const q = new THREE.Quaternion(axisVec.x * s, axisVec.y * s, axisVec.z * s, Math.cos(half));
  return quat.clone().multiply(q);
}

function interpretLSystem(seq, symbolDefs, params = {}) {
  const defaultLength = params.defaultLength || 1;
  const defaultAngle = params.defaultAngle || 25;
  const radius = params.radius || 0.05;
  const wireframe = !!params.wireframe;

  const group = new THREE.Group();
  const pos = new THREE.Vector3(0, 0, 0);
  let quat = new THREE.Quaternion();
  const stack = [];

  const forwardVec = () => new THREE.Vector3(0, 1, 0).applyQuaternion(quat);

  for (let i = 0; i < seq.length; i++) {
    const ch = seq[i];
    const def = symbolDefs[ch];
    if (!def) continue;

    switch (def.type) {
      case 'draw': {
        const len = Number(def.length ?? defaultLength);
        const color = def.color || '#ffffff';
        const start = pos.clone();
        const dir = forwardVec().multiplyScalar(len);
        const end = start.clone().add(dir);
        const height = start.distanceTo(end);

        if (height > 1e-6) {
          const geometry = new THREE.CylinderGeometry(radius, radius, height, 6, 1, true);
          geometry.translate(0, height / 2, 0);

          const material = new THREE.MeshStandardMaterial({
            color,
            roughness: 0.8,
            metalness: 0.2,
            wireframe
          });

          const mesh = new THREE.Mesh(geometry, material);
          const up = new THREE.Vector3(0, 1, 0);
          const segDir = dir.clone().normalize();
          const axis = new THREE.Vector3().crossVectors(up, segDir);
          const dot = up.dot(segDir);
          const theta = Math.acos(Math.max(-1, Math.min(1, dot)));

          if (axis.lengthSq() < 1e-6) {
            if (dot < 0) mesh.rotateX(Math.PI);
          } else {
            mesh.setRotationFromAxisAngle(axis.normalize(), theta);
          }

          mesh.position.copy(start);
          group.add(mesh);
        }

        pos.copy(end);
        break;
      }

      case 'move': {
        const len = Number(def.length ?? defaultLength);
        pos.add(forwardVec().multiplyScalar(len));
        break;
      }

      case 'rotate': {
        const angle = Number(def.angle ?? defaultAngle);
        const axis = Array.isArray(def.axis)
          ? def.axis
          : def.axis === 'pitch' ? [1, 0, 0]
          : def.axis === 'yaw' ? [0, 0, 1]
          : def.axis === 'roll' ? [0, 1, 0]
          : [0, 1, 0];
        quat = rotateQuat(quat, axis, angle);
        break;
      }

      case 'push':
        stack.push({ pos: pos.clone(), quat: quat.clone() });
        break;

      case 'pop':
        if (stack.length) {
          const s = stack.pop();
          pos.copy(s.pos);
          quat.copy(s.quat);
        }
        break;
    }
  }

  return group;
}

// ===============================
// פונקציה ראשית: בניית סצנה בתוך אלמנט
// ===============================
export function generateLSystem3D(container, config) {
  if (!container) throw new Error('Missing container element');
  container.innerHTML = ''; // מנקה קודם

  const width = container.clientWidth || 600;
  const height = container.clientHeight || 400;

  const scene = new THREE.Scene();
  scene.background = null; // ללא רקע

  // מצלמה
  const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
  camera.position.set(0, 3, 8);

  // תאורה
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(5, 10, 7);
  scene.add(dirLight);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;

  // יצירת L-System
  const { axiom = 'F', rules = {}, iterations = 0, symbols = {}, params = {} } = config;
  const seq = expandLSystem(axiom, rules, iterations);
  const model = interpretLSystem(seq, symbols, params);
  scene.add(model);

  // התאמת מודל למרכז
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  model.position.sub(center);

  // Resize
  window.addEventListener('resize', () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });

  // רינדור רציף
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  return { scene, camera, renderer, controls, model };
}
