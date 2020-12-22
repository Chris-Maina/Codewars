/**
 * Given a roman numeral, convert it to an integer.
 */

const romanToInteger = roman => {
  if (!roman) return null;
  const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  const re = /(M|CM|D|CD|C|XC|L|XL|X|IX|V|IV|I)/g;
  let acc = 0;
  roman.toUpperCase().trim().replace(re, (match) => {
    const equivalentInt = lookup[match];
    acc += equivalentInt;
    return match
  })
  return acc;
}
// OR
const romanToInteger = roman => {
  if (!roman) return null;
  const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  const re = /(M|CM|D|CD|C|XC|L|XL|X|IX|V|IV|I)/g;
  return roman.toUpperCase().split(re).reduce((acc, next) => {
    if (next) {
      acc = acc + lookup[next];
    }
    return acc;
  }, 0);
}

 console.log(romanToInteger('mdcccxxiv'))