function saysomething(message = "Goodbye", whisper = false) {
  if (whisper) {
    console.log(`%c{message}`, "font-size:5px");
  } else {
    console.log(message);
  }
}
saysomething("hi", true);

const squared = (a) => {
  return a * a;
};
const otherSquared = squared;
console.log(otherSquared(4));

const hero = {
  name: "Batman",
  speak: function () {
    return "hello";
  },
};
console.log(hero.name);
console.log(hero.speak());

function showMessage(from, text) {
  from = "*" + from + "*"; // make "from" look nicer

  console.log(from + ": " + text);
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

console.log(from);

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

for (let code in codes) {
  console.log(-code); // 49, 41, 44, 1
}
