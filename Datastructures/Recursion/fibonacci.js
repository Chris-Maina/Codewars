/**
 * Fibonnaci series example [0, 1, 1, 2, 3, 5, 8, 13, 21, ...]
 * The sum of the preceeding 2 numbers gives you the third.
 * You should return the item at position n
 * fib(5) = 5, fib(6) = 8
 * @param {number} n 
 * 
 * Below is the iterative solution
 */
const fib = n => {
  const arr = [0, 1];

  for(let i=2; i<n; i++) {
    let a = arr[i-1];
    let b = arr[i-2];
    arr.push(a+b);
  }
  return arr[n];
}

/**
 * Recursive solution.
 * The solution below is very slow. Especially when input size is very big.
 * Has an exponential time complexity, O(2^n).
 * We can memoize this solution
 */
const fib = (n) => {
  if (n < 2) {
    return n;
  }
  return fib(n-1)+fib(n-2);
}

/**
 * Memoized Recursive solution
 * @param {number} n
 * @param {object} cache
 * @returns {number} result
 */
const fib = (n) => {
  return memoizeFib(n);
}

const memoizeFib = (n, cache = {}) => {
  if (cache[n]) return cache[n];
  let result; 
  if (n < 2) {
    result = n;
  } else {
    result = memoizeFib(n-1, cache)+memoizeFib(n-2, cache);
  }
  cache[n] = result;
  return result;
}


/**
 * Stores the arguments and result of a function
 * so that if called again returns the precomputed result.
 * Takes in a function and returns a function.
 * @param {func} fn 
 * @returns {func}
 */
const memoize = fn => {
  const cache = {};
  return function (...agrs) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, agrs);
    cache[args] = result;
    return result;
  }
}

fib = memoize(fib(15));
