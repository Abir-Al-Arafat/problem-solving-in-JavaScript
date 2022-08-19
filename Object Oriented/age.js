// define a class which has a constructor that takes three parameters, firstname, lastname and date of birth as input and has two methods called age() and fullname() which calculates the age and prints fullname of the person

class Person{
    constructor(firtsname, lastname, dob){
        this.firtsname = firtsname;
        this.lastname = lastname;
        this.dob = dob;
    }

    fullname(){
        return `${this.firtsname} ${this.lastname}`;
    }

    age(){
        let birthday = new Date(this.dob); // creating a birthday object
        let diff = Date.now() - birthday.getTime(); //deducting
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const person1 = new Person('adam', 'cole', '11-13-1988');
const person2 = new Person('randy', 'orton', '02-11-1991');
const person3 = new Person('seth', 'rollins', '01-17-1996');

// console.log(person1.fullname());
// console.log(person2.fullname());
// console.log(person3.fullname());

// console.log(person1.age());
// console.log(person2.age());
// console.log(person3.age());
