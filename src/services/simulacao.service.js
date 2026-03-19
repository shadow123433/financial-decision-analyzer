const { calcularParcelado } = require("../utils/calculos");

function simularCompra(preco, taxa, meses, avista) {
  // cálculo bruto
  const valorFinalBruto = calcularParcelado(preco, taxa, meses);

  // valores formatados
  const valorParcelado = Number(valorFinalBruto.toFixed(2));
  const diferenca = Number((valorFinalBruto - preco).toFixed(2));

  // decisão baseada no valor real (bruto)
  let decisao;

  if (valorFinalBruto > preco * 1.3) {
    decisao = "❌ Péssima escolha";
  } else if (valorFinalBruto > preco * 1.1) {
    decisao = "⚠️ Cuidado";
  } else {
    decisao = "✅ Boa escolha";
  }

  // comparação à vista
  let melhorOpcao = null;

  if (avista != null) {
    melhorOpcao = avista < valorParcelado ? "À vista" : "Parcelado";
  }

  return {
    precoOriginal: preco,
    valorParcelado,
    diferenca,
    decisao,
    valorAvista: avista ?? null,
    melhorOpcao
  };
}

module.exports = {
  simularCompra
};