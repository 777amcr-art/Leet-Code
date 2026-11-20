/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const orgnl=nums.length
    for(let i=0;i<orgnl;i++){
        nums.push(nums[i]);
    }
    
    return nums
};