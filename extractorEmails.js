// 1 - Abra a página em que deseja fazer a extração das URLS e aperte F12 no seu teclado ou clique com o botão direito do mouse e selecione Inspecionar Código Fonte
// 2 - Copie a função abaixo no Console do Navegador e Aperte ENTER

function extractEmails() {
  // Regex para encontrar endereços de e-mail na página
  const emailRegex = /[\w\.-]+@[\w\.-]+\.\w+/g;

  // Extrai os endereços de e-mail
  const emails = [];
  const pageHtml = document.documentElement.outerHTML;
  let match = emailRegex.exec(pageHtml);
  while (match) {
    emails.push(match[0]);
    match = emailRegex.exec(pageHtml);
  }

  // Abre uma nova janela com a lista de endereços de e-mail
  const emailsString = emails.join('\n');
  const newWindow = window.open('', '_blank');
  newWindow.document.write('<pre>' + emailsString + '</pre>');
  newWindow.document.close();
}

extractEmails();
