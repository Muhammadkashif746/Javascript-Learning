
function showVariables() {
    let output = "=== Variables Demo ===\n\n";

    // var example
    var x = 10;
    if (true) {
        var x = 20;   // Same variable
    }
    output += `var x = ${x} (function scoped)\n\n`;

    // let example
    let y = 10;
    if (true) {
        let y = 30;   // Different variable
        output += `Inside block let y = ${y}\n`;
    }
    output += `Outside let y = ${y} (block scoped)\n\n`;

    // const example
    const z = 50;
    output += `const z = ${z}`;

    document.getElementById('demo-output').textContent = output;
}
