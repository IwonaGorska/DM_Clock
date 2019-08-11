//TODO - mozna wybierac te sama godzine do roznych czynnsci, zrob tedy alert i zablokuj

var recordingTime = 7;
var noon = 12;
var concertTime = 20;
var napTime = concertTime + 2;
var partyTime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds;
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "dm4.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var dmImageJS = document.getElementById("dmImage");
  
  if (time == partyTime)
  {
    image = "party.jpg";
    messageText = "Let's party!";
  }
  else if (time == recordingTime)
  {
    image = "recording.jpg";
    messageText = "Record a new song!";
  }
  else if (time == concertTime)
  {
    image = "concert.jpg";
    messageText = "We've got a concert!";
  }
  else if (time == napTime)
  {
    image = "sleep.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "dm1.jpg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "dm2.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "dm3.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  dmImageJS.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");
var partyEvent = function()
{
    if (partyTime < 0) 
    {
        partyTime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#666";
    }
    else
    {
        partyTime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};
partyButton.addEventListener("click", partyEvent);
partyEvent(); 

// Activates Recording selector
var recordingTimeSelector =  document.getElementById("recordingTimeSelector");
var recordingEvent = function()
{
    recordingTime = recordingTimeSelector.value;
};
recordingTimeSelector.addEventListener("change", recordingEvent);

// Activates Concert selector
var concertTimeSelector =  document.getElementById("concertTimeSelector");
var concertEvent = function()
{
    concertTime = concertTimeSelector.value;
};
concertTimeSelector.addEventListener("change", concertEvent);

// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");
var napEvent = function()
{
    napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener("change", napEvent);