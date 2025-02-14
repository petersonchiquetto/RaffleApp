function sortear() {
    quantidade = parseInt(document.getElementById('quantidade').value);
    de = parseInt(document.getElementById('de').value);
    ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
      alert("O número final deve ser maior que o inicial!")
      return;
    }

    if ((ate - de + 1) < quantidade) {
      alert(`É necessário configurar um intervalo de pelo menos ${quantidade} números entre os campos 'De' e 'Até' para realizar o sorteio`);
      return;
    }
  
    let sorteados = [];
  
    for (let i = 0; i < quantidade; i++) {
      let valor = obterNumeroAleatorio(de, ate);
      
      while (sorteados.includes(valor)) {
        valor = obterNumeroAleatorio(de, ate); 
      }

      sorteados.push(valor);
    }

    let resultado = document.getElementById('resultado');
 
    resultado.innerHTML = `<span class="campo-label">Números sorteados: ${sorteados}</span>`; 
    console.log(
       'de: ' + de + '\n' +
       'ate: ' + ate + '\n' +
       'quantidade: ' + quantidade + '\n' +
       'sorteados: ' + sorteados
     );
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

function reiniciar() {
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').value = '';

}
