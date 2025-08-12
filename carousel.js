// Verifica se a largura da tela é maior que 768px (dispositivos não-mobile)
function isDesktopView() {
    return window.innerWidth > 768;
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('carouselModal');
    const modalImg = document.querySelector('.carousel-image');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const projects = document.querySelectorAll('.content1');
    
    let currentProject = null;
    let currentImageIndex = 0;

    projects.forEach(project => {
        project.addEventListener('click', function() {
            // Verifica se a visualização é desktop antes de abrir o carrossel
            if (!isDesktopView()) {
                
                return; // Não faz nada se for mobile
            }
            
            const projectId = this.getAttribute('data-project');
            if (projectsData[projectId]) {
                currentProject = projectId;
                currentImageIndex = 0;
                updateCarousel();
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });


    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (currentProject !== null) {
            currentImageIndex = (currentImageIndex - 1 + projectsData[currentProject].images.length) % projectsData[currentProject].images.length;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (currentProject !== null) {
            currentImageIndex = (currentImageIndex + 1) % projectsData[currentProject].images.length;
            updateCarousel();
        }
    });

    function updateCarousel() {
        if (currentProject !== null) {
            const images = projectsData[currentProject].images;
            if (images && images.length > 0) {
                modalImg.src = images[currentImageIndex];
                modalImg.alt = `Projeto ${currentProject} - Imagem ${currentImageIndex + 1}`;
            }
        }
    }

    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            } else if (e.key === 'Escape') {
                closeBtn.click();
            }
        }
    });
});


const projectsData = {
    1: {
        images: [
            'assets/CalculatorAge/calculadoraidade.png'
        ]
    },
    2: {
        images: [
            'assets/LadingFull/ladingfull1.png',
            'assets/LadingFull/ladingfull2.png',
            'assets/LadingFull/ladingfull3.png',
            'assets/LadingFull/ladingfull4.png',
            'assets/LadingFull/ladingfull5.png',
            'assets/LadingFull/ladingfull6.png'
        ]
    },
    3: {
        images: [
            'assets/newsletter/newsletter.png'
        ]
    }
};
