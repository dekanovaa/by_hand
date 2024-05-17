const button = document.getElementById("nav__btn");
const subbutton = document.getElementById("nav__subbtn");
const modal = document.querySelector(".modal");
button.addEventListener("click" , function(){
    modal.style.display = "block"
    subbutton.style.display = "block"
})
subbutton.addEventListener("click",function(){
    modal.style.display = "none"
    subbutton.style.display = "none"
    
})

window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });