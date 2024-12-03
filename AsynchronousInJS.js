const axios = require("axios");

const api1 = "https://jsonplaceholder.typicode.com/posts/1";
const api2 = "https://fakestoreapi.com/products/1";

//Cllback function
function CallBack(url, callbackSuccess, callbackError) {
  fetch(url)
    .then((res) => {
      if (!res) {
        console.log("Error in fetching Data");
      }
      return res.json();
    })
    .then((data) => {
      callbackSuccess(data);
    })
    .catch((error) => {
      callbackError(error);
    });
}

function ifSuccess(data) {
  console.log("Fetched Data Using Callback:", data);
}

function ifError(error) {
  console.log(error);
}

CallBack(api1, ifSuccess, ifError);

//Promise
const usingPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        if (!res) {
          reject("Error in Fething Data");
        }
        return res.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  }, 2000);
});

usingPromise
  .then((data) => {
    console.log("Fetched Data Using Promise:", data);
  })
  .catch((error) => {
    console.log("Error Fetching Data:", error);
  });


  //async-await
const AsyncAwait = async () => {
  try {
    const response = await axios.get(api2);
    console.log("Fetched Data Using Async-Await:", response.data);
  } catch (error) {
    console.error(error);
  }
};

AsyncAwait(api2);
