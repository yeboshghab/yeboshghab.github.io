function successCallback(resp) {
    if (resp.result !== 'success') {
        resp.result = 'danger';
        try {
            var parts = resp.msg.split(' - ', 2);
            if (parts[1] !== undefined) {
                var i = parseInt(parts[0], 10);
                if (i.toString() === parts[0]) {
                    resp.msg = parts[1];
                }
            }
        }
        catch (e) {
            return resp;
        }
    }
    return resp;
}

jQuery(document).ready(function($) {
    //$("header.navbar-fixed-top").autoHidingNavbar();
	$('form.mc-subscribe').submit(function(){
        var $form = $(this),
            url = $form.attr('action'),
            data = {},
            dataArray = $form.serializeArray();

        url = url.replace('/post?', '/post-json?').concat('&c=?');
        $form.find('input[type=email]').attr('name', 'EMAIL');

        $.each(dataArray, function (index, item) {
            data[item.name] = item.value;
        });

        $modal = $('.subscription.modal');
        $.ajax({
            url: url,
            data: data,
            dataType: 'jsonp',
            success: function(response) {
                response = successCallback(response);
                $modal.find('.modal-body p').attr('class', 'text-'+response.result).text(response.msg);
                $modal.modal()
            },
            error: function (resp, text) {
                $modal.find('.modal-body p').attr('class', 'text-danger').text('Ajax submit error: ' + text);
                $modal.modal()
            }
        });
        return false;
    });
	
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
