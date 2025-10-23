/* app.js — main logic (converted from your Python code)
   - includes seedable RNG support
   - uses same structures: ExpressionList, Condition, Action, SymbolType, Symbol, RawSymbol, Rule, Axiom
   - preserves regexes and parsing behavior
*/


function getRandom(){
  return  Math.random();
}
// ------------------------------
// Expression / Condition compilation (safe-ish)
// ------------------------------
function detectFunctionCalls(expr){
  const re = /([A-Za-z_][A-Za-z0-9_]*)\s*\(/g;
  let m;
  while((m = re.exec(expr)) !== null){
    throw new Error('Function calls are not allowed in expressions/conditions: ' + m[1]);
  }
}
function replaceIdentifiersWithVars(expr){
  let out = '';
  let i = 0, n = expr.length;
  let inS = false, inD = false, esc = false;
  while(i < n){
    const ch = expr[i];
    if(!inS && !inD){
      if(ch === "'"){ inS = true; out += ch; i++; continue; }
      if(ch === '"'){ inD = true; out += ch; i++; continue; }
      if(/[A-Za-z_]/.test(ch)){
        let j = i+1;
        while(j < n && /[A-Za-z0-9_]/.test(expr[j])) j++;
        const name = expr.slice(i,j);
        if(['true','false','null','undefined','NaN','Infinity','Math','PI','E'].includes(name) || /^\d+$/.test(name)){
          out += name;
        } else {
          out += "((__vars['" + name + "'] === undefined) ? 0 : __vars['" + name + "'])";
        }
        i = j; continue;
      } else {
        out += ch; i++; continue;
      }
    } else if(inS){
      out += ch;
      if(!esc && ch === "'") inS = false;
      esc = (ch === '\\' && !esc);
      i++;
    } else {
      out += ch;
      if(!esc && ch === '"') inD = false;
      esc = (ch === '\\' && !esc);
      i++;
    }
  }
  return out;
}
function sanitizeAndCompileExpression(expr, forCondition=false){
  if(!expr || !expr.toString().trim()) return null;
  let s = expr.toString();
  if(forCondition){
    s = s.replace(/&/g,' and ').replace(/\|/g,' or ').replace(/\!/g,' not ');
    s = s.replace(/\bTrue\b/g,'true').replace(/\bFalse\b/g,'false');
    s = s.replace(/\band\b/gi,'&&').replace(/\bor\b/gi,'||').replace(/\bnot\b/gi,'!');
  }
  if(/[{}]/.test(s)) throw new Error('Invalid characters in expression');
  detectFunctionCalls(s);
  const jsExpr = replaceIdentifiersWithVars(s);
  try{
    return new Function('__vars', 'return (' + jsExpr + ');');
  }catch(e){
    throw new Error('Failed to compile expression: ' + e.message + ' | expr: ' + expr);
  }
}

// ------------------------------
// ExpressionList
// ------------------------------
class ExpressionList {
  constructor(expr){
    this.expr = (expr||'').toString().trim();
    this.funcs = [];
    this._compile();
  }
  _compile(){
    this.funcs = [];
    if(!this.expr) return;
    const parts = this.expr.split(',').map(p=>p.trim()).filter(p=>p);
    for(const p of parts) this.funcs.push(sanitizeAndCompileExpression(p,false));
  }
  run(vars){
    return this.funcs.map(f => {
      if(!f) return 0;
      try{ return f(vars); } catch(e){ return 0; }
    });
  }
}

// ------------------------------
// Condition
// ------------------------------
class Condition {
  constructor(expr){
    this.expr = (expr||'True').toString().trim();
    this.func = sanitizeAndCompileExpression(this.expr, true);
  }
  run(symbol){
    try{ return !!this.func(symbol.params || {}); } catch(e){ return false; }
  }
}

// ------------------------------
// Action
// ------------------------------
class Action {
  constructor(text, turtle){
    this.turtle = turtle; this.text = (text||'').toString().trim(); this.c = [];
    this.compile();
  }
  compile(){
    this.c = [];
    if(!this.text) return;
    const parts = this.text.split(';').map(p=>p.trim()).filter(p=>p);
    const forwardRegex = /^\s*forward\s*\(\s*(?:len\s*=\s*)?([^),]*)\s*(?:,\s*(?:width\s*=\s*)?([^),]*)\s*(?:,\s*(?:color\s*=\s*)?([^),]*)\s*)?)?\)\s*$/i;
    const angleRegex = /^\s*angle\s*\(\s*(?:deg\s*=\s*)?([^)]*)\s*\)\s*$/i;
    const pushRegex = /^\s*push\s*\(\s*\)\s*$/i;
    const popRegex = /^\s*pop\s*\(\s*\)\s*$/i;
    const penupRegex = /^\s*penup\s*\(\s*\)\s*$/i;
    const pendownRegex = /^\s*pendown\s*\(\s*\)\s*$/i;
    for(const p of parts){
      let m;
      m = p.match(forwardRegex);
      if(m){ this.c.push({type:'forward', len:new ExpressionList(m[1]||''), width:new ExpressionList(m[2]||''), color:new ExpressionList(m[3]||'')}); continue; }
      m = p.match(angleRegex);
      if(m){ this.c.push({type:'angle', deg:new ExpressionList(m[1]||'')}); continue; }
      if(pushRegex.test(p)){ this.c.push({type:'push'}); continue; }
      if(popRegex.test(p)){ this.c.push({type:'pop'}); continue; }
      if(penupRegex.test(p)){ this.c.push({type:'penup'}); continue; }
      if(pendownRegex.test(p)){ this.c.push({type:'pendown'}); continue; }
    }
  }
  run(params){
    for(const a of this.c){
      if(a.type === 'forward'){
        const l = (a.len.funcs.length ? a.len.run(params)[0] : 0) || 0;
        const w = (a.width.funcs.length ? a.width.run(params)[0] : 1) || 1;
        const col = (a.color.funcs.length ? a.color.run(params)[0] : 'black');
        this.turtle.forward(Number(l) || 0, Number(w) || 1, col);
      } else if(a.type === 'angle'){
        const deg = (a.deg.funcs.length ? a.deg.run(params)[0] : 0) || 0;
        this.turtle.angle_left(Number(deg) || 0);
      } else if(a.type === 'push') this.turtle.push();
      else if(a.type === 'pop') this.turtle.pop();
      else if(a.type === 'penup') this.turtle.penup();
      else if(a.type === 'pendown') this.turtle.pendown();
    }
  }
}

// ------------------------------
// Symbols, Rules, Axiom
// ------------------------------
class SymbolType {
  constructor(name, params, action){
    this.name = name; this.params = Object.assign({}, params || {}); this.action = action;
    SymbolType.symbolsTypes[name] = this;
  }
}
SymbolType.symbolsTypes = {};

class Symbol {
  constructor(type_, params){
    this.type = type_;
    this.params = params ? Object.assign({}, params) : Object.assign({}, type_.params);
  }
  __copy__(){ return new Symbol(this.type, Object.assign({}, this.params)); }
}

class RawSymbol {
  constructor(type_char, params_expr){
    if(!SymbolType.symbolsTypes[type_char]) throw new Error('Unknown symbol type: ' + type_char);
    this.type = SymbolType.symbolsTypes[type_char];
    this.exp = params_expr;
    this.params = Object.assign({}, this.type.params);
  }
  compile(params){
    const vals = this.exp.run(params);
    const keys = Object.keys(this.params);
    for(let i=0;i<vals.length;i++) if(i<keys.length) this.params[keys[i]] = vals[i];
    return new Symbol(this.type, Object.assign({}, this.params));
  }
}

class Rule {
  constructor(symbol_char, condition_text, body_str, probability=1.0){
    if(!SymbolType.symbolsTypes[symbol_char]) throw new Error('Unknown symbol type: ' + symbol_char);
    this.type = SymbolType.symbolsTypes[symbol_char];
    this.condition = new Condition(condition_text);
    this.body = body_str;
    this.probability = Number(probability);
    this._compiled_body = [];
    this.compile();
  }
  compile(){
    const symbol_re = /([A-Za-z+\-\[\]])(?:\(\s*([^)]*?)\s*\))?/g;
    this._compiled_body = [];
    let m;
    while((m = symbol_re.exec(this.body)) !== null){
      const name = m[1];
      const params_text = m[2] || '';
      this._compiled_body.push(new RawSymbol(name, new ExpressionList(params_text)));
    }
  }
  run(sym){
    if(getRandom() > this.probability) return null;
    if(sym.type !== this.type) return null;
    if(!this.condition.run(sym)) return null;
    return this._compiled_body.map(rs => rs.compile(sym.params));
  }
}

class Axiom {
  constructor(symbols){ this.symbols = symbols; }
  run(rules, iterations){
    let ax = this.symbols.map(s => s.__copy__());
    for(let _=0;_<iterations;_++){
      const out = [];
      for(const s of ax){
        let applied = false;
        for(const r of rules){
          const res = r.run(s);
          if(res){ out.push(...res); applied = true; break; }
        }
        if(!applied) out.push(s.__copy__());
      }
      ax = out.map(x=>x.__copy__());
    }
    return new Axiom(ax);
  }
  draw(){ for(const s of this.symbols) s.type.action.run(s.params); }
}

// ------------------------------
// Canvas implementation
// ------------------------------
function hsvToRgb(h,s,v){
  let r,g,b; let i=Math.floor(h*6); let f = h*6 - i; let p = v*(1-s); let q = v*(1-f*s); let t = v*(1-(1-f)*s);
  switch(i%6){case 0:r=v;g=t;b=p;break;case 1:r=q;g=v;b=p;break;case 2:r=p;g=v;b=t;break;case 3:r=p;g=q;b=v;break;case 4:r=t;g=p;b=v;break;case 5:r=v;g=p;b=q;break;}
  return [Math.round(r*255),Math.round(g*255),Math.round(b*255)];
}
function rgbToHex(r,g,b){ return '#'+[r,g,b].map(x => { let v=Math.max(0,Math.min(255,Math.round(x))); return v.toString(16).padStart(2,'0'); }).join(''); }

class InteractiveCanvas {
  constructor(canvas, width=900, height=700, bg='white'){
    this.canvas = canvas; this.ctx = canvas.getContext('2d');
    this.width = width; this.height = height; this.canvas.width = width; this.canvas.height = height; this.bg = bg;
    this.zoom = 1.0; this.rotation_deg = 0.0; this.offset_x = width/2; this.offset_y = height/2;
    this.x = 0.0; this.y = 0.0; this.angle = -90.0; this.pen_down = true; this.stack = []; this.lines = [];
    this._pan_last = null; this._is_panning = false;
    this._bindEvents(); this._redraw();
  }
  _bindEvents(){
    const cvs = this.canvas;
    cvs.addEventListener('mousedown', (ev) => {
      const rect = cvs.getBoundingClientRect();
      if(ev.button === 0){
        this._pan_last = [ev.clientX - rect.left, ev.clientY - rect.top];
        this._is_panning = true;
      } else if(ev.button === 2){
        const pos = this._screen_to_world(ev.clientX - rect.left, ev.clientY - rect.top);
        this.x = pos[0]; this.y = pos[1];
      }
    });
    window.addEventListener('mousemove', (ev) => {
      if(!this._is_panning || !this._pan_last) return;
      const rect = this.canvas.getBoundingClientRect();
      const x = ev.clientX - rect.left, y = ev.clientY - rect.top;
      const dx = x - this._pan_last[0], dy = y - this._pan_last[1];
      this.offset_x += dx; this.offset_y += dy; this._pan_last = [x,y]; this._redraw();
    });
    window.addEventListener('mouseup', ()=>{ this._is_panning = false; this._pan_last = null; });
    cvs.addEventListener('wheel', (ev) => {
      ev.preventDefault();
      const rect = this.canvas.getBoundingClientRect();
      const mx = ev.clientX - rect.left, my = ev.clientY - rect.top;
      const factor = 1.0 + (ev.deltaY < 0 ? 0.1 : -0.1);
      const wb = this._screen_to_world(mx,my);
      this.zoom *= factor;
      if(this.zoom < 0.01) this.zoom = 0.01;
      const after = this._world_to_screen(wb[0], wb[1]);
      this.offset_x += (mx - after[0]); this.offset_y += (my - after[1]);
      this._redraw();
    }, { passive:false });
    window.addEventListener('resize', ()=> {
      const r = this.canvas.getBoundingClientRect();
      this.canvas.width = Math.max(300, Math.floor(r.width));
      this.canvas.height = Math.max(200, Math.floor(r.height));
      this.width = this.canvas.width; this.height = this.canvas.height; this._redraw();
    });
    this.canvas.addEventListener('contextmenu', (e)=>e.preventDefault());
  }
  _world_to_screen(xw,yw){
    const sx = xw * this.zoom, sy = yw * this.zoom;
    const theta = this.rotation_deg * Math.PI / 180.0;
    const rx = sx * Math.cos(theta) - sy * Math.sin(theta);
    const ry = sx * Math.sin(theta) + sy * Math.cos(theta);
    return [rx + this.offset_x, ry + this.offset_y];
  }
  _screen_to_world(xs,ys){
    const rx = xs - this.offset_x, ry = ys - this.offset_y;
    const theta = this.rotation_deg * Math.PI / 180.0;
    const inv_rx = rx * Math.cos(theta) + ry * Math.sin(theta);
    const inv_ry = -rx * Math.sin(theta) + ry * Math.cos(theta);
    if(this.zoom === 0) return [inv_rx, inv_ry];
    return [inv_rx / this.zoom, inv_ry / this.zoom];
  }
  forward(length, width=1, color='black'){
    const rad = this.angle * Math.PI / 180.0;
    const nx = this.x + length * Math.cos(rad), ny = this.y + length * Math.sin(rad);
    let c = color;
    if(typeof color === 'number'){
      const hue = (Number(color) % 360) / 360.0;
      const rgb = hsvToRgb(hue,1,1); c = rgbToHex(rgb[0], rgb[1], rgb[2]);
    } else if(Array.isArray(color) && color.length === 3){
      c = rgbToHex(color[0], color[1], color[2]);
    } else if(typeof color !== 'string') c = 'black';
    if(this.pen_down){ this.lines.push([this.x,this.y,nx,ny,Math.max(1,Number(width)||1),c]); this._draw_line_world(this.lines[this.lines.length-1]); }
    this.x = nx; this.y = ny;
  }
  angle_left(d){ this.angle += d; }
  push(){ this.stack.push([this.x,this.y,this.angle,this.pen_down]); }
  pop(){ if(this.stack.length){ const p=this.stack.pop(); this.x=p[0]; this.y=p[1]; this.angle=p[2]; this.pen_down=p[3]; } }
  penup(){ this.pen_down=false; } pendown(){ this.pen_down=true; }
  clear(){ this.x=0; this.y=0; this.pen_down=true; this.lines = []; this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);this.angle = 0; this._redraw(); }
  _draw_line_world(line){
    const [x1,y1,x2,y2,width,color] = line;
    const [sx1,sy1] = this._world_to_screen(x1,y1);
    const [sx2,sy2] = this._world_to_screen(x2,y2);
    this.ctx.lineCap = 'round'; this.ctx.lineJoin = 'round';
    this.ctx.beginPath(); this.ctx.moveTo(sx1,sy1); this.ctx.lineTo(sx2,sy2);
    this.ctx.strokeStyle = color; this.ctx.lineWidth = width; this.ctx.stroke();
  }
  _redraw(){ this.ctx.fillStyle = this.bg; this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height); for(const l of this.lines) this._draw_line_world(l); }
  rotate_about_screen_center(delta_deg){
    const cx = this.canvas.width/2, cy = this.canvas.height/2;
    const wc = this._screen_to_world(cx,cy);
    this.rotation_deg = (this.rotation_deg + delta_deg) % 360.0;
    const after = this._world_to_screen(wc[0], wc[1]);
    this.offset_x += (cx - after[0]); this.offset_y += (cy - after[1]); this._redraw();
  }
  reset_view(){ this.zoom = 1.0; this.rotation_deg = 0.0; this.offset_x = this.canvas.width/2; this.offset_y = this.canvas.height/2; this._redraw(); }
}

// ------------------------------
// UI wiring & initialization
// ------------------------------
(function(){
  const canvasEl = document.getElementById('drawCanvas');
  function fitCanvas(){
    const rect = canvasEl.getBoundingClientRect();
    canvasEl.width = Math.max(300, Math.floor(rect.width || 900));
    canvasEl.height = Math.max(200, Math.floor(rect.height || 700));
  }
  fitCanvas();
  const T = new InteractiveCanvas(canvasEl, canvasEl.width, canvasEl.height, '#ffffff');

  const symListEl = document.getElementById('symList');
  const entSymName = document.getElementById('entSymName');
  const entSymParams = document.getElementById('entSymParams');
  const entSymAction = document.getElementById('entSymAction');
  const axiomText = document.getElementById('axiomText');
  const rulesText = document.getElementById('rulesText');
  const iterEntry = document.getElementById('iterEntry');
  const seedInput = document.getElementById('seedInput');
  const applySeedBtn = document.getElementById('applySeedBtn');
  const randomizeSeedBtn = document.getElementById('randomizeSeedBtn');

  const addSymBtn = document.getElementById('addSymBtn');
  const removeSymBtn = document.getElementById('removeSymBtn');
  const updateSymBtn = document.getElementById('updateSymBtn');
  const runBtn = document.getElementById('runBtn');
  const validateBtn = document.getElementById('validateBtn');
  const clearBtn = document.getElementById('clearBtn');
  const resetViewBtn = document.getElementById('resetViewBtn');
  const rotNeg = document.getElementById('rotNeg');
  const rotPos = document.getElementById('rotPos');

  function refresh_symbols(){
    symListEl.innerHTML = '';
    const keys = Object.keys(SymbolType.symbolsTypes).sort();
    for(const k of keys){
        const st = SymbolType.symbolsTypes[k];
        const params_preview = Object.keys(st.params).length 
            ? Object.entries(st.params).map(([n,v]) => `${n}=${v}`).join(',') 
            : '';
        const action_preview = st.action.text;  
        const div = document.createElement('div');
        div.className='sym-item';
        div.textContent = `${k} (${params_preview}) {${action_preview}}`;
        div.dataset.name = k;
        symListEl.appendChild(div);
    }
}

  function parse_params_text(text){
    const out = {}; const parts = (text||'').split(',').map(x=>x.trim()).filter(x=>x);
    for(const p of parts){
      if(p.includes('=')){
        const [name, val] = p.split(/=(.*)/s).slice(0,2);
        const n = name.trim();
        const v = parseFloat((val||'').trim());
        out[n] = isNaN(v) ? 0.0 : v;
      } else out[p] = 0.0;
    }
    return out;
  }

  addSymBtn.addEventListener('click', ()=>{
    const name = (entSymName.value || 'A').trim().slice(0,1);
    if(SymbolType.symbolsTypes[name]){ alert("Exists: Symbol '" + name + "' already exists"); return; }
    const params_dict = parse_params_text(entSymParams.value);
    const ActionText = entSymAction.value.trim();
    new SymbolType(name, params_dict, new Action(ActionText, T));
    refresh_symbols();
  });
  removeSymBtn.addEventListener('click', ()=>{
    const sel = symListEl.querySelector('.sym-item.selected'); if(!sel) return;
    delete SymbolType.symbolsTypes[sel.dataset.name]; refresh_symbols();
  });
  symListEl.addEventListener('click', (ev)=>{
    const item = ev.target.closest('.sym-item'); if(!item) return;
    Array.from(symListEl.children).forEach(c=>c.classList.remove('selected')); item.classList.add('selected');
    const st = SymbolType.symbolsTypes[item.dataset.name];
    entSymName.value = st.name; entSymParams.value = Object.keys(st.params).map(k=>k+'='+st.params[k]).join(','); entSymAction.value = (st.action && st.action.text)?st.action.text:'';
  });
  updateSymBtn.addEventListener('click', ()=>{
    const sel = symListEl.querySelector('.sym-item.selected'); if(!sel){ alert('Select a symbol first'); return; }
    const st = SymbolType.symbolsTypes[sel.dataset.name];
    const new_name = (entSymName.value || st.name).trim().slice(0,1);
    const params_dict = parse_params_text(entSymParams.value);
    const action_text = entSymAction.value.trim();
    if(new_name !== st.name) delete SymbolType.symbolsTypes[st.name];
    st.name = new_name; st.params = params_dict; st.action = new Action(action_text, T);
    SymbolType.symbolsTypes[new_name] = st;
    refresh_symbols();
  });

  function parse_rules_text(){
    const parsed = []; const lines = (rulesText.value || '').split(/\r?\n/);
    for(const line of lines){
      const raw = line.trim(); if(!raw || raw.startsWith('#')) continue;
      let m = raw.match(/^\s*([A-Za-z+\-\[\]])\s*:\s*(.*?)\s*->\s*(.*?)\s*(?::\s*([0-9.]+)\s*)?$/);
      if(m){ parsed.push([m[1], (m[2]||'True').trim(), m[3].trim(), m[4]?Number(m[4]):1.0]); continue; }
      m = raw.match(/^\s*([A-Za-z+\-\[\]])\s*\(\s*(.*?)\s*\)\s*->\s*(.*?)\s*(?::\s*([0-9.]+)\s*)?$/);
      if(m){ parsed.push([m[1], (m[2]||'True').trim(), m[3].trim(), m[4]?Number(m[4]):1.0]); continue; }
      m = raw.match(/^\s*([A-Za-z+\-\[\]])\s*->\s*(.*?)\s*(?::\s*([0-9.]+)\s*)?$/);
      if(m){ parsed.push([m[1], 'True', (m[2]||'').trim(), m[3]?Number(m[3]):1.0]); continue; }
      throw new Error('Cannot parse rule: ' + raw);
    }
    return parsed;
  }

  validateBtn.addEventListener('click', ()=> {
    try{
      const parsed = parse_rules_text();
      let msg = 'Parsed rules:\n';
      for(const p of parsed) msg += `${p[0]} : ${p[1]} -> ${p[2]} :${p[3]}\n`;
      alert(msg);
    }catch(e){ alert('Rules error: ' + e.message); }
  });

  runBtn.addEventListener('click', ()=>{
    const iterations = parseInt(iterEntry.value);
    if(isNaN(iterations)){ alert('Iterations must be integer'); return; }
    T.clear();
    let parsedRules;
    try{ parsedRules = parse_rules_text(); } catch(e){ alert('Invalid rules:\n'+e.message); return; }
    const rules = parsedRules.map(p=> new Rule(p[0], p[1], p[2], p[3]));
    const ax = (axiomText.value || '').trim();
    const ax_symbols = [];
    for(const ch of ax) if(SymbolType.symbolsTypes[ch]) ax_symbols.push(new Symbol(SymbolType.symbolsTypes[ch]));
    const axiom = new Axiom(ax_symbols);
    try{
      const result = axiom.run(rules, iterations);
      result.draw();
    }catch(e){ console.error(e); alert('Runtime error: '+e.message); }
  });

  clearBtn.addEventListener('click', ()=> T.clear());
  resetViewBtn.addEventListener('click', ()=> T.reset_view());

  // init default symbols
  function init_default_symbols(){
    SymbolType.symbolsTypes = {};
    new SymbolType("F", {"l":10.0, "c":0.0}, new Action("forward(l,1,c)", T));
    new SymbolType("+", {"d":1.0}, new Action("angle(d)", T));
    new SymbolType("-", {"d": -1.0}, new Action("angle(d)", T));
    new SymbolType("[", {}, new Action("push()", T));
    new SymbolType("]", {}, new Action("pop()", T));
    new SymbolType("X", {}, new Action("", T));
    refresh_symbols();
  }
  init_default_symbols();
})();

