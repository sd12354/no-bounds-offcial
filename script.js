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