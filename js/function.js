const cellphone = window.matchMedia('screen and (max-width: 479px)')
console.log(cellphone);
const menu = document.querySelector('.Navbar');
const burgerButton = document.querySelector('#burger-menu');

cellphone.addListener(validation);

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener('click', hideShow)
  } else {
    burgerButton.removeEventListener('click', hideShow)
  }
}

validation(cellphone);

function hideShow() {
        if (menu.classList.contains('is-active')) {
          menu.classList.remove('is-active');
        } else {
          menu.classList.add('is-active');
        }
      }
