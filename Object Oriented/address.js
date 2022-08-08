// create an address object with three porperties.
// street, city, zipCode
// create a function which shows the properties and values of that object

const address = {
    street: 'a',
    city: 'b',
    zipCode: 101
};

function showAddress(address){
    for(let key in address){
        console.log(key, address[key]);
    }    
}

showAddress(address);