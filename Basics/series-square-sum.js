// write a program which prints sum of squares till a given limit

const limit = parseInt(prompt("Limit: "))
let sum = 0;
let sumSeries = "";

for (let i=1; i<=limit; i++){
    sum += i**2;
    sumSeries += (i**2).toString();
    if (i===limit) break;
    sumSeries += " + ";
}

document.write(`${sumSeries} = ${sum}`);