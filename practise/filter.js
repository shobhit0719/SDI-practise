let users = [
  {name:"Allen", age:22},
  {name:"Black", age:15},
  {name:"James", age:30}
];

let adults = users.filter(user => user.age > 18);

console.log(adults);
