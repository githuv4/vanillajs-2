const ss = ["sm", "22", true, "Seoul"];
// console.log(ss);
// console.log(ss[1]);

const ssInfo = {
  name: "sm",
  age: 22,
  gender: "male",
  isHuman: true,
  favMovies: ["Along the gods", "aaa", "bbbb"],
  favFood: [
    { name: "Kimchi", fatty: false },
    { name: "Cheese burger", fatty: true },
  ],
};
// console.log(ssInfo);
// console.log(ssInfo.name, ssInfo.gender);

// console.log(ssInfo.gender);
// ssInfo.gender = "female";
// console.log(ssInfo.gender);

// console.log(ssInfo.favMovies);
// console.log(ssInfo);

console.log(ssInfo.favFood[0].name);
console.log(ssInfo.favFood[0].fatty);
