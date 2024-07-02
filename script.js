
// AutoType
function autoText(){
    var typed = new Typed('#auto-text', {
        strings: ['<h3>Conectando mentes inovadoras e impulsionando o futuro das startups.</h3>', '<h3>Conosco cada conexão é uma porta para o progresso.</h3>','<h3>Juntos construindo o amanhã da inovação.</h3>'],
        typeSpeed: 50,
        showCursor: false
    })    
}
autoText()

window.revelar = ScrollReveal({reset:true});

revelar.reveal('.Banner', {
    duration: 3000,
    distance: '150px',
    origin: 'top'
});
revelar.reveal('.efeitoHeader', {
    duration: 3000,
    distance: '150px',
    origin: 'top'
});


revelar.reveal('.services', {
    duration: 3000,
    distance: '150px',
    origin: 'left'
});

revelar.reveal('.more', {
    duration: 3000,
    distance: '150px',
    origin: 'bottom'
});

revelar.reveal('.filho', {
    duration: 3000,
    distance: '150px',
    origin: 'bottom'
});

revelar.reveal('.filho2', {
    duration: 3000,
    distance: '150px',
    origin: 'top'
});
//função carrosel
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-wrapper');
    let index = 0;
    const intervalTime = 5000; // Tempo em milissegundos (5 segundos)
    let interval = setInterval(nextImage, intervalTime); // Inicializa o intervalo
  
    function showImage(index) {
      images.forEach((image, idx) => {
        if (idx === index) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    }
  
    function nextImage() {
      index++;
      if (index >= images.length) {
        index = 0;
      }
      showImage(index);
    }
  
    function prevImage() {
      index--;
      if (index < 0) {
        index = images.length - 1;
      }
      showImage(index);
    }
  
    // Event listeners para os botões de navegação
    document.getElementById('right').addEventListener('click', function() {
      clearInterval(interval); // Pára o carrossel ao clicar
      nextImage();
      interval = setInterval(nextImage, intervalTime); // Reinicia o intervalo
    });
    document.getElementById('left').addEventListener('click', function() {
      clearInterval(interval); // Pára o carrossel ao clicar
      prevImage();
      interval = setInterval(nextImage, intervalTime); // Reinicia o intervalo
    });
  
    // Event listeners para pausar ao passar o mouse sobre as imagens
    images.forEach(image => {
      image.addEventListener('mouseenter', function() {
        clearInterval(interval); // Pára o carrossel ao passar o mouse
      });
      image.addEventListener('mouseleave', function() {
        interval = setInterval(nextImage, intervalTime); // Reinicia o intervalo ao retirar o mouse
      });
    });
  
    // Mostrar a primeira imagem ao carregar a página
    showImage(index);
  });
  