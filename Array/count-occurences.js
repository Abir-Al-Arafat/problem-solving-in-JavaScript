// write a function which takes an array and a search element and returns the number of times that element has appeared in that array.

const array=[1,2,3,4]

function countOccurrences(array, element){
    count = 0;

    for (let number of array){
        if (number===element){
            count+=1;
        }
    }

    return count;
}

console.log(countOccurrences(array, 5))