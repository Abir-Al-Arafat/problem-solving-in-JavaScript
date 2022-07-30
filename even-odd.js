// write a function which takes a "number" as a limit and runs a for loop till that limit and prints the number and if the number is "even or odd" using conditional operator

function evenOdd(limit){
    for (let number = 0; number<=limit; number++){
        // if (number%2==0){
        //     console.log(number, "EVEN");
        // }
        // else{
        //     console.log(number, "OOD");
        // }

        let message = (number % 2 === 0) ? "EVEN" : "ODD"; 

        console.log(number, message)
    }
}

evenOdd(10);