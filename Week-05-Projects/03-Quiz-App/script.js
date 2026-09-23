const questions = [
    {
        question: "Which keyword is used to declare a variable in modern JavaScript?",
        options: ["var", "let", "int", "variable"],
        answer: 1
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Method", "Document Oriented Module", "Digital Object Map"],
        answer: 0
    },
    {
        question: "Which method is used to add an element at the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0
    },
    {
        question: "What is the correct way to write an arrow function?",
        options: ["function => {}", "() => {}", "=> function() {}", "arrow() => {}"],
        answer: 1
    },
    {
        question: "Which operator is used for strict equality comparison?",
        options: ["==", "===", "=", "!="],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const questionNumber = document.getElementById("questionNumber");
const scoreDisplay = document.getElementById("scoreDisplay");
const finalScore = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");

document.getElementById("startBtn").addEventListener("click", startQuiz);
document.getElementById("restartBtn").addEventListener("click", restartQuiz);
nextBtn.addEventListener("click", nextQuestion);

function startQuiz() {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    answered = false;
    nextBtn.classList.add("hidden");

    const q = questions[currentQuestion];
    questionText.textContent = q.question;
    questionNumber.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
    scoreDisplay.textContent = `Score: ${score}`;

    optionsContainer.innerHTML = "";
    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = option;
        btn.addEventListener("click", () => selectAnswer(index));
        optionsContainer.appendChild(btn);
    });
}

function selectAnswer(selectedIndex) {
    if (answered) return;
    answered = true;

    const q = questions[currentQuestion];
    const buttons = optionsContainer.querySelectorAll(".option-btn");

    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === q.answer) {
            btn.classList.add("correct");
        } else if (index === selectedIndex) {
            btn.classList.add("wrong");
        }
    });

    if (selectedIndex === q.answer) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    }

    nextBtn.classList.remove("hidden");
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    finalScore.textContent = score;

    if (score === 5) {
        resultMessage.textContent = "Excellent! Perfect score! 🔥";
    } else if (score >= 3) {
        resultMessage.textContent = "Good job! Keep practicing 👍";
    } else {
        resultMessage.textContent = "Keep learning, you can do better! 💪";
    }
}

function restartQuiz() {
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
}