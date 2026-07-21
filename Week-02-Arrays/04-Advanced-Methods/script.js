function demoAdvancedMethods() {
    let output = "=== Advanced Array Methods + Practice Questions ===\n\n";

    const products = [
        { id: 1, name: "Laptop", price: 1200, category: "electronics" },
        { id: 2, name: "Shirt", price: 40, category: "clothing" },
        { id: 3, name: "Phone", price: 800, category: "electronics" },
        { id: 4, name: "Book", price: 25, category: "books" }
    ];

    output += "Products Data Loaded\n\n";

    // 1. forEach
    output += "Q1. Use forEach to log all product names:\n";
    products.forEach(p => output += `   ${p.name}\n`);

    // 2. map
    const productNames = products.map(p => p.name);
    output += `\nQ2. map() - Get all names: ${productNames}\n`;

    // 3. filter
    const expensive = products.filter(p => p.price > 100);
    output += `Q3. filter() - Expensive items (> $100): ${expensive.length} items\n`;

    // 4. find
    const laptop = products.find(p => p.name === "Laptop");
    output += `Q4. find() - Laptop price: $${laptop.price}\n`;

    // 5. reduce
    const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
    output += `Q5. reduce() - Total Price: $${totalPrice}\n\n`;

    output += "=== Extra Practice Questions ===\n";
    output += "1. Use map to add 10% tax to all prices\n";
    output += "2. Use filter to get only 'electronics' category\n";
    output += "3. Use reduce to find the most expensive product\n";
    output += "4. Chain filter + map to get names of expensive products\n";

    document.getElementById('output').textContent = output;
}