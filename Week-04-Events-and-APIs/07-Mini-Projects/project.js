// ============================================
// 1. LIVE SEARCH FILTER
// ============================================
const students = [
    { name: "Ali Khan", city: "Karachi", course: "Web Dev" },
    { name: "Sara Ahmed", city: "Lahore", course: "App Dev" },
    { name: "Ahmed Raza", city: "Islamabad", course: "UI/UX" },
    { name: "Fatima Noor", city: "Karachi", course: "Web Dev" },
    { name: "Usman Ali", city: "Multan", course: "Data Science" },
    { name: "Ayesha Khan", city: "Lahore", course: "Web Dev" },
    { name: "Bilal Hassan", city: "Peshawar", course: "App Dev" },
    { name: "Zainab Fatima", city: "Karachi", course: "UI/UX" }
];

function renderStudents(list) {
    const container = document.getElementById("studentsList");
    container.innerHTML = "";
    if (list.length === 0) {
        container.innerHTML = "<p style='grid-column:1/-1; text-align:center; color:#94a3b8;'>No students found</p>";
        return;
    }
    list.forEach(s => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3 style="margin-bottom:8px;">${s.name}</h3><p style="color:#94a3b8;">${s.city} • ${s.course}</p>`;
        container.appendChild(card);
    });
}
renderStudents(students);

document.getElementById("searchInput").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = students.filter(s =>
        s.name.toLowerCase().includes(term) || s.city.toLowerCase().includes(term)
    );
    renderStudents(filtered);
});

// ============================================
// 2. TODO APP WITH LOCALSTORAGE
// ============================================
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.style.cssText = "background:#0f172a; padding:12px 16px; margin:8px 0; border-radius:10px; display:flex; justify-content:space-between; align-items:center; border:1px solid #334155;";
        li.innerHTML = `
            <span style="${todo.done ? 'text-decoration:line-through; opacity:0.6;' : ''}">${todo.text}</span>
            <div>
                <button onclick="toggleTodo(${index})" style="padding:5px 10px; font-size:12px;">${todo.done ? "Undo" : "Done"}</button>
                <button class="danger" onclick="deleteTodo(${index})" style="padding:5px 10px; font-size:12px;">Delete</button>
            </div>
        `;
        list.appendChild(li);
    });
}

document.getElementById("addTodo").addEventListener("click", () => {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    if (!text) return;
    todos.push({ text, done: false });
    saveTodos();
    renderTodos();
    input.value = "";
});

window.toggleTodo = function(index) {
    todos[index].done = !todos[index].done;
    saveTodos();
    renderTodos();
};

window.deleteTodo = function(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
};
renderTodos();

// ============================================
// 3. QUOTE GENERATOR
// ============================================
document.getElementById("newQuoteBtn").addEventListener("click", async () => {
    try {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        document.getElementById("miniQuote").textContent = `"${data.content}"`;
        document.getElementById("miniAuthor").textContent = `— ${data.author}`;
    } catch {
        document.getElementById("miniQuote").textContent = "Failed to load quote";
    }
});

document.getElementById("copyBtn").addEventListener("click", () => {
    const text = document.getElementById("miniQuote").textContent + " " + document.getElementById("miniAuthor").textContent;
    navigator.clipboard.writeText(text).then(() => alert("Quote copied!"));
});

// ============================================
// 4. JOKE GENERATOR
// ============================================
document.getElementById("jokeBtn").addEventListener("click", async () => {
    try {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();
        document.getElementById("jokeText").textContent = `${data.setup} — ${data.punchline}`;
    } catch {
        document.getElementById("jokeText").textContent = "Could not load joke 😅";
    }
});

// ============================================
// 5. COLOR PALETTE GENERATOR
// ============================================
function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

document.getElementById("paletteBtn").addEventListener("click", () => {
    const container = document.getElementById("palette");
    container.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        const color = randomColor();
        const div = document.createElement("div");
        div.className = "card";
        div.style.background = color;
        div.style.color = "#fff";
        div.style.textAlign = "center";
        div.style.padding = "30px 10px";
        div.style.cursor = "pointer";
        div.innerHTML = `<strong>${color}</strong><br><small>Click to copy</small>`;
        div.addEventListener("click", () => {
            navigator.clipboard.writeText(color);
            alert(`Copied ${color}`);
        });
        container.appendChild(div);
    }
});

// ============================================
// 6. COUNTDOWN TIMER
// ============================================
let timerInterval = null;
let totalSeconds = 60;

function updateDisplay() {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    document.getElementById("timerDisplay").textContent =
        `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}

document.getElementById("startTimer").addEventListener("click", () => {
    if (timerInterval) return;
    const h = parseInt(document.getElementById("hours").value) || 0;
    const m = parseInt(document.getElementById("minutes").value) || 0;
    const s = parseInt(document.getElementById("seconds").value) || 0;
    totalSeconds = h * 3600 + m * 60 + s;
    if (totalSeconds <= 0) return;

    timerInterval = setInterval(() => {
        totalSeconds--;
        updateDisplay();
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("Time's up!");
        }
    }, 1000);
});

document.getElementById("pauseTimer").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

document.getElementById("resetTimer").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    totalSeconds = 60;
    document.getElementById("hours").value = 0;
    document.getElementById("minutes").value = 1;
    document.getElementById("seconds").value = 0;
    updateDisplay();
});

// ============================================
// 7. GITHUB USER FINDER
// ============================================
document.getElementById("githubBtn").addEventListener("click", async () => {
    const username = document.getElementById("githubInput").value.trim();
    if (!username) return;

    document.getElementById("ghError").style.display = "none";
    document.getElementById("githubCard").style.display = "none";

    try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error("User not found");
        const data = await res.json();

        document.getElementById("ghAvatar").src = data.avatar_url;
        document.getElementById("ghName").textContent = data.name || data.login;
        document.getElementById("ghBio").textContent = data.bio || "No bio available";
        document.getElementById("ghRepos").textContent = data.public_repos;
        document.getElementById("ghFollowers").textContent = data.followers;
        document.getElementById("ghLink").href = data.html_url;
        document.getElementById("githubCard").style.display = "block";
    } catch (err) {
        document.getElementById("ghError").textContent = err.message;
        document.getElementById("ghError").style.display = "block";
    }
});

// ============================================
// 8. NOTES APP
// ============================================
let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
    const container = document.getElementById("notesList");
    container.innerHTML = "";
    notes.forEach((note, index) => {
        const div = document.createElement("div");
        div.className = "card";
        div.style.marginBottom = "12px";
        div.innerHTML = `
            <p style="white-space:pre-wrap;">${note.text}</p>
            <small style="color:#94a3b8;">${note.date}</small>
            <button class="danger" style="margin-top:10px; padding:5px 12px; font-size:13px;" onclick="deleteNote(${index})">Delete</button>
        `;
        container.appendChild(div);
    });
}

document.getElementById("saveNote").addEventListener("click", () => {
    const text = document.getElementById("noteInput").value.trim();
    if (!text) return;
    notes.unshift({ text, date: new Date().toLocaleString() });
    localStorage.setItem("notes", JSON.stringify(notes));
    document.getElementById("noteInput").value = "";
    renderNotes();
});

window.deleteNote = function(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
};
renderNotes();

// ============================================
// 9. WEATHER APP (Open-Meteo - free, no key)
// ============================================
document.getElementById("weatherBtn").addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) return;

    document.getElementById("weatherError").style.display = "none";
    document.getElementById("weatherCard").style.display = "none";

    try {
        // 1. Get coordinates
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
        const geoData = await geoRes.json();
        if (!geoData.results || geoData.results.length === 0) throw new Error("City not found");

        const { latitude, longitude, name, country } = geoData.results[0];

        // 2. Get weather
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`);
        const weatherData = await weatherRes.json();
        const current = weatherData.current;

        document.getElementById("weatherCity").textContent = `${name}, ${country}`;
        document.getElementById("weatherTemp").textContent = `${Math.round(current.temperature_2m)}°C`;
        document.getElementById("weatherHumidity").textContent = current.relative_humidity_2m;
        document.getElementById("weatherWind").textContent = current.wind_speed_10m;
        document.getElementById("weatherDesc").textContent = "Current Weather";
        document.getElementById("weatherCard").style.display = "block";
    } catch (err) {
        document.getElementById("weatherError").textContent = err.message;
        document.getElementById("weatherError").style.display = "block";
    }
});