function demoAccessingData() {
    let output = "=== Accessing Data Demo ===\n\n";

    const products = [
        { id: 101, name: "Laptop", price: 85000, brand: "Dell", category: "Electronics", inStock: true },
        { id: 102, name: "Smartphone", price: 45000, brand: "Samsung", category: "Electronics", inStock: true },
        { id: 103, name: "Headphones", price: 3500, brand: "Sony", category: "Accessories", inStock: false },
        { id: 104, name: "Mechanical Keyboard", price: 8500, brand: "Logitech", category: "Accessories", inStock: true },
        { id: 105, name: "Gaming Mouse", price: 3200, brand: "Razer", category: "Accessories", inStock: true },
        { id: 106, name: "Monitor", price: 28000, brand: "LG", category: "Electronics", inStock: true }
    ];

    // 1. Access by Index
    output += "1. Access by Index:\n";
    output += `   products[0].name → ${products[0].name}\n`;
    output += `   products[2]["brand"] → ${products[2]["brand"]}\n\n`;

    // 2. Dot vs Bracket
    const item = products[0];
    output += "2. Dot vs Bracket Notation:\n";
    output += `   Dot: item.name = ${item.name}\n`;
    output += `   Bracket: item["price"] = ${item["price"]}\n`;
    const prop = "brand";
    output += `   Dynamic: item[prop] = ${item[prop]}\n\n`;

    // 3. find()
    const found = products.find(p => p.id === 104);
    output += "3. find() - Product with id 104:\n";
    output += `   ${found.name} - Rs.${found.price}\n\n`;

    // 4. filter()
    const electronics = products.filter(p => p.category === "Electronics");
    output += "4. filter() - Electronics only:\n";
    electronics.forEach(p => output += `   - ${p.name} (${p.brand})\n`);

    // 5. filter + condition
    const affordable = products.filter(p => p.price < 10000 && p.inStock);
    output += "\n5. filter() - Under 10,000 & In Stock:\n";
    affordable.forEach(p => output += `   - ${p.name} → Rs.${p.price}\n`);

    // 6. map()
    const namesAndPrices = products.map(p => `${p.name}: Rs.${p.price}`);
    output += "\n6. map() - Names & Prices:\n";
    namesAndPrices.forEach(item => output += `   ${item}\n`);

    // 7. some() & every()
    output += "\n7. some() & every():\n";
    output += `   Any out of stock? ${products.some(p => !p.inStock)}\n`;
    output += `   All under 1 Lakh? ${products.every(p => p.price < 100000)}\n`;

    document.getElementById('output').textContent = output;
}