/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max=1;
    for(sentence of sentences){
        const count = sentence.split(' ').length
     if(max<count){
        max=count;
    }}
    return max
}