// write a function which takes two parameters, an array and a value and returns true if the value exists in the array, otherwise false

const array = [1,2,3,4,5];

function includes(array, value){
    for (let i of array){
        if (i === value) return true;
    }
    return false;
}

console.log(includes(array, 6));