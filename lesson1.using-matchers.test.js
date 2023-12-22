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

// toBeNull, toBeUndefined, toBeDefined, toBeTruthy, toBeFalsy
test("check null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).toBeFalsy();
});

test("check undefined", () => {
  const n = undefined;
  expect(n).toBeUndefined();
  expect(n).toBeFalsy();
});

test("check zero", () => {
  const n = 0;
  expect(n).toBeDefined();
  expect(n).toBeFalsy();
});

// Check numbers: toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual, toBe and toEqual
test("check numbers", () => {
  const total = sum(1, 2);
  expect(total).toBeGreaterThan(2);
  expect(total).toBeGreaterThanOrEqual(3);
  expect(total).toBeLessThan(4);
  expect(total).toBeLessThanOrEqual(5);
});

// Check floating numbers: toBeCloseTo might be better than toEqual, because of probability of small floating point differences
test("check floating numbers", () => {
  const total = sum(0.2, 0.1);
  // 👇 This fails because in JavaScript, 0.2 + 0.1 is actually 0.30000000000000004.
  // expect(total).toBe(0.3);

  // This passes
  expect(total).toBeCloseTo(0.3);

  // By default, toBeCloseTo accepts 2nd argument:numDigits that checks precision i.e. num of digits after decimal point.
  // Be default, numDigits has value of 2 i.e. accepts difference <0.005. But we also can change it.
  // Check 👉: https://jestjs.io/docs/expect#tobeclosetonumber-numdigits
  expect(total).toBeCloseTo(0.3, 5);
});

// Check strings: toMatch
test("check strings", () => {
  const message = "Jest";

  // Match exact string
  expect(message).toMatch("Jest");

  // Match a regexp i.e. see if message contains certain strings
  expect(message).toMatch(/J/);
  expect(message).toMatch(/st/);

  // Not match: Is Case Sensitive
  expect(message).not.toMatch(/j/);
  expect(message).not.toMatch(/stop/);
});

// Check arrays: toContain
test("check arrays", () => {
  const arr = ["apple", "mango", "banana", "orange", "grape"];

  // Contains
  expect(arr).toContain("apple");

  // Not Contain
  expect(arr).not.toContain("watermelon");
});

function throwErr() {
  throw new Error("Error establishing a connection");
}

// Check execptions: toThrow
test("check exceptions", () => {
  // Note: This does not work 👇 ❌.
  // Because calling throwErr() directly, will throw us the err when testing 😅: "Error establishing a connection"
  // expect(throwErr()).toThrow();

  expect(() => throwErr()).toThrow();
  expect(() => throwErr()).toThrow(Error);

  // Check specific error message
  expect(() => throwErr()).toThrow("Error establishing a connection");
  expect(() => throwErr()).toThrow(/connection/);
});
