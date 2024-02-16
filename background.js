// Set up the break reminder alarm
chrome.alarms.create("breakReminder", {
    delayInMinutes: 1, // For testing purposes; change to 30 for actual use
    periodInMinutes: 1 // For testing purposes; change to 30 for actual use
});

// Listener for the alarm
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "breakReminder") {
        // Trigger a notification for the break
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icons/BLO.png",
            title: "Time for a Break!",
            message: "Take a 5-minute break!",
            buttons: [{ title: "Click Here To Start Break" }] // This button title might be misleading since the button action is now opening a placeholder page
        });
    }
});

// Listener for notification button click
chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
    if (buttonIndex === 0) { // Assuming "Start Break" is the first button
        // Open a new tab with the placeholder page when the button is clicked
        chrome.tabs.create({url: chrome.runtime.getURL('placeholder.html')});
    }
});

// Listener for when the notification itself is clicked
chrome.notifications.onClicked.addListener((notificationId) => {
    // Open a new tab with the placeholder page
    chrome.tabs.create({url: chrome.runtime.getURL('placeholder.html')});
});
