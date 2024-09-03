const display = document.getElementById("display");
const start = document.getElementById("startBtn");
const stop = document.getElementById("stopBtn");
const restart = document.getElementById("restartBtn");
const lap = document.getElementById("lapBtn");
const buttons = document.getElementById("buttons");
const teksts = document.getElementById("tekst");
let Timer = null;
let startTime = 0;
let elapsedTime = 0;

function minTimer() {
    Timer = setInterval(time, 1000)
    console.log(minTimer)
}
function time() {
    elapsedTime += 1;
    display.innerHTML = startTime + elapsedTime;
}
function startButton() {
    buttons.innerHTML = /*HTML*/`
        <button onclick="stopButton()" id="stopBtn">stop</button>
        <button onclick="lapButton()" id="lapBtn">lap</button>
        <button onclick="restartButton()" id="restartBtn">restart</button>`;
    minTimer()
    // Timer += 1;
    // document.getElementById("display").innerHTML = Timer
}
function stopButton() {
    buttons.innerHTML = /*HTML*/`
    <button id="startBtn" onclick="startButton()">start</button>
    <button id="stopBtn" onclick="stopButton()">stop</button>
    <button id="restartBtn" onclick="restartButton()">restart</button>`;
    clearInterval(Timer);
}
function restartButton() {
    buttons.innerHTML = /*HTML*/`
        <button onclick="stopButton()" id="startBtn">start</button>
        <button onclick="lapButton()" id="stopBtn">stop</button>
        <button onclick="restartButton()" id="restartBtn">restart</button>`;
    clearInterval(Timer);
    elapsedTime = 0;
    startTime = 0;
    display.innerHTML = startTime;
}
function lapButton() {
    teksts.innerHTML += ' time: ' + display.innerHTML;
}
console.log(minTimer)