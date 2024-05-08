// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

// Função para calcular a posição final do herói
function calculaPosicao(posicaoInicial, totalPassos) {
  return posicaoInicial + totalPassos;
}

// Calcula a posição final usando os valores fornecidos como entrada
const posicaoFinal = calculaPosicao(posicaoInicial, totalPassos);

// Imprime a posição final
print("Posicao final do heroi:", posicaoFinal);
