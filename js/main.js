document.addEventListener('DOMContentLoaded', () => {
    
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 5000; // 5 segundos

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slides[currentSlide].classList.add('active');
    };

    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        showSlide(currentSlide - 1);
    };

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    const startSlide = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
    };

    const resetInterval = () => {
        clearInterval(slideInterval);
        startSlide();
    };

    startSlide();
});