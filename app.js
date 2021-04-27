const baseURL = "https://ghibliapi.herokuapp.com";
const filmsBtn = document.getElementById("films-link");
const peopleBtn = document.getElementById("people-link");
const locBtn = document.getElementById("locations-link");

filmsBtn.addEventListener("click", () => {
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML = "";

  const loading = loadingIconTemplate({ resource: "films"})
  main.innerHTML = loading;

  fetch(`${baseURL}/films`)
    .then((res) => res.json())
    .then((data) => {
      main.innerHTML = "";

      const div = document.createElement("div");

      data.forEach((film) => {
        div.innerHTML += filmCardTemplate(film);
      });

      main.append(div);
    })
    .catch(err => {
      console.log(err);
      const loadErr = errorIconTemplate({ resource: "films"});
      main.innerHTML = loadErr;
    });
});

peopleBtn.addEventListener("click", () => {
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML = "";

  const loading = loadingIconTemplate({ resource: "people"})
  main.innerHTML = loading;
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
    })
    .catch(err => {
      console.log(err);
      const loadErr = errorIconTemplate({ resource: "people"});
      main.innerHTML = loadErr;
    });
});

locBtn.addEventListener("click", () => {
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML = "";

  const loading = loadingIconTemplate({ resource: "locations"})
  main.innerHTML = loading;

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