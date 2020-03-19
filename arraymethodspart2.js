// Find Spiderman

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" }
];

const locateSpiderman = function(superheroes) {
  return superheroes.find(function(findSpiderman) {
    return findSpiderman.name === "Spiderman";
  });
};

console.log(locateSpiderman(superheroes));

// verdubbeling

const arrayvalues = [1, 2, 3];

const doublearrayvalues = arrayvalues.map(function(element) {
  return element * 2;
});

console.log(doublearrayvalues);

// nagaan of er een getal in een array zit dat groter dan 10 is

containsbiggerthan10 = [1, 4, 3, 6, 9, 7, 11];

const biggerthan10 = element => element > 10;

console.log(containsbiggerthan10.some(biggerthan10));

// nagaan of er in een array een element aanwezig is

arrayFunction = function(arrfunction) {
  return arrfunction.includes("Italy");
};

console.log(
  arrayFunction([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States"
  ])
);

// numbers in een array vertienvoudigen

const index = [1, 4, 3, 6, 9, 7, 11];

const arrayvalues10 = index.map(function(element) {
  return element * 10;
});

console.log(arrayvalues10);

// nagaan of alle elementen onder de 100 zijn

const isBelow100 = function(arr) {
  return arr.every(number => {
    return number < 100;
  });
};

console.log(
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);

// alle waardes van een array optellen

bigSum = function(arrayTotal) {
  return arrayTotal.reduce((acc, number) => {
    return acc + number;
  });
};

console.log(
  bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])
);

// de zwaarste
