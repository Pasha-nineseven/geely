$(document).ready(function() {
	$("body").on("click", ".top-nav__item--sub", function(){
        $(this).find('.top-nav-submenu').fadeIn(100);
    });

    $(document).click(function (e){
        var div = $(".top-nav__item--sub");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $(".top-nav-submenu").fadeOut(100);
        }
    });


    $(".nwmarkup.burger").click(function () {
	  	if(!$(this).hasClass('back')) {
	    	$('.mobile-navigation').slideToggle()
	  	} else {
	    	$('.nwmarkup.burger').addClass('back')
	  	}
	});


    //MOBILE SUBMENU
	$("body").on("click", ".mobile-sub--link", function(e){
		e.preventDefault();
        $(this).next('.mobile-submenu').slideToggle();
    });

    //ACCORDEON
    $("body").on("click", ".vakancies__link", function(e){
        e.preventDefault();
        $(this).parents('.vakancies__item').addClass('active');
        $(this).next('.vakancies__info').slideDown(10);
    });
    $("body").on("click", ".vakancies__close", function(e){
        e.preventDefault();
        $(this).parents('.vakancies__item').removeClass('active');
        $(this).parents('.vakancies__item').find('.vakancies__info').slideUp();
    });


    //MAP-SHOW
    $("body").on("click", ".header-address__link", function(e){
        e.preventDefault();
        $(this).addClass('active');
        $('.header-address__map').slideDown();
    });
    $("body").on("click", ".contact-address-wrap .btn", function(e){
        e.preventDefault();
        $(".header-address__link").addClass('active');
        $('.header-address__map').slideDown();
    });
    //MAP-CLOSE
    $("body").on("click", ".map__close", function(e){
        e.preventDefault();
        $(".header-address__link").removeClass('active');
        $('.header-address__map').slideUp();
    });

    $(document).click(function (e){
        var div = $(".header-address,.new-markup .btn");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $(".header-address__link").removeClass('active');
            $('.header-address__map').slideUp();
        }
    });
})