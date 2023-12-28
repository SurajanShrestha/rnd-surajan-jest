const { forEach } = require("./forEach");

// Creating a mock function
const mockCallback = jest.fn((x) => 10 + x);

test("forEach mock function", () => {
  forEach([1, 2], mockCallback);

  console.log(mockCallback.mock.calls); // Prints 👉: [ [ 1 ], [ 2 ] ]
  console.log(mockCallback.mock.calls[0]); // Prints 👉: [ 1 ]
  console.log(mockCallback.mock.calls[0][0]); // Prints 👉: 1

  // Testing that this mock function is called twice
  expect(mockCallback.mock.calls).toHaveLength(2);

  // Testing if 1st argument of the 1st call of this mock function is 1
  expect(mockCallback.mock.calls[0][0]).toBe(1);

  // Testing if 1st argument of the 1st call of this mock function is 1
  expect(mockCallback.mock.calls[1][0]).toBe(2);

  // Test if return value of 1st call is 11
  expect(mockCallback.mock.results[0].value).toBe(11);
});
