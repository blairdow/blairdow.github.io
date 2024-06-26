///////////////////////////////
// MOBILE NAV MENU ANIMATION
//////////////////////////////
const body = document.body
const openButton = document.getElementById('contact-button');
const closeButton = document.getElementById('close-button');
const modalEl = document.getElementById('modal')
const overlay = document.getElementById('modal-overlay')
// const openSvg = document.querySelector('svg#open-svg') //svgs are the menu button hamburger and X
// const closeSvg = document.querySelector('svg#close-svg')

modalEl.addEventListener('animationend', (e) => {
  if(e.animationName === 'rotateOut') {
    modalEl.classList.remove('animate-rotate-out')
    overlay.classList.remove('animate-fade-out-delay')
    toggleClass([modalEl, overlay], 'hidden')
    modalEl.classList.add('animate-rotate-in')
    overlay.classList.add('animate-fade-in')
  }
  if(e.animationName === 'rotateIn') {
    modalEl.classList.remove('animate-rotate-in')
    overlay.classList.remove('animate-fade-in')
  }
})

openButton.onclick = (event) => {
    //menu is closed, this openButtons animate-in
    // toggleClass([openSvg, closeSvg], 'hidden')
    toggleClass([modalEl, overlay], 'hidden')
    body.classList.add('modal-open')
}

closeButton.onclick = (event) => {
    //menu is open, adding class openButtons animate-out 
   if(!(modalEl.classList.contains('hidden'))) {
      closeNav()
    }
}

//these event listeners close the menu if user clicks outside of the menu or pushes Esc white it is open
document.addEventListener( "click", e => {
  if(!(modalEl.classList.contains('hidden')) && e.target.matches("#modal-overlay")) {
    closeNav()
  } else { return false; }
})
document.addEventListener('keyup', e => {
  if(!(modalEl.classList.contains('hidden')) && e.key === 'Escape') {
    closeNav()
  } else { return false; }
})

function closeNav() {
//   toggleClass([openSvg, closeSvg], 'hidden')
  modalEl.classList.add('animate-rotate-out')
  overlay.classList.add('animate-fade-out-delay')
  body.classList.remove('modal-open')

}

function toggleClass(elArray, className) {
  elArray.map(el => {
    el.classList.toggle(className)
  })
}
///////////////////////////////
// END MOBILE NAV MENU ANIMATION
//////////////////////////////

