const form = document.getElementById("regForm");
const output = document.getElementById("output");

function log(msg) {
    const time = new Date().toLocaleTimeString();
    output.textContent = `[${time}] ${msg}\n` + output.textContent;
}

// Live input events
document.getElementById("name").addEventListener("input", (e) => {
    const value = e.target.value.trim();
    document.getElementById("prevName").textContent = value || "—";
    const error = document.getElementById("nameError");
    if (value.length > 0 && value.length < 3) {
        error.style.display = "block";
        e.target.style.borderColor = "#f87171";
    } else {
        error.style.display = "none";
        e.target.style.borderColor = value.length >= 3 ? "#16a34a" : "#475569";
    }
    log(`Name input → "${value}"`);
});

document.getElementById("email").addEventListener("input", (e) => {
    const value = e.target.value.trim();
    document.getElementById("prevEmail").textContent = value || "—";
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const error = document.getElementById("emailError");
    if (value && !isValid) {
        error.style.display = "block";
        e.target.style.borderColor = "#f87171";
    } else {
        error.style.display = "none";
        e.target.style.borderColor = isValid ? "#16a34a" : "#475569";
    }
});

document.getElementById("password").addEventListener("input", (e) => {
    const value = e.target.value;
    let strength = "Weak";
    if (value.length >= 8) strength = "Strong";
    else if (value.length >= 6) strength = "Medium";
    document.getElementById("prevStrength").textContent = value ? strength : "—";

    const error = document.getElementById("passError");
    if (value.length > 0 && value.length < 6) {
        error.style.display = "block";
        e.target.style.borderColor = "#f87171";
    } else {
        error.style.display = "none";
        e.target.style.borderColor = value.length >= 6 ? "#16a34a" : "#475569";
    }
});

document.getElementById("confirm").addEventListener("input", (e) => {
    const pass = document.getElementById("password").value;
    const confirm = e.target.value;
    const error = document.getElementById("confirmError");
    if (confirm && confirm !== pass) {
        error.style.display = "block";
        e.target.style.borderColor = "#f87171";
    } else {
        error.style.display = "none";
        e.target.style.borderColor = confirm === pass && confirm ? "#16a34a" : "#475569";
    }
});

// Submit event
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;

    if (name.length < 3 || !email.includes("@") || password.length < 6 || password !== confirm) {
        log("❌ Validation failed – please fix errors");
        return;
    }

    log(`✅ Form submitted successfully!\nName: ${name}\nEmail: ${email}`);
    form.reset();
    document.getElementById("prevName").textContent = "—";
    document.getElementById("prevEmail").textContent = "—";
    document.getElementById("prevStrength").textContent = "—";
});