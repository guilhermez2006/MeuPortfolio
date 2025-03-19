const projetosSection = document.getElementById('projetosSection');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => { // Adiciona um delay de 300ms (ajuste conforme necessário)
                projetosSection.classList.remove('hidden');
                projetosSection.classList.add('visible');
            }, 300);
        } else {
            projetosSection.classList.remove('visible');
            projetosSection.classList.add('hidden');
        }
    });
});

observer.observe(projetosSection);