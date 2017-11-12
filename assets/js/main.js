//Creates the navbar element and injects it into the page
//                              -Chris
/*
 * 
 * 
 * 
 * I'm commenting this out for now while I work on the page 
 * because it's creating an element when the element is already
 * there
 * 
 * Feel free to uncomment if you need
 * 
 * 
 * 
 * 
var navbar = document.createElement("section");
var button = document.createElement("button");
var span = document.createElement("span");
span.innerHTML = "Toggle Menu";
button.className = "c-hamburger c-hamburger--htx c-hamburger--htra"
document.body.appendChild(navbar);
navbar.id = "nav";
navbar.appendChild(button);
button.appendChild(span);
*/
//Creates the expanded navbar screen and injects it into the page
//                              -Chris



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