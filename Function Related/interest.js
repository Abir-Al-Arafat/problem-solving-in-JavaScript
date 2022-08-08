// write a function called interest() which takes three parameters principal, rate and years and returns the interest on principle amount

function interest(principal, rate, years){
    return rate/100*principal*years;
}

console.log(interest(10000, 3.5, 5));