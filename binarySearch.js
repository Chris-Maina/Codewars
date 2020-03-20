/**
 * @name BinarySearch
 * @summary Implements the binary search algorithm i.e.
 * Checks if array is empty, if true terminate execution.
 * Sort the array, A.
 * Get the middle position of the array, m, if m = searchTerm, return the position
 * If Am < search term, focuss on the right side of the array
 * Make start of the array m+1, and repeat from step 2
 * Else if Am > search term, focuss on the left side of the array
 * Make end of the array m-1, and repeat from step 2
 * @param {Array} sampleArr 
 * @param {Number} searchTerm 
 */
const BinarySearch = (sampleArr, searchTerm) => {
  if(sampleArr.length === 0){
    return null;
  } else {
    // sort the array
    sampleArr.sort((a, b)=>(a-b));
    let middle;
    middle = Math.floor(sampleArr.length/2);
    if (sampleArr[middle] === searchTerm) {
      console.log('Position '+middle+' value '+ sampleArr[middle]);
      return middle;
    } else if (sampleArr[middle] < searchTerm) {
      sampleArr = sampleArr.slice(middle, sampleArr.length);
      return BinarySearch(sampleArr, searchTerm);
    } else {
      sampleArr = sampleArr.slice(0, middle);
      return BinarySearch(sampleArr, searchTerm);
    }
  }
  }
  
  arr = [ 2, 3, 4, 10, 40 ]
  BinarySearch(arr, 3);
  