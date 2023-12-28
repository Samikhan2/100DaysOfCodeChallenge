// 1. Question: Reverse a string without using the built-in reverse() method.
// using for loops to reverse the string
var originalString = 'This is original string';
var reversedString = '';

for (var i = originalString.length - 1; i >= 0; i--) {
  reversedString += originalString[i];
}

console.log(originalString);
console.log(reversedString);

console.log("-----------------------------")
// 2. Question: Count the number of vowels in a given string.

function countVowels(str){
    let vowelsEx = /[aeiou]/gi;

    let vowels = str.match(vowelsEx);
    return vowels ? vowels.length : 0;
}
let inputStrings = "hello world!";
let vowelsResult = countVowels(inputStrings);
console.log("Number of vowels ",vowelsResult );
console.log("-----------------------------")

// 3. Question: Convert the first letter of each word in a sentence to uppercase.

const capitalized =  function (sentence) {
  let str = sentence.split(" ");
  for(let i = 0; i < str.length; i++){
    str[i] = str[i][0].toUpperCase() + str[i].substring(1);
  }
  return str.join(" ");
}

let input = "this is javscript";
console.log(capitalized(input))
console.log("-----------------------------")

// 4. Question: Check if a string is a palindrome.

function checkingPalindrome(str) {
  let originalString = str;
  let reversedStr = originalString.split('').reverse().join('');
  return reversedStr === originalString;
}
let checkPalindrome = "madam";
console.log(checkingPalindrome(checkPalindrome));

// 5.Question: Print all even numbers between 1 and 20 using a while loop

var number = 2; 

while (number <= 20) {
    console.log(number);
    number += 2;
}
console.log("-----------------------------")
// 6.Question: Iterate through the properties of an object using a for-in loop

let object = {
  carName : "Audi",
  carModel : 2020,
  carDoors : 4,
}
for(let key in object){
  console.log(key + ": " + object[key]);
}

console.log("-----------------------------")
// 7.Question: Check if a number is even or odd and return a corresponding message.
// using a ternary operator here for a more concise syntax.

function checkEvenOrOdd(number) {
  return number % 2 === 0 ? "This number is even" : "This number is odd";
}
let input1 = 4;
let input2 = 3;
let result1 = checkEvenOrOdd(input1);
let result2 = checkEvenOrOdd(input2); 

console.log(result1)
console.log(result2)
console.log("-----------------------------")
// 8.Question: Find the maximum of three numbers using nested ternary operators
function findMax(a, b, c) {
  return a > b ? (a > c ? a : c) : (b > c ? b : c);
}

const maxNum = findMax(22, 35, 18);
console.log(maxNum);
console.log("-----------------------------")

// 9. Question: Find the sum of all positive numbers in an array.

function sumOfPositiveNum(arr){
  let sumPostive = 0;
  for(let i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
      sumPostive += arr[i];
    }
  }
  return sumPostive;
}
let numbers1 = [1, -4, 3, -9]
let sumNumResult = sumOfPositiveNum(numbers1);
console.log("Sum of positive numbers: " + sumNumResult);
console.log("-----------------------------")

// 10. Question: Find the index of the first occurrence of a specific element in an array.
function findTheIndexOf(arr, target) {
  const index = arr.indexOf(target)
  return index;
}  
let arr1 = [10, 30, 40, 50]
let indexOfArr = 50;
let indexResult = findTheIndexOf(arr1, indexOfArr);
console.log(`The index of the first occurrence of ${indexOfArr} is: ${indexResult}`)
console.log("-----------------------------")
// 11. Question: Remove all duplicates from an array without built-in methods.

function removeDuplicate(arr) {
  let duplicateElements = [];
  for(let item of arr){
    if (!duplicateElements.includes(item)) {
      duplicateElements.push(item);
    }
  } 
  return duplicateElements;
}
const duplicateArray = [1, 1, 2, 2, 3, 3, 4, 4, 6, 6];
const uniqueArray = removeDuplicate(duplicateArray);
console.log(`This is the original array: ${duplicateArray}`);
console.log(`Array with duplicates removed: ${uniqueArray}`)
console.log("-----------------------------")
// 12. Question: Calculate the factorial of a number using a do-while loop.

let originalArray = [1,2,4,7,8,9];
let doubledArray = [];
for(let element of originalArray){
  doubledArray.push(element * 2)
}

console.log(`This is the original array: ${originalArray}`);
console.log(`This is the doubled array: ${doubledArray}`);
console.log("-----------------------------")
// 13. Question: Sort the array in ascending and descending without built-in methods.

let att = [1,2,3,4,5];
console.log("Ascending order");
for (let i = att.length - 1; i>= 0; i--) {
  const element = att[i];
  console.log(element);
  
}

console.log("Descending order");
for (let i = 0; i < att.length; i++) {
  const element = att[i];
  console.log(element);
}
console.log("-----------------------------")

// 14. making an object
const obj = {
  name : "sami",
  lastName : "khan",
  hobby : ["gym" , "coding"]
};
console.log("My Name is " + obj.name + obj.lastName + " and my hobbies are " + obj.hobby[0] + " and " + obj.hobby[1])

console.log("-----------------------------")
// 15. acessing object properties using Dot notation
const cat = {
  name : "Whiskers",
  legs : 4,
  tails : 1,
  enemies : ["Water", "Dogs"]
};
const catName = "The name of this cat is " + cat.name;
const catEnemies = "Cat Biggest Enemies " + cat.enemies;
console.log(catName)
console.log(catEnemies)

console.log("-----------------------------")
// 16. acessing object properties using Bracket notation

const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];
console.log(entreeValue)
console.log(drinkValue)


console.log("-----------------------------")
// 17. Updating Object Properties

const myDog = {
  name : "Coder",
  legs : 4,
  tails : 1,
  friends : ["Humans"]
};

// You can use either dot or bracket notation.
myDog.name = "Happy Coder";
console.log("my dog is a " + myDog.name)
myDog["name"] = "Happy Coder";
console.log("my dog is a " + myDog["name"])

console.log("-----------------------------")
// Add New Properties to myDog Object
myDog.barks = "woof!"
console.log("my dog " + myDog.barks)

console.log("-----------------------------")
// 18. Delete Properties from myDogs Object

delete myDog.tails;
console.log(myDog.tails)

console.log("-----------------------------")

// 19. Rewrite the following code using a ternary operator:
// let result;
// if (score >= 80) {
//     result = "Pass";
// } else {
//     result = "Fail";
// }

let result;
let score = 20;
score >= 70 ? result = "pass" : result = "fail"
console.log(result);

console.log("-------------------------------------");
// 20. How does the optional chaining operator (?.) work,
// and how can it be used to access nested properties of an object?

let user = {
    name: "sami",
    address: {
        country: "pakistan",
        city: "karachi"
    },
    contact: {
        email: "Sami4678kh@gmail.com",
        phone: 92023129384058
    }
}
// acessing nested properties without optional chaining operator
console.log(user.address);
console.log(user.address.country);
// acessing nested properties with optional chaining operator
console.log(user?.address?.city);
console.log(user?.contact?.city);
console.log(user?.address?.email);

console.log("-------------------------------------");
// 21. Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over.

// for in loop loops through the properties of an object
let forObject = {
    carname: "audi a5",
    model: "2018",
    power: "252hp",
    body: "hatchback",
    doors: 5,
    seats: 5
}
for (let key in forObject) {
    console.log(key + ":" + forObject[key]);
}

console.log("-------------------------------------");
// for of loop loops through the value of an iterable objects like an array or strings

let str = "Hello World!"
for (const value of str) {
    console.log(value);
}

let arr = [1, 2, 4, 5, 6, 8, 8]
for (const value of arr) {
    console.log(value);
}

console.log("-------------------------------------");
// 22. Define a function calculateAverage that takes an array of numbers as an argument and returns the average value.
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    const average = sum / numbers.length;
    return average;
}

let numberArray = [10, 34, 54, 76, 8, 5, 3]
let calculatedAverage = calculateAverage(numberArray)

console.log("The average value of array is: " + calculatedAverage);
console.log("-------------------------------------");

// 23. Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.
let student = {
    name: "sami",
    age: 17,
    grades: {
        english: 45,
        urdu: 56,
        maths: 36,
        history: 75,
        physics: 75
    },
    calculatedStdAverage() {
        let gradesArray = Object.values(this.grades);
        let sum = 0;
        
        for (let i = 0; i < gradesArray.length; i++) {
            sum += gradesArray[i];
        }
        
        if (gradesArray.length === 0) {
            return 0;
        }
        
        let stdGradeAverage = sum / gradesArray.length;
        return stdGradeAverage;
    }
};

function studentInformation() {
    let studentInfo = [student.name, student.age, student.grades];
    console.log(`The name of the student is ${studentInfo[0]} and the age is ${studentInfo[1]}`);
    console.log("Student grades:");
    for (let key in student.grades) {
        console.log(`${key}: ${student.grades[key]}`);
    }
    console.log(`The average of the student grades is: ${student.calculatedStdAverage()}`);
}
studentInformation();
console.log("-------------------------------------");

// 24. Explain the concept of "closures" in JavaScript and provide an example of their practical use.

function outerFunction() {
    let outerVariable = "this is the outer function"
    function innerFucntion() {
        console.log(outerVariable);
    }
    return outerVariable;
}
let closureExample = outerFunction();
console.log(closureExample);
console.log("-------------------------------------");


// 25. Write a loop that iterates over an array of numbers and logs whether each number is even or odd,
// using a ternary operator.

let numbers = [1,2,3,4,7,6,7,9]
for (let i = 0; i < numbers.length; i++) {
    const result = (numbers[i] % 2 === 0 ) ? "even" : "odd"
    console.log(`${numbers[i]} is ${result}`);
}
console.log("-------------------------------------");

