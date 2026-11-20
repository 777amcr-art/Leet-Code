/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
   let f=0 
   let l= s.length-1 
   while (f<=l){
    let temp = s[f]
    s[f]=s[l]
    s[l]=temp
    f++
    l--
   }
   return s
};