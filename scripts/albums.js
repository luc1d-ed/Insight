const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
}, {
    threshold: 0.5
});

const spotifyCards = document.querySelectorAll('.spotify-card');
spotifyCards.forEach((card) => observer.observe(card));
