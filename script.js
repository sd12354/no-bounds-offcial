function show(id) {
  var frontSide = id
  var backSide = id + "Back"
  document.getElementById(frontSide).style.display = "none"
  document.getElementById(backSide).style.display = "block"
}

function normal(id) {
  var frontSide = id
  var front = frontSide.slice(0, frontSide.length - 4);
  document.getElementById(frontSide).style.display = "none"
  document.getElementById(front).style.display = "block"
}

function changePOV() {
  var space = document.getElementById("myVideo")
  if (space.style.display = "none") {
    space.style.display = "block"
    document.getElementById("nav").style.color = "white"
    document.getElementById("launch").style.backgroundColor = "transparent"
    document.getElementById("launch").style.color = "pink"
  } else if (space.style.display = "block") {
    space.style.display = "none"
  }
}


// Set the date we're counting down to
var countDownDate = new Date("Sep 3, 2022 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("release").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


function websiteVisits(response) {
  document.querySelector("#visits").textContent = response.value;
}