/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let s = 0
    let r = []
    for(let i=0;i<nums.length;i++){
        s += nums[i]
        r.push(s)
    }
    return r
};