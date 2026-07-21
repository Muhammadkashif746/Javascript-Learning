function demoIntermediateMethods() {
    let output = "=== Intermediate Array Methods Demo ===\n\n";
    
    let numbers = [10, 20, 30, 40, 50, 60, 70];
    output += `Original Array: ${numbers}\n\n`;

    // slice()
    const sliced1 = numbers.slice(2, 5);
    const sliced2 = numbers.slice(-3);
    output += `slice(2, 5)     → ${sliced1}\n`;
    output += `slice(-3)       → ${sliced2}\n`;
    output += `Original unchanged: ${numbers}\n\n`;

    // splice()
    let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
    output += `Fruits: ${fruits}\n`;
    
    const removed = fruits.splice(2, 1, "Kiwi", "Pineapple");
    output += `After splice(2, 1, "Kiwi", "Pineapple"):\n`;
    output += `   Removed: ${removed}\n`;
    output += `   New Array: ${fruits}\n\n`;

    // Searching
    const names = ["Ali", "Sara", "Ahmed", "Sara", "Fatima"];
    output += `Names: ${names}\n`;
    output += `indexOf("Sara")     → ${names.indexOf("Sara")}\n`;
    output += `lastIndexOf("Sara") → ${names.lastIndexOf("Sara")}\n`;
    output += `includes("Ahmed")   → ${names.includes("Ahmed")}\n`;
    output += `includes("Zain")    → ${names.includes("Zain")}\n`;

    document.getElementById('output').textContent = output;
}