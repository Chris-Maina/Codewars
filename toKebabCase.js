/**
 * @name toKebabCase
 * @summary converts a string to kebab case
 * @param {Sting} str - string to convert
 */
toKebabCase = str => (str.split(' ').join('-').toLowerCase());

toKebabCase('Incredibles 2');