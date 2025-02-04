let timerInterval;
let stopwatchInterval;
let timerTime = 0;
let isTimerRunning = false;
let stopwatchTime = 0;
let isStopwatchRunning = false;

function startTimer() {
    const workTime = parseInt(document.getElementById('workTime').value) * 60;
    const breakTime = parseInt(document.getElementById('breakTime').value) * 60;
    if (isNaN(workTime) || isNaN(breakTime)) return;

    if (isTimerRunning) return;
    isTimerRunning = true;
    timerTime = workTime;

    timerInterval = setInterval(() => {
        if (timerTime <= 0) {
            alert("休憩時間です！");
            timerTime = breakTime;
        } else {
            timerTime--;
        }
        document.getElementById('timerDisplay').innerText = formatTime(timerTime);
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startStopwatch() {
    if (isStopwatchRunning) return;
    isStopwatchRunning = true;

    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        document.getElementById('stopwatchDisplay').innerText = formatStopwatchTime(stopwatchTime);
    }, 1000);
}

function formatStopwatchTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    isStopwatchRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    isStopwatchRunning = false;
    stopwatchTime = 0;
    document.getElementById('stopwatchDisplay').innerText = "00:00:00";
}
