/**
 * Best Time to Buy and Sell Stock
 
  Say you have an array for which the ith element is the price of a given stock on day i.

  If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

  Note that you cannot sell a stock before you buy one.

  Example 1:

  Input: [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
              Not 7-1 = 6, as selling price needs to be larger than buying price.

  Example 2:

  Input: [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transaction is done, i.e. max profit = 0.
 */

 /////////////////////// SOLUTION ///////////////////////

/**
 * @description Check for a possible combination that yields maximum profit
 *  Time complexity : O(n2).
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let slow = 0; slow < prices.length - 1; slow++) {
    for (let fast = slow + 1; fast < prices.length; fast++) {
      let buyingPrice = prices[slow];
      let sellingPrice = prices[fast];
      if (buyingPrice > sellingPrice) continue;

      let profit = sellingPrice - buyingPrice;
      maxProfit = Math.max(profit, maxProfit);
    }
  }
  return maxProfit;
};

/**
 * @description Assumes the first element is the minimum price and searches for the maximum profit,
 * replacing the minimum price as you proceed with the array.
 * Solution below uses Dynammic Programming
 * Time complexity : O(n).
 * @param {number[]} prices
 * @return {number}
 */
const maximumProfit = prices => {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;
  for (let index = 0; index < prices.length; index++) {
    if (prices[index] < minPrice) {
      minPrice = prices[index]
    } else if (prices[index] - minPrice > maxProfit) {
      maxProfit = prices[index] - minPrice;
    }
  }
  return maxProfit;
}
