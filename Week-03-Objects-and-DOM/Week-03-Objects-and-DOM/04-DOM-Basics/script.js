function log(msg) {
    document.getElementById('output').textContent = msg;
}

function changeText() {
    const heading = document.getElementById('demo-heading');
    const para = document.getElementById('demo-para');

    heading.textContent = "Heading Changed with JS!";
    para.innerHTML = "Paragraph updated using <strong>innerHTML</strong> and <em>textContent</em>.";
    log("✓ Text content changed successfully!");
}

function changeStyle() {
    const box = document.getElementById('demo-box');
    box.style.backgroundColor = "#fef3c7";
    box.style.border = "3px solid #f59e0b";
    box.style.transform = "scale(1.02)";
    log("✓ Styles applied using element.style");
}

function addItem() {
    const list = document.getElementById('demo-list');
    const newItem = document.createElement('li');
    newItem.textContent = `New Item ${list.children.length + 1} (added with createElement)`;
    list.appendChild(newItem);
    log("✓ New list item created and appended!");
}

function toggleHighlight() {
    const heading = document.getElementById('demo-heading');
    heading.classList.toggle('highlight');

    // Add style if not exists
    if (!document.getElementById('highlight-style')) {
        const style = document.createElement('style');
        style.id = 'highlight-style';
        style.textContent = `
            .highlight {
                background: linear-gradient(90deg, #fbbf24, #f59e0b);
                color: white;
                padding: 8px 15px;
                border-radius: 8px;
                display: inline-block;
            }
        `;
        document.head.appendChild(style);
    }
    log("✓ classList.toggle('highlight') used!");
}

function resetDemo() {
    const heading = document.getElementById('demo-heading');
    const para = document.getElementById('demo-para');
    const box = document.getElementById('demo-box');
    const list = document.getElementById('demo-list');

    heading.textContent = "Original Heading";
    heading.classList.remove('highlight');
    para.innerHTML = "This is a paragraph. Click the buttons below to manipulate me!";
    box.style.backgroundColor = "#e0f2fe";
    box.style.border = "none";
    box.style.transform = "none";

    // Reset list to 2 items
    list.innerHTML = `
        <li>Item 1</li>
        <li>Item 2</li>
    `;
    log("✓ Demo reset to original state");
}