function simpleTabs() {
    $(".tabs-menu a").on('click', function (e) {
        var cur = $(this).parents('#tabs-container');
        e.preventDefault();
        $(this).parents('li').addClass("current");
        $(this).parents('li').siblings().removeClass("current");
        var tab = $(this).attr("href");
        cur.find('.tab-content').not(tab).css("display", "none");
        cur.find(tab).fadeIn();
    });
}

//Popup
function popup(popupClass, popupConfig) {
    if (popupClass.length) {
        r_popup = popupClass.fancybox(popupConfig);
        return r_popup;
    }
}

popupCfg = {
    wrapCSS: 'popup-custom',
    padding: ['0', '0', '0', '0'],
    scrolling: 'visible',
    afterShow: function () {
        $('.popup-custom__close').on('click', function (e) {
            e.preventDefault();
            $('.fancybox-close').trigger('click');
        });
    },
}

function mobileNav() {
    if ($('.nav-main').length && $(window).width() <= 1023) {
        $('body').on('swipeleft swiperight', function () {
            $('.menu-icon').trigger('click');
        });
        $('body').on('click touchend', function (e) {
            if ($(e.target).closest('.navigation').length === 0 && $('.navigation.active').length) {
                $('.menu-icon').trigger('click');
            }
        });
    }
    $('.menu-icon').on('click', function () {
        if ($('.nav-main').length && $(window).width() <= 1023) {
            $(this).toggleClass('active');
            $('.navigation').toggleClass('active');
        }
    });
}

function spinner() {
    if ($('.spinner').length) {
        $(".spinner").spinner({
            min: 1,
            step: 1,
            start: 1,
            numberFormat: "C"
        });
    }
}

function yandexMap() {
    if ($('#map-1').length) {
        $.getScript("http://api-maps.yandex.ru/2.0/?load=package.full&amp;lang=ru-RU", function () {
            var myMap0,
                    myMap1,
                    myPlacemark0,
                    myPlacemark1;

            function init() {
                myMap0 = new ymaps.Map("map-1", {
                    center: [55.807749, 37.570132],
                    zoom: 16
                });

                myMap1 = new ymaps.Map("map-2", {
                    center: [55.807749, 37.570132],
                    zoom: 16
                });

                myPlacemark0 = new ymaps.Placemark([55.807749, 37.570132], {
                    hintContent: 'Москва!',
                    balloonContent: 'Москва'
                });

                myPlacemark1 = new ymaps.Placemark([55.807749, 37.570132], {
                    hintContent: 'Москва!',
                    balloonContent: 'Москва'
                });


                myMap0.geoObjects.add(myPlacemark0);
                myMap1.geoObjects.add(myPlacemark1);
            }

            ymaps.ready(init);
        });
    }
}

function whyUsMiniControl() {
    if ($('.whu-us-list').length) {
        $('.whu-us-list__title').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('whu-us-list__title--active')
                    .siblings('.whu-us-list__inner').slideToggle(300)
                    .parent().toggleClass('whu-us-list__item--blue');
        });
    }
}

function mainBannerSlider() {
    if ($('.banner__list').length) {
        mainBanner = $('.banner__list').bxSlider(mainBannerCfg);
    }
}

function mainBrandCarusel() {
    if ($('.brands-mini__list').length && !$('.brands-mini .bx-wrapper').length) {
        mainBrand = $('.brands-mini__list').bxSlider(brandCaruselCfg);
    }
    if ($('.brands-mini .bx-wrapper').length) {
        if ($(window).width() <= 1179) {
            mainBrand.reloadSlider(brandCaruselCfg1024)
        }
        if ($(window).width() <= 767) {
            mainBrand.reloadSlider(brandCaruselCfg480)
        }
        if ($(window).width() <= 479) {
            mainBrand.reloadSlider(brandCaruselCfg360)
        }
    }
}

function reloadSlider() {

}

mainBannerCfg = {
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    auto: true,
    pause: 3000,
    pager: false,
}

brandCaruselCfg = {
    minSlides: 6,
    maxSlides: 6,
    moveSlides: 2,
    auto: false,
    pager: false,
    slideWidth: 187,
}

brandCaruselCfg1024 = {
    minSlides: 5,
    maxSlides: 5,
    moveSlides: 2,
    auto: false,
    pager: false,
    slideWidth: 187,
}

brandCaruselCfg480 = {
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
    auto: false,
    pager: false,
    slideWidth: 160,
    slideMargin: 10,
}

brandCaruselCfg360 = {
    minSlides: 2,
    maxSlides: 2,
    moveSlides: 1,
    auto: false,
    pager: false,
    slideWidth: 160,
    slideMargin: 10,
}

function productPreviewSlider() {
    if ($('.product__slider-list').length) {
        productSlider = $('.product__slider-list').bxSlider(productSliderCfg);
    }
}

productSliderCfg = {
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    auto: false,
    pager: true,
    pagerCustom: '#bx-pager'
}

function navMobileControl() {
    if ($('.nav-main__hamburger').length) {
        $('.nav-main__hamburger').on('click', function (e) {
            e.stopPropagation();
            $(this).toggleClass('nav-main__hamburger--active');
            $('.nav-main-list').slideToggle(300).toggleClass('active');
        });
        $('body').on('click', function (e) {
            if ($(e.target).closest('.nav-main-list').length === 0 && $('.nav-main-list.active').length) {
                $('.nav-main__hamburger').trigger('click');
            }
        });
    }
}

function filtersFormControl() {
    if ($('.filters-form__title').length) {
        $('.filters-form__title').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('filters-form__title--active');
            $('.filters-form__inner').slideToggle(300);
        });
    }
}

/*function submenuControl() {
 if ($('.nav-main__item').length && $(window).width() >= 767) {
 $('.nav-main__item').hover(function (e) {
 $('.nav-main__submenu-menu').hide();
 $('.nav-main__submenu').hide();
 e.preventDefault();
 e.stopPropagation();
 $(this).addClass('nav-main__item--active').parent().addClass('nav-main-list__item--active')
 .siblings().removeClass('nav-main-list__item--active').find('.nav-main__item').removeClass('nav-main__item--active');

 var submenuTarget = $(this).attr('data-submenu');
 $('.nav-main__submenu').addClass('nav-main__submenu--open').fadeIn(300);
 $(submenuTarget).fadeIn().siblings('.nav-main__submenu-menu').fadeOut(0);
 });
 //$('.nav-main__submenu').on('mouseleave',function (e) {
 $('body').on('click', function(e) {
 if ($(e.target).closest('.nav-main__submenu').length === 0 && $('.nav-main__submenu--open').length) {
 $('.nav-main__submenu').removeClass('nav-main__submenu--open').fadeOut(0);
 $('.nav-main__item--active').removeClass('nav-main__item--active');
 $('.nav-main-list__item--active').removeClass('nav-main-list__item--active');
 }
 });
 }
 if ($('.nav-main__item').length && $(window).width() <= 479) {
 $('.nav-main__item').hover(function (e) {
 e.preventDefault();
 $('.nav-main__submenu').hide();
 $('.nav-main__submenu-menu').hide();
 $(this).siblings('.nav-main__submenu-menu').slideToggle(300);
 console.log($(this).parent().siblings('li').find($('.nav-main__submenu-menu')))
 $(this).parent().siblings('li').find($('.nav-main__submenu-menu')).slideUp(300);
 });
 }

 }*/
 /* комментарии 24.03.2017
function submenuControl() {
    if ($('.nav-main__item').length && $(window).width() >= 767) {
        $('.nav-main-list__item').hover(function (e) {

            //e.preventDefault();
            //e.stopPropagation();
//            $(this).addClass('nav-main__item--active').addClass('nav-main-list__item--active')
//                    .siblings().removeClass('nav-main-list__item--active').find('.nav-main__item').removeClass('nav-main__item--active');
//
            var submenuTarget = $(this).find('a.nav-main__item').attr('data-submenu');
//            $('.nav-main__submenu').addClass('nav-main__submenu--open').fadeIn(300);
//            $(submenuTarget).fadeIn().siblings('.nav-main__submenu-menu').fadeOut(0);
//
            //$(submenuTarget).parent().css('left', $(this).offset().left);
            showFirst(submenuTarget);
        }
        ,
                function () {
                  */

//                    ns4 = (document.layers) ? true : false
//                    ie4 = (document.all) ? true : false
//
//                    function init() {
//                        if (ns4) {
//                            document.captureEvents(Event.MOUSEMOVE);
//                        }
//                        document.onmousemove = mousemove;
//                    }
//                    function mousemove(event) {
//                        var mouse_x = y = 0;
//                        if (document.attachEvent != null) {
//                            mouse_x = window.event.clientX;
//                            mouse_y = window.event.screenY;
//                        } else if (!document.attachEvent && document.addEventListener) {
//                            mouse_x = event.clientX;
//                            mouse_y = event.screenY;
//                        }
//                        status = "x = " + mouse_x + ", y = " + mouse_y;
//                        var nav_y = $('nav.nav-main').offset().top;
//                        console.log(nav_y + ' ' + mouse_y);
//                        if (mouse_y < nav_y) {
//                            $('.nav-main__submenu').removeClass('nav-main__submenu--open').fadeOut(0);
//                            $('.nav-main__item--active').removeClass('nav-main__item--active');
//                            $('.nav-main-list__item--active').removeClass('nav-main-list__item--active');
//                        }
//                        //document.getElementById('xy').innerHTML = "x = " + mouse_x + ", y = " + mouse_y;
//                    }
//                    init();

                    //if ($(e.target).closest('.nav-main__submenu').length === 0 && $('.nav-main__submenu--open').length) {
                    //$('.nav-main__submenu').removeClass('nav-main__submenu--open').fadeOut(0);
                    //$('.nav-main__item--active').removeClass('nav-main__item--active');
                    //$('.nav-main-list__item--active').removeClass('nav-main-list__item--active');
                    //}
/*
                }
        );
        $('body').on('click', function (e) {
            if ($(e.target).closest('.nav-main__submenu').length === 0 && $('.nav-main__submenu--open').length) {
                $('.nav-main__submenu').removeClass('nav-main__submenu--open').fadeOut(0);
                $('.nav-main__item--active').removeClass('nav-main__item--active');
                $('.nav-main-list__item--active').removeClass('nav-main-list__item--active');
            }
        });
    }
    if ($('.nav-main__item').length && $(window).width() <= 479) {
        $('.nav-main__item').on('click', function (e) {
            e.preventDefault();
            $(this).siblings('.nav-main__submenu-menu').slideToggle(300);
            console.log($(this).parent().siblings('li').find($('.nav-main__submenu-menu')))
            $(this).parent().siblings('li').find($('.nav-main__submenu-menu')).slideUp(300);
        });
    }

}
*/
function navMobileSubmenuFix() {
    if ($(window).width() <= 767) {
        $('.nav-main__item').each(function (e) {
            var insert = $(this).attr('data-submenu');
            $(insert).insertAfter($(this));
        });
    } else {
        $('.nav-main__submenu-menu').appendTo('.nav-main__submenu');
        $('.nav-main-list').removeAttr('style');
    }
}

$(document).on('ready', function () {

    //GLOBAL
    popup($('.popup-call'), popupCfg);
    popup($('.product__slider-item'), popupCfg);
    navMobileControl();
    // submenuControl(); комментарий 24.03.2017
    navMobileSubmenuFix();

    //MAIN PAGE
    whyUsMiniControl();
    mainBannerSlider();
    mainBrandCarusel();

    //CATEGORY LIST PAGE
    filtersFormControl();
    //priceSlider();

    //CONTACTS PAGE
    yandexMap();

    //CART PAGE
    spinner();

    //PRODUCT CARD PAGE
    productPreviewSlider();
    simpleTabs();


    $('#save_pay_sys').click(function (e) {
        $item = $('.user-info__payment-list-item input:checked').val();
        console.log($item);
        $.ajax({
            url: '/ajax/user.php?type=pay&pay=' + $item,
            success: function () {
                $('#save_pay_sys').html('Сохранено');
                setTimeout(function () {
                    $('#save_pay_sys').html('Сохранить');
                }, 1000);
            }
        });
    });

    $('.user-info__adress-change').click(function (e) {
        e.preventDefault();
        name = $(this).data('name');
        id = $(this).data('id');
        sort = $(this).data('sort');

        $new = BX.create('input', {props: {id: 'element', value: id, type: 'hidden'}});
        $('.user-info__adresses-new').append($new);
        $('.user-info__adresses-new-input').val(name);
        $('#sort').val(sort);
        $('.user-info__adresses-new-save').html('Обновить');
    });

    $('.user-info__adresses-new-save').click(function (e) {
        e.preventDefault();
        name = $('.user-info__adresses-new-input').val();
        id = $('#element').val();
        sort = $('#sort').val();
        $.ajax({
            url: '/ajax/user.php?type=adress&adress=' + name + '&element=' + id + '&sort=' + sort,
            success: function () {
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            }
        });
    });
});

$(window).on('resize', function () {

    //GLOBAL
    mainBrandCarusel();
    navMobileSubmenuFix();

});


$(document).ready(function () {
  $(".nav-main__item").on("click", function(e){
    e.preventDefault();
    $(this).parents(".nav-main-list__item").siblings().find(".nav-main__submenu").removeClass('show-mobile-menu')
    $(this).siblings(".nav-main__submenu").toggleClass('show-mobile-menu');
  });

  $(".nav-main__submenu-menu-block").on("click", function(e){
    e.preventDefault();
    $(this).siblings().children(".submenu-3").removeClass('show-mobile-menu');
    $(this).children(".submenu-3").addClass('show-mobile-menu');
  });
});
