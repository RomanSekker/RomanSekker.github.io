$(document).ready(function() {

	//Каруселька

	$(".owl-carousel").owlCarousel({
		items: 4,
		loop: true,
		dots: false,
		nav: true,
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
			1250:{
				items: 4
			}
		}
	});



// menu-trigger

$('.menu-trigger').on('click', function() {
		$('nav ul').slideToggle(400);
	});
	$(window).resize(function() {
		if ($(window).width() > 768) {
			$('nav ul').removeAttr('style');
		}
	});



	//Language Selector: popup-memu

	$(".language-selector .wrap-lang").click(function() {
		$('.language-selector_focus').toggle();
	});
	
	$(document).on('click', function(e) {
		if (!$(e.target).closest(".language-selector .wrap-lang").length) {
			$('.language-selector_focus').hide();
		}
		e.stopPropagation();
	});

//Language Selector: Swap
	var $elm, $elm2, $elm3, $elm4;

$('.language-selector .wrap-lang.active').click(function(event) {
	$elm = $(this).find('.wrap-lang_main-lang'); // container
	$elm3 = $(this).find('.wrap-lang_main-lang>*'); // content
});
$('.language-selector_focus .wrap-lang').click(function(event) {
	$elm4 = $(this);// conteiner:focus
	$elm2 = $(this).children('*');// content:focus
	$elm3.appendTo($elm4);
	$elm2.appendTo($elm);
});



});