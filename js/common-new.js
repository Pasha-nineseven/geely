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



    $(".product-info__descr").each(function(){
        var review_full = $(this).html();
        var review = review_full;
        if( review.length > 500 )
        {
            review = review.substring(0, 250);
            $(this).html( review + '<br>' + '<a href="#" class="product-info__toggle">Полное описание</a>' );
        }
        $(this).append('<div class="full_text" style="display: none;">' + review_full + '</div>');
    });

    $("body").on("click", ".product-info__toggle", function(e){
        e.preventDefault();
        $(this).parent().html( $(this).parent().find(".full_text").html() );
    });


    $('.js-app').magnificPopup({
        type: 'inline',
        removalDelay: 500,
        closeBtnInside: true,
        fixedContentPos: true,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            },
            open: function(){
                $('body').addClass('noscroll');
            },
            close: function() {
                 $('body').removeClass('noscroll');
            }
        },
    });


    

})