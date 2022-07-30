// write a function which takes a number as length and makes a half pyramid out of that length using aesterics

function halfPyramid(rows){
    // loop for rows
    for(let row=1; row<=rows; row++){
        // empty string to add the stars horizontally
        let horizontal = '';
        
        // loop for columns
        for (let column=0; column<row; column++){
            horizontal+="*";
        }

        // printing the stars
        console.log(horizontal);
    }
}

halfPyramid(10);