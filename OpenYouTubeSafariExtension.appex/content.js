browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
  console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "OYT")
    window.location.href = window.location.href.replace(
      window.location.protocol,
      "youtube:",
    );

  console.log("Received request: ", request);
});

function afterNavigate() {
  const { pathname, href, protocol } = window.location;
  const routes = ["/watch", "/live", "/shorts", "/clip", "/channel"];
  if (
    routes.some((route) => pathname.startsWith(route)) ||
    /^\/@[^/]+/.test(pathname)
  ) {
    window.location.href = href.replace(protocol, "youtube:");
  }
}

(document.body || document.documentElement).addEventListener(
  "transitionend",
  function (event) {
    if (event.propertyName === "width" && event.target.id === "progress") {
      afterNavigate();
    }
  },
  true,
);
afterNavigate();
