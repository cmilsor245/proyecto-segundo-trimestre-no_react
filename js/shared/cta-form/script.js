const ACTIVATION_BUTTON = document.querySelector('.cta-btn')
const FORM_SECTION = document.querySelector('.cta-form-section')
const OVERLAY = document.querySelector('.cta-blur-overlay')
const RESET_AND_CLOSE_BTN = document.querySelector('.cta-reset')
const ACTIVATION_BUTTON_CTA_SIDE_MENU = document.querySelector('.side--menu-cta-button')

ACTIVATION_BUTTON.addEventListener('click', function() {
  FORM_SECTION.classList.remove('hidden')
  OVERLAY.classList.remove('hidden')
})

OVERLAY.addEventListener('click', function() {
  FORM_SECTION.classList.add('hidden')
  OVERLAY.classList.add('hidden')
})

RESET_AND_CLOSE_BTN.addEventListener('click', function() {
  FORM_SECTION.classList.add('hidden')
  OVERLAY.classList.add('hidden')
})

ACTIVATION_BUTTON_CTA_SIDE_MENU.addEventListener('click', function() {
  SIDE_MENU.classList.remove('show-menu')
  SIDE_MENU.classList.add('hide-menu')
  SIDE_MENU_OVERLAY.classList.add('hidden')
  SIDE_MENU.style.display = 'none'

  FORM_SECTION.classList.remove('hidden')
  OVERLAY.classList.remove('hidden')
})