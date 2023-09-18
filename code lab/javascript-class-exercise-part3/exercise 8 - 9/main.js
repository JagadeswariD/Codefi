//Ex 8
/*
Objective: Grasp the intricacies of Scope, Hoisting, and Closures combined.

Instructions:

Create a function that initializes a counter variable. This function should return another function.
The returned function, when invoked, should increment the counter and print its value. However, if the counter reaches a certain value (e.g., 10), it should reset itself.
Notice how hoisting affects the behavior when you try to declare and initialize the counter after referencing it.
Comment on the role of closure in maintaining the counter's state across multiple invocations of the returned function.
*/
function setupCounter() {
  // initializes a counter variable
  let count = 0;
  return function () {
    // Increment and print the count
    if (count >= 10) {
      count = 0;
      console.log("Count Reset: ", count);
    } else {
      console.log("Count increment:", ++count);
    }
  };
}

counterInstance = setupCounter();
for (let i = 0; i < 12; i++) counterInstance();

/*The closure preserves the state of the count variable between invocations. Without closures, each call to counterInstance() would have a separate, isolated count variable, and the counter wouldn't reset as expected.

In this code, closure allows the inner function to "remember" the state of count across multiple invocations, achieving the desired behavior of incrementing and resetting the counter when needed.*/

//Ex 9
/*Objective: Deepen the understanding of Scope interplay with Closures and Hoisting.

Instructions:

Define two functions: one that modifies a global variable and another that tries to modify a local variable (which is not yet declared).
Inside the second function, declare and initialize the local variable after attempting to modify it. Observe how hoisting comes into play.
Now, make use of closures: Modify the first function so that it becomes a factory function returning another function. This inner function should use the outer function's variables.
Reflect on how the local scope of the outer function is preserved for the inner function through closures, even after the outer function has finished execution.
*/

let globalV = "Global Variable";

function method1() {
  globalV = "modified global variable";
  let method1_variable = "Local to method1";
  return () => {
    console.log(method1_variable);
  };
}
function method2() {
  localV = "modified local variable"; //Uncaught ReferenceError: Cannot access 'localV' before initialization
  let localV = "Local Variable";
}

const randMethod = method1();
console.log(globalV);
randMethod();
//method2();

//Additional exercise from class notes
function greeting(greeting) {
  return function inner(name) {
    return `${name}! ${greeting}`;
  };
}

//const basicWelcome = greeting("Welcome.");
//const friendlyWelcome = greeting("So glad to see you again!");
console.log(greeting("Welcome.")("John"));

const createBankAccount = (initialBalance) => {
  let userBalance = initialBalance;

  return {
    getBalance: () => {
      return userBalance;
    },
    deposit: (amount) => {
      userBalance += amount;
      return userBalance;
    },
    withdrawl: (amount) => {
      userBalance -= amount;
      return userBalance;
    },
  };
};

const myAccount = createBankAccount(100);
let myBalance;

myBalance = myAccount.getBalance(); // 100
console.log("myBalance after creation:", myBalance);

myAccount.deposit(99);
myBalance = myAccount.getBalance(); // 100
console.log("myBalance after $99 deposit:", myBalance);

myAccount.withdrawl(12);
myBalance = myAccount.getBalance(); // 100
console.log("myBalance after $12 withdrawl:", myBalance);
