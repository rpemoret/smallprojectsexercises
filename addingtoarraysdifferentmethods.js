const users = [
  {
    id: 1,
    name: "Andre Rowe",
    username: "andrer",
    email: "andrer@andrerowe.com",
    phone: "0612345678",
    website: "andrerowe.com",
    password: "andre3456"
  },
  {
    id: 2,
    name: "Yasmin Zhang",
    username: "yas456",
    email: "yas@yas.com",
    phone: "",
    website: "yas.com",
    password: "yas345678"
  }
];

// adding to objects and arrays different methods

const newUser = {
  id: 4,
  name: "Dominic Owen",
  username: "dowen41",
  email: "d.owen@dowen.com",
  phone: "",
  website: "dowen.com",
  password: "dowen4312"
};

const newData = [...users, newUser]; // add an element at last

const newData2 = [newUser, ...users]; // add element at first

const newData = users.concat(newUser); // the old way

// add an array to another array and return it with .map

const hobbies = ["chess", "making beer"];

const newUsers = users.map(u => ({ ...u, hobbies }));

// this uses the spread operator ...u followed by the new array
