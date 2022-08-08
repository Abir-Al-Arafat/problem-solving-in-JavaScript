// write a function which takes two arguments min and max and returns an array of numbers which holds all the values in that range

function arrayFromRange(min, max){
    range = [];

    for(let i=min; i<=max; i++){
        range.push(i);
    }

    return range;
}

console.log(arrayFromRange(2, 10));