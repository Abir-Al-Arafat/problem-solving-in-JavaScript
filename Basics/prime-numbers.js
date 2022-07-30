// write a function which takes a limit and prints prime numbers upto that limit

// IMPORTANT: the loops inside the function starts from 2, because 1 is NOT a prime number

function prime(numbers){
    // loop to check the numbers till the limit
    for(let number=2; number<=numbers; number++){
        // variable to keep count of how many times a number was divided
        count = 0;

        // for loop to check how many times a number can be divided
        for(let divisor=2; divisor<number; divisor++){
            
            if(number%divisor===0){
                // adding the number of times a number can be divided 
                count+=1;
            }

        }

        // checking if the number was divided less than one times or not
        if (count<1){
            console.log(number);
        }

    }
}

prime(10);