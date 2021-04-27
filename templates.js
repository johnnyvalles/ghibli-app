let filmCardTemplate = Handlebars.compile(
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