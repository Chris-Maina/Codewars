const {deepClone} =  require("./deepClone");
const { obj } = require("./mocks");

test("performs a deep clone", () => {
  const original = {
    name: "Paddy",
    address: { town: "Lerum", country: "Sweden" }
  };
  const expectRes = deepClone(obj);
  obj.address.town = "Nairobi";
  expect(expectRes).toEqual(original);
});

test("throws an error for invalid objects suplied", () => {
  expect(() => deepClone("obj")).toThrowError("Invalid object supplied");
});
