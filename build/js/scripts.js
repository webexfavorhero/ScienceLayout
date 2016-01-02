(function ($) {

	'use strict';

	new WOW().init();

	$(window).on("load" , function() {

		$("#status").fadeOut();
		$("#preloader").delay(450).fadeOut("slow");

        $('#map').gmap({
            'center': '-6.94010,107.62575',
            'zoom': 20,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            'disableDefaultUI': false,
            'styles': [{
                stylers: [{
                    lightness: 1
                }, {
                    saturation: -100
                }]
            }],
            'callback': function() {
                var self = this;
                self.addMarker({
                        'position': this.get('map').getCenter(),
                        icon: 'images/map-marker.png',
                    })
                    .click(function() {
                        self.openInfoWindow({
                            'content': $('.map-content').html()
                        }, this);
                    });
            }
        });
	});

	// NAVIGATION-HEADER
	$('.main-navigation ul').superfish({
		delay: 400,
		animation: {opacity: 'show',
			height: 'show'
		},
		animationOut: {
			opacity: 'hide',
			height: 'hide'
		},
		speed: 200,
		speedOut: 200,
		autoArrows: false
	});

	// COPYING SITE-SUBHEADER
	$(".site-subheader").clone(false).appendTo($(".copy-internal-header"));

	// grab an element
	var myElement = document.querySelector(".site-header");
	// construct an instance of Headroom, passing the element
	var headroom  = new Headroom(myElement, {
		// "offset" : 780,
		// "tolerance": 5,
	});
	// initialise
	headroom.init(); 

	var internalheader = $(".copy-internal-header");
	$(window).scroll(function() {

		if ( $(window).width() >= 1500) {
			if( $(window).scrollTop() >= 1050 ){
				internalheader.addClass("onscroll");
			}else{
				internalheader.removeClass("onscroll");
			}
		}else{
			if( $(window).scrollTop() >= 830 ){
				internalheader.addClass("onscroll");
			}else{
				internalheader.removeClass("onscroll");
			}
		}
		

	});

	// BANNER-CAROUSEL
	$('.banner-carousel').owlCarousel({
		animateOut: 'fadeOut',
		items: 1,
		smartSpeed: 100,
		autoplay: false,
		autoplayTimeout: 3000,
		loop: true,
		nav: true,
		navText: [
				"Prev <i class='fa fa-angle-left fa-2x'></i>",
            	"Next <i class='fa fa-play'></i>"
		],
	});

	// UX-CAROUSEL
	$('.ux-carousel').owlCarousel({
		animateOut: 'fadeOut',
		items: 1,
		smartSpeed: 100,
		autoplay: false,
		autoplayTimeout: 3000,
		loop: true,
	});

	// ABOUT OFFICE CAROUSEL 
	$('.aboutoffice-carousel, .office-carousel').owlCarousel({
		animateOut: 'fadeOut',
		items: 1,
		smartSpeed: 100,
		autoplay: false,
		autoplayTimeout: 3000,
		loop: true,
		nav: true,
		navText: [
				"<i class='fa fa-angle-left'></i>",
            	"<i class='fa fa-angle-right'></i>"
		],
	});

	// PARTNERS-CAROUSEL
	$('.partners-carousel').owlCarousel({
		animateOut: 'fadeOut',
		items: 1,
		smartSpeed: 100,
		autoplay: false,
		autoplayTimeout: 3000,
		loop: true,
		nav: true,
		navText: [
				"<i class='fa fa-angle-left'></i>",
            	"<i class='fa fa-angle-right'></i>"
		],
	});

	// BUSINESS-CAROUSEL
	$('.business-carousel').owlCarousel({
		animateOut: 'fadeOut',
		items: 1,
		smartSpeed: 100,
		autoplay: false,
		autoplayTimeout: 3000,
		loop: true,
		nav: true,
		navText: [
				"<i class='fa fa-angle-left'></i>",
            	"<i class='fa fa-angle-right'></i>"
		],
	});

	// SERVICES-CAROUSEL
	$('.services-carousel').owlCarousel({
		mouseDrag: true,
		margin: 50,
		touchDrag: true,
		nav: true,
		navText: [
				"<i class='fa fa-angle-left'></i>",
            	"<i class='fa fa-angle-right'></i>"
		],
		responsiveClass: true,
		responsive: {
			0:{
				items: 1
			},
			400:{
				items: 1
			},
			600: {
				items: 2
			},
			1000:{
				items: 4
			},
		}
	});

	// LAST CASES-CAROUSEL
	$('.lastcases-carousel').owlCarousel({
		mouseDrag: true,
		margin: 50,
		touchDrag: true,
		nav: true,
		navText: [
				"<i class='fa fa-angle-left'></i>",
            	"<i class='fa fa-angle-right'></i>"
		],
		responsiveClass: true,
		responsive: {
			0:{
				items: 1
			},
			400:{
				items: 1
			},
			600: {
				items: 2
			},
			1000:{
				items: 3
			},
		}
	});

	// CLONE NAVIGATION TO RWD-NAVIGATION IN MAIN-NAVIGATION
	$(".main-navigation > ul").clone(false).find("ul,li").removeAttr("id").remove(".sub-menu").appendTo($(".rwd-navigation .mobile-nav"));
	$(".mobile-nav").on('show.bs.collapse', function(){
		$("body").on( 'click', function() {
			$(".mobile-nav").collapse("hide");
		});
	});

	// CLONE NAVIGATION TO RWD-NAVIGATION IN INTERNAL-HEADER
	$(".subheader-navigation > ul").clone(false).find("ul, li").appendTo($(".rwd-internal-navigation") );

	// HANDLING FOR INTERNAL SIDEHABAR ON STICKY
	$(".copy-internal-header .btn-showing-internal").click(function(event){
		event.preventDefault();
		$('.copy-internal-header .rwd-internal-navigation').slideToggle();
	});
	$(".copy-internal-header .rwd-internal-navigation a").on( 'click' , function() {
		var $target = $(".copy-internal-header .rwd-internal-navigation");
		if( $target.is(':visible')){
			$(".copy-internal-header .rwd-internal-navigation:visible").slideToggle();
		}else{
			$target.slideDown().siblings().slideUp();
		}
	});

	// HANDLING OFR INTERLA SIDEBAR ON OUTER-HEADER
	$(".outer-subheader .btn-showing-internal").click(function(event){
		event.preventDefault();
		$('.outer-subheader .rwd-internal-navigation').slideToggle();
	});
	$(".outer-subheader .rwd-internal-navigation a").on( 'click' , function() {
		var $target = $(".outer-subheader .rwd-internal-navigation");
		if( $target.is(':visible')){
			$(".outer-subheader .rwd-internal-navigation:visible").slideToggle();
		}else{
			$target.slideDown().siblings().slideUp();
		}
	});

	// CONFIG ISOTOPE CLIENT
	var $container = $(".client-subcontainer");
	$container.imagesLoaded( function() {
		$container.isotope();
	});

	$(".client-filter a").click( function() {
		var selector = $(this).attr("data-filter");
		$container.isotope({
			itemSelector: ".item-client",
			filter: selector
		});
		return false;
	});

	$(".client-filter a").click( function (e) {
		$(".client-filter a").removeClass("active");
		$(this).addClass("active");
	});

	// CONFIG ISOTOPE LABS
	var $labscontainer = $(".labscompanies-subcontainer");
	$labscontainer.imagesLoaded( function() {
		$labscontainer.isotope();
	});

	$(".labscompanies-filter a").click( function() {
		var selector = $(this).attr("data-filter");
		$labscontainer.isotope({
			itemSelector: ".item-labscompanies",
			filter: selector
		});
		return false;
	});

	$(".labscompanies-filter a").click( function (e) {
		$(".labscompanies-filter a").removeClass("active");
		$(this).addClass("active");
	});

	// CONFIG ISOTOPE LICENSE
	var $licensecontainer = $(".licensepartner-subcontainer");
	$licensecontainer.imagesLoaded( function() {
		$licensecontainer.isotope();
	});

	$(".licensepartner-filter a").click( function() {
		var selector = $(this).attr("data-filter");
		$licensecontainer.isotope({
			itemSelector: ".item-licensing",
			filter: selector
		});
		return false;
	});

	$(".licensepartner-filter a").click( function (e) {
		$(".licensepartner-filter a").removeClass("active");
		$(this).addClass("active");
	});



	
})(jQuery);