const output = document.getElementById("output");
function log(msg) {
    const time = new Date().toLocaleTimeString();
    output.textContent = `[${time}] ${msg}\n` + output.textContent;
}

// Click Counter
let count = 0;
document.getElementById("clickBtn").addEventListener("click", () => {
    count++;
    document.getElementById("clickCount").textContent = count;
    log(`Button clicked → Count is now ${count}`);
});

// Double Click
document.getElementById("dblBtn").addEventListener("dblclick", () => {
    document.getElementById("dblMsg").textContent = "Double clicked! 🔥";
    log("Double click detected");
});

// Mouse Enter / Leave
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseenter", () => {
    hoverBox.textContent = "Mouse is inside!";
    hoverBox.style.background = "#16a34a";
    log("mouseenter");
});
hoverBox.addEventListener("mouseleave", () => {
    hoverBox.textContent = "Hover over me";
    hoverBox.style.background = "#1e40af";
    log("mouseleave");
});