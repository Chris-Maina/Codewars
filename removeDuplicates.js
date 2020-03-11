/**
 * 
 */

let removeDuplicateWords = (s) => (
  s.split(' ').filter(
    (el, index, stringArr) => (
      index === stringArr.indexOf(el)
    )
  ).join(' ')
);


removeDuplicateWords = (s) =>  {
  const set = new Set(s.split(' '));
  return Array.from(set).join(' ');
}
