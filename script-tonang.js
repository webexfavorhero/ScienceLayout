(function ($) {

	'use strict';

	// PRELOADER
	$(window).bind("load", function () { // makes sure the whole site is loaded
	    $("#status").fadeOut(); // will first fade out the loading animation
	    $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.
	});

	function animateFooter(){
		$(".footer-animate").css('height', $('.site-footer').outerHeight() + 'px');
	}
	animateFooter();

	$(window).on("resize", function() {
		animateFooter();
	});

	$(".logo > a").clone(false).appendTo($(".rwd-logo"));

})(jQuery);