let currentIndex = 0; // Começa no primeiro participante
const cards = document.querySelectorAll('.team-card'); // Seleciona todos os cards da equipe
const totalCards = cards.length; // Total de cards

// Função para mostrar o card atual
function showCard(index) {
    cards.forEach((card, i) => {
        card.style.display = (i === index) ? 'block' : 'none'; // Mostra apenas o card atual
    });
}

// Função para mover o carrossel
function moveCarousel(direction) {
    currentIndex += direction;

    // Se for menor que 0, volta para o último card
    if (currentIndex < 0) {
        currentIndex = totalCards - 1; // Volta para o último card
    }

    // Se for maior ou igual ao total, volta para o primeiro card
    if (currentIndex >= totalCards) {
        currentIndex = 0; // Volta para o primeiro card
    }

    showCard(currentIndex); // Atualiza a exibição do card
}

// Inicializa o carrossel mostrando o primeiro card
showCard(currentIndex);

// Adiciona eventos aos botões
document.querySelector('.prev-btn').addEventListener('click', () => moveCarousel(-1));
document.querySelector('.next-btn').addEventListener('click', () => moveCarousel(1));
