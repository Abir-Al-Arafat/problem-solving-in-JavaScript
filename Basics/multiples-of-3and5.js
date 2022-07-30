// write a function which takes a limit and returns the sum of the multiples of 3 and 5 till that limit

// if the limit is 10,
// multiple of 3: 3, 6, 9
// multiple of 5: 5, 10
// sum of multiples of 3 and 5: 3+6+9+5+10 = 33

function sumOfMultiples(limit){
    let sum = 0;

    for(let number=0; number<=limit; number++){
        if (number%3===0||number%5===0)
            sum+=number;
    }

    return sum;
}

console.log(sumOfMultiples(10));