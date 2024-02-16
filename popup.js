let countdownTime = 5 * 60; // 5 minutes in seconds
const timerElement = document.getElementById('timer');

function updateTimer() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    countdownTime--;

    if (countdownTime < 0) {
        alert("Break's over! Time to get back to work.");
        window.close(); // Automatically close the popup when the break is over.
    }
}

// Start the countdown when the popup is opened.
setInterval(updateTimer, 1000);
