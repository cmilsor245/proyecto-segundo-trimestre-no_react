const CTA_ACTIVATION_BUTTON = document.querySelector('.cta-btn')
const CTA_FORM_SECTION = document.querySelector('.cta-form-section')
const BLUR_OVERLAY = document.querySelector('.cta-blur-overlay')

CTA_ACTIVATION_BUTTON.addEventListener('click', function() {
  CTA_FORM_SECTION.classList.toggle('hidden')
  BLUR_OVERLAY.classList.toggle('hidden')
})