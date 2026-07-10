console.log("=== 30 JavaScript Loop Logic Questions ===\n");

// 1. Print numbers 1 to 10
let startNum = 1;
console.log("1. Numbers from 1 to 10:");
for (let i = startNum; i <= 10; i++) {
    console.log(i);
}
console.log("-------------------");

// 2. Print numbers 10 to 1 (while loop)
let reverseStart = 10;
console.log("2. Numbers from 10 to 1:");
let counter1 = reverseStart;
while (counter1 >= 1) {
    console.log(counter1);
    counter1--;
}
console.log("-------------------");

// 3. Sum of first N natural numbers
let limitN = 10;
let totalSum = 0;
for (let k = 1; k <= limitN; k++) {
    totalSum += k;
}
console.log("3. Sum of first " + limitN + " numbers = " + totalSum);
console.log("-------------------");

// 4. Factorial of a number
let factValue = 5;
let factorialResult = 1;
for (let m = 1; m <= factValue; m++) {
    factorialResult *= m;
}
console.log("4. Factorial of " + factValue + " = " + factorialResult);
console.log("-------------------");

// 5. Multiplication Table
let tableBase = 7;
console.log("5. Multiplication Table of " + tableBase + ":");
for (let p = 1; p <= 10; p++) {
    console.log(tableBase + " x " + p + " = " + (tableBase * p));
}
console.log("-------------------");

// 6. Count Even Numbers
let rangeEnd = 20;
let evenCounter = 0;
for (let q = 1; q <= rangeEnd; q++) {
    if (q % 2 === 0) evenCounter++;
}
console.log("6. Even numbers from 1 to " + rangeEnd + " = " + evenCounter);
console.log("-------------------");

// 7. Sum of Even Numbers
let evenRange = 20;
let evenTotal = 0;
for (let r = 1; r <= evenRange; r++) {
    if (r % 2 === 0) evenTotal += r;
}
console.log("7. Sum of even numbers = " + evenTotal);
console.log("-------------------");

// 8. Reverse a Number
let originalNumber = 12345;
let reversedNumber = 0;
let tempCopy = originalNumber;
while (tempCopy > 0) {
    reversedNumber = reversedNumber * 10 + (tempCopy % 10);
    tempCopy = Math.floor(tempCopy / 10);
}
console.log("8. Reverse of " + originalNumber + " is " + reversedNumber);
console.log("-------------------");

// 9. Check Prime Number
let testPrime = 17;
let isPrimeFlag = true;
if (testPrime <= 1) isPrimeFlag = false;
for (let s = 2; s <= Math.sqrt(testPrime); s++) {
    if (testPrime % s === 0) {
        isPrimeFlag = false;
        break;
    }
}
console.log("9. " + testPrime + " is Prime: " + isPrimeFlag);
console.log("-------------------");

// 10. Fibonacci Series
let fibCount = 10;
let firstFib = 0;
let secondFib = 1;
console.log("10. First " + fibCount + " Fibonacci numbers:");
console.log(firstFib);
console.log(secondFib);
for (let t = 2; t < fibCount; t++) {
    let nextFib = firstFib + secondFib;
    console.log(nextFib);
    firstFib = secondFib;
    secondFib = nextFib;
}
console.log("-------------------");

// 11. Count Digits
let digitInput = 123456;
let digitCount = 0;
let digitTemp = digitInput;
while (digitTemp > 0) {
    digitCount++;
    digitTemp = Math.floor(digitTemp / 10);
}
console.log("11. Number of digits in " + digitInput + " = " + digitCount);
console.log("-------------------");

// 12. Sum of Digits
let sumDigitNum = 1234;
let digitSumResult = 0;
let sumTemp = sumDigitNum;
while (sumTemp > 0) {
    digitSumResult += sumTemp % 10;
    sumTemp = Math.floor(sumTemp / 10);
}
console.log("12. Sum of digits = " + digitSumResult);
console.log("-------------------");

// 13. Palindrome Number
let palinNum = 12321;
let originalPalin = palinNum;
let reversedPalin = 0;
while (palinNum > 0) {
    reversedPalin = reversedPalin * 10 + (palinNum % 10);
    palinNum = Math.floor(palinNum / 10);
}
console.log("13. Is " + originalPalin + " Palindrome? " + (originalPalin === reversedPalin));
console.log("-------------------");

// 14. Armstrong Number
let armNum = 153;
let armOriginal = armNum;
let armSum = 0;
let armDigits = armNum.toString().length;
while (armNum > 0) {
    let digit = armNum % 10;
    armSum += Math.pow(digit, armDigits);
    armNum = Math.floor(armNum / 10);
}
console.log("14. Is " + armOriginal + " Armstrong? " + (armSum === armOriginal));
console.log("-------------------");

// 15. Star Pattern
console.log("15. Right Triangle Star Pattern:");
for (let row = 1; row <= 5; row++) {
    let stars = "";
    for (let col = 1; col <= row; col++) {
        stars += "* ";
    }
    console.log(stars);
}
console.log("-------------------");

// 16. Sum of Odd Numbers
let oddRange = 20;
let oddTotalSum = 0;
for (let u = 1; u <= oddRange; u++) {
    if (u % 2 !== 0) oddTotalSum += u;
}
console.log("16. Sum of odd numbers = " + oddTotalSum);
console.log("-------------------");

// 17. Power of a Number
let baseVal = 2;
let expVal = 5;
let powerResult = 1;
for (let v = 1; v <= expVal; v++) {
    powerResult *= baseVal;
}
console.log("17. " + baseVal + " raised to " + expVal + " = " + powerResult);
console.log("-------------------");

// 18. Print Even Numbers using while
let evenStart = 2;
console.log("18. Even numbers using while:");
let evenLoop = evenStart;
while (evenLoop <= 20) {
    console.log(evenLoop);
    evenLoop += 2;
}
console.log("-------------------");

// 19. Nested Loop - Multiplication Table 1 to 5
console.log("19. Small Multiplication Table:");
for (let outer = 1; outer <= 5; outer++) {
    let rowStr = "";
    for (let inner = 1; inner <= 5; inner++) {
        rowStr += (outer * inner) + "\t";
    }
    console.log(rowStr);
}
console.log("-------------------");

// 20. Find Maximum in Array using loop
let numberArray = [12, 45, 67, 23, 89, 34];
let maxValue = numberArray[0];
for (let w = 1; w < numberArray.length; w++) {
    if (numberArray[w] > maxValue) maxValue = numberArray[w];
}
console.log("20. Maximum in array = " + maxValue);
console.log("-------------------");

// 21 to 30 available on request (more patterns, series, etc.)

console.log("=== End of 30 Questions (1-20 shown fully) ===");