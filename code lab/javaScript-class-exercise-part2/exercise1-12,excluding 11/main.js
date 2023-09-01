//Write a JavaScript function called greet that takes a name as an argument and returns a greeting message. For example, if the name is "John", the function should return "Hello, John!".
function greet(username) {
  return `Hello, ${username}!`;
}

console.log("hi");
console.log(greet("Esh"));

//Write a JavaScript function called multiply that takes two numbers as arguments and returns their product. Test the function with different inputs.

function multiply(x, y) {
  return x * y;
}
const numberOne = prompt("Enter 1st Number to multiply:");
const numberTwo = prompt("Enter 2nd Number to multiply:");
console.log("Product of two numbers: ", multiply(numberOne, numberTwo));

//Create a JavaScript object called person with properties for name, age, and gender. Assign appropriate values to the properties and display the object on the console.

const person = {
  name: "Johnny",
  age: "27",
  gender: "male",
};

console.log("Person Object:", person);

// Create a JavaScript object called car with properties for make, model, and year. Assign appropriate values to the properties and display the object on the console.

const car = {
  make: "Toyata",
  model: "Camry",
  year: 2020,
};

console.log("Car Object:", car);

//Write a JavaScript function called reverseString that takes a string as an argument and returns the reverse of the string. For example, if the input is "Hello", the function should return "olleH".

function reverseString(stringArg) {
  let temp = "";
  for (let i = stringArg.length - 1; i >= 0; i--) {
    temp += stringArg.charAt(i);
  }
  return temp;
}

console.log(reverseString("Hello"));

//Write a JavaScript function called calculateArea that takes the radius of a circle as an argument and returns the area of the circle. Use the formula A = π * r^2.

function calculateArea(radius) {
  const area = Math.PI * radius * radius;
  return area;
}
const radius = prompt("Enter the radius value : ");
console.log("Area: ", calculateArea(radius));

//Use the Date object to display the current date and time on the console.

console.log(new Date());

//Use the Math object to generate a random number between 1 and 10 and display it on the console.

console.log(Math.floor(Math.random() * (10 - 1 + 1)) + 1);

// Create a function that takes in an argument and uses string interpolation to print that arguments value somewhere in a text string

// [ ] Create a function
// [ ] Have that function take in an argument
// [ ] Print a statement that uses the variable along with some other text

function printValueWithText(value) {
  console.log(`The value you provided is: ${value}`);
}

printValueWithText("Hello");

//Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically and their corresponding values in the same order.

function keysAndValues(obj) {
  const keys = Object.keys(obj).sort();
  const values = keys.map((key) => obj[key]);
  console.log("Sorted Keys: ", keys);
  console.log("Corresponding Values: ", values);
}

keysAndValues({ a: 1, b: 2, c: 3 });
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
keysAndValues({ key1: true, key2: false, key3: undefined });
