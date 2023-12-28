/* 
NOTE 💡: 
THIS IS A GREAT DEBUGGING TOOL IF YOU HAVE A TEST THAT WORKS ✅ WHEN IT'S ALONE BUT DOES NOT WORK ❌ WHEN IT'S PART OF
A LARGER SUITE OF TESTS IN A SINGLE/SAME FILE.
*/

// This runs ✅
test.only("this runs", () => {
  expect("Runs").toMatch("Runs");
});

// This test is skipped ❌
test("this does not run", () => {
  expect(true).toBeTruthy();
});

// This test is skipped ❌
test("this also does not run", () => {
  expect(false).toBeFalsy();
});
