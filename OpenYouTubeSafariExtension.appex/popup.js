console.log("Hello World!");
const locates = {
    "en-us": "Open with Youtube",
    "vi-vn": "Mở với Youtube",
};
let locale = locates[navigator.language.toLowerCase()] || locates["en-us"];
document.querySelector("span").innerHTML = locale;
document.querySelector("span").addEventListener("click", () => {
    browser.runtime.sendMessage({ action: "OYT" });
});