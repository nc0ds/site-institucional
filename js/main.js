const btnMenu = document.querySelector('.btn-menu-mobile')
const closeBtn = document.querySelector('.close-btn-mobile')
const menu = document.querySelector('.menu-mobile')
const links = document.querySelectorAll('.menu-mobile-content > a')
const form = document.querySelector('.contato-form')

const handleCloseMenu = () => {
  menu.style.left = '100%'
}

const handleSubmit = e => {
  e.preventDefault()
}

btnMenu.addEventListener('click', () => {
  menu.style.left = '0'
})

closeBtn.addEventListener('click', handleCloseMenu)

links.forEach((item, index) => {
  item.addEventListener('click', handleCloseMenu)
})

form.addEventListener('submit', handleSubmit)
