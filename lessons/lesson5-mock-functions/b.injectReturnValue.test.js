// Inject Return Values
const myMock = jest.fn();
// Prints: undefined
console.log("Empty Return:", myMock());

// 🤯 Inject Return values in the "myMock" function.
myMock.mockReturnValueOnce(2).mockReturnValueOnce("a").mockReturnValue(true);
// Prints: 2, "a", true, true, true
console.log("With Return:", myMock(), myMock(), myMock(), myMock(), myMock());

// 😎 Realistic Example
const filterMockFn = jest.fn();
filterMockFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

test("check mock fn return value", () => {
  const result = [1, 2].filter((value) => filterMockFn(value));
  // Prints: 1
  console.log(result);
  // Prints: [[1],[2]]
  console.log(filterMockFn.mock.calls);

  expect(filterMockFn.mock.calls[0][0]).toBe(1);
  expect(filterMockFn.mock.calls[1][0]).toBe(2);
});
