// write a function which takes an array of marks and calculates the average mark and returns a grade based on that mark

// 1-59 -> F
// 60-69 -> D
// 70-79 -> C
// 80-89 -> B
// 90-100 -> A

marks = [101, 180, 150];

function calculateGrade(marks){
    let sum = 0;

    // running a for loop to get individual mark from the array
    for (let mark of marks){
        sum+=mark; //adding the marks in a variable
    }

    // calculating the average
    const average = sum/marks.length;

    // returning grade according to average
    if (average < 60) return "F";
    if (average < 70) return "D";
    if (average < 80) return "C";
    if (average < 90) return "B";
    if (average <= 100) return "A";

    return "invalid";
}

console.log(calculateGrade(marks));