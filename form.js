document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value;
    let cpfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
        .replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
        .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
    e.target.value = cpfPattern;
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
















