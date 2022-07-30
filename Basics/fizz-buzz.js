// write a function named "fizzBuzz" which takes a number and returns "fizz" if its divisible by 3, "buzz" if its divisible by 5 "fizzBuzz" if its divisible by 3 & 5 and "not a number" if the input is not a number.

function fizzBuzz(number){
    if(typeof(number)!=="number"){
        return "not a number";
    }
    if (number%3 === 0 && number%5 === 0){
        return "fizzBuzz";
    }else if (number%3 === 0){
        return "fizz";
    }else if (number%5 === 0){
        return "buzz";
    }else {
        return number;
    }
}

console.log(fizzBuzz(true));