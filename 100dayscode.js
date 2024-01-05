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

let evenAndOddNumbers = [1,2,3,4,7,6,7,9]
for (let i = 0; i < evenAndOddNumbers.length; i++) {
    const result = (evenAndOddNumbers[i] % 2 === 0 ) ? "even" : "odd"
    console.log(`${evenAndOddNumbers[i]} is ${result}`);
}
console.log("-------------------------------------");




// 26. Write a loop that iterates over an array of numbers and logs whether each number is even or odd,
// using a ternary operator.

let numbers = [1,2,3,4,7,6,7,9]
for (let i = 0; i < numbers.length; i++) {
    const result = (numbers[i] % 2 === 0 ) ? "even" : "odd"
    console.log(`${numbers[i]} is ${result}`);
}
console.log("-------------------------------------");
// 27. Create an object car with properties make, model, and a method startEngine that logs a message.
// Instantiate the object and call the method.
let car = {
    make : "BMW",
    model : "2020",
    startEngine(){
        let message = "Engine Started!"
        return message;
    }
}
console.log(car.startEngine());
console.log("-------------------------------------");

// 28. Write a function calculateTax that calculates and returns the tax amount based on a given income.
// Use a ternary operator to determine the tax rate.

function calculateTax(income) {
    let taxRate = income >= 50000 ? 0.2 : income >= 20000 ? 0.1 : 0;
    return income * taxRate;
    
}
let income = 35000
console.log(calculateTax(income));
console.log("-------------------------------------");

// 29. Write a for...in loop that iterates over the properties of an object and logs each property name and value.

let obj1 = {
    name : "sami",
    age : 18,
    email : "Sami4678kh@gmail.com",
    course : "Web Development",
    payment : true
}
for (let key in obj1){
    console.log(key + ":" + obj1[key]);
}
console.log("-------------------------------------");
// 30. Provide an example of using optional chaining within a loop to access a potentially missing property of an object.

let info = [
    {name: "shujat" , address : {city: "karachi", country: "Pakistan"}},
    {name: "sami" , address : {city: "karachi"}}
]

for(let keys of info) {
    let country = keys?.address?.country || "Unknown"
    console.log(`The user name is ${keys.name} and his country is ${country}`);
}
console.log("-------------------------------------");
// 31. *Map Transformation:*
//    - Q: Given an array of integers, use the map method to square each element and return a new array with the squared values.
let arrOfInt = [2,3,4,6,8,3,2]
let squaredArr = arrOfInt.map(arr => arr * arr );
console.log(squaredArr);

console.log("-------------------------------------");
// 32. *Filter and Map Combination:*
//    - Q: Take an array of strings, filter out the ones with a length less than 5, and then capitalize the remaining strings using the map method.
let arrOfStr = ["hello", "world" ,"javascript","cake","banana"]
let filterAndMapStr = arrOfStr.filter(str => str.length <= 5).map(str => str.toUpperCase());
console.log(filterAndMapStr);

console.log("-------------------------------------");
// 33. *Sorting Objects:*
//    - Q: Given an array of objects with a 'price' property, use the sort method to arrange them in descending order based on their prices.
let productPricing = [{name : "Glasses", price : 500}, {name: "Watch", price: 2000}, {name: "Bracelet", price: 200},{name: "Ring", price: 150}];
let descendingProduct = [...productPricing].sort((a,b) => {return b.price - a.price})
console.log(descendingProduct);
console.log(productPricing);

console.log("-------------------------------------");
// 34. *Reduce for Aggregation:*
//    - Q: Use the reduce method to find the total sum of all even numbers in an array of integers.
let arrOfEven = [2,3,4,5,8,3,9,8];
let sumOfEven = arrOfEven.reduce((acc,cur) => { return cur % 2 === 0 ? acc + cur : acc},0)
console.log(`${sumOfEven} is the sum of even number`);


console.log("-------------------------------------");
// 35. *Find and Modify:*
//    - Q: Given an array of objects with 'id' properties, use the find method to locate an object with a specific 'id' and update its 'status' property to 'completed'.
let courses = [
  {id: 45,name:"Mudassir",courseName: "ContentWriting", status:"in-progress"},
  {id: 34,name:"Ali",courseName: "GraphicDesign", status:"in-progress"},
  {id: 22,name:"Ahmed",courseName: "WebDevelopment", status:"in-progress"},
  {id: 56,name:"Huazifa",courseName: "DigitalMarketing", status:"in-progress"}
]
let idToTarget = 45;
let foundObject = courses.find(obj => obj.id == idToTarget);
(foundObject) ? (foundObject.status = "completed", 
console.log(`Object with ${idToTarget} found and status has been updated:`)): 
console.log(`Object with ${idToTarget} not found`);

console.log("-------------------------------------");
// 36. *Chaining Methods:*
//    - Q: Create a chain of array methods to find the average of all positive numbers in an array of mixed integers and return the result rounded to two decimal places.

let mixedArray = [1,-2,45,-43,85,44,34,9,-5,-53,-34]

let averageOfSum = mixedArray.filter(number => number > 0).reduce((sum,number,index,array) => {
  sum += number;
  return index === array.length - 1 ? sum / array.length : sum;
},0).toFixed(2)

console.log(`average of all positive numbers in an array of mixed integers is ${averageOfSum}`);
console.log("-------------------------------------");

// 37. *Conditional Filtering:*
//    - Q: Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the filter method.
let ageObj = [
  {id:1, age:17},
  {id:2, age:34},
  {id:3, age:22},
  {id:5, age:19}
]

let filterAge = function(obj){
  return obj.filter(obj => obj.age >= 18);
};
let filteredAge = filterAge(ageObj);
console.log(filteredAge);
console.log("-------------------------------------");
// 38. *Advanced Sorting:*
//  - Q: Sort an array of strings based on their lengths in ascending order. If two strings have the same length, maintain their relative order in the sorted array.
let mixedArrOfStr = ["banana", "apple","pomegranate","kiwi","avocado","orange"]
let sortedArr = [...mixedArrOfStr].sort((a,b)=>{
  let lengthCompare = a.length - b.length;
  return lengthCompare !== 0 ? lengthCompare : mixedArrOfStr.indexOf(a) - mixedArrOfStr.indexOf(b);
});
console.log(sortedArr);
console.log("-------------------------------------");

// 39. *Nested Array Operations:*
//    - Q: Given an array of arrays containing numbers, use a combination of array methods to flatten the structure and then calculate the sum of all the numbers.

let arrOfArray = [[1,4],[5,6],[7,8,]]
let flattenedAndSum = arrOfArray.reduce((flattened,currentValue)=> flattened.concat(currentValue),[]).reduce((sum,number) => sum + number,0)
console.log(`sum of array is ${flattenedAndSum}`); 

console.log("-------------------------------------");
// 40. *Error Handling with Find:*
//     - Q: Modify the find method to handle the scenario where the desired element is not found, returning a custom default object instead.

let element = [26,38,46,37,56];
let elementToTarget = 45;
let fountElement = element.find(element => element === elementToTarget);
let defaultObj = "Element not Found"
let elementResult = fountElement || defaultObj;
console.log(elementResult);

console.log("-------------------------------------");

// 41. *Map Method:*
//- Q: How does the map method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?
//  A: Map creates a new array by calling a function on each element in the array.
//     It does not change the original array and it doesn't execute the function for empty elements.

let person = [
  {firstName:"Muddasir",lastName:"Jawed"},
  {firstName:"saleem",lastName:"abbas"},
  {firstName:"zubair",lastName:"nazeem"}
]

let mapMethod = person.map(personName => personName.firstName+" "+personName.lastName)
console.log(mapMethod);
console.log("-------------------------------------");

// 42. Filter Method:
//- Q: Explain the purpose of the filter method.
//     Provide an example where you use filter to extract elements from an array based on a specific condition.
//  A: The filter is used to create a new array containing all elements that satisfy a given condition.
//     It returns a new array with all matching elements.

let numOfarr = [1,2,4,7,9,6]
let filteredNum = numOfarr.filter(number => number >= 3)
console.log(filteredNum);
console.log("-------------------------------------");

// 43. Sort Method:
//    - Q: Discuss the default behavior of the sort method for strings and numbers. 
//         How would you use a custom comparison function to sort an array of objects by a specific property?
//      A: The sort method sorts the elements of an array as strings in alphabetical and ascending order
//         and it overwrite the original array.

// Default Behavior of sort() for Strings and Numbers:
// -Strings
let fruits = ['banana', 'apple', 'orange', 'grape'];
fruits.sort();
console.log(fruits);

// -Numbers
let arrOfSort = [10, 5, 20, 2];
arrOfSort.sort();
console.log(arrOfSort);

// Using a Custom Comparison Function for Objects:
let people = [
  { id: 3, age: 30 },
  { id: 6, age: 25 },
  { id: 7, age: 35 }
];

people.sort(function(a, b) {
  return a.age - b.age;
});
console.log(people);
console.log("-------------------------------------");

// 44. *Reduce Method:*
//    - Q: Describe the purpose of the reduce method and provide an example where you use it to compute a single value
//         from an array of numbers.
//      A: is used to accumulate or combine elements of an array into a single value 
//         it takes a callback function and a initial value and it runs on each element of an array.
let arrOfReduce = [2,5,4,6,8,3] 
let reduceMethod = arrOfReduce.reduce((acc,cur) =>{return acc + cur * cur}, 0)
console.log(reduceMethod);
console.log("-------------------------------------");
