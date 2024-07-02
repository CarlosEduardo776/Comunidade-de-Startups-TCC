
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


const formato = {

    phone (value) {
  
      return value
  
        .replace(/\D/g, '')
  
        .replace(/(\d{2})(\d)/, '($1)$2')
  
        .replace(/(\d{4})(\d)/, '$1-$2')
  
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
  
        .replace(/(-\d{4})\d+?$/, '$1')
  
    }
  
  }
  
   
  
  document.querySelectorAll('input').forEach(($input) => {
  
    const field = $input.dataset.js
  
    $input.addEventListener('input', (e) => {
  
      e.target.value = formato[field](e.target.value)
  
    }, false)
  
  })

