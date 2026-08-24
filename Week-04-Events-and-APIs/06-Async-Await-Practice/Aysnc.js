const output = document.getElementById("output");
function log(msg) {
    const time = new Date().toLocaleTimeString();
    output.textContent = `[${time}] ${msg}\n` + output.textContent;
}

// Random User with async/await
document.getElementById("userBtn").addEventListener("click", async () => {
    log("Fetching random user...");
    try {
        const res = await fetch("https://randomuser.me/api/");
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        const user = data.results[0];

        document.getElementById("userImg").src = user.picture.medium;
        document.getElementById("userName").textContent = `${user.name.first} ${user.name.last}`;
        document.getElementById("userEmail").textContent = user.email;
        document.getElementById("userLoc").textContent = `${user.location.city}, ${user.location.country}`;
        document.getElementById("userCard").style.display = "block";

        log(`User loaded: ${user.name.first} ${user.name.last}`);
    } catch (err) {
        log(`Error: ${err.message}`);
    }
});

// Load posts
document.getElementById("postsBtn").addEventListener("click", async () => {
    log("Fetching posts...");
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const posts = await res.json();

        const container = document.getElementById("postsList");
        container.innerHTML = "";
        posts.forEach(post => {
            const div = document.createElement("div");
            div.style.cssText = "background:#0f172a; padding:12px; margin:8px 0; border-radius:10px; border:1px solid #334155;";
            div.innerHTML = `<strong>#${post.id}</strong> - ${post.title}`;
            container.appendChild(div);
        });
        log(`Loaded ${posts.length} posts successfully`);
    } catch (err) {
        log(`Error: ${err.message}`);
    }
});