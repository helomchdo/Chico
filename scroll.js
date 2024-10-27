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
document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector(".carousel-track");
    const teamCards = Array.from(document.querySelectorAll(".team-card"));
  
    // Ordena os elementos pelo texto do nome (tag <h3>)
    teamCards.sort((a, b) => {
      const nameA = a.querySelector("h3").innerText.toLowerCase();
      const nameB = b.querySelector("h3").innerText.toLowerCase();
      return nameA.localeCompare(nameB);
    });
  
    // Reorganiza o conteúdo do carousel-track com os elementos ordenados
    teamCards.forEach(card => carouselTrack.appendChild(card));
  });
  