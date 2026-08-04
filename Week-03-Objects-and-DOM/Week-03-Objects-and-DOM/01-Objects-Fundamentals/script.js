function demoObjects() {
    let output = "=== Objects Fundamentals Demo ===\n\n";

    // 1. Creating an object
    const student = {
        name: "Muhammad Kashif",
        age: 22,
        city: "Karachi",
        isStudent: true,
        skills: ["HTML", "CSS", "JavaScript"]
    };

    output += "1. Student Object:\n";
    output += JSON.stringify(student, null, 2) + "\n\n";

    // 2. Accessing with Dot & Bracket
    output += "2. Accessing Properties:\n";
    output += `Dot Notation → student.name = ${student.name}\n`;
    output += `Bracket Notation → student["age"] = ${student["age"]}\n`;
    output += `Dynamic key → const key = "city"; student[key] = ${student["city"]}\n\n`;

    // 3. Adding & Updating
    student.email = "kashif@example.com";
    student.age = 23;
    output += "3. After Adding email & Updating age:\n";
    output += `Email: ${student.email}\n`;
    output += `New Age: ${student.age}\n\n`;

    // 4. Nested Object
    const company = {
        name: "Tech Solutions",
        location: {
            city: "Lahore",
            country: "Pakistan"
        },
        employees: 50
    };

    output += "4. Nested Object Access:\n";
    output += `Company City: ${company.location.city}\n`;
    output += `Company Country: ${company.location["country"]}\n\n`;

    // 5. Object Methods
    output += "5. Object Methods:\n";
    output += `Object.keys(student) → ${Object.keys(student)}\n`;
    output += `Object.values(student) → ${Object.values(student)}\n`;

    document.getElementById('output').textContent = output;
}