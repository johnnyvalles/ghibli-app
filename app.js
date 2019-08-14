const app = document.getElementById("root"); 
const logo = document.createElement("img");
logo.src = "logo.png"; 
const container = document.createElement("div"); 
container.setAttribute("class", "container");

app.appendChild(logo); 
app.appendChild(container); 

// Create XMLHttpRequest Object
let request = new XMLHttpRequest();

// Establish new connection using GET request w/ endpoint
request.open("GET", "https://ghibliapi.herokuapp.com/films", true); 

// Process Data
request.addEventListener("load", function() {
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(film => {
            const card = document.createElement("div"); 
            card.setAttribute("class", "card"); 

            const h1 = document.createElement("h1"); 
            h1.textContent = film.title; 

            const p = document.createElement("p");
            film.description = film.description.substring(0, 300); 
            p.textContent = `${film.description}...`;

            container.appendChild(card);
            card.appendChild(h1); 
            card.appendChild(p); 
        });
    } else {
        const err = document.createElement("h1"); 
        err.textContent = "Oops! Something isn't right...";
        err.style.textTransform = "uppercase"; 
        err.style.backgroundColor = "salmon";
        err.style.padding = "1em;"
        app.appendChild(err); 
    }   
});
request.send();