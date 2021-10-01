import "./styles.css";

let timer = document.getElementById("timer");
let startTime = "00:00";
timer.innerText = startTime;
let seconds = 0;
let minutes = 0;

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let interval = null;

function startCounter() {
  interval = setInterval(function () {
    seconds = (seconds + 1) % 60;
    let sec = seconds;
    let min = minutes + (sec === 0 ? 1 : 0);
    if (!(min === minutes)) {
      minutes = min;
    }
    timer.innerText = min + ": " + sec;
  }, 100);
}

function stopCounter() {
  clearInterval(interval);
}

start.addEventListener("click", startCounter);
stop.addEventListener("click", stopCounter);
reset.addEventListener("click", () => {
  clearInterval(interval);
  timer.innerText = startTime;
  seconds = 0;
  minutes = 0;
});
