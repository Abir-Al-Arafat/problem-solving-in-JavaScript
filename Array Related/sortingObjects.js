// declare an array of course objects. every object will have two properties, id and name and then sort the array of objects according to the name property

const courses = [
    {id: 1, name: 'nodeJs'},
    {id: 2, name: 'java'},
    {id: 3, name: 'HTML'},
    {id: 4, name: 'css'},
]

// using sort() method to sort the objects

courses.sort(function(a,b){
    // converting the names to lower case
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if(nameA<nameB) return -1;
    if(nameA>nameB) return 1;
    return 0;
});


console.log(courses);