// content fade in on load
$(".jumbotron, img").fadeIn(2000, function(){});



var width = $(".cal_card").css("width");
var height = $(".cal_card").css("height");
// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// get todays date
// var date = new Date();
// // gets the number of today's date
// var date_today = date.getDate();
// // get number of month from today's date
// var month_today = date.getMonth();

// UPCOMING EVENTS
// var events = [
// {day: 3, month: "April", name: "Core Group Night In"},
// {day: "5-6", month: "April", name: "Twenty-Four Retreat"},
// {day: "7", month: "April", name: "JHM"},
// {day: "10", month: "April", name: "JHM Lip Sync"},
// {day: "14", month: "April", name: "JHM"},
// {day: "17", month: "April", name: "JHM"},
// {day: "21", month: "April", name: "NO JHM"},
// {day: "24", month: "April", name: "JHM"},
// {day: "28", month: "April", name: "JHM"},

// ];


// DATE CHECK FUNCTION
// remove first event if it is past that date
// if (date_today > events[0].day) {
// 	console.log("bye bye");
// };


// PERFECT CIRCLE CARD WORK AROUND
// set card height equal to width on page load
$(".cal_card").css("height", width);

//set car height = width when window resizes
$(window).resize(function() {
	var width = $(".cal_card").css("width");
	$(".cal_card").css("height", width);
});

// cal page upcoming event DOM
// $("#event1 .card-body h2").text(events[0].day);
// $("#event1 .card-body .card-subtitle").text(events[0].month);
// $("#event1 .card-body .card-text").text(events[0].name);

// $("#event2 .card-body h2").text(events[1].day);
// $("#event2 .card-body .card-subtitle").text(events[1].month);
// $("#event2 .card-body .card-text").text(events[1].name);

// $("#event3 .card-body h2").text(events[2].day);
// $("#event3 .card-body .card-subtitle").text(events[2].month);
// $("#event3 .card-body .card-text").text(events[2].name);

// console.log(date);
