//Instructions: Write a JavaScript program that determines whether a number is positive, negative, or zero. Display a message on the console indicating the type of the number.

const number = prompt("Enter a positive or negative number or zero:", 0);
if (+number === 0) {
  console.log("Entered number is zero");
} else if (+number > 0) {
  console.log("Entered number is positive");
} else if (+number < 0) {
  console.log("Entered number is negative");
}

//Write a JavaScript program that displays the multiplication table of a number up to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(`${i} x 10 = ${i * 10}`);
}

//Create a function that checks if a given number is prime.
const primeNum = prompt("Enter a number to check for prime:", 0);
console.log(checkPrime(primeNum));
function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return "Not a prime number";
  }
  return "It is a prime number";
}
