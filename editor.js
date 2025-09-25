document.getElementById('bgColorPicker').onchange = () => { const color = document.getElementById('bgColorPicker').value; canvas.style.background = color; params.bg = color;};
function showGuide() { document.getElementById('guideBox').style.display = 'block'; }
function hideGuide() { document.getElementById('guideBox').style.display = 'none'; }
document.getElementById('editorToggle').onclick = () => {
    const ed = document.getElementById('editor');
    ed.classList.toggle('open');
    document.getElementById('editorToggle').innerText = ed.classList.contains('open') ? 'Close Editor' : 'Open Editor';
    refreshEditor();
};

function refreshEditor() {
    document.getElementById('axiomInput').value = params.axiom;
    document.getElementById('iterationsInput').value = params.iterations;
    document.getElementById('genString').value = shapeData.meta.text;
    const rulesDiv = document.getElementById('rules');
    rulesDiv.innerHTML = '';
    params.rules.forEach((r, idx) => {
        const row = document.createElement('div');
        row.className = 'rule-row';
        row.innerHTML = `<input class="ra" value="${r.a}" size="1"/> → <input class="rb" value="${r.b}"/> <button>✕</button>`;
        row.querySelector('.ra').oninput = e => { r.a = e.target.value; update(); };
        row.querySelector('.rb').oninput = e => { r.b = e.target.value; update(); };
        row.querySelector('button').onclick = () => { params.rules.splice(idx, 1); update(); refreshEditor(); };
        rulesDiv.appendChild(row);
    });
    const symbolsDiv = document.getElementById('symbols');
    symbolsDiv.innerHTML = '';
    Object.entries(params.symbols).forEach(([sym, action]) => {
        const row = document.createElement('div');
        row.className = 'symbol-row';
        let inner = `<input value="${sym}" readonly size="2"/> <select class="stype">
              <option value="draw">Draw</option>
              <option value="turn">Turn</option>
              <option value="push">Push</option>
              <option value="pop">Pop</option></select>`;
        if (action.type === 'draw') inner += `<input class="slen" value="${action.length || ''}" size="4"/> <input type="color" class="scol" value="${action.color || '#000'}"/>`;
        if (action.type === 'turn') inner += `<input class="sang" value="${action.angle || ''}" size="4"/>`;
        inner += ` <button>✕</button>`;
        row.innerHTML = inner;
        row.querySelector('.stype').value = action.type;
        row.querySelector('.stype').onchange = e => { action.type = e.target.value; update(); refreshEditor(); };
        if (row.querySelector('.slen')) row.querySelector('.slen').oninput = e => { action.length = parseFloat(e.target.value) || 0; update(); };
        if (row.querySelector('.scol')) row.querySelector('.scol').oninput = e => { action.color = e.target.value; update(); };
        if (row.querySelector('.sang')) row.querySelector('.sang').oninput = e => { action.angle = parseFloat(e.target.value) || 0; update(); };
        row.querySelector('button').onclick = () => { delete params.symbols[sym]; update(); refreshEditor(); };
        symbolsDiv.appendChild(row);
    });
}

document.getElementById('axiomInput').oninput = e => { params.axiom = e.target.value; update(); };
document.getElementById('iterationsInput').oninput = e => { params.iterations = parseInt(e.target.value) || 0; update(); };

document.getElementById('addRuleBtn').onclick = () => { params.rules.push({ a: '', b: '' }); refreshEditor(); };

document.getElementById('addSymBtn').onclick = () => {
    const sym = document.getElementById('newSym').value;
    const type = document.getElementById('newSymType').value;
    const val = document.getElementById('newSymValue').value;
    const color = document.getElementById('newSymColor').value;
    if (!sym) { showNotice('Enter a symbol (single character) before adding.'); return; }
    const obj = { type };
    if (type === 'draw') { obj.length = parseFloat(val) || params.length; obj.color = color; }
    if (type === 'turn') obj.angle = parseFloat(val) || 0;
    params.symbols[sym] = obj;
    document.getElementById('newSym').value = '';
    document.getElementById('newSymValue').value = '';
    refreshEditor();
	update();
};

// ---- Robust Save handler with fallbacks ----
document.getElementById('saveBtn').onclick = () => {
    const dataStr = JSON.stringify(params, null, 2);
    try {
        const blob = new Blob([dataStr], { type: 'application/json' });
        // IE / Edge legacy
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, 'lsystem.json');
            showNotice('Saved (msSaveOrOpenBlob).');
            return;
        }

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'lsystem.json';
        a.style.display = 'none';
        document.body.appendChild(a);

        // Some browsers (iOS Safari) ignore the download attribute — try click(), then fallback to open()
        a.click();

        // Cleanup
        setTimeout(() => {
            try { document.body.removeChild(a); } catch (e) { }
            try { URL.revokeObjectURL(url); } catch (e) { }
        }, 1000);

        // Detect common platforms that ignore download attribute and open blob in new tab as fallback
        const isIos = /iP(ad|od|hone)/i.test(navigator.userAgent);
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (isIos || (isSafari && !('download' in a))) {
            // open in new tab so user can long-press and save/share
            window.open(url, '_blank');
            showNotice('If the file did not download automatically, a new tab was opened — long-press the JSON to save or share it.');
        } else {
            showNotice('Download started.');
        }
    } catch (err) {
        // final fallback — open JSON in new tab for manual copy
        const w = window.open('', '_blank');
        if (w) {
            w.document.write('<pre>' + escapeHtml(dataStr) + '</pre>');
            w.document.title = 'lsystem.json';
            showNotice('Could not generate a direct download. JSON opened in a new tab — copy & save manually.');
        } else {
            showNotice('Unable to save: popup blocked. Copy the JSON from the editor.');
        }
    }
};

document.getElementById('loadInput').onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
        try {
            const parsed = JSON.parse(ev.target.result);
            loadParams(parsed);
            update();
            refreshEditor();
            showNotice('Loaded configuration.');
        } catch (err) {
            showNotice('Invalid JSON file.');
            console.error(err);
        }
    };
    reader.readAsText(file);
};
let examplesData = null;

fetch('examples.json')
    .then(response => response.json())
    .then(data => {
        examplesData = data;
        const exampleSelect = document.getElementById('exampleSelect');
        examplesData.examples.forEach((ex, idx) => {
            const option = document.createElement('option');
            option.value = idx;
            option.textContent = ex.name;
            exampleSelect.appendChild(option);
        });
    })
    .catch(err => {
        console.error("Failed to load examples.json", err);
        showNotice("Could not load examples.json");
    });

document.getElementById('exampleSelect').onchange = () => {
    const idx = document.getElementById('exampleSelect').value;
    if (idx === "" || !examplesData) return;
    loadParams(JSON.parse(JSON.stringify(examplesData.examples[idx])));
    update();
    refreshEditor();
    showNotice(`Loaded example: ${params.name}`);
};

document.getElementById("shareBtn").onclick = () => {
    const encoded = paramsToURL(params);
    const url = `${location.origin}${location.pathname}?data=${encoded}`;
    navigator.clipboard.writeText(url).then(() => {
        showNotice("Share link copied to clipboard!");
    });
};
document.getElementById("animType").onchange = () => {
    params.animType=document.getElementById("animType").value;
	update();
};

document.getElementById("animSpeed").onchange = () => {
    params.animSpeed=parseFloat(document.getElementById("animSpeed").value);
	animI = 0;
};
document.getElementById("animBtn").onclick = () => {
    animI = 0;

};



