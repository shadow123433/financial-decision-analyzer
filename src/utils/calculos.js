const simularMeses = (valorDivida, taxaDivida, valorInvest, taxaInvest, meses) => {
    const historico = [];

    let divida = valorDivida;
    let investimento = valorInvest;

    const taxaD = taxaDivida / 100;
    const taxaI = taxaInvest / 100;

    for (let i = 1; i <= meses; i++) {
        divida = divida * (1 + taxaD);
        investimento = investimento * (1 + taxaI);

        historico.push({
            mes: i,
            divida: Number(divida.toFixed(2)),
            investimento: Number(investimento.toFixed(2))
        });
    }

    return historico;
};

module.exports = { simularMeses };