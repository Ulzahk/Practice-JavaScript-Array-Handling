const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
  const element = othersElements[index];
  newArray.push(element);
}
console.log("for", newArray)
// Concat is inmutable
const rta = elements.concat(othersElements);
console.log("rta", rta);
const rta2 = [...elements, ...othersElements];
console.log("rta2", rta2);
const rta3 = [...elements, ..."random"];
console.log("elements", rta3);
elements.push(...othersElements);
console.log("elements", elements);