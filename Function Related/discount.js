// write a function which takes two parameters, discount and an array of prices and returns the discounted total price 

// use rest operator and reduce method

function discount(discount, ...prices){
    const total = prices.reduce((a,b)=>a+b);

    return ((100-discount)/100)*total;
}

console.log(discount(10, 20, 30, 50));