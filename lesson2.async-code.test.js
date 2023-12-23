const { fetchData, fetchErr } = require("./async");

// Simple Promise
test("check promise", () => {
  return fetchData(500).then((data) => {
    expect(data).toBe("Success: Result");
    expect(data).toMatch(/Result/);
  });
});

// Async/Await
test("check async await", async () => {
  const data = await fetchData(500);
  expect(data).toBe("Success: Result");
  expect(data).toMatch(/Success/);
});

// Async/Await Error
test("check async await error", async () => {
  // Why use assertion? Answer 👉: https://jestjs.io/docs/expect#expectassertionsnumber
  expect.assertions(1);
  try {
    await fetchErr(500);
  } catch (error) {
    expect(error).toMatch(/Error/);
  }
});

// Syntactic Sugar to above cases 👆: resolves and rejects
test("check resolve", async () => {
  await expect(fetchData(500)).resolves.toMatch(/Success/);
});

test("check reject", async () => {
  await expect(fetchErr(500)).rejects.toMatch(/Error/);
});
