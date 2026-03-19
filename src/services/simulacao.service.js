const analisarDados = (dados) => {
    const taxaD = parseFloat(dados.taxaDivida || 0);
    const taxaI = parseFloat(dados.taxaInvestimento || 0);

    // Arredonda a diferença para 2 casas decimais
    const diff = Math.abs(taxaD - taxaI).toFixed(2);

    if (taxaD === taxaI) {
        return {
            decisao: "EMPATE: As taxas são iguais. Financeiramente é indiferente, escolha o que te der mais paz.",
            detalhes: { diferencialTaxas: "0.00%", status: "Favorável" }
        };
    }

    const recomendacao = taxaD > taxaI 
        ? "QUITAR DÍVIDA: O custo do seu juros é maior que o rendimento do investimento." 
        : "INVESTIR: Seu dinheiro rende mais aplicado do que o custo da sua dívida.";

    return {
        decisao: recomendacao,
        detalhes: {
            diferencialTaxas: `${diff}%`,
            status: taxaD > taxaI ? "Perigo" : "Favorável"
        }
    };
};

module.exports = { analisarDados };