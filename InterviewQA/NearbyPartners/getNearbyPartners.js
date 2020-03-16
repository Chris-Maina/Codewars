/**
 *
  We'd like to contact partners with offices within 100km of central London (coordinates 51.515419, -0.141099) to invite them out for a meal.
  Write a NodeJS/JavaScript program that reads our list of partners (download partners.json here: https://success.spidergap.com/partners.json) and outputs the company names and addresses of matching partners (with offices within 100km) sorted by company name (ascending).

  You can use the first formula from this Wikipedia article (https://en.wikipedia.org/wiki/Great-circle_distance) to calculate distance. 
 */

const EARTH_RADIUS = 6371;
const DISTANCE = 100;

/**
 * validates Latitude
 * @param {Number} lat
 * @returns {Boolean}
 */
const validateLatitude = lat =>
  typeof lat === "number" && lat >= -90.0 && lat <= 90.0;

/**
 * validates Latitude
 * @param {Number} long
 * @returns {Boolean}
 */
const validateLongitude = long =>
  typeof long === "number" && long >= -180.0 && long <= 180.0;

/**
 * converts degrees to radian
 * @param {Number} degree
 * @returns {Number} radian
 */
const convertDegreeToRadian = degree => (degree * Math.PI) / 180.0;

/**
 * gets Latitude and logitude values
 * @param {String} coords
 * @returns {Object}
 */
const getLatitudeLongitude = coords => {
  if (!coords) throw new Error("Invalid coordinates supplied");

  const arrCoords = coords.split(",");
  const latitude = parseFloat(arrCoords[0]);
  const longitude = parseFloat(arrCoords[1]);

  if (!validateLatitude(latitude)) {
    throw new Error(`Invalid latitude value of ${latitude}`);
  }
  if (!validateLongitude(longitude)) {
    throw new Error(`Invalid longitude value of ${longitude}`);
  }

  return {
    latitude,
    longitude
  };
};

/**
 * Calculates distance between two points using Vincenty formula
 * @param {Object} locationA
 * @param {Object} locationB
 * @return {Number} distance/arc length
 */
const calculateDistance = (locationA, locationB) => {
  const { latitude: latitudeA, longitude: longitudeA } = locationA;
  const { latitude: latitudeB, longitude: longitudeB } = locationB;

  /* Convert all coordinates to radians */
  const latA = convertDegreeToRadian(latitudeA);
  const longA = convertDegreeToRadian(longitudeA);
  const latB = convertDegreeToRadian(latitudeB);
  const longB = convertDegreeToRadian(longitudeB);

  // Get absolute change in longitude i.e. Difference
  const longDiff = Math.abs(longA - longB);

  // Get numerator of Vincenty formula
  const part1 = Math.pow(Math.cos(latB) * Math.sin(longDiff), 2.0);
  const part2 =
    Math.cos(latA) * Math.sin(latB) -
    Math.sin(latA) * Math.cos(latB) * Math.cos(longDiff);
  const part3 = Math.pow(part2, 2.0);
  const numerator = Math.sqrt(part1 + part3);

  // Get denominator of Vincenty formula
  const part4 = Math.sin(latA) * Math.sin(latB);
  const part5 = Math.cos(latA) * Math.cos(latB) * Math.cos(longDiff);
  const denominator = part4 + part5;

  const centralAngle = Math.atan2(numerator, denominator);

  return EARTH_RADIUS * centralAngle;
};

/**
 * Gets companies within DISTANCE from locationA
 * @param {Array} companyArr
 * @returns {Array} nearbyCompanies
 */
const filterData = companyArr => {
  const nearbyCompanies = [];
  const locationA = getLatitudeLongitude("51.515419, -0.141099");

  if (!companyArr.length) return companyArr;

  companyArr.forEach(company => {
    const { organization, offices } = company;

    for (let office of offices) {
      const { address, coordinates } = office;

      let locationB = getLatitudeLongitude(coordinates);
      let arcLength = calculateDistance(locationA, locationB);
      if (arcLength <= DISTANCE) {
        nearbyCompanies.push({
          name: organization,
          address
        });
      }
    }
  });
  return nearbyCompanies;
};

/**
 * Sorts company within DISTANCE
 * @return {Array} sorted partners
 */
const getSortedPartners = companies => {
  const nearbyCompanies = filterData(companies);
  if (!nearbyCompanies.length) return nearbyCompanies;
  return nearbyCompanies.sort((a, b) => a.name.localeCompare(b.name));
};

module.exports.filterData = filterData;
module.exports.validateLatitude = validateLatitude;
module.exports.calculateDistance = calculateDistance;
module.exports.validateLongitude = validateLongitude;
module.exports.getSortedPartners = getSortedPartners;
module.exports.getLatitudeLongitude = getLatitudeLongitude;
module.exports.convertDegreeToRadian = convertDegreeToRadian;
