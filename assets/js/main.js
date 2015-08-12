jQuery(document).ready(function($) {
    $('#countdown').countdown('2016/02/04').on('update.countdown', function(event) {
        $('#countdown-seconds').html(event.strftime('%S'));
        $('#countdown-minutes').html(event.strftime('%M'));
        $('#countdown-hours').html(event.strftime('%H'));
        $('#countdown-days').html(event.strftime('%D'));
    });
    /* ======= Scrollspy ======= */
    //$('body').scrollspy({ target: '#header', offset: 400});
    
    /* ======= Fixed header when scrolled ======= */
    //$(window).bind('scroll', function() {
     //    if ($(window).scrollTop() > 50) {
     //        $('#header').addClass('navbar-fixed-top');
     //    }
     //    else {
     //        $('#header').removeClass('navbar-fixed-top');
     //    }
    //});
    //
    ///* ======= ScrollTo ======= */
    //$('a.scrollto').on('click', function(e){
     //
     //   //store hash
     //   var target = this.hash;
     //
     //   e.preventDefault();
     //
	//	$('body').scrollTo(target, 800, {offset: -70, 'axis':'y', easing:'easeOutQuad'});
     //   //Collapse mobile menu after clicking
	//	if ($('.navbar-collapse').hasClass('in')){
	//		$('.navbar-collapse').removeClass('in').addClass('collapse');
	//	}
	//
	//});

});
