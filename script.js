const paineis = document.querySelectorAll('.painel');

    paineis.forEach(painel => {
        painel.addEventListener('click', function() {
            const conteudo = painel.nextElementSibling;

            if (conteudo.style.display === 'block') {
                conteudo.style.display = 'none';
                painel.classList.remove('ativo');
            } else {
                conteudo.style.display = 'block';
                painel.classList.add('ativo');
            }
        });
    });

    let indice = 0;

    function moverSlide(direcao) {
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
    
        indice += direcao;
    
        if (indice < 0) {
            indice = totalSlides - 1;
        } else if (indice >= totalSlides) {
            indice = 0;
        }
    
        const carrossel = document.querySelector('.carrossel');
        carrossel.style.transform = `translateX(-${indice * 100}%)`;
    }


//apartir daq é animação de scroll

const elements = document.querySelectorAll(".hidden");

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })

})

elements.forEach( (element) => myObserver.observe(element))

// scroll suave

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetid = this.getAttribute('href');
        const targetSection = document.querySelector(targetid);

        targetSection.scrollintoView({
            behavior: 'smooth'
        });
    });
});