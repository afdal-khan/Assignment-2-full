// module = require("./movieGenre")
// let movie = Movie();
// movie = Movie()
// darkWorld = new Movie()
// thor = new Movie()
// action = new Genre()
// action.name = "Action"
// darkWorld.title = "Dark World"
// thor.title = "Thor"
// thor.genres = action.name
// darkWorld.genres = action.name
// darkWorld.addRelatedMovie(thor);
// thor.addRelatedMovie(darkWorld);

// console.log(thor.related[0].title)
// console.log(thor.genres)

//const Movie = require('./movieGenre').Movie;
//const Genre = require('./movieGenre').Genre;
//const assert = require('assert');

//module = require('./movieGenre.js')


 let movie = require("./movieGenre.js");
 let Movie = movie.Movie;
 let genre = require("./movieGenre.js");
 let Genre = genre.Genre;





batman = new Movie();
batman.uuid = '1';
batman.title = 'Batman';
batman.year = 2010;

superman = new Movie();
superman.uuid = '2';
superman. title = 'Superman';
superman.year = 2011;



console.log(' addRelatedMovie Test Cases');
function test_addRelated(a, b){
    
    if (a.addRelatedMovie(b) === true){
    
        console.log('TEST PASSED');
    } else {
        console.log('TEST FAILED');
    }
}
test_addRelated(batman, superman); 
