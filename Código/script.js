// Seleciona as seções
const projetosSection = document.getElementById('projetosSection');
const projetoAndroid = document.getElementById('projetoAndroid');
const projetoVicioGamer = document.getElementById('projetoVicioGamer');
const habilidades = document.getElementById('habilidades');
const contato = document.getElementById('Contato');
const Html = document.getElementById('Html');
const Css = document.getElementById('Css');
const JavaScript = document.getElementById('JavaScript');
const BancoDeDados = document.getElementById('BancoDeDados');
const GitGithub = document.getElementById('GitGithub');


// Configuração do IntersectionObserver para projetosSection
const observerProjetos = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                projetosSection.classList.remove('hidden');
                projetosSection.classList.add('visible');
            }, 300);
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
            }, 300);
        } else {
            projetoAndroid.classList.remove('visible');
            projetoAndroid.classList.add('hidden');
        }
    });
});
observerAndroid.observe(projetoAndroid);

// Configuração do IntersectionObserver para habilidades
const observerHabilidades = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                habilidades.classList.remove('hidden');
                habilidades.classList.add('visible');
            }, 300);
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
            }, 300);
        } else {
            contato.classList.remove('visible');
            contato.classList.add('hidden');
        }
    });
});
observerContato.observe(contato);

// Configuração do IntersectionObserver para projetoVicioGamer
const observerVicioGamer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                projetoVicioGamer.classList.remove('hidden');
                projetoVicioGamer.classList.add('visible');
            }, 300);
        } else {
            projetoVicioGamer.classList.remove('visible');
            projetoVicioGamer.classList.add('hidden');
        }
    });
});
observerVicioGamer.observe(projetoVicioGamer);

const observerprojetoDragon = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                projetoDragon.classList.remove('hidden');
                projetoDragon.classList.add('visible');
            }, 300);
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
            }, 300);
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
            }, 300);
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
            }, 300);
        } else {
            JavaScript.classList.remove('visible');
            JavaScript.classList.add('hidden');
        }
    });
});
observerJavaScript.observe(JavaScript);
const observerBancoDeDados = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                BancoDeDados.classList.remove('hidden');
                BancoDeDados.classList.add('visible');
            }, 300);
        } else {
            BancoDeDados.classList.remove('visible');
            BancoDeDados.classList.add('hidden');
        }
    });
});
observerBancoDeDados.observe(BancoDeDados);
const observerGitGithub = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                GitGithub.classList.remove('hidden');
                GitGithub.classList.add('visible');
            }, 300);
        } else {
            GitGithub.classList.remove('visible');
            GitGithub.classList.add('hidden');
        }
    });
});
observerGitGithub.observe(GitGithub);