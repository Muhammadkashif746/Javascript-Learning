

(() => {
  "use strict";

//state
  const HISTORY_KEY = "calculator-history";
  const HISTORY_LIMIT = 20;

  const state = {
    currentOperand: "0",
    previousOperand: "",
    operation: null,
    overwrite: true, // true = next digit press replaces the display
    error: false,
  };

  let history = [];
// dom using getElementById
  
  const currentOperandEl = document.getElementById("current-operand");
  const previousOperandEl = document.getElementById("previous-operand");
  const historyListEl = document.getElementById("history-list");
  const historyEmptyEl = document.getElementById("history-empty");
  const clearHistoryBtn = document.getElementById("clear-history");
  const calculatorEl = document.getElementById("calculator");
  const historyToggleBtn = document.getElementById("history-toggle");
  const historyDrawerEl = document.getElementById("history-drawer");
  const historyChevronEl = document.getElementById("history-chevron");

  // Tailwind utility class groups toggled at runtime
  const ERROR_COLOR_CLASSES = ["text-red-600"];
  const ERROR_SIZE_CLASSES = ["text-xl", "sm:text-2xl"];
  const RESULT_COLOR_CLASSES = ["text-ink"];
  const RESULT_SIZE_CLASSES = ["text-[clamp(1.9rem,7vw,3.25rem)]"];
  const OPERATOR_IDLE_CLASSES = ["bg-accent-soft", "text-accent"];
  const OPERATOR_ACTIVE_CLASSES = ["bg-accent", "text-white"];

//  calculation logic
  function calculate(prev, operation, current) {
    const a = parseFloat(prev);
    const b = parseFloat(current);

    if (Number.isNaN(a) || Number.isNaN(b)) {
      return { value: null, error: "Error" };
    }

    let result;
    switch (operation) {
      case "+":
        result = a + b;
        break;
      case "−":
        result = a - b;
        break;
      case "×":
        result = a * b;
        break;
      case "÷":
        if (b === 0) {
          return { value: null, error: "Cannot divide by zero" };
        }
        result = a / b;
        break;
      default:
        return { value: null, error: "Error" };
    }

    if (!Number.isFinite(result)) {
      return { value: null, error: "Error" };
    }

    // Round to avoid floating point artifacts like 0.1 + 0.2 = 0.30000000000004
    result = Math.round((result + Number.EPSILON) * 1e12) / 1e12;

    return { value: result.toString(), error: null };
  }

  function compute() {
    if (state.operation === null || state.previousOperand === "" || state.currentOperand === "") {
      return;
    }
    const { value, error } = calculate(state.previousOperand, state.operation, state.currentOperand);

    if (error) {
      triggerError(error);
      return;
    }

    state.currentOperand = value;
    state.previousOperand = "";
    state.operation = null;
    state.overwrite = true;
  }

  function inputDigit(digit) {
    if (state.error) resetCalculator();

    if (state.overwrite) {
      state.currentOperand = digit === "0" ? "0" : digit;
      state.overwrite = false;
      return;
    }

    if (state.currentOperand === "0") {
      state.currentOperand = digit;
      return;
    }

    // Guard against unreasonably long input breaking the layout/logic
    if (state.currentOperand.replace("-", "").replace(".", "").length >= 15) {
      return;
    }

    state.currentOperand += digit;
  }

  function inputDecimal() {
    if (state.error) resetCalculator();

    if (state.overwrite) {
      state.currentOperand = "0.";
      state.overwrite = false;
      return;
    }

    if (state.currentOperand.includes(".")) return; // prevents "5..2"
    state.currentOperand += ".";
  }

  function chooseOperation(operator) {
    if (state.error) resetCalculator();
    if (state.currentOperand === "" && state.previousOperand === "") return;

    // Allow switching the operator before a second number is entered
    if (state.previousOperand !== "" && state.currentOperand === "") {
      state.operation = operator;
      updateDisplay();
      return;
    }

    if (state.previousOperand !== "") {
      compute();
      if (state.error) return;
    }

    state.operation = operator;
    state.previousOperand = state.currentOperand;
    state.currentOperand = "";
    state.overwrite = false;
  }

  function deleteLast() {
    if (state.error) {
      resetCalculator();
      return;
    }
    if (state.overwrite) return;

    state.currentOperand = state.currentOperand.slice(0, -1);
    if (state.currentOperand === "" || state.currentOperand === "-") {
      state.currentOperand = "0";
      state.overwrite = true;
    }
  }

  function toggleSign() {
    if (state.error) resetCalculator();
    if (state.currentOperand === "0" || state.currentOperand === "") return;

    state.currentOperand = state.currentOperand.startsWith("-")
      ? state.currentOperand.slice(1)
      : `-${state.currentOperand}`;
  }

  function handlePercentage() {
    if (state.error) resetCalculator();
    if (state.currentOperand === "") return;

    const current = parseFloat(state.currentOperand);
    if (Number.isNaN(current)) return;

    // No pending operation: a plain percentage just becomes a decimal (50% -> 0.5)
    if (!state.operation || state.previousOperand === "") {
      state.currentOperand = (current / 100).toString();
      state.overwrite = true;
      updateDisplay();
      return;
    }

    const previous = parseFloat(state.previousOperand);
    const op = state.operation;
    const isAdditive = op === "+" || op === "−";

    // For + / − , X% means "X percent of the first number" (200 + 10% = 220)
    // For × / ÷ , X% is simply X/100 (100 × 10% = 10)
    const percentValue = isAdditive ? (previous * current) / 100 : current / 100;
    state.currentOperand = percentValue.toString();

    const expression = `${formatNumber(previous.toString())} ${op} ${formatNumber(current.toString())}%`;

    compute();
    updateDisplay();
    if (!state.error) {
      recordHistory(expression, state.currentOperand);
    }
  }

  function resetCalculator() {
    state.currentOperand = "0";
    state.previousOperand = "";
    state.operation = null;
    state.overwrite = true;
    state.error = false;
    updateDisplay();
  }

  function triggerError(message) {
    state.currentOperand = message;
    state.previousOperand = "";
    state.operation = null;
    state.overwrite = true;
    state.error = true;
    updateDisplay();
  }

  function handleEquals() {
    if (state.error) {
      resetCalculator();
      return;
    }
    if (state.operation === null || state.previousOperand === "") return;

    const expression = `${formatNumber(state.previousOperand)} ${state.operation} ${formatNumber(state.currentOperand)}`;

    compute();

    if (!state.error) {
      recordHistory(expression, state.currentOperand);
    }
  }

  // display formatting and updating

  function formatNumber(numString) {
    if (numString === "" || numString === "-") return numString;
    if (["Error", "Cannot divide by zero"].includes(numString)) return numString;
    if (/e/i.test(numString)) return numString; // exponential notation: leave untouched

    const isNegative = numString.startsWith("-");
    const unsigned = isNegative ? numString.slice(1) : numString;
    const [integerPart, decimalPart] = unsigned.split(".");

    const formattedInteger = integerPart === "" ? "" : new Intl.NumberFormat("en-US").format(BigInt(integerPart || 0));

    let result = formattedInteger;
    if (decimalPart !== undefined) {
      result += `.${decimalPart}`;
    }
    return (isNegative ? "-" : "") + result;
  }

  function updateDisplay() {
    currentOperandEl.textContent = formatNumber(state.currentOperand === "" ? "0" : state.currentOperand);

    if (state.operation != null) {
      previousOperandEl.textContent = `${formatNumber(state.previousOperand)} ${state.operation}`;
    } else {
      previousOperandEl.textContent = "\u00A0"; // non-breaking space keeps the line height stable
    }

    // Keep the current value scrolled to the rightmost (most significant) digit end
    currentOperandEl.scrollLeft = currentOperandEl.scrollWidth;

    // Error styling: swap text color + drop to a smaller size for long messages
    if (state.error) {
      currentOperandEl.classList.remove(...RESULT_COLOR_CLASSES, ...RESULT_SIZE_CLASSES);
      currentOperandEl.classList.add(...ERROR_COLOR_CLASSES, ...ERROR_SIZE_CLASSES);
    } else {
      currentOperandEl.classList.remove(...ERROR_COLOR_CLASSES, ...ERROR_SIZE_CLASSES);
      currentOperandEl.classList.add(...RESULT_COLOR_CLASSES, ...RESULT_SIZE_CLASSES);
    }

    highlightActiveOperator();
  }

  function highlightActiveOperator() {
    document.querySelectorAll("[data-operator]").forEach((btn) => {
      const isActive = state.operation != null && btn.dataset.operator === state.operation && state.currentOperand === "";
      if (isActive) {
        btn.classList.remove(...OPERATOR_IDLE_CLASSES);
        btn.classList.add(...OPERATOR_ACTIVE_CLASSES);
      } else {
        btn.classList.remove(...OPERATOR_ACTIVE_CLASSES);
        btn.classList.add(...OPERATOR_IDLE_CLASSES);
      }
    });
  }

//button and keyboard heandling

  function handleButtonClick(event) {
    const button = event.target.closest("button");
    if (!button) return;

    const { digit, operator, action } = button.dataset;

    if (digit !== undefined) {
      inputDigit(digit);
    } else if (operator !== undefined) {
      chooseOperation(operator);
    } else if (action === "clear") {
      resetCalculator();
    } else if (action === "delete") {
      deleteLast();
    } else if (action === "percent") {
      handlePercentage();
    } else if (action === "sign") {
      toggleSign();
    } else if (action === "decimal") {
      inputDecimal();
    } else if (action === "equals") {
      handleEquals();
    } else {
      return;
    }

    updateDisplay();
  }

  const KEY_OPERATOR_MAP = {
    "+": "+",
    "-": "−",
    "*": "×",
    "/": "÷",
  };

  function handleKeyboard(event) {
    const { key } = event;

    if (/^[0-9]$/.test(key)) {
      inputDigit(key);
      updateDisplay();
      return;
    }

    if (key === ".") {
      inputDecimal();
      updateDisplay();
      return;
    }

    if (key in KEY_OPERATOR_MAP) {
      event.preventDefault(); // stop "/" from triggering browser quick-find
      chooseOperation(KEY_OPERATOR_MAP[key]);
      updateDisplay();
      return;
    }

    if (key === "%") {
      handlePercentage();
      updateDisplay();
      return;
    }

    if (key === "Enter" || key === "=") {
      event.preventDefault();
      handleEquals();
      updateDisplay();
      return;
    }

    if (key === "Backspace") {
      deleteLast();
      updateDisplay();
      return;
    }

    if (key === "Escape") {
      resetCalculator();
      return;
    }
  }

// histry /localStorage

  function loadHistory() {
    try {
      const stored = localStorage.getItem(HISTORY_KEY);
      history = stored ? JSON.parse(stored) : [];
      if (!Array.isArray(history)) history = [];
    } catch (err) {
      history = [];
    }
    renderHistory();
  }

  function saveHistory() {
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch (err) {
      // localStorage may be unavailable (private mode, quota, etc.) — fail silently
    }
  }

  function recordHistory(expression, result) {
    history.unshift({
      expression,
      result: formatNumber(result),
      timestamp: Date.now(),
    });
    history = history.slice(0, HISTORY_LIMIT);
    saveHistory();
    renderHistory();
  }

  function clearHistory() {
    history = [];
    saveHistory();
    renderHistory();
  }

  function renderHistory() {
    historyListEl.innerHTML = "";

    if (history.length === 0) {
      historyEmptyEl.style.display = "flex";
      historyListEl.style.display = "none";
      return;
    }
    historyEmptyEl.style.display = "none";
    historyListEl.style.display = "block";

    history.forEach((entry) => {
      const li = document.createElement("li");

      const item = document.createElement("button");
      item.type = "button";
      item.className =
        "w-full flex items-center justify-between gap-3 py-3 px-1 rounded-lg cursor-pointer transition-colors duration-150 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";
      item.setAttribute("aria-label", `Reuse result: ${entry.expression} equals ${entry.result}`);
      item.innerHTML = `
        <span class="text-sm text-muted truncate">${entry.expression}</span>
        <span class="text-sm font-semibold text-ink shrink-0">${entry.result}</span>
      `;
      item.addEventListener("click", () => {
        state.currentOperand = entry.result.replace(/,/g, "");
        state.previousOperand = "";
        state.operation = null;
        state.overwrite = true;
        state.error = false;
        updateDisplay();
      });

      li.appendChild(item);
      historyListEl.appendChild(li);
    });
  }

//  history drawer toggle

  function toggleHistoryDrawer() {
    const isOpen = historyToggleBtn.getAttribute("aria-expanded") === "true";
    setHistoryDrawer(!isOpen);
  }

  function setHistoryDrawer(open) {
    historyToggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
    historyDrawerEl.classList.toggle("grid-rows-[0fr]", !open);
    historyDrawerEl.classList.toggle("grid-rows-[1fr]", open);
    historyChevronEl.classList.toggle("rotate-180", open);
  }

// init function to add event listeners and load history
  function init() {
    calculatorEl.addEventListener("click", handleButtonClick);
    document.addEventListener("keydown", handleKeyboard);
    clearHistoryBtn.addEventListener("click", clearHistory);
    historyToggleBtn.addEventListener("click", toggleHistoryDrawer);

    loadHistory();
    updateDisplay();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
