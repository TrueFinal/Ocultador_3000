// content.js

console.log(Teste)

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "toggleAddressBar") {
    openNewTabWithNewTabPage();
  }
});

function openNewTabWithNewTabPage() {
  chrome.tabs.create({ url: "https://grafana.oobj.com.br" });
}