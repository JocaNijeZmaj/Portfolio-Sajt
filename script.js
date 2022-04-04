const toggler = document.querySelector('.toggler')
const navI = document.querySelectorAll('.nav_item')


toggler.addEventListener ('click', () => {
    navI.forEach(el => {
        el.classList.toggle('active')
    })
})
