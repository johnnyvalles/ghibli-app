const filmCardTemplate = Handlebars.compile(
  `
    <div class="film-card-container">
        <h2>{{title}}</h2>
        <div class="film-info">
            <span class="score"><i class="fas fa-heart"></i> {{rt_score}}</span>
            <span class="year"><i class="fas fa-ticket-alt"></i> {{release_date}}</span>
            <span class="time"><i class="fas fa-clock"></i> {{running_time}}</span>
        </div>
        <div class="film-desc">
        <p>{{description}}</p>
        </div>
    </div>
    `
);

const personCardTemplate = Handlebars.compile(
  `
    <div class="person-card-container">
        <img src="_images/people/{{id}}"
          alt="picture of {{name}}">
        <div class="overlay">
          <h2>{{name}}<h2>
        </div>
    </div>
  `
);

const locationCardTemplate = Handlebars.compile(
  `
  <div class="location-card-container">
    <div class="location-img">
      <img src="_images/locations/{{id}}"
        alt="picture of {{name}}">
    </div>

    <div class="location-info">
      <h3 class="location-name">{{name}}</h3>
      <div class="geography">
        <span><i class="fas fa-cloud-sun"></i> {{climate}}</span>
        <span><i class="fas fa-mountain"></i> {{terrain}}</span>
      </div>
    </div>
  </div>
  `
);

const loadingIconTemplate = Handlebars.compile(
  `
    <div class="loading">
        <span><i class="fas fa-sync"></i></span>
        <h2>Loading {{resource}}...</h2>
    </div>
    `
);

const errorIconTemplate = Handlebars.compile(
  `
    <div class="loading-error">
        <span><i class="fas fa-exclamation-circle"></i></span>
        <h2>Error loading {{resource}}. Please try again.</h2>
    </div>
    `
);