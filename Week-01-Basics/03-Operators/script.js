// 1. Arithmetic Operators - Basic Calculator
let num1 = 20;
let num2 = 5;
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus (Remainder):", num1 % num2);
console.log("Exponentiation:", num1 ** 2);

// 2. Check if Number is Positive, Negative or Zero using Comparison
let number = -7;
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 3. Even or Odd using Modulus Operator
let n = 44;
if (n % 2 === 0) {
    console.log(n + " is Even");
} else {
    console.log(n + " is Odd");
}

// 4. Logical Operators - Eligibility Check
let age = 17;
let hasLicense = false;
if (age >= 18 && hasLicense) {
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}

// 5. Ternary Operator - Pass or Fail
let marks = 65;
let result = marks >= 40 ? "Passed" : "Failed";
console.log("Result:", result);

// 6. Comparison Operators - Strict vs Loose
let a = 10;
let b = "10";
console.log("Loose Equal (==):", a == b);
console.log("Strict Equal (===):", a === b);

// 7. Increment and Decrement Operators
let counter = 5;
console.log("Pre-increment:", ++counter);
console.log("Post-increment:", counter++);
console.log("Current value:", counter);

// 8. Compound Assignment Operators
let score = 50;
score += 10;   // score = score + 10
score *= 2;    // score = score * 2
score -= 5;    // score = score - 5
console.log("Final Score:", score);

// 9. Logical OR - Default Value
let username = "";
let displayName = username || "Guest";
console.log("Welcome,", displayName);

// 10. Check Divisible by 3 and 5 using Logical AND
let num = 15;
if (num % 3 === 0 && num % 5 === 0) {
    console.log(num + " is divisible by both 3 and 5");
} else {
    console.log(num + " is not divisible by both");
}

// 11. Find Largest Number using Comparison Operators
let x = 25, y = 40, z = 30;
let largest = x > y ? (x > z ? x : z) : (y > z ? y : z);
console.log("Largest number is:", largest);

// 12. Check Voting Eligibility with Multiple Conditions
let personAge = 20;
let isCitizen = true;
if (personAge >= 18 && isCitizen) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}

// 13. Power Check using Exponentiation
let base = 2;
let exp = 4;
console.log(base + " raised to " + exp + " is " + (base ** exp));

// 14. NOT Operator - Toggle Boolean
let isLoggedIn = false;
console.log("Logged In:", isLoggedIn);
console.log("After toggle:", !isLoggedIn);

// 15. Calculate Percentage using Arithmetic Operators
let obtained = 450;
let total = 500;
let percentage = (obtained / total) * 100;
console.log("Percentage:", percentage + "%");

// 16. Check Range using Logical AND
let temperature = 28;
if (temperature >= 20 && temperature <= 30) {
    console.log("Pleasant weather");
} else if (temperature > 30) {
    console.log("Hot");
} else {
    console.log("Cold");
}

// 17. Swap Two Numbers without Third Variable (using Arithmetic)
let p = 10;
let q = 20;
p = p + q;
q = p - q;
p = p - q;
console.log("After Swap - p:", p, "q:", q);

// 18. Check if a Number is Between 1 to 100
let checkNum = 75;
if (checkNum >= 1 && checkNum <= 100) {
    console.log(checkNum + " is between 1 and 100");
} else {
    console.log(checkNum + " is out of range");
}

// 19. Multiple Conditions with Logical OR
let day = "Sunday";
if (day === "Saturday" || day === "Sunday") {
    console.log("It's Weekend!");
} else {
    console.log("It's Weekday");
}

// 20. Average of Three Numbers using Arithmetic
let m1 = 80, m2 = 90, m3 = 85;
let average = (m1 + m2 + m3) / 3;
console.log("Average Marks:", average);