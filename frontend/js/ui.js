import { renderChart } from './chart.js';

const divRes = document.getElementById('resultado');
const pDecisao = document.getElementById('textoDecisao');
const badge = document.getElementById('badgeStatus');
const erroDiv = document.getElementById('erro');

export const mostrarResultado = (res) => {
    erroDiv.innerText = "";

    divRes.classList.remove('hidden');

    pDecisao.innerText = res.decisao;
    badge.innerText = `Dívida: R$ ${res.dividaFinal} | Investimento: R$ ${res.investimentoFinal}`;

    renderChart(res.historico);
};

export const mostrarErro = (msg) => {
    erroDiv.innerText = msg;
};