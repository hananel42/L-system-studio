const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');
const state = { zoom: 1, offsetX: 0, offsetY: 0 };
window.animI = 0;
function render() {
	
    canvas.width = canvas.clientWidth * devicePixelRatio;
    canvas.height = canvas.clientHeight * devicePixelRatio;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.save();
    ctx.translate(canvas.width / 2 + state.offsetX, canvas.height / 2 + state.offsetY);
    ctx.scale(state.zoom, state.zoom);

    if (shapeData && shapeData.points) {
		let i = 0;
        for (const seg of shapeData.points) {
			i++;
			if (i>animI && params.animType!="none"){i=0;break;}
            ctx.beginPath();
            ctx.moveTo(seg.x, seg.y);
            ctx.lineTo(seg.nx, seg.ny);
            ctx.strokeStyle = seg.color;
            ctx.lineWidth = Math.max(0.5 / state.zoom, 0.2);
            ctx.stroke();
        }
		if (i==0) animI+=params.animSpeed;
		
    }
    ctx.restore();
    requestAnimationFrame(render);
}
render();
// ---- Controls ----
document.getElementById('resetBtn').onclick = () => { state.zoom = 1; state.offsetX = 0; state.offsetY = 0; };

// pan + zoom with mouse
let isPanning = false; let last = { x: 0, y: 0 };
canvas.addEventListener('mousedown', e => { isPanning = true; last = { x: e.clientX, y: e.clientY }; });
canvas.addEventListener('mousemove', e => { if (isPanning) { state.offsetX += e.clientX - last.x; state.offsetY += e.clientY - last.y; last = { x: e.clientX, y: e.clientY }; } });
canvas.addEventListener('mouseup', () => isPanning = false);
canvas.addEventListener('mouseleave', () => isPanning = false);
canvas.addEventListener('wheel', e => { e.preventDefault(); state.zoom *= e.deltaY < 0 ? 1.1 : 0.9; }, { passive: false });

// touch gestures
let lastDist = null;
canvas.addEventListener('touchstart', e => {
    if (e.touches.length === 2) lastDist = getDist(e.touches);
    else if (e.touches.length === 1) { isPanning = true; last = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }
    e.preventDefault();
}, { passive: false });
canvas.addEventListener('touchmove', e => {
    if (e.touches.length === 2 && lastDist) {
        const newD = getDist(e.touches);
        state.zoom *= newD / lastDist;
        lastDist = newD;
    } else if (e.touches.length === 1 && isPanning) {
        state.offsetX += e.touches[0].clientX - last.x; state.offsetY += e.touches[0].clientY - last.y;
        last = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    e.preventDefault();
}, { passive: false });
canvas.addEventListener('touchend', e => { if (e.touches.length < 2) lastDist = null; if (e.touches.length === 0) isPanning = false; }, { passive: false });

function getDist(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.hypot(dx, dy);
}



window.ctx = ctx;
window.render = render;

                        
