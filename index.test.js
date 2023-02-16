const { ab } = require("./index");
console.log(ab);
test("adds 1 + 2 to equal 3", () => {
  expect(ab(1, 2)).toBe(3);
});
