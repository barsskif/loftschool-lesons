const controlls = document.querySelectorAll('.color__filter__item');
const activeClass = 'color__filter__item--active';
const images = document.querySelectorAll('.tshirt__img');

controlls.forEach((controlls) => {
  controlls.addEventListener('click', (e) => {
    e.preventDefault()
    const attr = controlls.getAttribute('data-filter')
    images.forEach((images) => {
      images.setAttribute('src', attr)
    })
  });
});