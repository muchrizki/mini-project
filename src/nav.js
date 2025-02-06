const Nav = document.querySelector('.nav')
const btnNav = document.querySelector('.btn-nav')
const cekNav = document.querySelector('.check-nav')

btnNav.addEventListener('click', () => {
    if(cekNav.checked) {
        Nav.classList.remove('hidden')
        Nav.classList.add('absolute')
    } else {
        Nav.classList.remove('absolute')
        Nav.classList.add('hidden')
    }
})