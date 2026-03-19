const simulacaoService = require('../services/simulacao.service');

const calcularAnalise = (req, res) => {
    try {
        const resultado = simulacaoService.analisarDados(req.body);
        return res.status(200).json(resultado);
    } catch (error) {
        return res.status(400).json({ error: "Erro ao processar análise financeira." });
    }
};

module.exports = { calcularAnalise };