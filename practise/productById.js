let products = [
  {id:1, name:"Laptop"},
  {id:2, name:"Mobile"},
  {id:3, name:"Tablet"}
];

let product = products.find(p => p.id === 2);

console.log(product); 