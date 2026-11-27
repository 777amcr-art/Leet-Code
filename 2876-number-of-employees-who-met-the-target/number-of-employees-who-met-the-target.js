/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0 
    for(employee of hours){    
        if(employee>=target){
            count++
          }
    } return count
};