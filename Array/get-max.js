// write a function which takes an array as a parameter and returns the max number of that array and returns 'undefined' if the array is empty

const array = [200, 150, 1, 2, 3, 4, 5, 10, 205, 305, 200]; 

function getMax(array){
    if(array.length<1) return undefined;

    // let max = array[0];
    // for (let i=1; i<array.length; i++){
    //     if(max<array[i]){
    //         max=array[i]
    //     }
    // }
    // return max;

    // -----------------------------------

    // 2nd approach using reduce method

    return array.reduce((accumulator, current)=>(current>accumulator) ? current: accumulator);
}

console.log(getMax(array));