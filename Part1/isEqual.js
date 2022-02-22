const lodash = require('lodash');
// Задача 2


let user = {
    name: "Иван",
    age: 2,
     adress:{
        city: "Moscow",
        street: {
            house:2
        }
    }
};

let user2 = {
    name: "Иван",
    age: 2,
    adress:{
        city: "Moscow",
        street: {
            house:2
        }

    }
};
const date1 = new Date()
const date2 = new Date()

const isEqual = function(obj1,obj2){
       if( (typeof obj1 === typeof obj1 && obj1.constructor.name === obj2.constructor.name)) {

        if(typeof obj1 === "object" && obj1 != null) {     
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

            if(obj1 instanceof Date && obj2 instanceof Date) return obj1.getTime() == obj2.getTime()
            else return equal;

        } else {

            if(Number.isNaN(obj1) && Number.isNaN(obj2) ) return true;
            else return obj1 === obj2;
        }
    } else {
        return false;
    }
}
 console.log(isEqual(date1, 2)) 
 console.log(lodash.isEqual(date1, 2))