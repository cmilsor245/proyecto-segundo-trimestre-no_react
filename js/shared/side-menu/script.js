const ACTIVATION_BUTTON_1 = document.querySelector('.icono-menu-lateral')
const ACTIVATION_BUTTON_2 = document.querySelector('.icono-menu-lateral-nav')
const SIDE_MENU = document.querySelector('.side-menu-wrapper')
const SIDE_MENU_OVERLAY = document.querySelector('.side--menu-blur-overlay')
const CLOSE_BTN = document.querySelector('.side--menu-close-icon')

ACTIVATION_BUTTON_1.addEventListener('click', function() {
  SIDE_MENU.classList.add('show-menu')
  SIDE_MENU.classList.remove('hide-menu')
  SIDE_MENU_OVERLAY.classList.remove('hidden')
  SIDE_MENU.style.display = 'block'
})

ACTIVATION_BUTTON_2.addEventListener('click', function() {
  SIDE_MENU.classList.add('show-menu')
  SIDE_MENU.classList.remove('hide-menu')
  SIDE_MENU_OVERLAY.classList.remove('hidden')
  SIDE_MENU.style.display = 'block'
})

SIDE_MENU_OVERLAY.addEventListener('click', function() {
  SIDE_MENU.classList.remove('show-menu')
  SIDE_MENU.classList.add('hide-menu')
  SIDE_MENU_OVERLAY.classList.add('hidden')
  SIDE_MENU.style.display = 'none'
})

CLOSE_BTN.addEventListener('click', function() {
  SIDE_MENU.classList.remove('show-menu')
  SIDE_MENU.classList.add('hide-menu')
  SIDE_MENU_OVERLAY.classList.add('hidden')
  SIDE_MENU.style.display = 'none'
})