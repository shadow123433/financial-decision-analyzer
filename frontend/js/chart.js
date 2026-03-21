let chart;

export const renderChart = (historico) => {
    const ctx = document.getElementById('grafico').getContext('2d');

    const labels = historico.map(h => h.mes);
    const divida = historico.map(h => h.divida);
    const investimento = historico.map(h => h.investimento);

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [
                {
                    label: 'Dívida',
                    data: divida,
                    borderWidth: 2
                },
                {
                    label: 'Investimento',
                    data: investimento,
                    borderWidth: 2
                }
            ]
        }
    });
};