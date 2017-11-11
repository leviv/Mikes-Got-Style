//Scroll transition when click on link
$(document).ready(function () {
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
});

/*
    Hamburger transition tutorial
    By Nick
    http://callmenick.com/2015/01/25/animating-css-only-hamburger-menu-icons/
*/
$(document).ready(function(){

	(function() {

		"use strict";

		var toggles = document.querySelectorAll(".c-hamburger");


		for (var i = toggles.length - 1; i >= 0; i--) {
			var toggle = toggles[i];
			toggleHandler(toggle);
		};

		function toggleHandler(toggle) {
			toggle.addEventListener( "click", function(e) {
				e.preventDefault();
				(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");

			});
		}

	})();
});




$("#nav").click(function() {
	var width = $(window).width() - 70;

	if ($(".c-hamburger").hasClass("is-active")) {
		$(".c-hamburger").animate({
			right: "0px", 
		}, {
			duration: 150,
			easing: 'easeInOutQuint'
		});
		$("#nav-expand").animate({
			left: "0%"
		}, {
			duration: 1500,
			easing: 'easeInOutQuint'
		});
		$(".nav-list").animate({
			left: "0%"
		}, {
			duration: 300,
			easing: 'easeInOutQuint'
		});
		$(".c-hamburger").css({'transform' : 'rotate(180deg)'});

	} else {
		$(".c-hamburger").animate({right: width + "px"}, {
			duration: 150,
			easing: 'easeInOutQuint'
		});
		$("#nav-expand").animate({
			left: "-100%"
		}, {
			duration: 1500,
			easing: 'easeInOutQuint'
		});
		$(".nav-list").animate({
			left: "-100%"
		}, {
			duration: 400,
			easing: 'easeInOutQuint'
		});
		$(".c-hamburger").css({'transform' : 'rotate(0deg)'});
	}
});

$(".nav-one").mouseover(function(){
	$('#nav-expand').css('background-image', 'url(assets/img/nav1.JPG)');
});
$(".nav-two").mouseover(function(){
	$('#nav-expand').css('background-image', 'url(assets/img/nav2.JPG)');
});
$(".nav-three").mouseover(function(){
	$('#nav-expand').css('background-image', 'url(assets/img/nav3.JPG)');
});
$(".nav-four").mouseover(function(){
	$('#nav-expand').css('background-image', 'url(assets/img/nav6.JPG)');
});
$(".nav-five").mouseover(function(){
	$('#nav-expand').css('background-image', 'url(assets/img/nav4.JPG)');
});
$(".nav-six").mouseover(function(){
	$('#nav-expand').css('background-image', 'url(assets/img/nav10.JPG)');
});

$(".nav-list a").mouseout(function(){
	$('#nav-expand').css('background-image', 'url(assets/img/nav.JPG)');
});

