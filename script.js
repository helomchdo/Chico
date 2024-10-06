document.getElementById('interact-btn').addEventListener('click', function() {
    const chico = document.getElementById('chico-robot');

    // Adiciona um efeito de "piscada" no caranguejo
    chico.style.transform = 'scale(1.5) rotate(-10deg)';

    setTimeout(() => {
        chico.style.transform = 'scale(1) rotate(0deg)';
    }, 500); // Volta ao normal após meio segundo
});