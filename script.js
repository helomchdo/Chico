// Função para interação com o Chico ao tocar nele
document.getElementById('chico-robot').addEventListener('click', function() {
    const chico = document.getElementById('chico-robot');

    // Adiciona um efeito de "piscada" no caranguejo
    chico.style.transform = 'scale(1.5) rotate(-10deg)';

    setTimeout(() => {
        chico.style.transform = 'scale(1) rotate(0deg)';
    }, 500); // Volta ao normal após meio segundo
});

// Carrossel: controle das setas de avançar e retroceder
let currentSlide = 0;
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.team-card');
const cardWidth = cards[0].offsetWidth + 10; // Largura do card + margem

// Função para mover o carrossel
function moveCarousel(direction) {
    currentSlide += direction;

    // Limitar a navegação para que não passe dos limites
    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide > cards.length - 4) { // Ajuste o número de acordo com quantos cards são exibidos por vez
        currentSlide = cards.length - 4;
    }

    // Mover o track do carrossel
    const moveAmount = -(cardWidth * currentSlide);
    track.style.transform = `translateX(${moveAmount}px)`;
}

// Adicionar eventos de clique nas setas
document.getElementById('prev-slide').addEventListener('click', function() {
    moveCarousel(-1); // Retroceder
});

document.getElementById('next-slide').addEventListener('click', function() {
    moveCarousel(1); // Avançar
});


