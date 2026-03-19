const divRes = document.getElementById('resultado');
const pDecisao = document.getElementById('textoDecisao');
const badge = document.getElementById('badgeStatus');

export const mostrarResultado = (res) => {
    divRes.classList.remove('hidden', 'favoravel', 'perigo');
    divRes.classList.add(res.detalhes.status === 'Favorável' ? 'favoravel' : 'perigo');
    
    pDecisao.innerText = res.decisao;
    badge.innerText = `Diferença de taxas: ${res.detalhes.diferencialTaxas}`;
};

export const mostrarErro = (msg) => {
    alert(msg);
};