var hours = 0
var minutes = 0
var seconds = 0
var timer

function start() {
  timer = setInterval(updateTimer, 1000)
}

function stop() {
  clearInterval(timer)
}

function reset() {
  clearInterval(timer)
  hours = 0
  minutes = 0
  seconds = 0
  updateTimer()
}

function updateTimer() {
  seconds++
  if (seconds >= 60) {
    seconds = 0
    minutes++
    if (minutes >= 60) {
      minutes = 0
      hours++
    }
  }
  var timeString =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);
  document.getElementById("timer").textContent = timeString;
}



