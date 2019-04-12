// content fade in on load
$(".jumbotron, img").fadeIn(2000, function(){});


// PERFECT CIRCLE CARD WORK AROUND (SCHEDULE PAGE)
var width = $(".cal_card").css("width");
var height = $(".cal_card").css("height");

// set card height equal to width on page load
$(".cal_card").css("height", width);

//set car height = width when window resizes
$(window).resize(function() {
	var width = $(".cal_card").css("width");
	$(".cal_card").css("height", width);
});




