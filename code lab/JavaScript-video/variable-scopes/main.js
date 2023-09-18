//Create three variables in the global scope called firstName, lastName and age and a function that logs them to the console in the following format eg: ' John Smith is 25 years old'

/*let firstName = "John",
  lastName = "Smith",
  age = 25;

console.log(`${firstName} ${lastName} is ${age} years old`);*/

//Move the variables into the local scope of the function and add another variable this time called country add this to our statement '... and lives in England'

function personalDetails() {
  let firstName = "John",
    lastName = "Smith",
    age = 25,
    country = "England";

  console.log(
    `${firstName} ${lastName} is ${age} years old and lives in ${country}`
  );
}
let firstName = "James";
personalDetails();
//Outside of the functon change the firstName to 'James', did you encounter a problem?

//What will the following code return?
/**
 * let game = 'Sonic';
 *
 * if(true){
 * let game='Mario';
 * console.log(game);
 * }
 * console.log(game);
 */

//Mario
//Sonic
