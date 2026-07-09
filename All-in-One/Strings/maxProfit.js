function maxProfit(prices) {
  let minProfit = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    let currentProfit = prices[i];
    minProfit = Math.min(minProfit, currentProfit);
    potentalProfit = currentProfit - minProfit;
    maxProfit = Math.max(maxProfit, potentalProfit);
  }
  return maxProfit;
}
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
