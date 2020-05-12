function hello(name, name2) {
  console.log("Hi,", name);
  console.log(`Hello, ${name2}`);
}
// hello("Theron", 22);

function sayHello(name, age) {
  console.log("Hello" + name + "You are" + age + "years old");
  console.log(`Hello, ${name}, youa are ${age} years old`);
}

// sayHello("ss", "23");
// const greettings = sayHello("ss", 18);
// console.log(greettings);

function sayHi(name, age) {
  return `Hello, ${name}, youa are ${age} years old`;
}
console.log(sayHi("xx", 45));
const greettings = sayHi("pp", 55);
console.log(greettings);
