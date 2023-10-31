console.log(Teste);

chrome.browserAction.onClicked.addListener(function (tab) {
  // Abre uma nova guia com a página de nova guia padrão do Chrome
  chrome.tabs.create({ url: "https://grafana.oobj.com.br" });

  // Injeta um script na guia ativa para ocultar a barra de endereço
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: function () {
      // Código que realiza a ação desejada na guia ativa (se necessário)
      window.location.href = "https://grafana.oobj.com.br";
    }
  });

  // Função que será injetada na guia ativa
  function hideAddressBar() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var tab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: function () {
          window.location.href = "https://grafana.oobj.com.br";
        }
      });
    });
  }

  // Chama a função para ocultar a barra de endereço
  hideAddressBar();
});