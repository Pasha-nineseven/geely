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
    });
    $("body").on("click", ".vakancies__close", function(e){
        e.preventDefault();
        $(this).parents('.vakancies__item').removeClass('active');
    });
})