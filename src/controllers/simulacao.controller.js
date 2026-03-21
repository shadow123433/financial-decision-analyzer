const simulacaoService = require('../services/simulacao.service');

const calcularAnalise = (req, res) => {
    const { valorDivida, taxaDivida, valorInvestimento, taxaInvestimento, meses } = req.body;

    if (
        !valorDivida || !taxaDivida ||
        !valorInvestimento || !taxaInvestimento
    ) {
        return res.status(400).json({ error: "Dados inválidos." });
    }

    try {
        const resultado = simulacaoService.analisarDados({
            valorDivida,
            taxaDivida,
            valorInvestimento,
            taxaInvestimento,
            meses
        });

        return res.status(200).json(resultado);
    } catch (error) {
        return res.status(500).json({ error: "Erro interno do servidor." });
    }
};

module.exports = { calcularAnalise };