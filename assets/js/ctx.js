const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');
const state = { zoom: 1, offsetX: 0, offsetY: 0 };
window.animI = 0;


function drawTreeParallel(ctx, canvas, tree,maxIndex) {

  let steps = 0;

  active = [{ seq: tree, i: 0, x: 0, y: 0, dir: -Math.PI/2 }];

  while (steps < maxIndex && active.length > 0) {
    for (const branch of [...active]) {
      if (steps >= maxIndex) break;
      const node = branch.seq[branch.i];
      if (!node) {
        // נגמרו פעולות בענף
        const idx = active.indexOf(branch);
        if (idx >= 0) active.splice(idx, 1);
        continue;
      }

      branch.i++;

      if (node.type === "draw") {
        const len = node.length || 10;
        const nx = branch.x + Math.cos(branch.dir) * len;
        const ny = branch.y + Math.sin(branch.dir) * len;

        ctx.beginPath();
        ctx.moveTo(branch.x, branch.y);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = node.color || "#000";
        ctx.lineWidth = Math.max(0.5/state.zoom, 0.2);
        ctx.stroke();

        branch.x = nx; branch.y = ny;
      }
      else if (node.type === "turn") {
        branch.dir += (node.angle || 0) * Math.PI / 180;
      }
      else if (node.type === "branch") {
        active.push({ seq: node.children, i: 0, x: branch.x, y: branch.y, dir: branch.dir });
      }
    }
	steps++;
  }


  return {done: active.length === 0 };
}

function render() {
	
    canvas.width = canvas.clientWidth * devicePixelRatio;
    canvas.height = canvas.clientHeight * devicePixelRatio;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.save();
    ctx.translate(canvas.width / 2 + state.offsetX, canvas.height / 2 + state.offsetY);
    ctx.scale(state.zoom, state.zoom);
	if (params.animType == "tree"){
		if (shapeData && shapeData.tree) {
			if (drawTreeParallel(ctx, canvas, shapeData.tree,animI).done==false){
				animI+=params.animSpeed;
			}
		}
	}
	else if (params.animType=="steps"){
		if (shapeData && shapeData.points) {
			let i = 0;
			for (const seg of shapeData.points) {
				i++;
				if (i>animI){i=0;break;}
				ctx.beginPath();
				ctx.moveTo(seg.x, seg.y);
				ctx.lineTo(seg.nx, seg.ny);
				ctx.strokeStyle = seg.color;
				
				ctx.stroke();
			}
			if (i==0) animI+=params.animSpeed;
			
		}
	}
	else {
		const colorPaths = new Map();
		for (const seg of shapeData.points) {
			const color = seg.color || "#000";
			if (!colorPaths.has(color)) colorPaths.set(color, new Path2D());
			const path = colorPaths.get(color);
			path.moveTo(seg.x, seg.y);
			path.lineTo(seg.nx, seg.ny);
		}
		const l = Math.max(0.5 / state.zoom, 0.2);
		for (const [color, path] of colorPaths.entries()) {
			ctx.strokeStyle = color;
			ctx.lineWidth = l;
			ctx.stroke(path);
		}
	}
    ctx.restore();
    requestAnimationFrame(render);
}
render();
// ---- Controls ----
document.getElementById('resetBtn').onclick = () => { state.zoom = 1; state.offsetX = 0; state.offsetY = 0; };

let isPanning = false;
let last = { x: 0, y: 0 };
let lastDist = null;
let lastCenter = null;

// ---- TOUCH START ----
canvas.addEventListener('touchstart', e => {
  e.preventDefault();

  if (e.touches.length === 2) {
    lastDist = getDist(e.touches);
    const rect = canvas.getBoundingClientRect();
    lastCenter = getCenter(e.touches, rect);
  } else if (e.touches.length === 1) {
    isPanning = true;
    last = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }
}, { passive: false });

// ---- TOUCH MOVE ----
canvas.addEventListener('touchmove', e => {
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();

  if (e.touches.length === 2 && lastDist && lastCenter) {
    const newDist = getDist(e.touches);
    const newCenter = getCenter(e.touches, rect);

    const zoomFactor = newDist / lastDist;
    const prevZoom = state.zoom;
    state.zoom *= zoomFactor;

    // פיצוי סביב מרכז ההגדלה של שתי האצבעות
    const centerX = newCenter.x - canvas.width / 2 - state.offsetX;
    const centerY = newCenter.y - canvas.height / 2 - state.offsetY;

    state.offsetX -= centerX * (state.zoom / prevZoom - 1);
    state.offsetY -= centerY * (state.zoom / prevZoom - 1);

    // הזזה לפי תנועת המרכז עצמו
    state.offsetX += newCenter.x - lastCenter.x;
    state.offsetY += newCenter.y - lastCenter.y;

    lastDist = newDist;
    lastCenter = newCenter;

  } else if (e.touches.length === 1 && isPanning) {
    // גרירה עם אצבע אחת
    state.offsetX += e.touches[0].clientX - last.x;
    state.offsetY += e.touches[0].clientY - last.y;
    last = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }
}, { passive: false });

// ---- TOUCH END ----
canvas.addEventListener('touchend', e => {
  if (e.touches.length < 2) {
    lastDist = null;
    lastCenter = null;
  }
  if (e.touches.length === 0) isPanning = false;
}, { passive: false });

// ---- פונקציות עזר ----
function getDist(touches) {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.hypot(dx, dy);
}

function getCenter(touches, rect) {
  return {
    x: ((touches[0].clientX + touches[1].clientX) / 2) - rect.left,
    y: ((touches[0].clientY + touches[1].clientY) / 2) - rect.top
  };
}

window.ctx = ctx;
window.render = render;











