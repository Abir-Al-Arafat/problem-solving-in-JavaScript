// check if the first argument of the countOccurrence() function is an array or not. if not, then throw an exception and print the value on console


function countOccurrences(array, searchElement){
    
    if(!Array.isArray(array)){
        throw new Error('expected array as first argument');
    }
    
    return array.reduce((accumulator, current) => {
        
        const occurrence = (current === searchElement) ? 1: 0;
        return occurrence+accumulator;
        
    }, 0);
    
}

try{
    const array=[1,2,3,4];
    console.log(countOccurrences(undefined, 5));
}

catch(e){
    console.log(e.message);
}
