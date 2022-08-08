// declare an object which has two properties, firstname and lastname. two methods called fullname(). among them one of them will be used to get the fullname and other one will be used to set the fullname (use getters and setters). after setting the fullname, the firstname and lastname property will also get effected

const person = {
    firstName: 'adam',
    lastName: 'cole',

    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },

    set fullName(value){
        // splitting the value using split method
        const divide = value.split(' ');
        this.firstName = divide[0];
        this.lastName = divide[1];
    }
}

console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);

person.fullName = 'john cena';

console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);
