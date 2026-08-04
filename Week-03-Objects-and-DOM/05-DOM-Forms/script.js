// ========== Shared Output ==========
function showOutput(text) {
    document.getElementById('output').textContent = text;
}

// ========== 1. Student Registration ==========
const registeredStudents = [];
const studentForm = document.getElementById('studentForm');

studentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;
    const agree = document.getElementById('agree').checked;

    if (!name || !email || !course) {
        showOutput("❌ Please fill all required fields in Registration form!");
        return;
    }
    if (!agree) {
        showOutput("❌ You must agree to the terms & conditions.");
        return;
    }

    const student = {
        id: registeredStudents.length + 1,
        name,
        email,
        age: age || "Not provided",
        course,
        registeredAt: new Date().toLocaleString()
    };

    registeredStudents.push(student);

    let output = `✅ Student Registered Successfully!\n`;
    output += `Total Registered: ${registeredStudents.length}\n\n`;
    output += "=== All Registered Students ===\n\n";

    registeredStudents.forEach((s, i) => {
        output += `${i + 1}. ${s.name}\n`;
        output += `   Email  : ${s.email}\n`;
        output += `   Age    : ${s.age}\n`;
        output += `   Course : ${s.course}\n`;
        output += `   Time   : ${s.registeredAt}\n\n`;
    });

    showOutput(output);
    studentForm.reset();
});

function resetStudentForm() {
    studentForm.reset();
    showOutput("Registration form has been reset.");
}

// ========== 2. Login Form ==========
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const remember = document.getElementById('rememberMe').checked;

    if (!email || !password) {
        showOutput("❌ Please enter both Email/Username and Password!");
        return;
    }

    // Simple demo login check (for practice only)
    let message = `✅ Login Attempt Successful!\n\n`;
    message += `Email / Username : ${email}\n`;
    message += `Password Length  : ${password.length} characters\n`;
    message += `Remember Me      : ${remember ? "Yes" : "No"}\n`;
    message += `Login Time       : ${new Date().toLocaleString()}\n\n`;
    message += `(This is just a demo – no real authentication)`;

    showOutput(message);
    loginForm.reset();
});

function resetLoginForm() {
    loginForm.reset();
    showOutput("Login form has been cleared.");
}

// ========== 3. Contact / Feedback Form ==========
const contactForm = document.getElementById('contactForm');
const messages = [];

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        showOutput("❌ Please fill Name, Email and Message fields!");
        return;
    }

    const feedback = {
        id: messages.length + 1,
        name,
        email,
        subject: subject || "No Subject",
        message,
        sentAt: new Date().toLocaleString()
    };

    messages.push(feedback);

    let output = `✅ Message Sent Successfully!\n\n`;
    output += `From     : ${feedback.name} (${feedback.email})\n`;
    output += `Subject  : ${feedback.subject}\n`;
    output += `Message  : ${feedback.message}\n`;
    output += `Time     : ${feedback.sentAt}\n\n`;
    output += `Total Messages Received: ${messages.length}`;

    showOutput(output);
    contactForm.reset();
});

function resetContactForm() {
    contactForm.reset();
    showOutput("Contact form has been reset.");
}