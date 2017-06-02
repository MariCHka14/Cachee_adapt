// $('.ch-container-nav').on('click', 'a', function(enent){
// 	enent.preventDefault();
// 	var link = $(this).attr('href');

// 	var distanse = $(link).offset().top;
// 	$('html, body').animate({
// 		scrollTop: distanse
// 	}, 500);
// })

// $(document).ready(function(){
// 	$('.ch-about img').hide();
// });


// $(window).scroll(function(){
// 	var dist = $('#about').offset().top;
// 		if ($(window).scrollTop() >= dist){ 
// 			$('.ch-container-logo').css('background', 'rgba(255, 255, 255, 0.7)');
// 				$('.ch-about img').show('slow');
// 		}else{
// 			$('.ch-container-logo').css('background', 'transparent');
// 		}
// });

// $('ul a').hover(function(){ 
// 	var clr = $('a').css('color');
// 		$(this).css('color', 'orange');
// })

$('#ch-home-show-menu').on('click',function () {
	// 
	if ($(this).hasClass('open')){
		$(this).removeClass('open');
		$(this).find('span')
				.removeClass('icon-cross')
				.addClass('icon-menu');
	}
	else{
		$(this).addClass('open');
		$(this).find('span')
				.removeClass('icon-menu')
				.addClass('icon-cross');
	}
});

$(window).resize(function(){
	if ($(window).width() > 855){
	if ($('#ch-home-show-menu').hasClass('open')) {
		$('#sch-home-show-menu').removeClass('open')
		.find('span')
		.removeClass('icon-cross')
		.addClass('icon-menu');
		}
	}
});



