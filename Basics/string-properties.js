// write a function which takes an object as argument and prints the string properties of that object


function strProperies(object){
    for(let key in object)
        if (typeof(object[key]) === 'string')
            console.log(key, object[key]);
}

const movie = {
    title: 'x',
    year: 2020,
    rating: 4.1,
    director: 'y' 
};

strProperies(movie);
