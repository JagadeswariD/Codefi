//Create a LIST of OBJECTS, each object having a name and price property
//LOOP over that LIST, dynamically create a new list item <li></li> with the food name inside, and append that item to an existing HTML <ul></ul> element

const groceryList = [
  { name: "Orange", price: 6 },
  { name: "Strawberries", price: 3.99 },
  { name: "Lettuce", price: 2.89 },
  { name: "Banana", price: 0.72 },
];

const div = document.querySelector(".groceryList");
let listContent = "<ul>";
for (let i = 0; i < groceryList.length; i++) {
  let temp =
    "<li>" + groceryList[i].name + ", " + groceryList[i].price + "</li>";
  listContent += temp;
}
listContent += "</ul>";
console.log(listContent);
div.innerHTML = listContent;
