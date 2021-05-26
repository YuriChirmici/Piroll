$(function() {

	let nav = $("#nav");
	let burger = $("#burger");


	// Scroll
	$("[data-scroll]").on("click", function() {
		let blockId = $(this).data("scroll");
		let blockPos = $(blockId).offset().top;
		let headerHeight = $("#header").height();
		
		if( !$(this).hasClass("header__logo")){
			burger.removeClass("active");
			nav.removeClass("active");
		}

		$("[data-scroll]").removeClass("active");
		$(this).addClass("active");

		$("html, body").animate({
			scrollTop: blockPos - headerHeight
		}, 700);
	});


	// Burger
	burger.on("click", function() {
		let nav = $("#nav");

		$(this).toggleClass("active");
		nav.toggleClass("active");
	});


	// Works
	$(".work__item").on("click", function() {
		$("#modal").addClass("active");
		$("body").addClass("no-scroll");
	});

	$(".modal__close").on("click", function() {	
		$("#modal").removeClass("active");
		$("body").removeClass("no-scroll");
	});


	$(".modal").on("click", function() {
		$(this).removeClass("active");
		$("body").removeClass("no-scroll");
	});


	$(".modal__dialog").on("click", function(event) {
		event.stopPropagation();
	});

})