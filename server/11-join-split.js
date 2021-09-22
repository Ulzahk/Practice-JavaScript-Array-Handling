const elements = ["Fire", "Air", "Water"];

let rtaFinal = "";
const separator = "--"
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal += element + separator;
}
console.log("original", elements);
console.log("rtaFinal", rtaFinal);
const rta = elements.join("--");
console.log("original", elements);
console.log("rta", rta);

const title = "Curso de manipulación de arrays";
const rta2 = title.split(" ").join("-").toLowerCase();
console.log("original", title);
console.log("rta2", rta2);