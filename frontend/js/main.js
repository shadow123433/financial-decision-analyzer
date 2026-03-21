import { postAnalise } from './api.js';
import { mostrarResultado, mostrarErro } from './ui.js';

document.getElementById('btnAnalisar').addEventListener('click', async () => {
    // 1. Captura de elementos para feedback visual
    const btn = document.getElementById('btnAnalisar');
    const resultadoDiv = document.getElementById('resultado');
    const erroDiv = document.getElementById('erro');

    // 2. Coleta de dados com tratamento de valores vazios
    const dados = {
        valorDivida: parseFloat(document.getElementById('vDivida').value),
        taxaDivida: parseFloat(document.getElementById('tDivida').value),
        valorInvestimento: parseFloat(document.getElementById('vInvest').value),
        taxaInvestimento: parseFloat(document.getElementById('tInvest').value),
        meses: parseInt(document.getElementById('meses').value) || 12
    };

    // 3. Validações Profissionais (UX)
    if (Object.values(dados).some(v => isNaN(v) || v < 0)) {
        return mostrarErro("Por favor, preencha todos os campos com valores positivos.");
    }

    if (dados.taxaDivida > 100 || dados.taxaInvestimento > 100) {
        return mostrarErro("As taxas não podem exceder 100%.");
    }

    // 4. Estado de Loading (Feedback para o usuário)
    btn.innerHTML = '<span class="loader"></span> Processando...';
    btn.disabled = true;
    if(erroDiv) erroDiv.innerText = ""; // Limpa erros anteriores

    try {
        const resultado = await postAnalise(dados);

        // 5. Renderização do resultado
        mostrarResultado(resultado);

        // 6. REDIRECIONAMENTO VISUAL (A "mágica" profissional)
        // Faz a tela descer suavemente até o gráfico/resultado
        setTimeout(() => {
            resultadoDiv.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100);

    } catch (error) {
        console.error("Erro na requisição:", error);
        mostrarErro("Falha na comunicação com o servidor. Verifique sua conexão.");
    } finally {
        // 7. Restaura o botão
        btn.innerHTML = "ANALISAR AGORA";
        btn.disabled = false;
    }
});