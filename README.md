<div align="center">

# 🚀 JavaScript Learning Journey

**A structured, week-by-week path from JavaScript fundamentals to real, working applications.**

`JavaScript (ES6+)` · `HTML5` · `CSS3` · `Tailwind CSS` &nbsp;|&nbsp; **5 Weeks · 20+ Exercises · 4 Complete Projects**

</div>

---

## 📖 About This Repository

This repo is a public, structured log of my JavaScript learning — no tutorials copy-pasted, no shortcuts. Every folder represents a week of deliberate practice: first isolating a concept in small, focused exercises, then combining those concepts into complete, functional mini projects.

The goal isn't just "I finished a course" — it's demonstrable, working code that shows how the fundamentals (variables → arrays → objects/DOM → events/APIs) build up into real applications (a calculator, a game, a quiz engine, a password generator).

---

## 🗺️ Curriculum Roadmap

| Week | Topic | Core Skills | Status |
|:---:|---|---|:---:|
| 01 | **JavaScript Basics** | Variables, data types, operators, conditionals, loops | ✅ |
| 02 | **Arrays Mastery** | Array methods, `map`/`filter`/`reduce`, real-world challenges | ✅ |
| 03 | **Objects & DOM** | Object modeling, DOM traversal, form handling | ✅ |
| 04 | **Events & APIs** | Event delegation, Fetch API, async/await, error handling | ✅ |
| 05 | **Mini Projects** | Full applications combining Weeks 1–4 | ✅ |

---

## 📅 Detailed Breakdown

### Week 01 — JavaScript Basics
Foundational syntax and control flow.
- Variable declarations and scope (`var` vs `let` vs `const`)
- Primitive & reference data types
- Arithmetic, comparison, and logical operators
- Conditional logic (`if / else if / else`)
- `for`, `while`, and nested loops
- Logic-building practice problems

### Week 02 — Arrays Mastery
Moving from single values to structured collections.
- Array fundamentals & indexing
- Mutating methods: `push`, `pop`, `shift`, `unshift`
- Search/extraction methods: `slice`, `splice`, `indexOf`, `includes`
- Functional/iteration methods: `forEach`, `map`, `filter`, `find`, `reduce`
- Applied practice challenges combining multiple methods

### Week 03 — Objects & DOM
Modeling real-world data and connecting JavaScript to the browser.
- Object literals, nested properties, and property access
- Arrays of objects (the pattern behind most real datasets)
- Reading and updating data programmatically
- DOM selection & manipulation (`querySelector`, `textContent`, `classList`)
- Capturing and validating form input through the DOM

### Week 04 — Events & APIs
Making pages interactive and connecting to live data.
- Event fundamentals: `addEventListener`, the event object, `this` in handlers
- Mouse & keyboard event handling
- **Event delegation** for dynamic/child elements
- Advanced form events & client-side validation
- **Fetch API**: consuming real third-party endpoints (Quotable, Dog CEO, RandomUser APIs) with `.then()` chains and proper error handling (`res.ok` checks, `.catch()`)
- **Async/await**: rewriting promise chains into cleaner async functions with `try/catch`
- Mini-project drills: a live search/filter engine over structured data, and API-driven UI updates

### Week 05 — Mini Projects
Four complete, functional applications built by combining everything above.

| Project | What It Demonstrates | Stack |
|---|---|---|
| 🧮 [**Calculator**](./Week-05-Projects/01-Calculator) | Real-time arithmetic engine, operator precedence handling, responsive UI | HTML, Tailwind CSS v4, JS |
| ❌⭕ [**Tic-Tac-Toe**](./Week-05-Projects/02-Tic-Tac-Toe) | 2D state management, win/draw detection algorithm, turn-based logic | HTML, CSS, JS |
| 📝 [**Quiz App**](./Week-05-Projects/03-Quiz-App) | Multi-screen app flow, dynamic question rendering, live score tracking | HTML, CSS, JS |
| 🔐 [**Password Generator**](./Week-05-Projects/04-Password-Generator) | Character-set randomization logic, configurable options, Clipboard API | HTML, CSS, JS |

Open [`Week-05-Projects/index.html`](./Week-05-Projects/index.html) for a single hub page linking all four projects.

---

## 💻 Tech Stack

| Layer | Tools |
|---|---|
| Structure | HTML5 (semantic markup) |
| Styling | CSS3, Tailwind CSS v4 (calculator project) |
| Logic | Vanilla JavaScript (ES6+) — no frameworks, no libraries |
| Data | Fetch API + public REST endpoints (Quotable, Dog CEO, RandomUser) |

No build tools or frameworks were used deliberately — the focus of this repo is mastering core JavaScript before introducing abstractions like React or Vue.

---

## 🛠️ Getting Started

Clone the repo:
```bash
git clone https://github.com/Muhammadkashif746/Javascript-Learning.git
cd Javascript-Learning
```

Every exercise and project is self-contained — no npm install required except for the Calculator (which uses Tailwind's CLI to compile CSS):

```bash
# Run any exercise or project
open Week-0X-Topic/.../index.html    # or just double-click it

# Calculator only (uses Tailwind CLI)
cd Week-05-Projects/01-Calculator
npm install
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```

---

## 📈 Progress Log

- ✅ **Weeks 1–5 complete** — fundamentals through applied mini projects
- 🔜 **Next up:** intermediate JavaScript (closures, higher-order functions, ES modules) and a larger capstone project

---

## 🤝 Feedback

I'm learning in public and actively looking to improve — code reviews, suggestions, and critiques are genuinely welcome. Feel free to open an issue or reach out.

⭐ If this repo is useful for your own learning path, consider starring it.

---

<div align="center">

**Muhammad Kashif** — Learning JavaScript, one week at a time.

</div>
