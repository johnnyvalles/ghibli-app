const baseURL = "https://ghibliapi.herokuapp.com";
const filmsBtn = document.getElementById("films-link");
const peopleBtn = document.getElementById("people-link");
const locBtn = document.getElementById("locations-link");

let films = undefined;
let people = undefined;
let locations = undefined;

filmsBtn.addEventListener("click", () => {
    const main = document.getElementsByTagName("main")[0];
    main.innerHTML = "";

    const h3 = document.createElement("h3");
    h3.textContent = "Loading films...";
    main.append(h3);

    fetch(`${baseURL}/films`)
    .then(res => res.json())
    .then(data => {
        main.innerHTML = "";

        const ul = document.createElement("ul");


        const filmLis = data.forEach(film => {
            const li = document.createElement("li");
            li.textContent = film.title;
            ul.append(li);
        })
        main.append(ul);
    });

})

peopleBtn.addEventListener("click", () => {
    const main = document.getElementsByTagName("main")[0];
    main.innerHTML = "";

    const h3 = document.createElement("h3");
    h3.textContent = "Loading people...";
    main.append(h3);

    fetch(`${baseURL}/people`)
    .then(res => res.json())
    .then(data => {
        main.innerHTML = "";
        const ul = document.createElement("ul");
        const peopleLis = data.forEach(person => {
            const li = document.createElement("li");
            li.textContent = person.name;
            ul.append(li);
        })
        main.append(ul);
    });

})

locBtn.addEventListener("click", () => {
    const main = document.getElementsByTagName("main")[0];
    main.innerHTML = "";

    const h3 = document.createElement("h3");
    h3.textContent = "Loading locations...";
    main.append(h3);

    fetch(`${baseURL}/locations`)
    .then(res => res.json())
    .then(data => {
        main.innerHTML = "";
        const ul = document.createElement("ul");
        const locLis = data.forEach(loc => {
            const li = document.createElement("li");
            li.textContent = loc.name;
            ul.append(li);
        })
        main.append(ul);
    });

})





// // Fetch all people
// fetch(`${baseURL}people`)
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log("Error Fetching.")
//     console.log("Reason: ", err);
// });

// // Fetch all locations
// fetch(`${baseURL}locations`)
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log("Error Fetching.")
//     console.log("Reason: ", err);
// });
