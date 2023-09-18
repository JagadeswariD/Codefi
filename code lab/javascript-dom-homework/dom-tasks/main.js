/*
The <div> DOM node?
The <ul> DOM node?
The second <li> (with Pete)?
*/

//For all nodes: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
//For element nodes only: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.

/* console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);
console.log(document.body.lastElementChild.lastElementChild); */
let len = document.body.firstElementChild.firstElementChild.children.length;
for (let i = 0; i < len; i++) {
  document.body.firstElementChild.firstElementChild.children[i].children[
    i
  ].style.background = "red";
}

//optimized solution
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = "red";
}
elem.style.background = "red";
elem.style.color = "blue";
setTimeout(() => {
  window["elem-content"].style.color = "yellow";
}, 3000);
