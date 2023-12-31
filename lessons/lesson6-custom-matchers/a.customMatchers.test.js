// Custom Matchers
// This works like this: expect(received).yourCustomMatcher(expected)
// There's also another value: expect(received).yourCustomMatcher(expected, someOtherValue)
// 💡 All params inside custom matchers can be optional: expect(received).yourCustomMatcher()
expect.extend({
  toBeCustomMatcher(received, expected) {
    const pass = received === expected;
    return {
      pass,
      message: () => `Expected ${expected}, received: ${received}`,
    };
  },
});

// Let's use our "customMatcher"
test("check custom matcher", () => {
  const value = 8;

  // This fails ❌
  // expect(value).toBeCustomMatcher(10);

  // This passes ✅
  expect(value).toBeCustomMatcher(8);
});
