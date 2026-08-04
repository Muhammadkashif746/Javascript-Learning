function demoArrayOfObjects() {
    let output = "=== Arrays of Objects Demo ===\n\n";

    // Large data - Students
    const students = [
        { id: 1, name: "Ali Khan", age: 20, city: "Karachi", marks: 85, course: "Web Dev" },
        { id: 2, name: "Sara Ahmed", age: 21, city: "Lahore", marks: 92, course: "Web Dev" },
        { id: 3, name: "Ahmed Raza", age: 19, city: "Islamabad", marks: 78, course: "App Dev" },
        { id: 4, name: "Fatima Noor", age: 22, city: "Karachi", marks: 95, course: "Web Dev" },
        { id: 5, name: "Usman Ali", age: 20, city: "Multan", marks: 70, course: "App Dev" },
        { id: 6, name: "Ayesha Khan", age: 21, city: "Lahore", marks: 88, course: "Web Dev" }
    ];

    output += "1. Total Students: " + students.length + "\n\n";

    output += "2. All Students Data:\n";
    students.forEach((s, index) => {
        output += `   ${index + 1}. ${s.name} | Age: ${s.age} | City: ${s.city} | Marks: ${s.marks}\n`;
    });

    output += "\n3. Access by Index:\n";
    output += `   students[0].name → ${students[0].name}\n`;
    output += `   students[3].city → ${students[3].city}\n`;
    output += `   students[students.length - 1].name → ${students[students.length - 1].name}\n`;

    output += "\n4. Students from Karachi (using filter):\n";
    const karachiStudents = students.filter(s => s.city === "Karachi");
    karachiStudents.forEach(s => {
        output += `   - ${s.name} (${s.marks} marks)\n`;
    });

    output += "\n5. Topper (highest marks):\n";
    const topper = students.reduce((max, s) => s.marks > max.marks ? s : max);
    output += `   ${topper.name} with ${topper.marks} marks\n`;

    output += "\n6. Only Names (using map):\n";
    const names = students.map(s => s.name);
    output += `   ${names.join(", ")}\n`;

    document.getElementById('output').textContent = output;
}