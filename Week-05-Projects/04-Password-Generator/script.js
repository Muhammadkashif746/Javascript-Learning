const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const message = document.getElementById("message");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

lengthInput.addEventListener("input", () => {
    lengthValue.textContent = lengthInput.value;
});

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

function generatePassword() {
    let chars = "";
    if (uppercase.checked) chars += upperChars;
    if (lowercase.checked) chars += lowerChars;
    if (numbers.checked) chars += numberChars;
    if (symbols.checked) chars += symbolChars;

    if (chars === "") {
        message.textContent = "Please select at least one option!";
        message.style.color = "#f87171";
        passwordInput.value = "";
        return;
    }

    const length = parseInt(lengthInput.value);
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordInput.value = password;
    message.textContent = "Password generated successfully!";
    message.style.color = "#86efac";
}

function copyPassword() {
    const password = passwordInput.value;
    if (!password) {
        message.textContent = "Generate a password first!";
        message.style.color = "#f87171";
        return;
    }

    navigator.clipboard.writeText(password).then(() => {
        message.textContent = "Password copied to clipboard!";
        message.style.color = "#86efac";
    }).catch(() => {
        message.textContent = "Failed to copy";
        message.style.color = "#f87171";
    });
}

// Generate one password on load
generatePassword();