jQuery(document).ready(function($) {
	$('.wrap-lang').on('click', function(event) {
		event.preventDefault();
			$('.language-selector_focus').css('display', 'inline-block');

	});

	$('.arrow').on('click', function(event) {
		event.preventDefault();
			$('.language-selector_focus').css('display', 'none');
	});


});

