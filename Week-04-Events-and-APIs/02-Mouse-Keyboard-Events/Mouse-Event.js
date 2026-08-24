const mouseArea = document.getElementById("mouseArea");
const mouseX = document.getElementById("mouseX");
const mouseY = document.getElementById("mouseY");

mouseArea.addEventListener("mousemove", (e) => {
    const rect = mouseArea.getBoundingClientRect();
    mouseX.textContent = Math.round(e.clientX - rect.left);
    mouseY.textContent = Math.round(e.clientY - rect.top);
});

const keyInput = document.getElementById("keyInput");
const lastKey = document.getElementById("lastKey");
const keyCode = document.getElementById("keyCode");
const output = document.getElementById("output");

keyInput.addEventListener("keydown", (e) => {
    lastKey.textContent = e.key;
    keyCode.textContent = e.code;
    output.textContent = `keydown → key: "${e.key}" | code: ${e.code}\n` + output.textContent;
});

keyInput.addEventListener("keyup", (e) => {
    output.textContent = `keyup → key: "${e.key}"\n` + output.textContent;
});