// Function for display contact in HTML on click
function contactDisplay(){
    /* OPEN CONTACT */
    let divContact = document.querySelector('.contact')    
    let linkContact = document.querySelector('#contact-link')        

    linkContact.addEventListener('click',() => {
        divContact.style.display = 'inline-block'
    })

    /* CLOSE CONTACT */
    let btnClose = document.querySelector('.contact button')
    btnClose.addEventListener('click', () => {
        divContact.style.display = 'none'
    })
}
contactDisplay()