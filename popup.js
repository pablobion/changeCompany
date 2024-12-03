document.getElementById('redirecionar').addEventListener('click', () => {
    const empresaId = document.getElementById('empresaId').value.trim();
    if (!empresaId) {
      alert("Por favor, insira um código válido.");
      return;
    }
  
    const baseURL = "https://app.ahgoradev.com.br/lista_empresas/troca_empresa";
    const novaURL = `${baseURL}?id_empresa=${empresaId}`;
  
    chrome.tabs.create({ url: novaURL });
});
  
document.getElementById('pasteClipboard').addEventListener('click', async () => {
  try {
    const text = await navigator.clipboard.readText();
    document.getElementById('empresaId').value = text;
  } catch (err) {
    console.error('Falha ao ler clipboard:', err);
  }
});
  
document.getElementById('goToPage').addEventListener('click', () => {
  const selectedOption = document.getElementById('pageOption').value;
  const empresaId = document.getElementById('empresaId').value.trim();
  
  
  if (!selectedOption) {
    alert("Por favor, selecione uma página.");
    return;
  }
  
  let url;
  switch(selectedOption) {
    case 'funcionarios':
      url = `https://app.ahgoradev.com.br/funcionarios`;
      break;
    case 'administrar':
      url = `https://app.ahgoradev.com.br/configuracoes`;
      break;
    case 'afastamento':
      url = `https://app.ahgoradev.com.br/afastamentos`;
      break;
  }
  
  if (url) {
    chrome.tabs.create({ url });
  }
});
  