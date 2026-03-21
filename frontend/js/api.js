const API_URL = 'http://localhost:3000/api';

export const postAnalise = async (dados) => {
    const response = await fetch(`${API_URL}/analisar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    });

    if (!response.ok) {
        throw new Error('Erro na requisição');
    }

    return await response.json();
};