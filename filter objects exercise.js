// filter array of objects exercise

let fruit = [
  { id: "fruit", name: "apples", amount: 3 },
  { id: "fruit", name: "oranges", amount: 8 },
  { id: "fruit", name: "mandarin", amount: 12 },
];

// filter for fruit amounts larger than 5

fruit.filter((fruit) => fruit.amount > 5);

// sort in descending order

fruit.sort((i1, i2) => i1.amount - i2.amount);

console.log(fruit);

// add eventlistener to an html button for filtering fruit

const filterfruitbutton = function () {
  const filterfruit = document.getElementById("filter");

  filterfruit.addEventlistener("click"),
    function () {
      newfruit();
    };
};

// function when button is clicked, gets inner HTML elements to be filtered

let newfruit = function () {
  document.getElementById("fruit").innerHTML = fruit.amount.filter(
    checkAmountabove5
  );
};

let checkAmountabove5 = function (fruit) {
  return fruit.amount > 5, console.log(fruit);
};

console.log(checkAmountabove5);

// show each element in the result array

fruit.map((fruit) => console.log(fruit.name + ":" + fruit.amount));
