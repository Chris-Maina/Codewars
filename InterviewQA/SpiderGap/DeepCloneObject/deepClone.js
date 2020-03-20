/**
 * Creates a deep clone of the object supplied in params
 * @param {Object} obj 
 * @returns {Object} copy
 */
const deepClone = obj => {
  const copy = {};
  if (typeof obj !== "object") throw new Error("Invalid object supplied");
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      copy[key] = deepClone(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
};

module.exports.deepClone = deepClone;
