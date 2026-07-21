function demoBasicOperations() {
    let output = "=== Basic Array Operations Demo ===\n\n";
    
    let cart = ["Laptop"];
    
    output += `Initial Cart: ${cart}\n`;
    output += `Length: ${cart.length}\n\n`;

    // push & unshift
    cart.push("Mouse");
    cart.push("Keyboard");
    output += `After push(): ${cart}\n`;
    
    cart.unshift("Monitor");
    output += `After unshift("Monitor"): ${cart}\n\n`;

    // pop & shift
    const removed1 = cart.pop();
    output += `pop() removed: ${removed1}\n`;
    
    const removed2 = cart.shift();
    output += `shift() removed: ${removed2}\n`;
    output += `Current Cart: ${cart}\n\n`;

    // Using length
    output += `Current Length: ${cart.length}\n`;
    cart[cart.length] = "Headphones";   // Add using length
    output += `Added using length: ${cart}\n`;

    // Truncate example
    cart.length = 2;
    output += `After truncating length = 2: ${cart}\n`;

    document.getElementById('output').textContent = output;
}