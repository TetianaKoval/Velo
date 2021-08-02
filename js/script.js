//@prepros-append jq-start.js
//@prepros-append jq-end.js

  //для бургера в меню (додає клас active)
  
  let menuIcon = document.querySelectorAll(".menu__icon");
  menuIcon[0].addEventListener("click", function active(){
    const iconMenu = document.querySelectorAll(".icon-menu");
    const menuBody = document.querySelectorAll(".menu__body");
    const body = document.querySelectorAll("body");
    iconMenu[0].classList.toggle("active");
    menuBody[0].classList.toggle("active");
    body[0].classList.toggle("lock");

  }) 

    // Те саме на jQuery

    // $('.icon-menu').click(function(event){
    //   $(this).toggleClass('active');
    //   $('.menu__body').toggleClass('active');
    //   $('body').toggleClass('lock');
    // });
  

// вставка картинки фоном///////////////
function ibg(){

  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
  ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
  }
  }
  
  ibg();
  ////////////////////////////////////////


  // налаштування слайдера Slick

  $(document).ready(function(){
    $('.slider__body').slick({
      dots: true,
      arrows:false,
      accessibility: false,
      slidesToShaw: 1,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      nextArrow:'<button type="button" class"slick-next"></button>',
      prevArrow:'<button type="button" class"slick-prev"></button>',
      responsive:[{
        breakpoint: 768,
        settings:{}
      }]
    });
  });

