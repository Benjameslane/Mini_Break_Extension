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
            message: "Take a 5-minute break. Click here to start your break timer and play a mini-game.",
            buttons: [{ title: "Start Break" }]
        });
    }
});

// Listener for notification button click
chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
    if (buttonIndex === 0) { // Assuming "Start Break" is the first button
        // This is where you could handle opening a new tab or other action
        console.log("Start Break button clicked.");
        // Example: Open a new tab with a break activity page
        // chrome.tabs.create({url: 'break-activities.html'}); // Adjust the URL as needed
    }
});
