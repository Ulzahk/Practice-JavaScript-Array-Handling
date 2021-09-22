const numbers = [1,30,49,29,10,13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element >= 40){
    rta = false;
  }
};
console.log("original", numbers);
console.log("rta", rta);
const rta2 = numbers.every(item => item <= 40);
console.log("original", numbers);
console.log("rta2", rta2);
const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];
const rta3 = team.every(item => item.age < 15);
console.log("original", team);
console.log("rta3", rta3);
