const toggler = document.getElementsByClassName('toggler')[0]
const navI = document.getElementsByClassName('nav_item')[0]

toggler.addEventListener ('click', () => {
    navI.classList.toggle('active')
})