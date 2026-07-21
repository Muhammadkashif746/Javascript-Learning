function runExpandedPractice() {
    let output = "=== Practice Challenges with Full Examples ===\n\n";

    // Challenge 1: Shopping Cart
    output += "🛒 Challenge 1: Shopping Cart\n";
    let cart = [
        {item: "Laptop", price: 999},
        {item: "Mouse", price: 29},
        {item: "Keyboard", price: 59}
    ];

    const cartTotal = cart.reduce((total, product) => total + product.price, 0);
    output += `Items: ${cart.map(c => c.item)}\n`;
    output += `Total Price: $${cartTotal}\n\n`;

    // Challenge 2: Student Management
    output += "📚 Challenge 2: Student Management\n";
    const students = [
        {name: "Ali", marks: 85, grade: "B"},
        {name: "Sara", marks: 95, grade: "A"},
        {name: "Ahmed", marks: 58, grade: "C"},
        {name: "Fatima", marks: 72, grade: "B"}
    ];

    const passedStudents = students.filter(s => s.marks >= 60);
    const averageMarks = students.reduce((sum, s) => sum + s.marks, 0) / students.length;

    output += `Total Students: ${students.length}\n`;
    output += `Passed: ${passedStudents.length}\n`;
    output += `Average Marks: ${averageMarks.toFixed(1)}\n\n`;

    // Challenge 3: Filter & Search
    output += "🔍 Challenge 3: Search & Filter\n";
    const products = ["Laptop", "Phone", "Tablet", "Desktop", "Monitor"];
    
    const searchResult = products.filter(p => p.toLowerCase().includes("top"));
    output += `Products containing 'top': ${searchResult}\n`;

    // Bonus Challenge
    output += "\n🔥 Bonus: Remove duplicates\n";
    const nums = [1, 2, 2, 3, 4, 4, 5];
    const unique = [...new Set(nums)];
    output += `Original: ${nums}\n`;
    output += `Unique: ${unique}\n`;

    output += "\n✅ Practice these methods daily!";

    document.getElementById('output').textContent = output;
}