//mobile menu

const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});





//Modals
var button = document.getElementById('button');
var modal = document.getElementById('page-modal');
var close = document.getElementsByClassName('modal-close')[0];

button.onclick =function(){
    modal.style.display ='block';
}
close.onclick =function() {
    modal.style.display="none";
}
window.onclick =function(event){
    console.log(event);
    if(event.target.className ==='modal-background') {
        modal.style.display = 'none';
    }
}
