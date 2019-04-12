var date = new Date();
var todaysDate = date.getUTCDate();
var todaysMonth = date.getMonth();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const events = [
{day: "3", month: "April", name: "Core Group Night In"},
{day: "5-6", month: "April", name: "Twenty-Four Retreat"},
{day: "7", month: "April", name: "JHM"},
{day: "10", month: "April", name: "JHM Lip Sync"},
{day: "14", month: "April", name: "JHM"},
{day: "17", month: "April", name: "JHM"},
{day: "21", month: "April", name: "NO JHM"},
{day: "24", month: "April", name: "JHM"},
{day: "28", month: "April", name: "JHM"},
{day: "4", month: "May", name: "Test"}
]

var upcomingEvents = []

events.forEach(function(event) {
    // find number for event month to check later
    var eventMonth = monthNames.indexOf(event.month);

    // check for hyphenated dates
    if (event.day.length > 2) {
        // split dates by hyphen
        var split = event.day.split("-");
        // keep the last date, take last element in array
        var eventDate = Number(split[split.length-1]);
    }
    else {
        // convert day to number
    var eventDate = Number(event.day);
    }
    // end if/else statement

    // check if event day is > than todays day & event month >= todays month
    if (eventDate > todaysDate || eventMonth > todaysMonth) {
       // add to upcomingEvents
        upcomingEvents.push(event);
    }
});

console.log(upcomingEvents);
