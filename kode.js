const display = document.getElementById("display");
let Timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;



function minTimer() {
    Timer = setInterval(startButton, 1000)
    console.log(minTimer)
}
function startButton() {
    document.getElementById("buttons").innerHTML = /*HTML*/`
        <button onclick="stopButton()" id="stopBtn">stop</button>
        <button onclick="lapButton()" id="lapBtn">lap</button>
        <button onclick="restartButton()" id="restartBtn">restart</button>`;
    // Timer += 1;
    document.getElementById("display").innerHTML = Timer
    minTimer()
}
function stopButton() {
    document.getElementById("buttons").innerHTML = /*HTML*/`
    <button id="startBtn" onclick="startButton()">start</button>
    <button id="stopBtn" onclick="stopButton()">stop</button>
    <button id="restartBtn" onclick="restartButton()">reset</button>`;
    clearInterval(minTimer)
}
function restartButton() {
    document.getElementById("buttons").innerHTML = /*HTML*/`
        <button onclick="stopButton()" id="stopBtn">stop</button>
        <button onclick="lapButton()" id="lapBtn">lap</button>
        <button onclick="restartButton()" id="restartBtn">restart</button>`;
}
function lapButton() {

}
