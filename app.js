const hambMenu = document.querySelector('#btn1');
const hambClose = document.querySelector('#btn2');
const hambDropDownDetails = document.querySelector('.list');

hambMenu.addEventListener('click', () => {
  hambMenu.style.display = 'none';
  hambClose.style.display = 'inline';
  hambDropDownDetails.style.display = 'inline';
})

hambClose.addEventListener('click', ()=>{
  hambMenu.style.display = 'inline';
  hambClose.style.display = 'none';
  hambDropDownDetails.style.display = 'none';
})