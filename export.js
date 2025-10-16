function f(n){ return Number(n).toFixed(2); }
// === Bounding Box ===
function computeBBox(segments) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (let s of segments) {
    minX = Math.min(minX, s.x, s.nx);
    minY = Math.min(minY, s.y, s.ny);
    maxX = Math.max(maxX, s.x, s.nx);
    maxY = Math.max(maxY, s.y, s.ny);
  }
  return {
    minX, minY, maxX, maxY,
    w: maxX - minX,
    h: maxY - minY
  };
}

// === Square size ===
function squareSize(bbox, maxSize = 4096) {
  const side = Math.max(bbox.w, bbox.h);
  const scale = Math.min(maxSize / side, 1); // הגבלת PNG לגודל סביר
  return { side: side * scale, scale };
}

// === PNG Export ===
function downloadPNG(segments, background = "#ffffff", filename = "drawing.png") {
  const bbox = computeBBox(segments);
  const { side, scale } = squareSize(bbox);
  const canvas = document.createElement("canvas");
  canvas.width = side;
  canvas.height = side;
  const ctx = canvas.getContext("2d");

  // רקע
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, side, side);

  ctx.save();
  ctx.scale(scale, scale);
  ctx.translate((side / scale - bbox.w) / 2 - bbox.minX, (side / scale - bbox.h) / 2 - bbox.minY);

  for (let seg of segments) {
    ctx.beginPath();
    ctx.moveTo(seg.x, seg.y);
    ctx.lineTo(seg.nx, seg.ny);
    ctx.strokeStyle = seg.color || "#000";
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  ctx.restore();

  canvas.toBlob(blob => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  });
}

// === SVG Export ===
function downloadSVG(segments, background = "#ffffff", filename = "drawing.svg") {
  const bbox = computeBBox(segments);
  const side = Math.max(bbox.w, bbox.h);
  const offsetX = (side - bbox.w) / 2 - bbox.minX;
  const offsetY = (side - bbox.h) / 2 - bbox.minY;

  // קיבוץ קווים לפי צבע
  const colorGroups = {};
  for (let seg of segments) {
    const color = seg.color || "#000";
    if (!colorGroups[color]) colorGroups[color] = [];
    colorGroups[color].push(seg);
  }

  // בניית paths לכל צבע
  let paths = "";
  for (let color in colorGroups) {
    let d = "";
    for (let seg of colorGroups[color]) {
      const x1 = f(seg.x + offsetX);
      const y1 = f(seg.y + offsetY);
      const x2 = f(seg.nx + offsetX);
      const y2 = f(seg.ny + offsetY);
      d += `M${x1} ${y1} L${x2} ${y2} `;
    }
    paths += `<path d="${d.trim()}" stroke="${color}" stroke-width="1" fill="none"/>`;
  }

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${side}" height="${side}" viewBox="0 0 ${side} ${side}">
  <rect width="100%" height="100%" fill="${background}"/>
  ${paths}
</svg>`;

  const blob = new Blob([svg], { type: "image/svg+xml" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}
const svgBtn = document.getElementById("svgBtn");
    const pngBtn = document.getElementById("pngBtn");

    svgBtn.addEventListener("click", () => {
        const bg = document.getElementById("bgColorPicker").value;
        const segments = shapeData.points || [];
        downloadSVG(segments, bg, "lsystem.svg");
    });

    pngBtn.addEventListener("click", () => {
        const bg = document.getElementById("bgColorPicker").value;
        const segments = shapeData.points || [];
        downloadPNG(segments, bg, "lsystem.png");

    });
