function calcularParcelado(preco, taxa, meses) {
  return preco * Math.pow(1 + taxa, meses);
}

module.exports = {
  calcularParcelado
};