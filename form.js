document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value;
    let cpfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
        .replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
        .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
    e.target.value = cpfPattern;
});

const telefone = document.getElementById('telefone');

// adiciona listener para o evento input
telefone.addEventListener('input', function() {
    // remove qualquer caractere que não seja digito numerico
    let cleanedValue = this.value.replace (/\D/g, '');

    // limita o comprimento maximo
    if (cleanedValue.length > 11) {
            cleanedValue = cleanedValue.slice(0, 11);
    }

// formatação dos números
let formattedValue = '';

// Insere os primeiros dois primeiros números entre parenteses
if (cleanedValue.length >= 2) {
    formattedValue += '(' + cleanedValue.substring(0, 2) + ')';
}
else if (cleanedValue.length > 0) {
    formattedValue += '(' + cleanedValue.substring(0, cleanedValue.length);
}

// adiciona o hifen depois de 5 digitos
if (cleanedValue.length > 7) {
    formattedValue += '-' + cleanedValue.substring(7);
}

// define o valor formatado no input
this.value = formattedValue;

});
















