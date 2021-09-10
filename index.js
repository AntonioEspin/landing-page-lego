const modal = document.querySelector('.modal')
const allButtonsImages = document.querySelectorAll('.buttonImage')
const closeButton = document.querySelector('.modal__content--close')

allButtonsImages.forEach(simpleButton => {
  simpleButton.addEventListener('click', ()=>{
    modal.classList.remove('hidden')
    modal.classList.add('visible')
  })
})

closeButton.addEventListener('click', () => {
  modal.classList.remove('visible')
  modal.classList.add('hidden')
})