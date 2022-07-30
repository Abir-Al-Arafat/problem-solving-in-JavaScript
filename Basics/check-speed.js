// write a faunction that takes "speed" as an input and returns results according to it
// speed limit is 70kmph
// returns "ok" for speed less than 75kmph
// 1 point gets added and returned for every 5kmph above 70 speed limit
// returns "license suspended" for points more than 12


function checkSpeed(speed){
    const speedLimit = 70; //setting a speed limit variable 
    const kmPerPoint = 5; // setting the point interval

    // checking if the speed is in limit
    if (speed < speedLimit+kmPerPoint) return "ok";

    // calculating the point above the speed limit
    let points = Math.floor((speed-speedLimit) / kmPerPoint);

    // checking if the point is less than point limit or not
    if (points<12) return points;

    return "license suspended";
}

console.log(checkSpeed(75));