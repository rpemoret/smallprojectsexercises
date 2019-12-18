const API_KEY = "8e23da8190ce9a6c2f01575ffd641e0f";

// async function to get data, const with the url
getData = async function() {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

  try {
    // const res in case data comes through, with await fetch
    const res = await fetch(apiUrl, { method: "GET" });

    console.log("The response from the API ", res);

    // make it JSON

    const data = await res.json();

    console.log("The response from the API ", data);
    return data;

    // in case data doesn't come through, console.log error
  } catch (error) {
    console.log(error);
  }
};

console.log(data);

getData();

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

console.log(data);
