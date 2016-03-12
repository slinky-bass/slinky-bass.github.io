$(document).ready(function(){

  //console.log("test");

  //################ MAKE NAV STICKY ON SCROLL ##################
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $(".nav-wrapper").addClass("sticky");
    } else {
      $(".nav-wrapper").removeClass("sticky");
    }   
  });
  //################ MAKE NAV STICKY ON SCROLL ##################

  //################## NAV ACTIVE HIGHLIGHT #####################
  $(".main-nav ul li a").on("click", function(event){
    event.preventDefault();
    $(".main-nav ul li a").removeClass("active");
    $(this).addClass("active");
  });
  //################## NAV ACTIVE HIGHLIGHT #####################

  //##################### HAMBURGER MENU ########################
  $(".hamburger").on("click", function() {
    $(".main-nav").slideToggle();
  });
   $(".main-nav ul li a").on("click", function(){
    var browserWidth = $(document).width();
    if (browserWidth <= 580) {
      $(".main-nav").slideToggle();
    } else {
      $(".main-nav").show();
    } 
  });
  //##################### HAMBURGER MENU ########################

  //#################### SCROLL TO SECTION ######################
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500 );
          return false;
        }
      }
    });
  });
  //################### SCROLL TO SECTION #####################
});