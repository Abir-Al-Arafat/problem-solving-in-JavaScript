// write a function which takes three parameters. array, index and offset and move an element of the array according to the offset and return a new array with the moved element.

// if the offset is 1 the element will move one index right, if the offset is 2 the element will move two index right

// if the offset is -1 the element will move one index left, if the offset is -2 the element will move two index left

function move(array, index, offset){
    // offset is the index where the value is going to be moved
    const position = index+offset;

    if(position>=array.length || position<0){
        console.error('invalid offset');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0,element);
    return output;
}

const a = [1, 2, 3, 4];

console.log(a);
console.log(move(a, 1, 2));
