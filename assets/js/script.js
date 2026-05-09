// Só use observer para elementos visuais, NÃO para modais!
const projetosSection = document.getElementById('projetosSection');
const habilidades = document.getElementById('habilidades');
const contato = document.getElementById('Contato');
const Html = document.getElementById('Html');
const Css = document.getElementById('Css');
const JavaScript = document.getElementById('JavaScript');
const Git = document.getElementById('Git');
const Github = document.getElementById('Github');

const DELAY = 350;

// ── MENU HAMBURGUER
const hamburger   = document.getElementById('hamburger');
const navMenu     = document.getElementById('nav-menu');
const navLinks    = navMenu.querySelectorAll('a');

// Cria overlay dinamicamente
const overlay = document.createElement('div');
overlay.classList.add('nav-overlay');
document.body.appendChild(overlay);

function abrirMenu() {
  hamburger.classList.add('open');
  navMenu.classList.add('open');
  overlay.classList.add('active');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden'; // Trava scroll enquanto menu está aberto
}

function fecharMenu() {
  hamburger.classList.remove('open');
  navMenu.classList.remove('open');
  overlay.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  navMenu.classList.contains('open') ? fecharMenu() : abrirMenu();
});

// Fecha ao clicar em qualquer link do menu
navLinks.forEach(link => link.addEventListener('click', fecharMenu));

// Fecha ao clicar no overlay
overlay.addEventListener('click', fecharMenu);

// Fecha ao pressionar ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') fecharMenu();
});

function criarObserver(element) {
    if (!element) return;
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

[
    projetosSection,
    habilidades,
    contato,
    Html,
    Css,
    JavaScript,
    Git,
    Github
].forEach(criarObserver);

const cards = document.querySelectorAll(".projeto-card");
const modais = document.querySelectorAll(".modal");
const botoesFechar = document.querySelectorAll(".close");

// ABRIR modal ao clicar no card
cards.forEach(card => {
    card.addEventListener("click", () => {
        const modalId = card.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "flex"; // Centralizado fixo na tela
        }
    });
});

// FECHAR modal ao clicar no botão fechar
botoesFechar.forEach(btn => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.style.display = "none";
    });
});

// FECHAR modal ao clicar fora do conteúdo
window.addEventListener("click", e => {
    modais.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// NÃO use marginTop dinâmica nem mexa em scroll do modal!
// Não use marginTop nem scroll para modal-content!

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