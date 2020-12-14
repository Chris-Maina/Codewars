/**
 * @name toKebabCase
 * @summary converts a string to kebab case
 * @param {Sting} str - string to convert
 */
toKebabCase = str => (str.split(/_|\s/g).join('-').toLowerCase());

console.log(toKebabCase('the stealth warrior'));