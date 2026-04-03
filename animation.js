document.addEventListener('DOMContentLoaded', function() {
    // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS (Premium Feel)
    const fadeElements = document.querySelectorAll('.fade-up');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => scrollObserver.observe(el));


    // VALORES ANIMATION
    const valores = document.querySelectorAll('.col-12.col-md-4');

    valores.forEach((valor) => {
        const letras = valor.querySelectorAll('#Titulo_V .letra');
        const informacion = valor.querySelector('#informacion');

        letras.forEach((letra, index) => {
            setTimeout(() => {
                letra.style.opacity = 1;
                letra.style.transform = 'translateY(0)';

                if (index === letras.length - 1) {
                    if (informacion) {
                        informacion.style.opacity = 1;
                        informacion.style.transform = 'translateY(0)';
                    }
                }
            }, index * 150);
        });
    });
});

// CARDS (Da vida a tu marca)
document.addEventListener('DOMContentLoaded', function() {
    let cards = document.querySelectorAll('.card-marcavida');
    if (cards.length > 0) {
        let currentCard = 0;

        function showNextCard() {
            cards[currentCard].classList.remove('active');
            
            currentCard = (currentCard + 1) % cards.length;

            cards[currentCard].classList.add('active');
        }

        setInterval(showNextCard, 5000);
    }
});

// CARRUSEL 4 LETTERS
document.addEventListener('DOMContentLoaded', (event) => {
    const words = ["ENVASES", "BRANDING", "ETIQUETAS", "FÓRMULAS"];
    let currentIndex = 0;
    const animatedWord = document.getElementById('animated-word');
    
    if (animatedWord) {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % words.length;
            animatedWord.textContent = words[currentIndex];
        }, 3000);
    }
});