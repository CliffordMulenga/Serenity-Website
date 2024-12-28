// Select all cards with videos
const videoCards = document.querySelectorAll('.swiper-slide .card');

videoCards.forEach(card => {
    const video = card.querySelector('.cardVideo');
    const videoTag = card.querySelector('.watchVideo');

    // Play video and hide tag on hover or tap
    card.addEventListener('mouseover', () => {
        video.play();
        videoTag.style.opacity = "0";
        videoTag.style.visibility = "hidden";
    });

    // Pause video and show tag on hover out
    card.addEventListener('mouseout', () => {
        video.pause();
        video.currentTime = 0;
        video.load();
        videoTag.style.opacity = "1";
        videoTag.style.visibility = "visible";
    });

});
