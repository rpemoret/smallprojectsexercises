// adding to objects and arrays different methods

const newUser = {
  id: 4,
  name: "Dominic Owen",
  username: "dowen41",
  email: "d.owen@dowen.com",
  website: "dowen.com",
  password: "dowen4312"
};

const newData = [...users, newUser]; // add an element at last

const newData2 = [newUser, ...users]; // add element at first

const newData = users.concat(newUser); // the old way
