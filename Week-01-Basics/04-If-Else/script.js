console.log("=== 30 If-Else Logic Questions in JavaScript ===\n");

// 1. Positive, Negative or Zero
let num1 = -15;
if (num1 > 0) {
    console.log(num1 + " is Positive");
} else if (num1 < 0) {
    console.log(num1 + " is Negative");
} else {
    console.log("The number is Zero");
}
console.log("-------------------");

// 2. Even or Odd
let num2 = 27;
if (num2 % 2 === 0) {
    console.log(num2 + " is Even");
} else {
    console.log(num2 + " is Odd");
}
console.log("-------------------");

// 3. Largest of Two Numbers
let a = 45;
let b = 78;
if (a > b) {
    console.log(a + " is larger");
} else if (b > a) {
    console.log(b + " is larger");
} else {
    console.log("Both numbers are equal");
}
console.log("-------------------");

// 4. Largest of Three Numbers
let x = 10, y = 25, z = 18;
if (x > y && x > z) {
    console.log(x + " is the largest");
} else if (y > x && y > z) {
    console.log(y + " is the largest");
} else {
    console.log(z + " is the largest");
}
console.log("-------------------");

// 5. Voting Eligibility
let age = 17;
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}
console.log("-------------------");

// 6. Pass or Fail
let marks = 35;
if (marks >= 40) {
    console.log("Passed with " + marks + " marks");
} else {
    console.log("Failed");
}
console.log("-------------------");

// 7. Grade Calculator
let score = 85;
if (score >= 90) console.log("Grade: A+");
else if (score >= 80) console.log("Grade: A");
else if (score >= 70) console.log("Grade: B");
else if (score >= 60) console.log("Grade: C");
else if (score >= 50) console.log("Grade: D");
else console.log("Grade: F");
console.log("-------------------");

// 8. Leap Year Checker
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is not a Leap Year");
}
console.log("-------------------");

// 9. Temperature Advice
let temperature = 28;
if (temperature > 35) {
    console.log("It's extremely hot!");
} else if (temperature > 30) {
    console.log("It's hot outside.");
} else if (temperature > 20) {
    console.log("Nice weather.");
} else if (temperature > 10) {
    console.log("It's cool.");
} else {
    console.log("It's too cold!");
}
console.log("-------------------");

// 10. Password Validator
let password = "abc123";
if (password === "") {
    console.log("Password cannot be empty");
} else if (password.length < 6) {
    console.log("Password is too short");
} else if (password.length > 20) {
    console.log("Password is too long");
} else {
    console.log("Password is valid");
}
console.log("-------------------");

// 11. Divisible by 5 and 11
let n = 55;
if (n % 5 === 0 && n % 11 === 0) {
    console.log(n + " is divisible by both 5 and 11");
} else {
    console.log(n + " is not divisible by both");
}
console.log("-------------------");

// 12. Character Type Checker
let ch = 'K';
if (ch >= 'A' && ch <= 'Z') {
    console.log(ch + " is Uppercase");
} else if (ch >= 'a' && ch <= 'z') {
    console.log(ch + " is Lowercase");
} else {
    console.log(ch + " is not a letter");
}
console.log("-------------------");

// 13. Attendance Checker
let attendance = 65;
if (attendance >= 75) {
    console.log("Excellent Attendance!");
} else if (attendance >= 65) {
    console.log("Good Attendance");
} else {
    console.log("Low Attendance - Not Allowed");
}
console.log("-------------------");

// 14. BMI Category
let weight = 70;
let height = 1.75;
let bmi = weight / (height * height);
if (bmi < 18.5) console.log("Underweight");
else if (bmi < 24.9) console.log("Normal weight");
else if (bmi < 29.9) console.log("Overweight");
else console.log("Obese");
console.log("-------------------");

// 15. Traffic Light System
let light = "yellow";
if (light === "red") {
    console.log("Stop!");
} else if (light === "yellow") {
    console.log("Get Ready!");
} else if (light === "green") {
    console.log("Go!");
} else {
    console.log("Invalid light color");
}
console.log("-------------------");

// 16. Discount Calculator
let purchase = 1200;
if (purchase >= 1000) console.log("20% Discount");
else if (purchase >= 500) console.log("10% Discount");
else console.log("No Discount");
console.log("-------------------");

// 17. Vowel or Consonant
let char = 'e';
if ('aeiouAEIOU'.includes(char)) {
    console.log(char + " is a Vowel");
} else {
    console.log(char + " is a Consonant");
}
console.log("-------------------");

// 18. Age Group Checker
let personAge = 22;
if (personAge < 13) console.log("Child");
else if (personAge < 20) console.log("Teenager");
else if (personAge < 40) console.log("Young Adult");
else console.log("Senior Citizen");
console.log("-------------------");

// 19. Number Range Checker
let checkNum = 75;
if (checkNum >= 1 && checkNum <= 100) {
    console.log(checkNum + " is in range (1-100)");
} else {
    console.log(checkNum + " is out of range");
}
console.log("-------------------");

// 20. Simple Calculator
let numA = 15;
let numB = 5;
let operator = "+";
if (operator === "+") console.log(numA + numB);
else if (operator === "-") console.log(numA - numB);
else if (operator === "*") console.log(numA * numB);
else if (operator === "/") console.log(numA / numB);
else console.log("Invalid Operator");
console.log("-------------------");

// 21. Weekend Checker
let day = "Sunday";
if (day === "Saturday" || day === "Sunday") {
    console.log("It's Weekend!");
} else {
    console.log("It's Weekday");
}
console.log("-------------------");

// 22. Profit or Loss
let costPrice = 800;
let sellingPrice = 950;
if (sellingPrice > costPrice) console.log("Profit");
else if (sellingPrice < costPrice) console.log("Loss");
else console.log("No Profit No Loss");
console.log("-------------------");

// 23. Login Validation
let username = "admin";
let pass = "12345";
if (username === "admin" && pass === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}
console.log("-------------------");

// 24. Season Checker
let month = "December";
if (["December", "January", "February"].includes(month)) {
    console.log("Winter Season");
} else if (["March", "April", "May"].includes(month)) {
    console.log("Spring Season");
} else {
    console.log("Other Season");
}
console.log("-------------------");

// 25. Triangle Type
let side1 = 5, side2 = 5, side3 = 5;
if (side1 === side2 && side2 === side3) console.log("Equilateral Triangle");
else if (side1 === side2 || side2 === side3 || side1 === side3) console.log("Isosceles Triangle");
else console.log("Scalene Triangle");
console.log("-------------------");

// 26. Student Division
let totalMarks = 72;
if (totalMarks >= 60) console.log("First Division");
else if (totalMarks >= 45) console.log("Second Division");
else if (totalMarks >= 33) console.log("Third Division");
else console.log("Fail");
console.log("-------------------");

// 27. Number Sign and Parity
let specialNum = 14;
if (specialNum > 0) {
    console.log(specialNum % 2 === 0 ? "Positive Even" : "Positive Odd");
} else if (specialNum < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}
console.log("-------------------");

// 28. Final Score Evaluation
let finalScore = 85;
if (finalScore >= 90) console.log("Outstanding Performance");
else if (finalScore >= 75) console.log("Excellent");
else if (finalScore >= 60) console.log("Good");
else console.log("Needs Improvement");
console.log("-------------------");

// 29. Electricity Bill
let units = 250;
let bill = 0;
if (units <= 100) bill = units * 5;
else if (units <= 200) bill = 500 + (units - 100) * 6;
else bill = 1100 + (units - 200) * 7;
console.log("Total Bill: Rs." + bill);
console.log("-------------------");

// 30. Bonus Eligibility
let salary = 50000;
let experience = 6;
if (experience >= 5 && salary > 40000) {
    console.log("You are eligible for Bonus");
} else {
    console.log("Not eligible for Bonus");
}
console.log("=== All 30 Questions Completed! ===");