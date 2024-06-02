

var emptyMultiArray = [];


var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


document.write("<h2>Program 3: Numeric Counting from 1 to 10</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(i + ", ");
}

var tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
var tableLength = parseInt(prompt("Enter the length of multiplication table:"));
document.write("<h2>Program 4: Multiplication Table of " + tableNumber + "</h2>");
for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}


var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<h2>Program 5: Fruits Array</h2>");
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

document.write("<h2>Program 6: Series Generation</h2>");
document.write("<p>a. Counting: ");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("</p>");

document.write("<p>b. Reverse counting: ");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("</p>");

document.write("<p>c. Even: ");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("</p>");

document.write("<p>d. Odd: ");
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("</p>");

document.write("<p>e. Series: ");
for (var i = 1; i <= 10; i++) {
    document.write((2 * i) + "k, ");
}
document.write("</p>");

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Enter an item to search:");
var isFound = false;
for (var i = 0; i < A.length; i++) {
    if (searchItem.toLowerCase() === A[i]) {
        isFound = true;
        break;
    }
}
if (isFound) {
    document.write("<p>Item found in the list.</p>");
} else {
    document.write("<p>Item not found in the list.</p>");
}

var numbersArray = [24, 53, 78, 91, 12];
var largestNumber = numbersArray[0];
for (var i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] > largestNumber) {
        largestNumber = numbersArray[i];
    }
}
document.write("<p>Program 8: Largest number in the array: " + largestNumber + "</p>");

var smallestNumber = numbersArray[0];
for (var i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] < smallestNumber) {
        smallestNumber = numbersArray[i];
    }
}
document.write("<p>Program 9: Smallest number in the array: " + smallestNumber + "</p>");

document.write("<h2>Program 10: Multiples of 5 from 1 to 100</h2>");
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i + ", ");
    }
}
