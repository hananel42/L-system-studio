  const listDiv = document.getElementById("localStorage");
  const saveBtn = document.getElementById("saveLocal");
  const saveInp = document.getElementById("saveInp");

  function renderList() {
    listDiv.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (!key.startsWith("lsys:")) continue;

      const shortKey = key.replace("lsys:", "");
      const value = localStorage.getItem(key);

      const container = document.createElement("div");
      container.style.display = "flex";
      container.style.gap = "6px";
      container.style.marginBottom = "4px";
	  container.style.padding = "4px 8px";
	  container.style.border = "1px solid #888";

      const nameSpan = document.createElement("span");
      nameSpan.textContent = shortKey;

      const loadBtn = document.createElement("button");
      loadBtn.textContent = "Load";
      loadBtn.onclick = () => {
        const data = JSON.parse(value);
        console.log("Loaded L-system:", data);
        showNotice("Loaded L-system: " + shortKey);
        loadParams(data);
      };

      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.onclick = () => {
        localStorage.removeItem(key);
        renderList();
      };
	loadBtn.setAttribute("style", "all: unset; display:inline-block; margin-left:4px; background:#1c4d7a; color:#fff; padding:4px 8px; border-radius:6px; cursor:pointer; text-align:center;");
	delBtn.setAttribute("style", "all: unset; display:inline-block; margin-left:4px; background:#7a1c1c; color:#fff; padding:4px 8px; border-radius:6px; cursor:pointer; text-align:center;");

      container.appendChild(nameSpan);
      container.appendChild(loadBtn);
      container.appendChild(delBtn);
      listDiv.appendChild(container);
    }
  }

  saveBtn.onclick = () => {
    const name = saveInp.value.trim();
    if (!name) return showNotice("Enter a name first!");
    localStorage.setItem("lsys:" + name, JSON.stringify(params));
    saveInp.value = "";
    renderList();
  };

 
  renderList();
