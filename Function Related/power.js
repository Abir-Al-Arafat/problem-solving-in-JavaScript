// write a function which takes two parameters, number and it's power and returns the multiplied value


function power(num, power){
    result = 1;

    for (let i=1; i<=power; i++){
        result*=num;
    }

    return result;
}

console.log(power(2, 3));