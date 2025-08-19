const sections = document.querySelectorAll('section');
let currentSectionIndex = 0;
let isScrolling = false;

// Função para atualizar a URL com o id da section atual
function updateURL() {
  const id = sections[currentSectionIndex].id;
  if (id) {
    history.replaceState(null, "", "#" + id);
  }
}

// Função para rolar para a próxima seção
function scrollToNextSection() {
  if (isScrolling) return;
  isScrolling = true;

  if (currentSectionIndex < sections.length - 1) {
    currentSectionIndex++;
  } else {
    isScrolling = false; 
    return;
  }

  sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
  updateURL();

  setTimeout(() => {
    isScrolling = false;
  }, 500); 
}

// Função para rolar para a seção anterior
function scrollToPrevSection() {
  if (isScrolling) return;
  isScrolling = true;

  if (currentSectionIndex > 0) {
    currentSectionIndex--;
  } else {
    isScrolling = false; 
    return;
  }

  sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
  updateURL();

  setTimeout(() => {
    isScrolling = false;
  }, 500);
}

// Evento de scroll
document.addEventListener('wheel', (event) => {
  event.preventDefault();
  if (event.deltaY > 0) {
    scrollToNextSection();
  } else if (event.deltaY < 0) {
    scrollToPrevSection();
  }
}, { passive: false });

// Evento de teclado
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    scrollToNextSection();
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    scrollToPrevSection();
  }
});

// Inicialização
window.onload = () => {
  sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
  updateURL();
}
