// use map function which takes an array of numbers and returns the square of arrays of those numbers

const array = [1, 2, 3, 4];

const square = array.map(
    (value) => value*value
);

console.log(square);