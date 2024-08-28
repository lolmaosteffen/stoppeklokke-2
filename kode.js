let time = document.getElementById("display")
let Timer;
let timerProgress = 0;



function minTimer() {
    Timer = setInterval(startButton, 1000)
}
function startButton() {
    minTimer()
    time = timerProgress += 1;
}