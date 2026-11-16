/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let original = x.toString();
let reverse=original.split('').reverse().join("");

if(x==reverse ){
    return true;
}else{
    return false;
};
}
