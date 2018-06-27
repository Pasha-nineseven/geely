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
})