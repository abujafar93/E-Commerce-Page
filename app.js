const hambMenu = document.querySelector('#btn1');
const hambClose = document.querySelector('#btn2');
const hambDropDownDetails = document.querySelector('.list');
const slides = document.querySelector('.slideImages')
const previousKey = document.querySelector('#previous');
const nextKey = document.querySelector('#next');


// HAMBURGER MENU
hambMenu.addEventListener('click', () => {
  hambMenu.style.display = 'none';
  hambClose.style.display = 'inline';
  hambDropDownDetails.style.display = 'inline';
  previousKey.style.display = 'none'
})

hambClose.addEventListener('click', ()=>{
  hambMenu.style.display = 'inline';
  hambClose.style.display = 'none';
  hambDropDownDetails.style.display = 'none';
  previousKey.style.display = 'inline'
})


// SLIDES SECTION
slides.forEach((image, i) =>{
  nextKey.addEventListener('click', ()=>{
    image.style.display = 'inline';
    // image.style.display = 'none';
  });

})
