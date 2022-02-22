
const lodash = require('lodash');
// Задача 1


const sortedUniq = function(array){
    let uniqArray =  array.slice();
   
    for (let index = 0; index < uniqArray.length; index++) {
        if(uniqArray[index] == uniqArray[index+1]) {uniqArray.splice(index,1); index--}
        
    }
    return uniqArray;
}

let arr = [1, 1, 2, 3, 3, 4,1,1,1,2,2,3 ];
console.log(sortedUniq(arr))
console.log(lodash.sortedUniq(arr))


