// Custom Matchers to check even or odd numbers
const isEvenMatcher = (received) => {
  const pass = received % 2 === 0;
  return {
    pass,
    message: () => `Expected even number, Received: ${received}`,
  };
};

const isOddMatcher = (received) => {
  const pass = received % 2 !== 0;
  return {
    pass,
    message: () => `Expected odd number, Received: ${received}`,
  };
};

// Register the custom matchers
expect.extend({
  toBeEven(received) {
    return isEvenMatcher(received);
  },
  toBeOdd(received) {
    return isOddMatcher(received);
  },
});

// Test them out
test("check even and odd", () => {
  const num1 = 12;
  const num2 = 15;

  // Check even
  expect(num1).toBeEven();
  expect(num1).not.toBeOdd();

  // Check odd
  expect(num2).toBeOdd();
  expect(num2).not.toBeEven();
});
