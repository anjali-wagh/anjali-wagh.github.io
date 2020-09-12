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


// {/* // Get the modal */}
var modal = document.getElementById("myModal");

// {/* // Get the image and insert it inside the modal - use its "alt" text as a caption */}
// var img = document.getElementById("myImg");
// var img = document.getElementsByClassName("imgPortfolio");
var navBar = document.getElementById("nav");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var numImagesForWorks = {
	"Market_Design_Varsova": 3,
	"Business_Park": 6,
	"Market_Design_Kamothe": 3,
	"Gated_Community": 3,
	"Landscape_Design": 1,
	"Interior_Design": 2,
	"Furniture_Design": 1,
	"Municipal_Drawings": 4,
	"Other_Works": 3
}


$(document).ready(function() {
	$('img.imgPortfolio').click(function(event) {
		navBar.style.display= "none";
		modal.style.display = "block";
		var source = event.target.src;
		var taskName = event.target.src.split("/images/")[1]
		taskName = taskName.replace(".jpeg", "")
		var numImages = numImagesForWorks[taskName]

		let i;
		for (i = 1; i <= numImages; i++) {
			var new_element = document.createElement("img");
			new_element.className = "modal-content";
			new_element.src = source.replace(".jpeg", `${i}.jpeg`);
			new_element.style.paddingBottom = "30px";
			modal.appendChild(new_element);
		}

		  captionText.innerHTML = taskName.replaceAll("_", " ");
		  captionText.style.fontSize = "xx-large";
		//   captionText.style.paddingBottom = "100px";
	});
});

// {/* // Get the <span> element that closes the modal */}
var span = document.getElementsByClassName("close")[0];

// {/* // When the user clicks on <span> (x), close the modal */}
span.onclick = function() { 
  navBar.style.display= "block";
  modal.style.display = "none";
  $('.modal-content').remove();
}