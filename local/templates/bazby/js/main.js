
$(document).ready(function () {
  $(".nav-main__item").on("click", function(e){
    // e.preventDefault();
    $(this).parents(".nav-main-list__item").siblings().find(".nav-main__submenu").removeClass('show-mobile-menu')
    $(this).siblings(".nav-main__submenu").toggleClass('show-mobile-menu');
  });

  $(".nav-main__submenu-menu-block").on("click", function(e){
    // e.preventDefault();
    $(this).siblings().children(".submenu-3").removeClass('show-mobile-menu');
    $(this).children(".submenu-3").addClass('show-mobile-menu');
  });
});
