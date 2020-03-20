const toCamelCase = (str) => {
  const re = /(_|-)([a-z]|[A-Z])/g;
  return str.trim().replace(re, (match, p1, p2) => {
    p2.toUpperCase();
    return p2.toUpperCase();
  });
}

toCamelCase('the_stealth_warrior');