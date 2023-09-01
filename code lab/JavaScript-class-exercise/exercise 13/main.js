const num = prompt("Enter a number:");
const len = prompt("Enter length of the array:");
console.log(arrayOfMultiples(num, len));
console.log("Array of Multiples:", arrayOfMultiples(num, len));
function arrayOfMultiples(num, len) {
  let arr = [];
  for (i = 1; i <= len; i++) {
    arr.push(num * i);
  }
  return arr;
}
