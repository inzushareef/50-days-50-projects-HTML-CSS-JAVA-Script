const cards = document.querySelectorAll('.card')

cards.forEach(card =>{
    card.addEventListener('click', () =>{
        removedActiveClasses()
        card.classList.add('active')

    })

})

function removedActiveClasses(){
    cards.forEach(card => {
        card.classList.remove('active')
    })
}

