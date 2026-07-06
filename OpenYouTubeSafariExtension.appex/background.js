browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);

    if (request.greeting === "hello") sendResponse({ farewell: "goodbye" });
    else if (request.action === "OYT") {
        browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            browser.tabs.sendMessage(tabs[0].id, { action: "OYT" });
        });
    }
});