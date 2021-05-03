const aboutTemplate = Handlebars.compile(
  `
  <img id="logo" src="images/logo.png" alt="studio ghibli icon" />
  <p>
    Studio Ghibli Inc. (Japanese: 株式会社スタジオジブリ, Hepburn:
    Kabushiki-gaisha Sutajio Jiburi) is a Japanese animation film studio
    headquartered in Koganei, Tokyo. The studio is best known for its
    animated feature films, and has also produced several short films,
    television commercials, and one television film. The studio's mascot and
    most recognizable symbol is the character Totoro, a giant cat-like
    spirit from the studio's 1988 film My Neighbor Totoro. Studio Ghibli's
    highest grossing films include Spirited Away (2001), Ponyo (2008), and
    Howl's Moving Castle (2004). The studio was founded on June 15, 1985
    by directors Hayao Miyazaki and Isao Takahata and producer Toshio
    Suzuki, after the success of Topcraft's anime film Nausicaä of the
    Valley of the Wind (1984). Studio Ghibli has also collaborated with
    video game studios on the visual development of several video games.
  </p>

  <p>
    Five of Studio Ghibli's films are among the 10 highest-grossing anime
    films made in Japan, with Spirited Away being number two, grossing over
    US$380 million worldwide. Many of their works have won the Animage Anime
    Grand Prix award, and four have won the Japan Academy Prize for
    Animation of the Year. Five of Studio Ghibli's films have received
    Academy Award nominations. Spirited Away won the Golden Bear in 2002 and
    the Academy Award for Best Animated Feature Film in 2003.
  </p>

  <p>
    On August 3, 2014, Studio Ghibli temporarily halted production,
    following the retirement of Miyazaki. In February 2017, Suzuki announced
    that Miyazaki had come out of retirement again to direct a new feature
    film, How Do You Live?.
  </p>
  `
);

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
        <img src="images/people/{{id}}"
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
      <img src="images/locations/{{id}}"
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
