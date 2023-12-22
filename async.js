function fetchData(delayInMilliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success: Result");
    }, delayInMilliseconds);
  });
}

module.exports = fetchData;
