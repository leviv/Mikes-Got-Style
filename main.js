
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
$(document).ready(function () {
	var webAddress = window.location.href;
	var parent = document.getElementsByTagName("html");
	var $introToProg = $('<body id=home><section id=nav><button class=\"c-hamburger c-hamburger--htra c-hamburger--htx\"><span>toggle menu</span></button></section><section id=nav-expand><ul class=nav-list><li class=nav-item><p>CS 312 Directory<li class=nav-item><a class=nav-one href=index.html><h2><span class=nav-span-active>01.</span>Startup</h2></a><li class=nav-item><a class=nav-two href=techedu.html><h2><span>02.</span>Syllabus</h2></a><li class=nav-item><a class=nav-three href=global-timeline.html><h2><span>03.</span>Schedule</h2></a><li class=nav-item><a class=nav-four href=ghtsa-timeline.html><h2><span>04.</span>Lab Hours</h2></a><li class=nav-item><a class=nav-five href=about.html><h2><span>05.</span>Assignments</h2></a><li class=\"nav-item brief\"><a class=nav-six href=ar.html><h2><span></span>Go Home</h2></a></ul></section><div class=box><div class=loader align=center><div class=typewriter><h1><span class=red>public static void</span> <span class=black>loadWebsite</span><span class=black>()</span> <span class=black>{}</span></h1><br><br><br></div></div></div><section id=hero><div class=hero-overlay><div class=hero-text><h1><span>Computer Science 312</span></h1><h1><span>Introduction to Programming</span></h1></div></div></section></body>');

	if (webAddress == "http://www.cs.utexas.edu/~scottm/cs312/"
		|| webAddress == "https://www.cs.utexas.edu/~scottm/cs312/"
		|| webAddress == "https://www.cs.utexas.edu/~scottm/cs312"
		|| webAddress == "https://www.cs.utexas.edu/~scottm/cs312//"
		|| webAddress == "http://www.cs.utexas.edu/~scottm/cs312/index.htm"
		|| webAddress == "http://www.cs.utexas.edu/~scottm/cs312/index.html"
	) {
		$('body').empty();
		$('body').attr('id', 'home');
		$('body').append($introToProg);
	}
});

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


$(".box").click(function() {
	alert("hi");
});

$("#nav").click(function() {
	alert("hi");
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