const fetchData = require("./async");

// Simple Promise
test("check promise", () => {
  return fetchData(1000).then((data) => {
    expect(data).toBe("Success: Result");
    expect(data).toMatch(/Result/);
  });
});
