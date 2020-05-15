if (10 > 13) {
  console.log("hi");
} else if (10 == 10) {
  console.log("haha");
} else {
  console.log("bye");
}

if (20 > 3 && "nic" === "nico") {
  console.log("yes");
} else {
  console.log("no");
}
if (20 > 3 || "nic" === "nico") {
  console.log("yes");
} else {
  console.log("no");
}

//prompt
const age = prompt("How old are you?");
if (age >= 18 && age <= 21) {
  console.log("you can drink but you should not");
} else if (age > 21) {
  console.log("you can drink, go ahead");
} else {
  console.log("You can't drink");
}
