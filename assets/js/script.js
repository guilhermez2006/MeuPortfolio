// ── OBSERVERS ───────────────────────────────────────────────
const DELAY = 350;

function criarObserver(element) {
    if (!element) return; // ignora null (elementos que não existem na página atual)
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

// Elementos individuais — null é tratado pelo if(!element) dentro da função
[
    document.getElementById('projetosSection'),
    document.getElementById('habilidades'),
    document.getElementById('Contato'),
    document.getElementById('Html'),
    document.getElementById('Css'),
    document.getElementById('JavaScript'),
    document.getElementById('Git'),
    document.getElementById('Github'),
    document.querySelector('.sobre-mim-container'),
    document.getElementById('sobre-titulo'),
].forEach(criarObserver);

// NodeList precisa de forEach próprio — NUNCA jogue dentro do array acima
document.querySelectorAll('.timeline-item').forEach(criarObserver);

// ── MENU HAMBURGUER ──────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');
const navLinks  = navMenu.querySelectorAll('a');

const overlay = document.createElement('div');
overlay.classList.add('nav-overlay');
document.body.appendChild(overlay);

function abrirMenu() {
    hamburger.classList.add('open');
    navMenu.classList.add('open');
    overlay.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
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

navLinks.forEach(link => link.addEventListener('click', fecharMenu));
overlay.addEventListener('click', fecharMenu);
document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharMenu(); });

// ── MODAIS ───────────────────────────────────────────────────
const cards       = document.querySelectorAll('.projeto-card');
const modais      = document.querySelectorAll('.modal');
const botoesFechar = document.querySelectorAll('.close');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const modal = document.getElementById(card.getAttribute('data-modal'));
        if (modal) modal.style.display = 'flex';
    });
});

botoesFechar.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', e => {
    modais.forEach(modal => {
        if (e.target === modal) modal.style.display = 'none';
    });
});

// ── PARTICLES ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    if (typeof particlesJS === 'undefined') return;
    particlesJS('particles-js', {
        particles: {
            number:      { value: 80, density: { enable: true, value_area: 800 } },
            color:       { value: '#ffffff' },
            shape:       { type: 'circle' },
            opacity:     { value: 0.5, random: true },
            size:        { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move:        { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out' }
        }
    });
});