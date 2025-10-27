import * as THREE from 'three';

export function createLSystemGroup() {
    return new THREE.Group();
}

export function parseRulesArray(rulesArray) {
    const map = new Map();
    rulesArray.forEach(rule => {
        const idx = rule.indexOf('=');
        if(idx>0){
            const k = rule.slice(0,idx).trim();
            const v = rule.slice(idx+1).trim();
            map.set(k, v);
        }
    });
    return map;
}

export function expandLSystem(axiom, rules, iterations){
    let cur = axiom;
    for(let i=0;i<iterations;i++){
        let next = '';
        for(const ch of cur){ next += rules.has(ch) ? rules.get(ch) : ch; }
        cur = next;
        if(cur.length > 500000){ console.warn('expansion too large, stopping'); break; }
    }
    return cur;
}

export function buildLSystem(str, params, lsystemGroup){
    while(lsystemGroup.children.length) lsystemGroup.remove(lsystemGroup.children[0]);

    const material = new THREE.LineBasicMaterial({ color: new THREE.Color(params.color || 0xffffff) });
    const vertices = [];
    let segments = 0;
    const deg2rad = Math.PI/180;
    const stack = [];

    let pos = new THREE.Vector3(0,0,0);
    let quat = new THREE.Quaternion();
    const forward = new THREE.Vector3(0,1,0);
    function forwardDir(){ return forward.clone().applyQuaternion(quat); }

    for(const ch of str){
        if(ch==='F' || ch==='f'){
            const dir = forwardDir();
            const next = pos.clone().add(dir.multiplyScalar(params.step));
            if(ch==='F'){ vertices.push(pos.x,pos.y,pos.z, next.x,next.y,next.z); segments++; }
            pos = next;
        } else if(ch==='+'||ch==='-'){
            const sign = (ch==='+')?1:-1;
            const ax = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1), sign*params.angle*deg2rad);
            quat.multiply(ax);
        } else if(ch==='&'||ch==='^'){
            const sign = (ch==='&')?1:-1;
            const ax = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0), sign*params.angle*deg2rad);
            quat.multiply(ax);
        } else if(ch==='\\' || ch==='/'){
            const sign = (ch==='\\')?1:-1;
            const ax = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), sign*params.angle*deg2rad);
            quat.multiply(ax);
        } else if(ch==='|'){
            const ax = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1), Math.PI);
            quat.multiply(ax);
        } else if(ch==='['){
            stack.push({pos:pos.clone(), quat:quat.clone()});
        } else if(ch===']'){
            const s = stack.pop(); if(s){ pos = s.pos; quat = s.quat; }
        }
    }

    const geom = new THREE.BufferGeometry();
    const arr = new Float32Array(vertices);
    geom.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    const lines = new THREE.LineSegments(geom, material);
    lsystemGroup.add(lines);
    geom.computeBoundingSphere();
    if(geom.boundingSphere) lsystemGroup.position.copy(geom.boundingSphere.center.clone().multiplyScalar(-1));

    return { vertices: arr.length/3, segments };
}
