arraySuper = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210"
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220"
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195"
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186"
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195"
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165"
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145"
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167"
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220"
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250"
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200"
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400"
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200"
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200"
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown"
  }
];

// list all superheroes with weight below 190

const arraySuperLight = arraySuper.filter(function(weightFunction) {
  return parseInt(weightFunction.weight) < 190;
});

console.log(arraySuperLight);

// list all superheroes with weight === 200 in an array

const array200 = arraySuper
  .filter(function(Function200) {
    return parseInt(Function200.weight) === 200;
  })
  .map(function(name) {
    return name.name;
  });

console.log("superheroes that weigh 200 lbs are " + array200);

// list all DC comics superheroes

const arrfilter = arraySuper
  .filter(function(filterfunction) {
    return filterfunction.publisher.includes("DC Comics");
  })
  .map(function(filterarray) {
    return filterarray.name;
  });

console.log("DC comics superheroes are " + arrfilter);

// list all Marvel comics superheroes

const arrfilter2 = arraySuper
  .filter(function(filterfunction) {
    return filterfunction.publisher.includes("Marvel Comics");
  })
  .map(function(filterarray) {
    return filterarray.name;
  });

console.log("Marvel comics superheroes are " + arrfilter2);

// list all comics in which superheroes made first appearances

const arrfilter3 = arraySuper
  .filter(function(filterfunction) {
    return filterfunction.first_appearance.includes("");
  })
  .map(function(filterarray) {
    return filterarray.first_appearance;
  });

console.log(
  "comics in which superheroes made their first appearance are " + arrfilter3
);

// Tel het gewicht van alle superheroes van DC comics bij elkaar op

const arrfilter4 = arraySuper
  .filter(function(filterfunction) {
    return (
      filterfunction.publisher.includes("DC Comics") &&
      parseInt(filterfunction.weight) > 0
    );
  })
  .map(function(filterfunction) {
    return parseInt(filterfunction.weight);
  })
  .reduce(function(previous, current) {
    return previous + current;
  });

console.log("total weight of DC comics superheroes is " + arrfilter4);

// Tel het gewicht van alle superheroes van Marvel comics bij elkaar op

const arrfilter5 = arraySuper
  .filter(function(filterfunction) {
    return (
      filterfunction.publisher.includes("Marvel Comics") &&
      parseInt(filterfunction.weight) > 0
    );
  })
  .map(function(filterfunction) {
    return parseInt(filterfunction.weight);
  })
  .reduce(function(previous, current) {
    return previous + current;
  });

console.log("total weight of Marvel comics superheroes is " + arrfilter5);
