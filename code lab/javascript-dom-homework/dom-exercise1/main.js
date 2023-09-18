document.body.style.background = "Red";
setTimeout(() => {
  document.body.style.background = "green";
}, 2000);

alert(window.innerHeight);
for (let node of document.body.childNodes) {
  console.log(node); // shows all nodes from the collection
}
//console.log(document.body.childNodes.filter); // undefined (there's no filter method!)
console.log(Array.from(document.body.childNodes).filter); // function
// parent of <body> is <html>
console.log(document.body.parentNode === document.documentElement); // true

// after <head> goes <body>
console.log(document.head.nextSibling); // HTMLBodyElement

// before <body> goes <head>
console.log(document.body.previousSibling); // HTMLHeadElement
let elem = document.body;
while ((elem = elm.parentElement)) {
  // go up till <html>
  alert(elem);
}
