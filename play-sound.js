// play-sound.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "playBreakSound") {
        var audio = new Audio(chrome.runtime.getURL('Sound/break-time.mp3'));
        audio.play();
    }
});
