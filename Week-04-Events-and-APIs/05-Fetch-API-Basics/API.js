const output = document.getElementById("output");
function log(msg) {
    const time = new Date().toLocaleTimeString();
    output.textContent = `[${time}] ${msg}\n` + output.textContent;
}

// Random Quote (Quotable API)
document.getElementById("quoteBtn").addEventListener("click", () => {
    log("Fetching quote...");
    fetch("https://api.quotable.io/random")
        .then(res => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        })
        .then(data => {
            document.getElementById("quoteText").textContent = `"${data.content}"`;
            document.getElementById("quoteAuthor").textContent = `— ${data.author}`;
            log(`Quote loaded successfully (${data.author})`);
        })
        .catch(err => {
            document.getElementById("quoteText").textContent = "Failed to load quote";
            log(`Error: ${err.message}`);
        });
});

// Random Dog
document.getElementById("dogBtn").addEventListener("click", () => {
    log("Fetching dog image...");
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            const img = document.getElementById("dogImg");
            img.src = data.message;
            img.style.display = "block";
            document.getElementById("dogMsg").style.display = "none";
            log("Dog image loaded!");
        })
        .catch(err => {
            log(`Error: ${err.message}`);
        });
});