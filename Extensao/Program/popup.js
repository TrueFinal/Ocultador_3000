console.log(Teste)

document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggleButton");

  toggleButton.addEventListener("click", function () {
    // Abre uma nova guia com a página de nova guia padrão do Chrome
    chrome.tabs.create({ url: "https://grafana.oobj.com.br" });

    // Injeta um script na guia ativa para ocultar a barra de endereço
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var tab = tabs[0];s
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: hideAddressBar
      });
    });
  });

  function hideAddressBar() {
    chrome.scripting.executeScript({
      target: { function: function () {
        // Código que realiza a ação desejada na guia ativa (se necessário)
        window.location.href = "https://grafana.oobj.com.br";
      }}
    });
  }
});