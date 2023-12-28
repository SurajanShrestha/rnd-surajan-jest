// Setup Data
let cities = [];
const initializeCityDb = () => {
  cities = ["Kathmandu", "New Delhi", "Washington DC", "Canberra"];
};
const clearCityDb = () => {
  cities = [];
};
const isCity = (city) => {
  return cities?.includes(city);
};

// ONE-TIME SETUP AND TEARDOWN: beforeAll and afterAll
// This will run once, before any of the tests "A" or "B" run.
beforeAll(() => {
  initializeCityDb();
});
// This will run once, after all of the tests "A" and "B" have been completed.
afterAll(() => {
  clearCityDb();
});

// Test "A"
test("city has New Delhi", () => {
  expect(isCity("New Delhi")).toBeTruthy();
  // "cities" has data
  console.log("Cities", cities);
});

// Test "B"
test("city has Washington DC", () => {
  expect(isCity("Washington DC")).toBeTruthy();
});

// "cities" has been cleared
console.log("Cleared Cities", cities);
