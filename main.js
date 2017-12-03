

$(document).ready(function () {
	var webAddress = window.location.href;
	var parent = document.getElementsByTagName("html");

	var $introToProg = $('<body id=home><div class=box><div class=loader align=center><div class=typewriter><h1><span class=red>public static void</span> <span class=black>loadWebsite</span><span class=black>()</span> <span class=black>{}</span></h1><br><br><br></div></div></div><section id=hero><div class=hero-overlay><div class=hero-text><h1><span>Computer Science 312</span></h1><h1><span>Introduction to Programming</span></h1></div></div></section><script></body>');
	var $navCode = $('<section id="nav"> <button class="c-hamburger c-hamburger--htx c-hamburger--htra"> <span>toggle menu</span> </button> </section><!-- nav --> <section id="nav-expand"> <ul class="nav-list"> <li class="nav-item"><p>CS 312 Directory</p></li> <!-- nav-item --><div class="col col1"> <li class="nav-item"> <a href="http://www.cs.utexas.edu/~scottm/cs312/handouts/startup.htm" class="nav-one"> <h2><span class="">01.</span>Startup</h2> </a> </li><!-- nav-item --> <li class="nav-item"> <a href="http://www.cs.utexas.edu/~scottm/cs312/syllabus.htm" class="nav-two"> <h2><span>02.</span>Syllabus</h2> </a> </li><!-- nav-item --> <li class="nav-item"> <a href="http://www.cs.utexas.edu/~scottm/cs312/schedule.htm" class="nav-three"> <h2><span class="">03.</span>Schedule</h2> </a> </li><!-- nav-item --> <li class="nav-item"> <a href="http://www.cs.utexas.edu/~scottm/cs312/labHours.htm" class="nav-four"> <h2><span class="">04.</span>Lab Hours</h2> </a> </li><!-- nav-item --> <li class="nav-item"> <a href="http://www.cs.utexas.edu/~scottm/cs312/assignments/index.htm" class="nav-five"><h2><span>05.</span>Assignments</h2></a> </li><!-- nav-item --> </div> <div class="col col2"> <li class="nav-item"> <a href="https://piazza.com/class/j6f6hpuiaja57q" class="nav-one"> <h2><span class="">06.</span>Piazza</h2> </a> </li><!-- nav-item --> <li class="nav-item"> <a href="https://utexas.instructure.com/" class="nav-two"> <h2><span>07.</span>Canvas (Grades, Due Dates)</h2> </a> </li><!-- nav-item --> <li class="nav-item"> <a href="http://www.cs.utexas.edu/~scottm/cs312/testStudyMaterials.htm" class="nav-three"> <h2><span class="">08.</span>Test Review Materials</h2> </a> </li><!-- nav-item --> <li class="nav-item"> <a href="https://practiceit.cs.washington.edu/" class="nav-four"> <h2><span class="">09.</span>Practice It Problems</h2> </a> </li><!-- nav-item --> <li class="nav-item"> <a href="http://docs.oracle.com/javase/8/docs/api/" class="nav-five"><h2><span>10.</span>Java documentation</h2></a> </li><!-- nav-item --> </div> <div class="col col3"> <li class="nav-item"> <a href="http://www.cs.utexas.edu/~scottm/cs312/handouts/helpSources.htm" class="nav-one"> <h2><span class="">11.</span>Where to Get Help</h2> </a> </li><!-- nav-item --> <li class="nav-item"> <a href="http://www.cs.utexas.edu/~scottm/cs312/software.htm" class="nav-two"> <h2><span>12.</span>Software</h2> </a> </li><!-- nav-item --> <li class="nav-item"> <a href="https://apps.cs.utexas.edu/udb/newaccount" class="nav-three"> <h2><span class="">13.</span>Lab Accounts</h2> </a> </li><!-- nav-item --> <li class="nav-item"> <a href="../cs314/handouts/PracticeProblems.htm" class="nav-four"> <h2><span class="">14.</span>More Practice Problems and Links</h2> </a> </li><!-- nav-item --> <li class="nav-item"> <a href="http://www.cs.utexas.edu/~scottm/cs312/codingSamples.htm" class="nav-five"><h2><span>15.</span>Coding Samples</h2></a> </li><!-- nav-item --> </div> <div class="col col3"> <li class="nav-item brief"> <a href="http://www.cs.utexas.edu/~scottm/cs312/" class="nav-six"> <h2><span></span>Go Home</h2> </a> </li> </div> </ul><!-- nav-list --> </section><!-- nav-expand -->');
	
	// If the web address is any one of these variations
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
	$('body').prepend($navCode);	
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
	document.getElementById('nav').onclick = function() {

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
	};
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
