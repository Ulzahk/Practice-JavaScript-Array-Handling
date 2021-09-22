const items = [1, 3, 2, 3, 3, 1, 10];

// output
// {
//   1: 1,
//   3: 2,
//   2: 1,
// }

const rta = items.reduce((object, item) => {
  if(!object[item]){
    object[item] = 1;
  } else {
    object[item]++;
  }
  return object
}, {});

console.log("original", items);
console.log("rta", rta);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta2 = data
  .map(item => item.level)
  .reduce((object, item) => {
    if(!object[item]){
      object[item] = 1;
    } else {
      object[item]++;
    }
    return object
  }, {});

console.log("original", data);
console.log("rta2", rta2);

const items2 = [1, 3, 2, 3, 3, 1, 4,5,5,3,2];
const rta3 = items2.reduce((object, item) =>{
  if(item < 3){
    object["1-2"]++
  }
  if(item < 5 && item > 2){
    object["3-4"]++
  }
  if(item === 5){
    object["5"]++
  }
  return object
}, {"1-2": 0, "3-4": 0, "5": 0})
console.log("original", items2);
console.log("rta3", rta3);