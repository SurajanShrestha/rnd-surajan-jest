const { fetchData, fetchErr } = require("./async");

// Simple Promise
test("check promise", () => {
  return fetchData(1000).then((data) => {
    expect(data).toBe("Success: Result");
    expect(data).toMatch(/Result/);
  });
});

// Async/Await
test("check async await", async () => {
  const data = await fetchData(1000);
  expect(data).toBe("Success: Result");
  expect(data).toMatch(/Success/);
});

// Async/Await Error
test("check async await error", async () => {
  // Why use assertion? Answer 👉: https://jestjs.io/docs/expect#expectassertionsnumber
  expect.assertions(1);
  try {
    await fetchErr(1000);
  } catch (error) {
    expect(error).toMatch(/Error/);
  }
});
