$(document).ready(function() {

	$(".auth_buttons").click(function() {
		$(this).next().slideToggle();
	});
	$(".main_mnu_button").click(function() {
		$(".maian_mnu ul").slideToggle();
	});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/


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



	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
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

var $selector = $('.language-selector .wrap-lang .lang');

	// console.log($selector[2].innerText);

function popMenu(index) {
	
}
	var $elm, $elm2 ;

$('.language-selector .wrap-lang.active').click(function(event) {
	$elm = $(this).find('.wrap-lang_main-lang>*').clone();
	console.log($elm);
});

$('.language-selector_focus .wrap-lang').click(function(event) {
	// $elm2 = $(this).find('.language-selector_focus .wrap-lang');
	console.log($elm2);
	$(this).empty();
	$elm.appendTo($(this));
	$elm2.insertAfter('.language-selector .wrap-lang.active');
	
});



});