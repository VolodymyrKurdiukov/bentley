

//ibg

function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();


//=====================================================================================================

//Burger

$(document).ready(function () {

	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu,.header__label,.fullscreen2__content').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.submenu__link').click(function (event) {
		$('.header__logo').css({ display: 'none' });
	});

	$('.menu__link-arrow').click(function (event) {
		$('.submenu__list').toggleClass('active');
	});


	$('.item-menu__close').click(function (event) {
		$('.items__item').removeClass('active');
		$('.header__burger').addClass('active');
		$('.item-menu__close').toggleClass('active');
		$('.header__logo').css({ display: 'block' });
	});


	//=====================================================================================================

	$('ul.fullscreen2__list').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.fullscreen2').find('div.fullscreen2__body').removeClass('active').eq($(this).index()).addClass('active');

	});
	$('ul.submenu__list').on('click', 'li:not(.active)', function () {
		$('.header__burger').removeClass('active');
		$('.item-menu__close').addClass('active');
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.wrapper').find('div.items__item').removeClass('active').eq($(this).index()).addClass('active');
	});


	//=====================================================================================================

	//goto block

	$('.goto').click(function () {
		var el = $(this).attr('href').replace('#', '');
		var offset = 0;
		$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });
	});


	//=====================================================================================================
	$(window).scroll(function () {
		var top = $(document).scrollTop();
		if (top < 2900) $(".header__label,.header__logo").css({ display: 'block', transition: ' all 0.5s ease' });
		else $(".header__label,.header__logo").css({ display: 'none' });
		if ($(this).scrollTop() > 3000) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut().css({ display: 'flex'});
		}
	});
	$("a[href^='#']").click(function () {
		const _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});
	// //active point scroll
	// $(document).on("scroll", onScroll);

	// //smoothscroll
	// $('a[href^="#"]').on('click', function (e) {
	// 	e.preventDefault();
	// 	$(document).off("scroll");

	// 	$('a').each(function () {
	// 		$(this).removeClass('active');
	// 	})
	// 	$(this).addClass('active');

	// 	var target = this.hash,
	// 		menu = target;
	// 	$target = $(target);
	// 	$('html, body').stop().animate({
	// 		'scrollTop': $target.offset().top + 2
	// 	}, 800, 'swing', function () {
	// 		window.location.hash = target;
	// 		$(document).on("scroll", onScroll);
	// 	});
	// });
});


// function onScroll(event) {
// 	var scrollPos = $(document).scrollTop();
// 	$('.decor__circle').each(function () {
// 		var currLink = $(this);
// 		var refElement = $(currLink.attr("href"));
// 		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
// 			$('.decor__circle').removeClass("active");
// 			currLink.addClass("active");
// 		}
// 		else {
// 			currLink.removeClass("active");
// 		}
// 	});
// }
//=====================================================================================================
