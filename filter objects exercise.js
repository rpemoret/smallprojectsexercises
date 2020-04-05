// filter array of objects exercise

let fruit = [
  { id: "fruit", name: "apples", amount: 3 },
  { id: "fruit", name: "oranges", amount: 8 },
  { id: "fruit", name: "mandarin", amount: 12 },
];

// filter for fruit amounts larger than 5

//fruit.filter((fruit) => fruit.amount > 5);

// sort in descending order

fruit.sort((i1, i2) => i1.amount - i2.amount);

console.log(fruit);

// add eventlistener to an html button for filtering fruit

// function when button is clicked, gets inner HTML elements to be filtered

let filterfruit = fruit.filter(function (fruit) {
  return (
    fruit.amount > 5,
    filterfruit.map((fruit) => console.log(fruit.name + ":" + fruit.amount))
  );
});

// show each element in the result array

/*

fruit.map((fruit) => console.log(fruit.name + ":" + fruit.amount));
*/
