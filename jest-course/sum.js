function sum(a, b) {
  return a + b;
}

module.exports = sum;

//for error testing
function myFunction(input) {
  if (typeof input !== "number") {
    throw new Error("Invalid Input");
  }
}

module.exports = myFunction;

//for asynchronous testing
function fetchData(callback) {
  setTimeout(() => {
    callback("peanut butter");
  }, 1000);
}

module.exports = fetchData;

//for promise testing

//for resolve
function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("peanut butter"), 1000);
  });
}

//for reject
// function fetchPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("error")), 1000);
//   });
// }

module.exports = fetchPromise;
