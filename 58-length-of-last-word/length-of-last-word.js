/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let w=s.trim().split(" ");
     return w[w.length-1].length
};