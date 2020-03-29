// filter array of objects exercise

let fruit = [
  {
    name: "apples",
    amount: 3
  },
  { name: "oranges", amount: 8 },
  { name: "mandarin", amount: 12 }
];

// filter for fruit amounts larger than 5

fruit.filter(fruit => fruit.amount > 5);

// sort in descending order

fruit.sort((i1, i2) => i1.amount - i2.amount);

console.log(fruit);
