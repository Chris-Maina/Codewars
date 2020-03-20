const {
  filterData,
  getSortedPartners,
  validateLatitude,
  validateLongitude,
  calculateDistance,
  getLatitudeLongitude,
  convertDegreeToRadian,
} = require("./getNearbyPartners");
const { nearbyCompanies, farCompanies } = require("./mocks");
const companies = require("./data.json");

test("Returns nearby companies", () => {
  const expectedRes = getSortedPartners(companies);
  expect(expectedRes).toEqual(nearbyCompanies);
});

test("Returns empty list", () => {
  const expectedRes = getSortedPartners(farCompanies);
  expect(expectedRes).toEqual([]);
});

test("Valid latitude", () => {
  expect(validateLatitude(-100)).toBeFalsy();
  expect(validateLatitude(53.47990859999999)).toBeTruthy();
});

test("Valid longitude", () => {
  expect(validateLongitude(-190.0)).toBeFalsy();
  expect(validateLongitude(-2.2510892999999896)).toBeTruthy();
});

test("converts degrees to radian", () => {
  const degree = 53.47990859999999;
  const radian = (degree * Math.PI) / 180.0;
  expect(convertDegreeToRadian(degree)).toEqual(radian);
});

test("gets latitude and longitude", () => {
  const coords = "-33.8934219,151.20404600000006";
  const arrCoords = coords.split(",");
  const latitude = parseFloat(arrCoords[0]);
  const longitude = parseFloat(arrCoords[1]);
  expect(getLatitudeLongitude(coords)).toEqual({ latitude, longitude });
});

test("throws an error if no coords suplied", () => {
  expect(() => getLatitudeLongitude("")).toThrowError(
    "Invalid coordinates supplied"
  );
});

test("gets distance between 2 points", () => {
  const locationA = getLatitudeLongitude("51.515419, -0.141099");
  const locationB = getLatitudeLongitude("51.5014767,-0.0713608999999451");
  expect(calculateDistance(locationA, locationB)).toEqual(5.069289250892129);
});

test("Filters nearby companies", () => {
  const expectedRes = [
    {
      name: "Blue Square 360",
      address: "St Saviours Wharf, London SE1 2BE"
    },
    {
      name: "Gallus Consulting",
      address:
        "Newton House, Northampton Science Park, Moulton Park, Kings Park Road, Northampton, NN3 6LG"
    },
    {
      name: "Gallus Consulting",
      address: "No1 Royal Exchange, London, EC3V 3DG"
    }
  ];

  expect(filterData(companies)).toEqual(expectedRes);
});
