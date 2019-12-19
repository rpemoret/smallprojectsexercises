// await the function getData with async function

const datafromAPI = async function() {
  const data = await getData();
  console.log("Here's the data from the API", data);

  addlisttoDOM = function(setdata) {
    const list = document.getElementById("list");
    setdata.forEach(function(data) {
      let listitem = document.createElement("li");

      listitem.src = data;
      let contentoflistitem = document.createTextNode(data);
    });
    list.appendChild(listitem);
    listitem.appendChild(contentoflistitem);
  };

  addlisttoDOM();

  console.log(data);
};
datafromAPI();

const listelement = function() {
  createElement("p");
};
listelement();
console.log("p");

document.addEventListener("DOMContentLoaded", event => {
  addlisttoDOM();
});
