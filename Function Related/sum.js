// write a function which takes varying number of values as arguments and returns the sum of those values using reduce method

// the sum function should also return the sum of all values if an array of number is passed

function sum(...arg){
    if (arg.length < 1) return 'expects one or more arguments';

    // checking if the lenght of the arg parameter is one or not and also checking if an array is passed or not
    if(arg.length===1 && Array.isArray(arg[0])){
        // keeping the array of numbers in arg variable using spread operator
        arg = [...arg[0]];
    }

    return arg.reduce((a,b)=>a+b);
}

console.log(sum(3, 2, 1, 4));