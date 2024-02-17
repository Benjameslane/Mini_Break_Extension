// breakTimer.js
document.addEventListener('DOMContentLoaded', () => {
    const breakTimerSpan = document.querySelector('#break-timer span');
    let breakTime = 300; // 5 minutes in seconds

    function updateBreakTimer() {
        const minutes = Math.floor(breakTime / 60);
        const seconds = breakTime % 60;
        breakTimerSpan.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (breakTime > 0) {
            breakTime--;
        } else {
            clearInterval(breakTimerInterval);
            breakTimerSpan.textContent = "00:00";
            alert("Break is over! Time to get back to work.");
        }
    }

    let breakTimerInterval = setInterval(updateBreakTimer, 1000);
});
