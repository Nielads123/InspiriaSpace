let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('active');   
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    menu.classList.remove('fa-bars');
    navbar.classList.remove('active');   
}