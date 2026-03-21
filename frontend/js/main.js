import { postAnalise } from './api.js';
import { mostrarResultado, mostrarErro } from './ui.js';

document.getElementById('btnAnalisar').addEventListener('click', async () => {
    const vDivida = parseFloat(document.getElementById('vDivida').value);
    const tDivida = parseFloat(document.getElementById('tDivida').value);
    const vInvest = parseFloat(document.getElementById('vInvest').value);
    const tInvest = parseFloat(document.getElementById('tInvest').value);
    const meses = parseInt(document.getElementById('meses').value) || 12;

    if (isNaN(vDivida) || vDivida <= 0 || isNaN(vInvest) || vInvest <= 0) {
        return mostrarErro("Valores inválidos.");
    }

    if (tDivida < 0 || tDivida > 100 || tInvest < 0 || tInvest > 100) {
        return mostrarErro("Taxas devem estar entre 0 e 100.");
    }

    const btn = document.getElementById('btnAnalisar');
    btn.innerText = "Processando...";
    btn.disabled = true;

    try {
        const resultado = await postAnalise({
            valorDivida: vDivida,
            taxaDivida: tDivida,
            valorInvestimento: vInvest,
            taxaInvestimento: tInvest,
            meses
        });

        mostrarResultado(resultado);
    } catch (error) {
        mostrarErro("Erro na conexão com servidor.");
    } finally {
        btn.innerText = "ANALISAR AGORA";
        btn.disabled = false;
    }
});