const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
  const item = words[index];
  if(item.length > 6) {
    newArray.push(item);
  }
}
console.log("original", words);
console.log("newArray", newArray);
// Filter is inmutable
const rta = words.filter(item => item.length >= 6);
console.log("original", words);
console.log("rta", rta);

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
    customerName: "Nicolas",
    total: 2355,
    delivered: false,
  },
];

const rta3 = orders.filter(item => item.delivered && item.total >= 100);
console.log("original orders", orders);
console.log("rta3", rta3);

const search = (query) => {
  return orders.filter(item =>{
    return item.customerName.toLowerCase().includes(query.toLowerCase());
  })
};
// console.log(search('nico'));
console.log(search('aadwadawdaw'));