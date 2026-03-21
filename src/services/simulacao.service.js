const { simularMeses } = require('../utils/calculos');

const analisarDados = (dados) => {
    const { valorDivida, taxaDivida, valorInvestimento, taxaInvestimento, meses } = dados;

    const historico = simularMeses(
        valorDivida,
        taxaDivida,
        valorInvestimento,
        taxaInvestimento,
        meses || 12
    );

    const ultimo = historico[historico.length - 1];

    const decisao = ultimo.divida > ultimo.investimento
        ? "QUITAR DÍVIDA: A dívida cresceu mais que o investimento."
        : "INVESTIR: O investimento superou a dívida.";

    return {
        decisao,
        dividaFinal: ultimo.divida,
        investimentoFinal: ultimo.investimento,
        historico
    };
};

module.exports = { analisarDados };