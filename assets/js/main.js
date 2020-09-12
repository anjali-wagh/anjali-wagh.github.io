/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);


{/* // Get the modal */}
var modal = document.getElementById("myModal");

{/* // Get the image and insert it inside the modal - use its "alt" text as a caption */}
var img = document.getElementById("myImg");
var navBar = document.getElementById("nav");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  navBar.style.display= "none";
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

{/* // Get the <span> element that closes the modal */}
var span = document.getElementsByClassName("close")[0];

{/* // When the user clicks on <span> (x), close the modal */}
span.onclick = function() { 
  navBar.style.display= "block";
  modal.style.display = "none";
}