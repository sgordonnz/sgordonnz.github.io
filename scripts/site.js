/*	JAVASCRIPT INFORMATION:
	- Name: Stefan Gordon Portfolio Logic
	- Author: Stefan Gordon <sgordon.nz@gmail.com>
	- Version: 0.1.0 (dev0.1)
	All rights reserved.
*/

$(function() {
	var $mline = $('nav .underline');
	var href = '#top';
	$mline.hide();
	$('nav [data-href]').click(function(event) {
		event.preventDefault();
		href = $(this).attr('data-href');
		var left = (($(this).width() - $mline.width()) / 2 ) + $(this).offset().left;
		$mline.show();
		$mline.animate({'left': left}, 500);
		$('html,body').animate({
			scrollTop: $(href).offset().top
		}, 1000);
	});
	$('nav [data-href]:first').click();
	$(window).resize(function(event) {
		$('html,body').scrollTop($(href).offset().top);
		var item = $('[data-href="'+href+'"]');
		$mline.css('left', ((item.width() - $mline.width()) / 2 ) + item.offset().left);
	});
});