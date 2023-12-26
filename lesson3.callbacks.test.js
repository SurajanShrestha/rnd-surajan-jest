const fetchData = (callback) => {
  callback();
};

// Callbacks and "done" keyword.
// For more info 👉: https://jestjs.io/docs/asynchronous#callbacks
test("check callbacks", (done) => {
  function callback(error, data) {
    if (error) {
      // Jest will wait until the done callback is called before finishing the test.
      done(error);
      return;
    }
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(() => callback(null, "peanut butter"));
});
