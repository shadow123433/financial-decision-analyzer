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

    let decisao;

    if (ultimo.divida > ultimo.investimento) {
    decisao = "QUITAR DÍVIDA: A dívida cresceu mais que o investimento.";
    } else if (ultimo.investimento > ultimo.divida) {
    decisao = "INVESTIR: O investimento superou a dívida.";
    } else {
    decisao = "EMPATE: Tanto faz financeiramente. Escolha com base em risco, liquidez ou preferência pessoal.";
    }

    return {
        decisao,
        dividaFinal: ultimo.divida,
        investimentoFinal: ultimo.investimento,
        historico
    };
};

module.exports = { analisarDados };