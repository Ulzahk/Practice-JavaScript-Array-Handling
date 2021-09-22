const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
const product = products.find(item => item.id === "🍔");
// const product2 = products.find(item => item.id === "🍕");
if(products){
  myProducts.push(product);
  // myProducts.push(product2);
}
const productIndex = products.findIndex(item => item.id === "🍔");
if(productIndex !== -1){
  products.splice(productIndex, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// Update
const productsV2 = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];
const update = {
  id: "🥞",
  changes: {
    price: 200,
    description: "yummy",
  }
}
const productV2Index = productsV2.findIndex(item => item.id === update.id);
productsV2[productV2Index] = {
  ...productsV2[productV2Index],
  ...update.changes
};
console.log("productsV2", productsV2);