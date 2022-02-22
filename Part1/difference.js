const lodash = require('lodash');
// Задача 3


const difference = function(array,...values){
    let argumentsArr = []
    for (let index = 0; index < values.length; index++) {
       if (Array.isArray(values[index]))  argumentsArr.push(values[index])      
    }
    argumentsArr = argumentsArr.flat();
    let difference = array.filter(item => !argumentsArr.includes(item));
    return difference;
}

console.log(difference([1,2,5],2)) 
console.log(lodash.difference([1,2,5],2))