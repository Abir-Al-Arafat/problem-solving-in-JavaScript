// write a function which takes two arrays as parameters and removes values from the the first array which are given as parameters in the second array and returns the first array of excluded values

function excludes(array, excluded){
    let result = [];
    for (let n of array){
        if (!excluded.includes(n)){
            result.push(n);
        }
    }
    return result;
}

const numbers = [1,2,3,4,1,1];

console.log(excludes(numbers, [4,1]));