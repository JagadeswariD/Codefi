//Exercise 1
//Given the code snippet. Explain what scopes are in this current context of the code.
/* function outerFunction() {
  let outerVar = "I'm outside!"; //function scope and outer scope to innerfunction

  function innerFunction() {
    let innerVar = "I'm inside!"; //local scope
    console.log(outerVar); // Can we access outerVar? yes we can
    console.log(innerVar); // Can we access innerVar? yes we can
  }

  innerFunction();
}
 */

const outerFunction = () => {
  let outerVar = "I'm outside!"; //function scope and outer scope to innerfunction

  function innerFunction() {
    let innerVar = "I'm inside!"; //local scope
    console.log(outerVar); // Can we access outerVar? yes we can
    console.log(innerVar); // Can we access innerVar? yes we can
  }

  innerFunction();
};

outerFunction();

//Ex 2
//Draft a JavaScript function where you call a function before its declaration.
//Analyze the behavior and understand how hoisting impacts the outcome.

function mainFunction(userName) {
  // Call the hoistedFunction here
  hello(userName);
  // Now, declare the hoistedFunction below
  function hello(userName) {
    console.log(userName);
  }
}

mainFunction("Eswari");

//Ex 3
//Develop a JavaScript function that returns another function.
//The inner function should have access to variables from the outer function's scope.

function counter() {
  let count = 0;
  return function inc() {
    return ++count;
  };
}
const increaments = counter();
console.log(increaments());

//If you declare two functions with the same name in the same scope, the second function declaration will override the first one.

function counter() {
  let count = 0;
  return function inc() {
    return ++count;
  };
}
const increament = counter();
console.log(increament());

//Ex 4
//Declare a global variable outside of any function.
//Create a function that tries to modify that global variable.
//Create another function that declares a local variable with the same name.
//Observe the behavior when calling both functions.

// Declare a global variable here
let names = ["John", "Tom", "Jim"];
function modifyGlobal() {
  // Try to modify the global variable here
  names.push("Alice");
}

function localScopeTest() {
  // Declare a local variable with the same name as the global variable
  let names = ["Jerry", "Micky", "Minnie"];
  return names;
}
console.log("Global Variables", names);
// Call both functions here
modifyGlobal();
console.log("modifyGlobal()  is called", names);

console.log("Local Scope variable", localScopeTest());

//Ex 5
//Implement a Function Factory using Closures.
//Design a function that accepts a parameter.
//The function should return another function that uses the parameter in some way.

function generateRandomNumber(startrange, endrange) {
  return () => {
    return Math.floor(Math.random() * (endrange - startrange + 1)) + startrange;
  };
}

randomNumer = generateRandomNumber(4, 20);
console.log(randomNumer());

//Ex 6
/*Examine how Hoisting impacts variable declarations and the different types of variables used.

Instructions:

Declare a variable after a console.log statement that tries to print that variable. Observe the behavior, and deduce how JavaScript hoists variable declarations.*/

function hoistingTest() {
  // Try printing a variable here
  //console.log(address);//ReferenceError: Cannot access 'address' before initialization
  // Declare the variable after the console.log
  let address = "101 dreamland, dreamworld";
  console.log(address);
}
//var address = "101 dreamland, dreamworld";
hoistingTest();

//Ex 7
/*Create a function that sets up a counter using closures.
The outer function should define a count variable.
The inner function should increment and print the count each time it's invoked.*/
function setupCounter() {
  // Define a count variable here
  let count = 6;
  return function () {
    // Increment and print the count
    console.log(++count);
  };
}

counterInstance = setupCounter();
counterInstance();
