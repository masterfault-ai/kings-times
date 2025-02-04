let countdown;

function startTimer(duration) {
    clearInterval(countdown);
    let timer = duration, hours, minutes, seconds;
    countdown = setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("hoursDisplay").textContent = hours;
        document.getElementById("minutesDisplay").textContent = minutes;
        document.getElementById("secondsDisplay").textContent = seconds;

        if (--timer < 0) {
            clearInterval(countdown);
        }
    }, 1000);
}

function startSelectedTimer() {
    let hours = parseInt(document.getElementById("hours").value) || 0;
    let minutes = parseInt(document.getElementById("minutesInput").value) || 0;
    let seconds = parseInt(document.getElementById("secondsInput").value) || 0;
    let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    startTimer(totalSeconds);
}

function stopTimer() {
    clearInterval(countdown);
}
