/**
 * Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned.
 * The valid decimal values for RGB are 0 - 255.
 * Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.
 */

function rgb(r, g, b){
  // complete this function
  return `${ hexConverter(r) }${ hexConverter(g) }${ hexConverter(b) }`
}

const hexConverter = (c) => {
  if (c <= 0) return '00';
  else if (c >= 255) return 'FF';
  else c.toString(16).toUpperCase();
};