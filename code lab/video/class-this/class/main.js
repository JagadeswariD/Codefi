class Person {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }
  sayHi() {
    console.log(this.name + ", Welcome Home!");
  }

  get role() {
    return this.prole;
  }

  set role(value) {
    if (value.length < 4) {
      console.log("Not a valide role", value);
      return;
    }
    this.prole = value;
  }
}

function personFunction() {}

let user = new Person("John", 25, "Developer");
console.log(typeof Person);
user.sayHi();
console.log(Person.prototype);
console.log(personFunction.prototype);
console.log(Object.getOwnPropertyNames(Person));
console.log(Object.getOwnPropertyNames(Person.prototype));

console.log(Object.getOwnPropertyNames(personFunction));
console.log(Object.getOwnPropertyNames(personFunction.prototype));

console.log(Person);
const userClass = class MyClass {
  sayHi() {
    console.log(MyClass);
  }
};
console.log(userClass);
new userClass().sayHi();
//console.log(MyClass);
