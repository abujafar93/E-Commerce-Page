const hambMenu = document.querySelector('#btn1');
const hambClose = document.querySelector('#btn2');
const hambDropDownDetails = document.querySelector('.list');
const slides = document.querySelector('.slideImages')
const previousKey = document.querySelector('#previous');
const nextKey = document.querySelector('#next');
let productDisplay = document.querySelector('.displayImage');
let product1 = document.querySelector('#thumb1');
let product2 = document.querySelector('#thumb2');
let product3 = document.querySelector('#thumb3');
let product4 = document.querySelector('#thumb4');
const decreButton = document.querySelector('.decre img');
const increButton = document.querySelector('.incre img');



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
// slides.forEach((image, i) =>{
//   nextKey.addEventListener('click', ()=>{
//     image.style.display = 'inline';
//   });

// })


// DISPLAY PRODUCTS ON DISPLAY SECTION
thumb1.addEventListener('click', ()=>{
  productDisplay.innerHTML = `<img src="images/image-product-1.jpg" alt=""></img>`;
  console.log(productDisplay)
})

thumb2.addEventListener('click', ()=>{
  productDisplay.innerHTML = `<img src="images/image-product-2.jpg" alt=""></img>`;
  console.log(productDisplay)
})

thumb3.addEventListener('click', ()=>{
  productDisplay.innerHTML = `<img src="images/image-product-3.jpg" alt=""></img>`;
  console.log(productDisplay)
})

thumb4.addEventListener('click', ()=>{
  productDisplay.innerHTML = `<img src="images/image-product-4.jpg" alt=""></img>`;
  console.log(productDisplay)
})

// CART PRODUCT QUANTITY
increButton.addEventListener('click', ()=>{
  let quantityDisplay = document.querySelector('.quantity h4');
  quantityDisplay.innerHTML = 0;
 for(i=0; i <= 30; i++){
  quantityDisplay.innerHTML = i;
  console.log(quantityDisplay.innerHTML);
 }
})

decreButton.addEventListener('click', ()=>{
  let quantityDisplay = document.querySelector('.quantity h4');
  quantityDisplay.innerHTML = 0;
 for(i; i >= 0; i--){
  quantityDisplay.innerHTML = i;
  console.log(quantityDisplay.innerHTML);
 }  
})