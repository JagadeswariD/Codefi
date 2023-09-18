/*
Objective: Understand and Apply Destructuring in JavaScript.

Instructions:

Destructure the person object to extract the name and age properties into variables.
Use array destructuring to get the second and fourth items from the fruits array.
Extract the city and country properties from the address object nested within the person object using nested destructuring.
*/

const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const fruits = ["apple", "banana", "cherry", "date"];

let { name, age } = person;
console.log(`${name} ${age}`);

let [, secondItem, , fourthItem] = fruits;
console.log(`${secondItem} ${fourthItem}`);

let {
  address: { city, country },
} = person;
console.log(`${city} ${country}`);
