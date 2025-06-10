// Seleciona as seções
const projetosSection = document.getElementById('projetosSection');
const projetoAndroid = document.getElementById('modalAndroid'); // Usar modal para animação (se preferir pode mudar)
const projetoVicioGamer = document.getElementById('modalVicioGamer');
const projetoSocial = document.getElementById('modalSocial');
const habilidades = document.getElementById('habilidades');
const contato = document.getElementById('Contato');
const projetoDragon = document.getElementById('modalDragon');
const Html = document.getElementById('Html');
const Css = document.getElementById('Css');
const JavaScript = document.getElementById('JavaScript');
const Git = document.getElementById('Git');
const Github = document.getElementById('Github');

// Tempo de delay para animações (em ms)
const DELAY = 350;

// Função que cria observer genérico
function criarObserver(element) {
    if (!element) return; // Evita erro se elemento não existe
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    element.classList.remove('hidden');
                    element.classList.add('visible');
                }, DELAY);
            } else {
                element.classList.remove('visible');
                element.classList.add('hidden');
            }
        });
    });
    observer.observe(element);
}

// Criar observer para cada elemento que precisa da animação
[
    projetosSection,
    projetoAndroid,
    projetoVicioGamer,
    projetoSocial,
    habilidades,
    contato,
    projetoDragon,
    Html,
    Css,
    JavaScript,
    Git,
    Github
].forEach(criarObserver);
const cards = document.querySelectorAll(".projeto-card");
const modais = document.querySelectorAll(".modal");
const botoesFechar = document.querySelectorAll(".close");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const modalId = card.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "flex";
            // Ajustar a posição interna conforme scroll
            const scrollY = window.scrollY || window.pageYOffset;
            const modalContent = modal.querySelector(".modal-content");
            modalContent.style.marginTop = scrollY + "px";
        }
    });
});

botoesFechar.forEach(btn => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.style.display = "none";
        // Resetar margin do conteúdo ao fechar
        const modalContent = modal.querySelector(".modal-content");
        modalContent.style.marginTop = "0";
    });
});

window.addEventListener("click", e => {
    modais.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
            const modalContent = modal.querySelector(".modal-content");
            modalContent.style.marginTop = "0";
        }
    });
});

// Atualiza marginTop do conteúdo quando rolar a página, se modal aberto
window.addEventListener("scroll", () => {
    modais.forEach(modal => {
        if (modal.style.display === "flex") {
            const scrollY = window.scrollY || window.pageYOffset;
            const modalContent = modal.querySelector(".modal-content");
            modalContent.style.marginTop = scrollY + "px";
        }
    });
});

// Inicializa particlesJS após o DOM estar carregado
document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        }
    });
});
