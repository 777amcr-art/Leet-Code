/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let wealth = 0;
    for (let i of accounts) {
        let sum = 0;
        for (let money of i) {
            sum += money;
        }
        wealth = Math.max(wealth, sum);
    }
    return wealth;
};