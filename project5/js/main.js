// header dashboard

var $valueNumber = $('.dashboard-list .dashboard-list_circle  .circle-number:empty');
$valueNumber.parent().css('display', 'none');



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
			$('.language-selector').css('border-color', 'transparent');

		}
		e.stopPropagation();
	});


//Language Selector: Swap
var $elm, $elm2, $elm3, $elm4;

$('.language-selector .wrap-lang.active').click(function(event) {
	$elm = $(this).find('.wrap-lang_main-lang'); // container
	$elm3 = $(this).find('.wrap-lang_main-lang>*'); // content
	$(this).parent('.language-selector').css('border-color', '#a9a9a9')
	//border +
});

$('.language-selector_focus .wrap-lang').click(function(event) {
	$elm4 = $(this);// conteiner:focus
	$elm2 = $(this).children('*');// content:focus
	$elm3.appendTo($elm4);
	$elm2.appendTo($elm);
	$('.language-selector').css('border-color', 'transparent');
});

//carousel

$(".photos .owl-carousel").owlCarousel({
	items: 4,
	loop: true,
	dots: false,
	nav: true,
	autoWidth: true,
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

$(".handsome-men .owl-carousel").owlCarousel({
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
		1200:{
			items: 4
		}
	}
});

