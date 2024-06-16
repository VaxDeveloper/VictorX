// Verifica se o código está sendo executado em um dispositivo móvel
if (!/Mobi/.test(window.navigator.userAgent)) {
  // Se não for um dispositivo móvel, execute o código normalmente
  const containerElement = document.querySelector('#efeito-rolagem');

  // Define a velocidade de movimento
  const speed = 1; // Quanto menor o valor, mais rápido é o movimento

  // Função para mover os parágrafos
  function moveParagraphs() {
    // Move o container para a esquerda
    containerElement.style.left = parseInt(containerElement.style.left) - speed + 'px';

    // Verifica se o container saiu completamente da tela
    if (parseInt(containerElement.style.left) <= -containerElement.offsetWidth) {
      // Reseta a posição do container para o final da tela
      containerElement.style.left = window.innerWidth + 'px';
    }

    // Chama a função novamente para criar um movimento contínuo
    requestAnimationFrame(moveParagraphs);
  }

  // Define a posição inicial do container
  containerElement.style.position = 'absolute';
  containerElement.style.left = window.innerWidth + 'px';

  // Inicia o movimento dos parágrafos
  moveParagraphs();
} else {
  // Se for um dispositivo móvel, não execute o código
  console.log('Este código não é executado em dispositivos móveis');
}