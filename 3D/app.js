import * as THREE from 'three';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.152.0/examples/jsm/controls/OrbitControls.js';
import { createLSystemGroup, parseRulesArray, expandLSystem, buildLSystem } from './editor.js';

const params = {
    axiom: 'F',
    rules: [{symbol:'F', rule:'F[+F]F[-F]F'}],
    angle: 25,
    step: 1,
    iterations: 4,
    color: 0xffffff
};

// Scene
const container = document.getElementById('renderer');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x071021);

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);
camera.position.set(30, 30, 60);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.12;

const hemi = new THREE.HemisphereLight(0xffffff, 0x080820, 0.8); scene.add(hemi);
const dir = new THREE.DirectionalLight(0xffffff, 0.6); dir.position.set(50,80,40); scene.add(dir);

// L-system group
const lsystemGroup = createLSystemGroup();
scene.add(lsystemGroup);

// UI
const axiomEl = document.getElementById('axiom');
const rulesContainer = document.getElementById('rules-container');
const addRuleBtn = document.getElementById('add-rule');
const angleEl = document.getElementById('angle');
const stepEl = document.getElementById('step');
const iterEl = document.getElementById('iterations');
const genBtn = document.getElementById('generate');
const resetBtn = document.getElementById('reset');

function createRuleRow(symbol='', rule='') {
    const row = document.createElement('div');
    row.className = 'rule-row';

    const symbolInput = document.createElement('input');
    symbolInput.value = symbol;
    symbolInput.placeholder = 'Symbol';
    symbolInput.style.width = '30%';

    const ruleInput = document.createElement('input');
    ruleInput.value = rule;
    ruleInput.placeholder = 'Rule';
    ruleInput.style.width = '60%';

    const delBtn = document.createElement('button');
    delBtn.textContent = '✕';
    delBtn.className = 'rule-delete';
    delBtn.onclick = () => {
        rulesContainer.removeChild(row);
        updateParamsRules();
    };

    symbolInput.oninput = updateParamsRules;
    ruleInput.oninput = updateParamsRules;

    row.append(symbolInput, ruleInput, delBtn);
    rulesContainer.appendChild(row);
}

function updateParamsRules() {
    params.rules = Array.from(rulesContainer.querySelectorAll('.rule-row')).map(row=>{
        const inputs = row.querySelectorAll('input');
        return { symbol: inputs[0].value, rule: inputs[1].value };
    });
}

function generate(){
    params.axiom = axiomEl.value || 'F';
    params.angle = Number(angleEl.value)||25;
    params.step = Number(stepEl.value)||1;
    params.iterations = Number(iterEl.value)||4;

    updateParamsRules();

    const rulesMap = parseRulesArray(params.rules.map(r => r.symbol+'='+r.rule));
    const expanded = expandLSystem(params.axiom, rulesMap, params.iterations);
    const stats = buildLSystem(expanded, params, lsystemGroup);
    console.log('generated', stats);
}

// Init UI
rulesContainer.innerHTML = '';
params.rules.forEach(r=>createRuleRow(r.symbol,r.rule));
addRuleBtn.addEventListener('click', ()=>createRuleRow());

genBtn.addEventListener('click', generate);
resetBtn.addEventListener('click', ()=>{
    axiomEl.value = 'F';
    angleEl.value = 25;
    stepEl.value = 1;
    iterEl.value = 4;
    rulesContainer.innerHTML = '';
    params.rules = [{symbol:'F', rule:'F[+F]F[-F]F'}];
    params.rules.forEach(r=>createRuleRow(r.symbol,r.rule));
    generate();
});

generate();

function onResize(){
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h; camera.updateProjectionMatrix();
}
window.addEventListener('resize', onResize);
onResize();

function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene,camera);
}
animate();
