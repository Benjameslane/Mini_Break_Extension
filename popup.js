document.addEventListener('DOMContentLoaded', (event) => {
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

    // Play break sound
    var audio = new Audio(chrome.runtime.getURL('Sound/break-time.mp3'));
    audio.play().catch(e => console.error("Audio play failed:", e));

    // Add event listener for opening the break page
    document.getElementById('openBreakPage').addEventListener('click', function() {
        chrome.tabs.create({url: 'placeholder.html'});
    });
});
