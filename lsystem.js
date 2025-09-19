// ---- L-System Generator ----
function genLSystem(params) {
            let { axiom, rules, symbols, length, iterations } = params;
            let str = axiom;
            const ruleMap = {};
            rules.forEach(r => ruleMap[r.a] = r.b);

            for (let i = 0; i < iterations; i++) {
                let next = '';
                for (const ch of str) next += ruleMap[ch] || ch;
                str = next;
                if (str.length > 200000) break;
            }

            let x = 0, y = 0, dir = -Math.PI / 2;
            const stack = [];
            const pts = [];
            let currentColor = '#000';

            for (const ch of str) {
                const action = symbols[ch];
                if (!action) continue;
                if (action.type === 'draw') {
                    const len = parseFloat(action.length) || length || 10;
                    currentColor = action.color || currentColor;
                    const nx = x + Math.cos(dir) * len;
                    const ny = y + Math.sin(dir) * len;
                    pts.push({ x, y, nx, ny, color: currentColor });
                    x = nx; y = ny;
                } else if (action.type === 'turn') {
                    dir += (parseFloat(action.angle) || 0) * Math.PI / 180;
                } else if (action.type === 'push') {
                    stack.push({ x, y, dir, currentColor });
                } else if (action.type === 'pop') {
                    const s = stack.pop();
                    if (s) { x = s.x; y = s.y; dir = s.dir; currentColor = s.currentColor; }
                }
            }
            return { points: pts, meta: { text: str } };
        }

// ---- State ----
let params = {
    axiom: 'X',
    rules: [
    { a: 'X', b: 'F+[[X]-X]-F[-FX]+X' },
    { a: 'F', b: 'FF' }
    ],
    symbols: {
        'F': { type: 'draw', color: '#0ea5e9', length: 6 },
        '+': { type: 'turn', angle: 25 },
        '-': { type: 'turn', angle: -25 },
        '[': { type: 'push' },
		']': { type: 'pop' }
    },
    iterations: 5,
	length: 6
};
let shapeData = genLSystem(params);
window.genLSystem = genLSystem;