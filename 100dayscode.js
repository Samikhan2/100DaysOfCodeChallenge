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
let result = countVowels(inputStrings);
console.log("Number of vowels ",result );
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
let numbers = [1, -4, 3, -9]
let sumNumResult = sumOfPositiveNum(numbers);
console.log("Sum of positive numbers: " + sumNumResult);
console.log("-----------------------------")

// 10. Question: Find the index of the first occurrence of a specific element in an array.
function findTheIndexOf(arr, target) {
  const index = arr.indexOf(target)
  return index;
}  
let arr = [10, 30, 40, 50]
let indexOfArr = 50;
let indexResult = findTheIndexOf(arr, indexOfArr);
console.log(`The index of the first occurrence of ${indexOfArr} is: ${indexResult}`)
console.log("-----------------------------")

// making an object
const obj = {
  name : "sami",
  lastName : "khan",
  hobby : ["gym" , "coding"]
};
console.log("My Name is " + obj.name + obj.lastName + " and my hobbies are " + obj.hobby[0] + " and " + obj.hobby[1])

console.log("-----------------------------")
// acessing object properties using Dot notation
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
// acessing object properties using Bracket notation

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
//   Updating Object Properties

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
// Delete Properties from myDogs Object

delete myDog.tails;
console.log(myDog.tails)

console.log("-----------------------------")


