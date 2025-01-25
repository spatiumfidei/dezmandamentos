// Supondo que você tenha os botões de navegação e o conteúdo dinâmico nas páginas
document.addEventListener("DOMContentLoaded", function() {
    const btnVoltar = document.getElementById("voltar");
    const btnAvancar = document.getElementById("avancar");
  
    // Aqui você pode modificar a navegação para funcionar de forma simples, sem alterar o conteúdo na própria página
    // Por exemplo, para avançar/voltar para outra página
    if (btnVoltar) {
      btnVoltar.addEventListener("click", function() {
        window.history.back(); // Vai para a página anterior
      });
    }
  
    if (btnAvancar) {
      btnAvancar.addEventListener("click", function() {
        window.location.href = btnAvancar.querySelector("a").getAttribute("href"); // Vai para a próxima página
      });
    }
  });
  




  // Função para aplicar o efeito de transição e redirecionar
function mudarPagina(event) {
  event.preventDefault(); // Previne a navegação imediata

  const destino = event.target.closest('a').href; // Obtém o link do botão

  // Adiciona a classe para o efeito de saída
  document.body.classList.add('fade-out');

  // Aguarda o fim do efeito antes de redirecionar
  setTimeout(() => {
    window.location.href = destino;
  }, 500); // Tempo do efeito deve corresponder ao do CSS
}

// Adiciona os eventos nos botões "Voltar" e "Avançar"
document.getElementById('voltar').addEventListener('click', mudarPagina);
document.getElementById('avancar').addEventListener('click', mudarPagina);

// Aplica o efeito de entrada ao carregar a página
document.body.classList.add('fade-in');
