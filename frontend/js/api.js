// Detecta se está rodando localmente (localhost) ou no servidor do Render
const isLocal = window.location.hostname === 'localhost';

// Se for local, usa a porta 3000. 
// Se for no Render, ele usa o próprio domínio do site para a API.
const API_URL = isLocal 
    ? 'http://localhost:3000/api' 
    : '/api'; 

export const postAnalise = async (dados) => {
    try {
        const response = await fetch(`${API_URL}/analisar`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
            // Tenta pegar o erro detalhado do back-end, se houver
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `Erro no servidor: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Erro detalhado na requisição:", error);
        throw error;
    }
};