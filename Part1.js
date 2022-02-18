const lodash = require('lodash');


// Задача 1


const sortedUniq = function(array){
    for (let index = 0; index < array.length; index++) {
        if(array[index] == array[index+1]) {array.splice(index,1); index--}
        
    }
    return array;
}

let arr = ([1, 1, 2, 3, 3, 4,1,1,1,2,2,3 ]);
let sorted = sortedUniq(arr);
let sortedLodash =  lodash.sortedUniq(arr);
console.log(sortedLodash);
console.log(sorted)


// Задача 2


let user = {
    name: "Иван",
    age: 30,
     adress:{
        city: "Moscow",
        street: {
            house: "22"
        }
    }
};

let user2 = {
    name: "Иван",
    age: 30,
    adress:{
        city: "Moscow",
        street: {
            house: "22"
        }

    }
};

const isEqual = function(obj1,obj2){
   
    if(typeof obj1 == typeof obj1) {
        if(typeof obj1 == "object" && obj1 != null) {
            let equal = true;
            for(var key in obj1) {
                if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
                    if(!isEqual(obj1[key], obj2[key])) {
                        equal = false;
                    }
                } else {
                    equal = false;
                }
            }
            return equal;
        } else {
            return obj1 === obj2;
        }
    } else {
        return false;
    }
    
    
}
 
console.log(isEqual(user,user2)) 
console.log(lodash.isEqual(user,user2)) 


// Задача 3


const difference = function(array,[values]){
  
    let argumentsArr = []
    
    for (let j = 1; j < arguments.length; j++) {
        argumentsArr.push(arguments[j]);      
    }
    
    argumentsArr = argumentsArr.flat();
   
    let difference = array.filter(item => !argumentsArr.includes(item));
    return difference;

}
console.log(difference([1,2,5],[1,6],[7,8],[5,7])) 
console.log(lodash.difference([1,2,5],[1,6],[7,8],[5,7]))



