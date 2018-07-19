

$(document).ready(function() {
	// STEPS

    //step1
    $('input:radio[name="select-auto"]').change(function(){
        var step1_view = $(".service-view__item[data-step=1]");
        var step2_view = $(".service-view__item[data-step=2]");

        var step1_link = $(".service-steps__link[data-step=1]");

        if (this.checked) {
            $('.service-view__item').hide();
            step2_view.fadeIn();

            step1_link.parents('.service-steps__item').find('.service-steps-choice').fadeIn();

            $('.service-steps__link').removeClass('active');
            $('.service-steps__link[data-step=2]').addClass('active');

            //set img
            var imgSrc = $(this).next('label').find('img').attr('src');
            step1_link.next('.service-steps-choice').find('.service-steps-choice__img img').attr('src', imgSrc);
            //set title
            var title = $(this).next('label').find('.select-txt').text();
            step1_link.next('.service-steps-choice').find('.service-steps-choice__title').text(title);
        }
    });
    //step2
    $('input:radio[name="select-engine"]').change(function(){
        var step3_view = $(".service-view__item[data-step=3]");

        var step2_link = $(".service-steps__link[data-step=2]");

        if (this.checked) {
            $('.service-view__item').hide();
            step3_view.fadeIn();

            step2_link.parents('.service-steps__item').find('.service-steps-choice').fadeIn();

            $('.service-steps__link').removeClass('active');
            $('.service-steps__link[data-step=3]').addClass('active');

            var title = $(this).next('label').find('.select-txt').text();
            step2_link.next('.service-steps-choice').find('.service-steps-choice__title').text(title);
        }
    });

    //step1 back
    $("body").on("click", ".new-choice--back_1", function(e){
		e.preventDefault();

		var step1_view = $(".service-view__item[data-step=1]");

		var step1_link = $(".service-steps__link[data-step=1]");

        $('.service-steps__link').removeClass('active');
        $('.service-steps__link[data-step=1]').addClass('active');

        $('.service-view__item').hide();
        step1_view.fadeIn();

        step1_link.parents('.service-steps__item').find('.service-steps-choice').fadeOut(0);

        step1_view.find("input:radio").prop('checked',false);
    });

    //step2 back
    $("body").on("click", ".new-choice--back_2", function(e){
		e.preventDefault();

		var step2_view = $(".service-view__item[data-step=2]");

		var step2_link = $(".service-steps__link[data-step=2]");

        $('.service-steps__link').removeClass('active');
        $('.service-steps__link[data-step=2]').addClass('active');

        $('.service-view__item').hide();
        step2_view.fadeIn();

        step2_link.parents('.service-steps__item').find('.service-steps-choice').fadeOut(0);

        step2_view.find("input:radio").prop('checked',false);
    });

    //step3 back
    $("body").on("click", ".new-choice--back_3", function(e){
		e.preventDefault();

		var step2_view = $(".service-view__item[data-step=2]");

		var step3_link = $(".service-steps__link[data-step=3]");

        $('.service-steps__link').removeClass('active');
        $('.service-steps__link[data-step=2]').addClass('active');

        $('.service-view__item').hide();
        step2_view.fadeIn();

        step3_link.parents('.service-steps__item').find('.service-steps-choice').fadeOut(0);


    });






    if ($("#mileage-slider").length>0) {

        var mile_ = ["0", "10 000", "20 000", "30 000", "40 000", "50 000", "60 000", "70 000", "80 000", "90 000", "100 000",];

        $("#mileage-slider").slider({
            range: "min",
            max: mile_.length-1,
            animate: 400,
            labels: mile_,
 			slide: function( event, ui ) {
	        	console.log(mile_[ui.value]);
	        	$("#time-slider").slider( "option", "value", ui.value );
            }
        })
        // .slider("pips", {
        //     rest: "label",
        //     labels: mile_,
            
        // })
  
        // .on("slidechange", function(e,ui) {
        // 	e.stopPropagation();
        // 	console.log(mile_[ui.value]);
        // 	$("#time-slider").slider( "option", "value", ui.value );
        // });
    }

    if ($("#time-slider").length>0) {

        var time_ = ["6", "12", "24", "36", "48", "60", "72", "84", "96", "108", "120"];

        $("#time-slider").slider({
            range: "min",
            max: time_.length-1,
          	animate: 400,
          	labels: time_,
            slide: function( event, ui2 ) {
	        	console.log(time_[ui2.value]);
	        	$("#mileage-slider").slider( "option", "value", ui2.value );
            }
        })
        // .slider("pips", {
        //     rest: "label",
        //     labels: time_,
        // })

        // .on("slidechange", function(e,ui2) {
        	
        // });
    }
})