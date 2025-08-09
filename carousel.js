// Dados dos projetos (substitua as URLs pelas imagens reais dos seus projetos)
const projects = {
    1: {
        images: [
            'https://via.placeholder.com/800x600/3498db/ffffff?text=Projeto+1+Imagem+1',
            'https://via.placeholder.com/800x600/2ecc71/ffffff?text=Projeto+1+Imagem+2',
            'https://via.placeholder.com/800x600/e74c3c/ffffff?text=Projeto+1+Imagem+3'
        ]
    },
    2: {
        images: [
            'https://via.placeholder.com/800x600/9b59b6/ffffff?text=Projeto+2+Imagem+1',
            'https://via.placeholder.com/800x600/1abc9c/ffffff?text=Projeto+2+Imagem+2'
        ]
    },
    3: {
        images: [
            'https://via.placeholder.com/800x600/f1c40f/000000?text=Projeto+3+Imagem+1',
            'https://via.placeholder.com/800x600/e67e22/ffffff?text=Projeto+3+Imagem+2',
            'https://via.placeholder.com/800x600/34495e/ffffff?text=Projeto+3+Imagem+3',
            'https://via.placeholder.com/800x600/7f8c8d/ffffff?text=Projeto+3+Imagem+4'
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('carouselModal');
    const modalImg = document.querySelector('.carousel-image');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const projects = document.querySelectorAll('.project');
    
    let currentProject = null;
    let currentImageIndex = 0;

    projects.forEach(project => {
        project.addEventListener('click', function() {
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
            'https://via.placeholder.com/800x600/3498db/ffffff?text=Projeto+1+Imagem+1',
            'https://via.placeholder.com/800x600/2ecc71/ffffff?text=Projeto+1+Imagem+2',
            'https://via.placeholder.com/800x600/e74c3c/ffffff?text=Projeto+1+Imagem+3'
        ]
    },
    2: {
        images: [
            'https://via.placeholder.com/800x600/9b59b6/ffffff?text=Projeto+2+Imagem+1',
            'https://via.placeholder.com/800x600/1abc9c/ffffff?text=Projeto+2+Imagem+2'
        ]
    },
    3: {
        images: [
            'https://via.placeholder.com/800x600/f1c40f/000000?text=Projeto+3+Imagem+1',
            'https://via.placeholder.com/800x600/e67e22/ffffff?text=Projeto+3+Imagem+2',
            'https://via.placeholder.com/800x600/34495e/ffffff?text=Projeto+3+Imagem+3',
            'https://via.placeholder.com/800x600/7f8c8d/ffffff?text=Projeto+3+Imagem+4'
        ]
    }
};
