document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Usa o método nativo 'scrollIntoView' com opções para suavizar ainda mais a rolagem
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
