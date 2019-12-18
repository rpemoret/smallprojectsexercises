// await the function getData with async function

const datafromAPI = async function() {
  const data = await getData();
  console.log("Here's the data from the API", data);
};
datafromAPI();
