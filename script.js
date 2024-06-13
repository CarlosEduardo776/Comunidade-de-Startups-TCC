// Função para exibir o modal de contatos
function displayContactModal() {
    // Elementos do modal
    let modal = document.getElementById('modal');
    let closeButton = document.getElementsByClassName('close')[0];

    // Evento de clique para exibir o modal quando o link "Contatos" é clicado
    document.getElementById('contact-link').addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Evento de clique para fechar o modal quando o botão de fechar é clicado
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Evento de clique fora do modal para fechar
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}

// Chama a função para exibir o modal de contatos
displayContactModal();

// AutoType
function autoText(){
    var typed = new Typed('#auto-text', {
        strings: ['<h3>Conectando mentes inovadoras e impulsionando o futuro das startups.</h3>', '<h3>Conosco cada conexão é uma porta para o progresso.</h3>','<h3>Aproveite a vida com a InovaNetwork, juntos construindo o amanhã da inovação.</h3>'],
        typeSpeed: 50,
        showCursor: false
    })    
}
autoText()