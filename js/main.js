// specail package play video on hover
// Select all video cards
const videoCards = document.querySelectorAll('.swiper-slide .card');

videoCards.forEach(card => {
    const video = card.querySelector('.cardVideo');
    
    // Play video on hover
    card.addEventListener('mouseover', () => {
        video.play();
    });
    
    // Pause video when hover ends
    card.addEventListener('mouseout', () => {
        video.pause();
        video.currentTime = 0;
        video.load(); // reloads video so that the poster reappears
    });
});
