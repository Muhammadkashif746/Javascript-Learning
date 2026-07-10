// 1. Even or Odd Number
let num = 17;
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}

// 2. Positive, Negative, or Zero
let number = -25;
if (number > 0) {
    console.log(number + " is Positive");
} else if (number < 0) {
    console.log(number + " is Negative");
} else {
    console.log("The number is Zero");
}

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

// 4. Largest of Three Numbers
let x = 10, y = 25, z = 18;
if (x > y && x > z) {
    console.log(x + " is the largest");
} else if (y > x && y > z) {
    console.log(y + " is the largest");
} else {
    console.log(z + " is the largest");
}

// 5. Smallest of Two Numbers
let p = 56;
let q = 34;
if (p < q) {
    console.log(p + " is smaller");
} else if (q < p) {
    console.log(q + " is smaller");
} else {
    console.log("Both numbers are equal");
}

// 6. Check Voting Eligibility
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// 7. Pass or Fail
let marks = 35;
if (marks >= 40) {
    console.log("Passed with " + marks + " marks");
} else {
    console.log("Failed");
}

// 8. Grade Calculator
let score = 85;
if (score >= 90) console.log("Grade: A+");
else if (score >= 80) console.log("Grade: A");
else if (score >= 70) console.log("Grade: B");
else if (score >= 60) console.log("Grade: C");
else if (score >= 50) console.log("Grade: D");
else console.log("Grade: F");

// 9. Leap Year Checker
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is not a Leap Year");
}

// 10. Divisible by 5 and 11
let n = 55;
if (n % 5 === 0 && n % 11 === 0) {
    console.log(n + " is divisible by both 5 and 11");
} else {
    console.log(n + " is not divisible by both 5 and 11");
}

// 11. Find Factorial (for loop)
let factNum = 5;
let factorial = 1;
for (let i = 1; i <= factNum; i++) {
    factorial *= i;
}
console.log("Factorial of " + factNum + " is " + factorial);

// 12. Print Numbers 1 to 10 (for loop)
console.log("Numbers 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 13. Print Numbers 10 to 1 (while loop)
console.log("Numbers 10 to 1:");
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// 14. Multiplication Table
let tableNum = 7;
console.log("Multiplication Table of " + tableNum);
for (let j = 1; j <= 10; j++) {
    console.log(tableNum + " x " + j + " = " + (tableNum * j));
}

// 15. Sum of First N Numbers
let N = 10;
let sum = 0;
for (let k = 1; k <= N; k++) {
    sum += k;
}
console.log("Sum of first " + N + " numbers = " + sum);

// 16. Count Even Numbers (1 to N)
let limit = 20;
let evenCount = 0;
for (let m = 1; m <= limit; m++) {
    if (m % 2 === 0) evenCount++;
}
console.log("Even numbers from 1 to " + limit + ": " + evenCount);

// 17. Count Odd Numbers (1 to N)
let oddLimit = 20;
let oddCount = 0;
for (let m = 1; m <= oddLimit; m++) {
    if (m % 2 !== 0) oddCount++;
}
console.log("Odd numbers from 1 to " + oddLimit + ": " + oddCount);

// 18. Reverse Counting
let start = 15;
console.log("Reverse counting from " + start + ":");
while (start >= 1) {
    console.log(start);
    start--;
}

// 19. Find Maximum in a Loop
let numbers = [12, 45, 67, 23, 89, 34];
let max = numbers[0];
for (let val of numbers) {
    if (val > max) max = val;
}
console.log("Maximum number is: " + max);

// 20. Find Minimum in a Loop
let nums = [45, 12, 67, 8, 34];
let min = nums[0];
for (let val of nums) {
    if (val < min) min = val;
}
console.log("Minimum number is: " + min);

// 21. Sum of Even Numbers (1 to N)
let evenSum = 0;
let maxN = 20;
for (let i = 1; i <= maxN; i++) {
    if (i % 2 === 0) evenSum += i;
}
console.log("Sum of even numbers = " + evenSum);

// 22. Sum of Odd Numbers (1 to N)
let oddSum = 0;
for (let i = 1; i <= maxN; i++) {
    if (i % 2 !== 0) oddSum += i;
}
console.log("Sum of odd numbers = " + oddSum);

// 23. Check Prime Number
let primeNum = 17;
let isPrime = true;
if (primeNum <= 1) isPrime = false;
for (let i = 2; i <= Math.sqrt(primeNum); i++) {
    if (primeNum % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(primeNum + (isPrime ? " is Prime" : " is not Prime"));

// 24. Count Digits of a Number (while loop)
let digitNum = 12345;
let count = 0;
let temp = digitNum;
while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
}
console.log(digitNum + " has " + count + " digits");

// 25. Reverse a Number (while loop)
let revNum = 12345;
let reversed = 0;
let original = revNum;
while (revNum > 0) {
    let digit = revNum % 10;
    reversed = reversed * 10 + digit;
    revNum = Math.floor(revNum / 10);
}
console.log("Reverse of " + original + " is " + reversed);

// 26. Sum of Digits (while loop)
let sumNum = 1234;
let sumDigits = 0;
let numCopy = sumNum;
while (numCopy > 0) {
    sumDigits += numCopy % 10;
    numCopy = Math.floor(numCopy / 10);
}
console.log("Sum of digits of " + sumNum + " is " + sumDigits);

// 27. Palindrome Number Checker
let palNum = 12321;
let originalPal = palNum;
let revPal = 0;
while (palNum > 0) {
    revPal = revPal * 10 + (palNum % 10);
    palNum = Math.floor(palNum / 10);
}
console.log(originalPal + (originalPal === revPal ? " is Palindrome" : " is not Palindrome"));

// 28. Armstrong Number Checker
let armNum = 153;
let armSum = 0;
let armTemp = armNum;
let digits = armNum.toString().length;
while (armTemp > 0) {
    let digit = armTemp % 10;
    armSum += Math.pow(digit, digits);
    armTemp = Math.floor(armTemp / 10);
}
console.log(armNum + (armSum === armNum ? " is Armstrong" : " is not Armstrong"));

// 29. Fibonacci Series (for loop)
let fibTerms = 10;
let first = 0, second = 1;
console.log("Fibonacci Series:");
console.log(first);
console.log(second);
for (let k = 2; k < fibTerms; k++) {
    let next = first + second;
    console.log(next);
    first = second;
    second = next;
}

// 30. Power of a Number (using loop)
let base = 2;
let exponent = 5;
let result = 1;
for (let i = 1; i <= exponent; i++) {
    result *= base;
}
console.log(base + " raised to power " + exponent + " is " + result);
// 31. Check if a number is Perfect Number
let perfectNum = 28;
let sumDivisors = 0;
for (let i = 1; i < perfectNum; i++) {
    if (perfectNum % i === 0) sumDivisors += i;
}
console.log(perfectNum + (sumDivisors === perfectNum ? " is Perfect Number" : " is not Perfect Number"));

// 32. Print Square Pattern
let size = 4;
console.log("Square Pattern:");
for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= size; j++) {
        row += "* ";
    }
    console.log(row);
}

// 33. Sum of First N Odd Numbers
let oddN = 10;
let oddSumTotal = 0;
for (let i = 1; i <= oddN * 2; i += 2) {
    oddSumTotal += i;
}
console.log("Sum of first " + oddN + " odd numbers = " + oddSumTotal);

// 34. Check Strong Number
let strongNum = 145;
let originalStrong = strongNum;
let strongSum = 0;
while (strongNum > 0) {
    let digit = strongNum % 10;
    let fact = 1;
    for (let i = 1; i <= digit; i++) fact *= i;
    strongSum += fact;
    strongNum = Math.floor(strongNum / 10);
}
console.log(originalStrong + (strongSum === originalStrong ? " is Strong Number" : " is not Strong Number"));

// 35. Print Right Triangle Numbers
let rows = 5;
console.log("Right Triangle Number Pattern:");
for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j + " ";
    }
    console.log(line);
}

// 36. Find Second Largest Number
let arr = [12, 45, 67, 23, 89, 34];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let val of arr) {
    if (val > largest) {
        secondLargest = largest;
        largest = val;
    } else if (val > secondLargest && val !== largest) {
        secondLargest = val;
    }
}
console.log("Second Largest = " + secondLargest);

// 37. Count Vowels in String
let str = "Kashif Khan";
let vowelCount = 0;
for (let char of str.toLowerCase()) {
    if ('aeiou'.includes(char)) vowelCount++;
}
console.log("Vowels in '" + str + "' = " + vowelCount);

// 38. Print Reverse Star Pattern
let starRows = 5;
console.log("Reverse Star Pattern:");
for (let i = starRows; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "* ";
    }
    console.log(line);
}

// 39. Check Harshad Number
let harshadNum = 18;
let sumOfDigits = 0;
let tempHarshad = harshadNum;
while (tempHarshad > 0) {
    sumOfDigits += tempHarshad % 10;
    tempHarshad = Math.floor(tempHarshad / 10);
}
console.log(harshadNum + (harshadNum % sumOfDigits === 0 ? " is Harshad Number" : " is not Harshad Number"));

// 40. Print Multiplication Table from 1 to 5
console.log("Multiplication Table 1 to 5:");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
}

// 41. Find LCM of Two Numbers
let numA = 12;
let numB = 18;
let maxNum = Math.max(numA, numB);
let lcm = maxNum;
while (true) {
    if (lcm % numA === 0 && lcm % numB === 0) break;
    lcm++;
}
console.log("LCM of " + numA + " and " + numB + " = " + lcm);

// 42. Print Number Pyramid
let pyramidRows = 5;
for (let i = 1; i <= pyramidRows; i++) {
    let line = " ".repeat(pyramidRows - i);
    for (let j = 1; j <= i; j++) {
        line += j + " ";
    }
    console.log(line);
}

// 43. Count Number of Factors
let factorNum = 28;
let factorCount = 0;
for (let i = 1; i <= factorNum; i++) {
    if (factorNum % i === 0) factorCount++;
}
console.log(factorNum + " has " + factorCount + " factors");

// 44. Sum of Series (1 + 1/2 + 1/3 + ... + 1/N)
let seriesN = 5;
let seriesSum = 0;
for (let i = 1; i <= seriesN; i++) {
    seriesSum += 1 / i;
}
console.log("Sum of series = " + seriesSum.toFixed(4));

// 45. Check Automorphic Number
let autoNum = 25;
let sq = autoNum * autoNum;
let strAuto = autoNum.toString();
let strSq = sq.toString();
console.log(autoNum + (strSq.endsWith(strAuto) ? " is Automorphic" : " is not Automorphic"));

// 46. Print Floyd's Triangle
let floydNum = 1;
let floydRows = 5;
console.log("Floyd's Triangle:");
for (let i = 1; i <= floydRows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += floydNum++ + " ";
    }
    console.log(line);
}

// 47. Find GCD of Two Numbers
let gcdA = 48;
let gcdB = 18;
let gcdTempA = gcdA;
let gcdTempB = gcdB;
while (gcdTempB !== 0) {
    let remainder = gcdTempA % gcdTempB;
    gcdTempA = gcdTempB;
    gcdTempB = remainder;
}
console.log("GCD of " + gcdA + " and " + gcdB + " = " + gcdTempA);

// 48. Print Diamond Pattern
let diamondSize = 5;
for (let i = 1; i <= diamondSize; i++) {
    console.log(" ".repeat(diamondSize - i) + "* ".repeat(i));
}
for (let i = diamondSize - 1; i >= 1; i--) {
    console.log(" ".repeat(diamondSize - i) + "* ".repeat(i));
}

// 49. Check Happy Number
let happyNum = 19;
let seen = new Set();
while (happyNum !== 1 && !seen.has(happyNum)) {
    seen.add(happyNum);
    let sum = 0;
    while (happyNum > 0) {
        let digit = happyNum % 10;
        sum += digit * digit;
        happyNum = Math.floor(happyNum / 10);
    }
    happyNum = sum;
}
console.log("19 is Happy Number: " + (happyNum === 1));

// 50. Binary to Decimal Converter
let binaryStr = "10101";
let decimalResult = 0;
for (let i = 0; i < binaryStr.length; i++) {
    decimalResult += parseInt(binaryStr[i]) * Math.pow(2, binaryStr.length - 1 - i);
}
console.log("Binary " + binaryStr + " to Decimal = " + decimalResult);