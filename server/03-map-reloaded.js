const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
console.log("original", orders);
const rta = orders.map(item => item.total);
console.log("rta", rta);
// const rta2 = orders.map(item =>  {
//   item.tax = .19;
//   // This copies the reference in memory and changes the original array
//   return item;
// });
// console.log("original", orders);
// console.log("rta2", rta2);
const rta3 = orders.map(item =>  {
  return {
    ...item,
    tax: .19
  };
});
console.log("original", orders);
console.log("rta3", rta3);