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

// show each element in the result array

fruit.map(fruit => console.log(fruit.name + ":" + fruit.amount));

fruit.map;

// add eventlistener to an html button for filtering fruit

const filterfruit = document.getElementsByClassName("filter");
filterfruit.addEventlistener("click"),
  function() {
    newfruit();
  };

// function when button is clicked, gets inner HTML elements to be filtered

newfruit = function() {
  document.getElementById("fruit").innerHTML = fruit.amount.filter(
    checkAmountabove5
  );
};

checkAmountabove5 = function(fruit) {
  return fruit.amount > 5;
};
