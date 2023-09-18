function makePerson(name) {
  let _name = name;

  function privateSetName(newName) {
    _name = newName;
  }

  return {
    setName: (newName) => privateSetName(newName),
    getName: () => _name,
  };
}

const person = makePerson("Eswari");
console.log(person);

class Person {
  constructor(name) {
    let _name = name;
    function privateSetName(name) {
      _name = name;
    }

    this.setName = (name) => {
      privateSetName(name);
    };
    this.getName = () => _name;
  }
}

const persObj = new Person("Haditi");
console.log(persObj);
console.log(persObj._name);
console.log(persObj.getName());

const initCount = prompt("Enter initial count", 1);
let label = document.querySelector("#counter");
label.innerText = initCount;

function increament() {
  let currentValue = +label.innerText;
  label.innerText = currentValue + 1;
}
function decreament() {
  let currentValue = +label.innerText;
  label.innerText = currentValue - 1;
}
function reset() {
  label.innerText = initCount;
}

function sayHello(name) {
  return () => console.log(name);
}

let sayHi = sayHello("Eswari");
sayHi();
sayHi = sayHello("Ramya");
sayHi();

function sum(a) {
  return (b) => a + b;
}

console.log(sum(3)(4));

let x = 1;

function func() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  //let x = 2;
}

func();
function inBetween(a, b) {
  return (z) => {
    if (z >= a && z <= b) return true;
    else return false;
  };
}

function inArray(arr) {
  return (z) => arr.includes(z);
}

/* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
alert(arr.filter(inArray([1, 2, 10]))); // 1,2

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
users.sort((a, b) => (a.name > b.name ? 1 : -1));
console.log(users);

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}
users.sort(byField("name"));
console.log("Sorted by name", JSON.stringify(users));
users.sort(byField("age"));
console.log("Sorted by age", users);

{
  {
    {
      {
        {
        }
      }
    }
  }
}
