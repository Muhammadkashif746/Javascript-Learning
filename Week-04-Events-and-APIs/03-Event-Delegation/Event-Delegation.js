const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const output = document.getElementById("output");

function log(msg) {
    output.textContent = msg + "\n" + output.textContent;
}

// Add task
document.getElementById("addBtn").addEventListener("click", () => {
    const text = todoInput.value.trim();
    if (!text) return;

    const li = document.createElement("li");
    li.style.cssText = "background:#0f172a; padding:12px 16px; margin:8px 0; border-radius:10px; display:flex; justify-content:space-between; align-items:center; border:1px solid #334155;";
    li.innerHTML = `
        <span class="task-text">${text}</span>
        <button class="delete-btn danger" style="padding:6px 12px; font-size:13px;">Delete</button>
    `;
    todoList.appendChild(li);
    todoInput.value = "";
    log(`Task added: "${text}"`);
});

// EVENT DELEGATION – one listener on the parent
todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const taskText = e.target.previousElementSibling.textContent;
        e.target.parentElement.remove();
        log(`Deleted: "${taskText}"`);
    }

    if (e.target.classList.contains("task-text")) {
        e.target.style.textDecoration = e.target.style.textDecoration === "line-through" ? "none" : "line-through";
        log(`Toggled: "${e.target.textContent}"`);
    }
});