{
    chrome.alarms.create("breakReminder", {
        delayInMinutes: 1,
        periodInMinutes: 1
    });

    chrome.alarms.onAlarm.addListener((alarm) => {
        if (alarm.name === "breakReminder") {
          chrome.notifications.create({
            type: "basic",
            iconUrl: "images/icon48.png",
            title: "Time for a Break!",
            message: "Take a 5-minute break. Click here to start your break timer and play a mini-game.",
            buttons: [{ title: "Start Break" }]
          });
        }
      });
      



}