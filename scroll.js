document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Obtém a posição do elemento alvo e subtrai 100 pixels
        const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 100;

        // Rola até a posição calculada com um comportamento suave
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

function adjustFontSize(action) {
    const body = document.body;
    let fontSize = window.getComputedStyle(body).fontSize;
    fontSize = parseFloat(fontSize);
    if (action === 'increase') {
        body.style.fontSize = `${fontSize + 2}px`;
    } else if (action === 'decrease') {
        body.style.fontSize = `${fontSize - 2}px`;
    }
}
const mainButton = document.getElementById('main-button');
const submenu = document.getElementById('submenu');
const contrastButton = document.getElementById('contrast-button');

let highContrast = false;

// Função para alternar o alto contraste
function toggleContrast() {
    highContrast = !highContrast; // Inverte o estado
    document.body.classList.toggle('high-contrast', highContrast);
}

// Função para alternar o submenu
function toggleSubmenu() {
    submenu.classList.toggle('show'); // Adiciona ou remove a classe 'show'
}

// Adiciona eventos aos botões
mainButton.addEventListener('click', toggleSubmenu);
contrastButton.addEventListener('click', toggleContrast);

const button = document.getElementById('main-button');

button.addEventListener('click', () => {
    button.classList.add('clicked');

    // Remove a classe após a animação
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 200); // o tempo deve ser igual ao da transição no CSS
});
document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector(".carousel-track");
    const teamCards = Array.from(document.querySelectorAll(".team-card"));
  
    // Define a ordem das equipes
    const teamOrder = ["Professores","Gestão SENAC", "Sonoplastia","Audiovisual", "Site", "Hardware", "Front-End", "Gestão", "Documentação"];
  
    // Ordena os elementos primeiro pela equipe e depois pelo nome dentro de cada equipe
    teamCards.sort((a, b) => {
      // Obtém o nome da equipe de cada card
      const teamA = a.querySelector("p").innerText;
      const teamB = b.querySelector("p").innerText;
  
      // Ordena pela ordem das equipes
      const teamIndexA = teamOrder.indexOf(teamA);
      const teamIndexB = teamOrder.indexOf(teamB);
      if (teamIndexA !== teamIndexB) {
        return teamIndexA - teamIndexB;
      }
  
      // Se estão na mesma equipe, ordena por nome (dentro da equipe)
      const nameA = a.querySelector("h3").innerText.toLowerCase();
      const nameB = b.querySelector("h3").innerText.toLowerCase();
      return nameA.localeCompare(nameB);
    });
  
    // Reorganiza o conteúdo do carousel-track com os elementos ordenados
    teamCards.forEach(card => carouselTrack.appendChild(card));
  });
  


  function startReading() {
    // Seleciona todas as seções com IDs especificados no menu
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.addEventListener('click', () => {
            // Pega o texto do conteúdo da seção
            let textToRead = section.innerText;

            // Pega as descrições de imagens (atributo alt) e adiciona ao texto
            const images = section.querySelectorAll('img');
            images.forEach(img => {
                if (img.alt) {
                    textToRead += ' ' + img.alt;
                }
            });

            // Verifica se o navegador suporta a API de síntese de fala
            if ('speechSynthesis' in window) {
                // Interrompe a leitura se ela já estiver ativa
                if (window.speechSynthesis.speaking) {
                    window.speechSynthesis.cancel();
                } else {
                    // Cria uma nova instância de fala
                    let speech = new SpeechSynthesisUtterance(textToRead);
                    // Define o idioma para português
                    speech.lang = 'pt-BR';
                    // Inicia a leitura
                    window.speechSynthesis.speak(speech);
                }
            } else {
                alert("Leitor de tela não suportado no seu navegador.");
            }
        });
    });
}


// Adiciona o evento de clique para todos os botões
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        // Adiciona a classe 'clicked' ao botão
        button.classList.add("clicked");

        // Remove a classe 'clicked' após 400ms, o mesmo tempo da animação
        setTimeout(() => {
            button.classList.remove("clicked");
        }, 400);
    });
});
