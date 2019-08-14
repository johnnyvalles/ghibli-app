// Create XMLHttpRequest Object
let request = new XMLHttpRequest();

// Establish new connection using GET request w/ endpoint
request.open("GET", "https://ghibliapi.herokuapp.com/films", true); 

// Process Data
request.addEventListener("load", function() {
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => console.log(movie.title + " " + movie.rt_score));
    } else {
        console.log(`ERROR: HTTP status code ${this.status}`);
    }   
});

request.send();