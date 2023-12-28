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

// REPEATING SETUP AND TEARDOWN: beforeEach and afterEach
// This will run each time for both Test "A" and "B". Will run before "A" and "B" starts.
beforeEach(() => {
  initializeCityDb();
});
// This will run each time for both Test "A" and "B". Will run after "A" and "B" completes.
afterEach(() => {
  clearCityDb();
});

// Test "A"
test("city has Kathmandu", () => {
  expect(isCity("Kathmandu")).toBeTruthy();
  // "cities" has data
  console.log("Cities", cities);
});

// Test "B"
test("city has Canberra", () => {
  expect(isCity("Canberra")).toBeTruthy();
});

// "cities" has been cleared
console.log("Cleared Cities", cities);
