function fetchData(delayInMilliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success: Result");
    }, delayInMilliseconds);
  });
}

function fetchErr(delayInMilliseconds) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Error: Failed");
    }, delayInMilliseconds);
  });
}

module.exports = { fetchData, fetchErr };
