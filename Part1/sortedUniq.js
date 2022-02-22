const sortedUniq = function(array){
    let uniqArray =  array.slice();
   
    for (let index = 0; index < uniqArray.length; index++) {
        if(uniqArray[index] == uniqArray[index+1]) {uniqArray.splice(index,1); index--}
        
    }
    return uniqArray;
}
