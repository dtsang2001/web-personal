

function moveBox(event){
    var nav = document.getElementById('nav-mobile');
    nav.classList.remove('show-nav-mobile');

    var itemMenu = document.getElementsByClassName('item-menu');
    for(let i = 0; i < itemMenu.length; i++){
        itemMenu[i].classList.remove('active');
    }
    event.classList.add('active');
    var element = event.getAttribute('name');
    const goDiv = document.getElementById(element);
    goDiv.scrollIntoView({ behavior: 'smooth', block: 'center',inline: "center" });
};



window.addEventListener('scroll', function() {

    var itemMenu = document.getElementsByClassName('item-menu');
    var itemMobi = document.getElementsByClassName('item-mobile');
    for(let i = 0; i < itemMenu.length; i++){
        itemMenu[i].classList.remove('active');
    }
    for(let i = 0; i < itemMobi.length; i++){
        itemMobi[i].classList.remove('active');
    }

    if (pageYOffset >= 0 && pageYOffset < 400) {
        itemMenu[0].classList.add('active');
        itemMobi[0].classList.add('active');
    }else if (pageYOffset >= 400 && pageYOffset < 1100) {
        itemMenu[1].classList.add('active');
        itemMobi[1].classList.add('active');
    }else if (pageYOffset >= 1100 && pageYOffset < 1700) {
        itemMenu[2].classList.add('active');
        itemMobi[2].classList.add('active');
    }else if (pageYOffset >= 1700 && pageYOffset < 2500) {
        itemMenu[3].classList.add('active');
        itemMobi[3].classList.add('active');
    }else if (pageYOffset >= 2500 && pageYOffset < 3100) {
        itemMenu[4].classList.add('active');
        itemMobi[4].classList.add('active');
    }else if (pageYOffset >= 3100 && pageYOffset < 3700) {
        itemMenu[5].classList.add('active');
        itemMobi[5].classList.add('active');
    }else if (pageYOffset >= 3700 && pageYOffset < 4200) {
        itemMenu[6].classList.add('active');
        itemMobi[6].classList.add('active');
    }

});



// SLIDE SHOW

var slideIndex;

function showSlides() { 
    var slide = document.getElementsByClassName('slide');
    var dot = document.getElementsByClassName('dot');

    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }

    for(let i = 0; i < dot.length; i++){
        dot[i].classList.remove('active-dot');
    }

    slide[slideIndex].style.display = "block";
    dot[slideIndex].classList.add('active-dot');

    slideIndex++;

    if (slideIndex > slide.length - 1) {
        slideIndex = 0
    }
}

setInterval(showSlides, 8000);

showSlides(slideIndex = 0);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function open_menu(){
    var nav = document.getElementById('nav-mobile');

    nav.classList.add('show-nav-mobile');
}

function close_menu(){
    var nav = document.getElementById('nav-mobile');
    
    nav.classList.remove('show-nav-mobile');
}