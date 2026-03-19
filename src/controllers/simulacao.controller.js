const { simularCompra } = require("../services/simulacao.service");

function simular(req, res) {
  const { preco, taxa, meses, avista } = req.body;

  if (preco == null || taxa == null || meses == null) {
    return res.status(400).json({ erro: "Dados inválidos" });
  }

  const resultado = simularCompra(preco, taxa, meses, avista);

  return res.json(resultado);
}

module.exports = {
  simular
};