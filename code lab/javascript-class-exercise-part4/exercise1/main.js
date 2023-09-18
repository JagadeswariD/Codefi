/**
 * Exercise #1
 * Objective: Understand the "this" keyword in different contexts.

Instructions:

Create three functions: one global, one as an object method, and an arrow function inside an object.
Print the value of this inside each function.
Discuss or note down the differences you observe in the value of this across the three scenarios.
 * 
 */

function globalFunction(name) {
  console.log("Global this:", this);
}
globalFunction();

const obj = {
  method: function () {
    console.log("An Oject method", this);
  },
};

obj.method();

const arrowObj = {
  method: () => {
    console.log("Arrow function inside an onject", this);
  },
  method2: function () {
    console.log("hi");
  },
};
arrowObj.method();

/*
Exercise #2
Objective: Delve into Object-Oriented Programming by creating and interacting with classes.

Instructions:

Define a Person class with properties name and age.
Add a method greet() to this class which outputs a greeting.
Instantiate two different Person objects and invoke their greet methods.*/

class Person {
  name;
  //age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello!, ", this.name);
  }

  static info() {
    console.log("This is a Person class");
  }

  set age(value) {
    if (value < 0) {
      console.log("Age cannot be negative");
      return;
    }
    this._age = value;
  }

  get age() {
    return this._age;
  }
}

let user1 = new Person("John", 25);
let user2 = new Person("Tom", 35);

user1.greet();
user2.greet();

/*
Exercise #3
Objective: Understand the role of constructor methods within classes.

Instructions:

Modify your Person class. The constructor should now accept and initialize name and age properties.
Create two different Person instances with unique names and ages.
*/

/*
Exercise #4
Objective: Familiarize with static methods in classes.

Instructions:

Add a static method called info() to the Person class. This method should return a statement like, "This is a Person class".
Try accessing this method both from the class itself and from an instance of the class. Document the outcomes.
*/
//user1.info(); //Uncaught TypeError: user1.info is not a function
Person.info();

/*
Exercise #5
Objective: Implement getters and setters for class properties.

Instructions:

Within your Person class, add getters and setters for the age property.
Ensure with the setter that age can't be set to a negative value.
Instantiate a Person object, try setting a negative age, and observe the results.
*/

let negPerson = new Person("Harry", -5);
