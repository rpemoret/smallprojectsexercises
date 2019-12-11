// check if something is an array

testInput = function() {
  const index1title = "Index1";
  const index1 = 45;
  const index1array = [1000, 2000, 3000, 4000, 5000, 6000];

  return (
    "index1title " +
    Array.isArray(index1title) +
    ", " +
    "index1 " +
    Array.isArray(index1) +
    ", " +
    "index1array " +
    Array.isArray(index1array)
  );
};

console.log(testInput());

// return number of array elements

const index1array = [30, 40, 50, 60, 80, 120];

console.log(index1array.length);

// return first element of an array

const index2array = [120, 140, 80, 60, 90];

console.log(index2array[0]);

// return the last element of an array

const index3array = [1200, 1400, 800, 600, 900];

const indexlastNum = index3array[index3array.length - 1];

console.log(indexlastNum);

// haal een element uit een array en return het restant

const index4array = [600, 400, 250, 1200, 150];

const index4Slice = index4array.slice(1, 5);

const index5Splice = index4Slice.splice(-4);

console.log(index5Splice);

// join alle elementen van een array

const index6array = ["Index 1", "Index 2", 80, 40];

console.log(index6array.join(" "));

// combineer 2 arrays

const index7array = [200, 250, 550, 600, 75];

const index8array = [150, 650, 650, 800, 250];

const index9array = index7array.concat(index8array);

console.log(index9array);
