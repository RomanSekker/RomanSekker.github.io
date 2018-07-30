$(document).ready(function() {
	// bg-video
	
	// var videobackground = new $.backgroundVideo($('section.main'), {
	// 	"align": "centerXY",
	// 	"width": 1280,
	// 	"height": 720,
	// 	"path": "video/",
	// 	"filename": "video-bg",
	// 	"types": ["mp4","ogg","webm"],
	// 	"preload": true,
	// 	"autoplay": true,
	// 	"loop": true
	// });


	// end-bg-video





	// Аккордион
	$('.faqs-wrap-content > .about-text').not(':first-of-type').hide();


	$('.faqs-wrap-content > .testimonials-icon').click(function() {

		var $findText = $(this).prev();
		var $findWrapper = $(this).closest('.faqs-wrap-content');

		if ($findText.is(':visible')) {
			$findText.slideUp('fast');
		}
		else {
			$findWrapper.find('>.about-text').slideUp('fast');
			$findText.slideDown('fast');
		}
	});
  //end Аккордион


//carousel

$(".owl-carousel").owlCarousel({
	items: 4,
	loop: true,
	dots: false,
	nav: false,
	responsive: {
		0:{
			items: 1
		},
		600:{
			items: 2
		},
		992:{
			items: 3
		},
		1200:{
			items: 4
		}
	}
});


});