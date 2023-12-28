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

// SCOPING: Hooks declared inside "describe" only applies to tests inside that "describe" block
describe("check cities", () => {
  // This applies to only the tests inside this "describe" block
  beforeAll(() => {
    initializeCityDb();
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
});
