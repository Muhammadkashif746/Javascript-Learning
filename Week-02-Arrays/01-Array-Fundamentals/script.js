function demoFundamentals() {
    let output = "=== Array Fundamentals Demo ===\n\n";
    
    const fruits = ["Apple", "Banana", "Mango", "Orange"];
    
    output += `Array: ${fruits}\n`;
    output += `Length: ${fruits.length}\n`;
    output += `First: ${fruits[0]}\n`;
    output += `Last: ${fruits[fruits.length - 1]}\n`;
    output += `Type: ${typeof fruits}\n`;
    output += `Is Array: ${Array.isArray(fruits)}\n`;

    document.getElementById('output').textContent = output;
}