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
    .then((res) => res.json())
    .then((data) => {
      main.innerHTML = "";

      const div = document.createElement("div");

      data.forEach((film) => {
        div.innerHTML += filmCardTemplate(film);
      });

      main.append(div);
    });
});

peopleBtn.addEventListener("click", () => {
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML = "";

  const h3 = document.createElement("h3");
  h3.textContent = "Loading people...";
  main.append(h3);

  fetch(`${baseURL}/people`)
    .then((res) => res.json())
    .then((data) => {
      main.innerHTML = "";
      const div = document.createElement("div");
      div.setAttribute("class", "people-container");

      data.forEach((person) => {
        div.innerHTML += personCardTemplate(person);
      });
      main.append(div);
    });
});

locBtn.addEventListener("click", () => {
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML = "";

  const h3 = document.createElement("h3");
  h3.textContent = "Loading locations...";
  main.append(h3);

  fetch(`${baseURL}/locations`)
    .then((res) => res.json())
    .then((data) => {
      main.innerHTML = "";
      const ul = document.createElement("ul");
      data.forEach((loc) => {
        const li = document.createElement("li");
        li.textContent = loc.name;
        ul.append(li);
      });
      main.append(ul);
    });
});