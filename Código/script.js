// Seleciona as seções
const projetosSection = document.getElementById('projetosSection');
const projetoAndroid = document.getElementById('projetoAndroid');
const projetoVicioGamer = document.getElementById('projetoVicioGamer');
const habilidades = document.getElementById('habilidades');
const contato = document.getElementById('Contato');
const projetoDragon = document.getElementById('projetoDragon');

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