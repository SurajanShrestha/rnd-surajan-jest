const sum = require("./sum");

// toBe: Checks exact quality
test("adds 1+2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// toEqual: Check if two objects have the same value
test("object check", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// not: Check not
test("sum not equal to 0", () => {
  expect(sum(1, 0)).not.toBe(0);
});
