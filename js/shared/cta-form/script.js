const ACTIVATION_BUTTON = document.querySelector('.cta-btn')
const FORM_SECTION = document.querySelector('.cta-form-section')
const OVERLAY = document.querySelector('.cta-blur-overlay')
const RESET_AND_CLOSE_BTN = document.querySelector('.cta-reset')

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