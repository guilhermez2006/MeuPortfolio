// Seleciona as seções
const projetosSection = document.getElementById('projetosSection');
const projetoAndroid = document.getElementById('projetoAndroid');
const projetoVicioGamer = document.getElementById('projetoVicioGamer');
const projetoSocial = document.getElementById('projetoSocial');
const habilidades = document.getElementById('habilidades');
const contato = document.getElementById('Contato');
const Html = document.getElementById('Html');
const Css = document.getElementById('Css');
const JavaScript = document.getElementById('JavaScript');
const GitGithub = document.getElementById('GitGithub');

// Tempo de delay para animações (em ms)
const DELAY = 350;

// Configuração do IntersectionObserver para projetosSection
const observerProjetos = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                projetosSection.classList.remove('hidden');
                projetosSection.classList.add('visible');
            }, DELAY);
        } else {
            projetosSection.classList.remove('visible');
            projetosSection.classList.add('hidden');
        }
    });
});
observerProjetos.observe(projetosSection);

// Configuração do IntersectionObserver para projetoAndroid
const observerAndroid = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                projetoAndroid.classList.remove('hidden');
                projetoAndroid.classList.add('visible');
            }, DELAY);
        } else {
            projetoAndroid.classList.remove('visible');
            projetoAndroid.classList.add('hidden');
        }
    });
});
observerAndroid.observe(projetoAndroid);

// Configuração do IntersectionObserver para projetoVicioGamer
const observerVicioGamer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                projetoVicioGamer.classList.remove('hidden');
                projetoVicioGamer.classList.add('visible');
            }, DELAY);
        } else {
            projetoVicioGamer.classList.remove('visible');
            projetoVicioGamer.classList.add('hidden');
        }
    });
});
observerVicioGamer.observe(projetoVicioGamer);

// Configuração do IntersectionObserver para projetoSocial
const observerProjetoSocial = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                projetoSocial.classList.remove('hidden');
                projetoSocial.classList.add('visible');
            }, DELAY);
        } else {
            projetoSocial.classList.remove('visible');
            projetoSocial.classList.add('hidden');
        }
    });
});
observerProjetoSocial.observe(projetoSocial);

// Configuração do IntersectionObserver para habilidades
const observerHabilidades = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                habilidades.classList.remove('hidden');
                habilidades.classList.add('visible');
            }, DELAY);
        } else {
            habilidades.classList.remove('visible');
            habilidades.classList.add('hidden');
        }
    });
});
observerHabilidades.observe(habilidades);

// Configuração do IntersectionObserver para Contato
const observerContato = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                contato.classList.remove('hidden');
                contato.classList.add('visible');
            }, DELAY);
        } else {
            contato.classList.remove('visible');
            contato.classList.add('hidden');
        }
    });
});
observerContato.observe(contato);

const observerprojetoDragon = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                projetoDragon.classList.remove('hidden');
                projetoDragon.classList.add('visible');
            }, DELAY);
        } else {
            projetoDragon.classList.remove('visible');
            projetoDragon.classList.add('hidden');
        }
    });
});
observerprojetoDragon.observe(projetoDragon);

const observerHtml = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                Html.classList.remove('hidden');
                Html.classList.add('visible');
            }, DELAY);
        } else {
            Html.classList.remove('visible');
            Html.classList.add('hidden');
        }
    });
});
observerHtml.observe(Html);

const observerCss = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                Css.classList.remove('hidden');
                Css.classList.add('visible');
            }, DELAY);
        } else {
            Css.classList.remove('visible');
            Css.classList.add('hidden');
        }
    });
});
observerCss.observe(Css);

const observerJavaScript = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                JavaScript.classList.remove('hidden');
                JavaScript.classList.add('visible');
            }, DELAY);
        } else {
            JavaScript.classList.remove('visible');
            JavaScript.classList.add('hidden');
        }
    });
});
observerJavaScript.observe(JavaScript);

const observerGitGithub = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                GitGithub.classList.remove('hidden');
                GitGithub.classList.add('visible');
            }, DELAY);
        } else {
            GitGithub.classList.remove('visible');
            GitGithub.classList.add('hidden');
        }
    });
});
observerGitGithub.observe(GitGithub);

document.addEventListener('DOMContentLoaded', function () {
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