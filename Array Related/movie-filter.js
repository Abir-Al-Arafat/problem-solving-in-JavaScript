// write a function which takes an array of movie objects and returns the title of the movies that released in 2018 and has rating above 4 and sort them in descending order according to ratings

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

const filteredTitles = movies.filter(m => m.year===2018 && m.rating>4)
                            .sort( (a, b) => a.rating-b.rating )
                            .reverse()
                            .map(m => m.title);

console.log(filteredTitles)