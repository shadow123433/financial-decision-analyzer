# 💰 Analisador Financeiro Pro

Aplicação desenvolvida para simular decisões financeiras entre **quitar dívidas** ou **investir dinheiro**, utilizando juros compostos e visualização gráfica da evolução ao longo do tempo.

---

## 🚀 Sobre o projeto

O **Analisador Financeiro Pro** permite ao usuário comparar cenários reais de decisão financeira com base em:

- Valor da dívida
- Taxa de juros da dívida
- Valor disponível para investimento
- Taxa de rendimento
- Tempo (em meses)

A aplicação calcula a evolução mês a mês e fornece:

- 📊 Comparação final entre dívida e investimento  
- 📈 Gráfico dinâmico de evolução  
- 🧠 Recomendação automática baseada nos resultados  

---

## 🧠 Tecnologias utilizadas

### Backend
- Node.js
- Express
- CORS

### Frontend
- HTML5
- CSS3
- JavaScript (ES Modules)
- Chart.js

---

📂 financial-decision-analyzer
├── 📁 frontend/              # Interface do Usuário (Client-side)
│   ├── 📁 js/                # Lógica de scripts do frontend
│   │   ├── 📄 api.js         # Consumo da API do backend
│   │   ├── 📄 chart.js       # Configuração dos gráficos (Chart.js)
│   │   ├── 📄 main.js        # Script principal de inicialização
│   │   └── 📄 ui.js          # Manipulação do DOM e interface
│   ├── 📁 styles/            # Estilização
│   │   └── 📄 main.css       # Estilos globais da aplicação
│   └── 📄 index.html         # Ponto de entrada da aplicação web
│
├── 📁 src/                   # Núcleo do Backend (Server-side)
│   ├── 📁 controllers/       # Orquestração de requisições e respostas
│   ├── 📁 routes/            # Definição das rotas da API
│   ├── 📁 services/          # Regras de negócio e lógica complexa
│   ├── 📁 utils/             # Funções utilitárias e cálculos matemáticos
│   └── 📄 app.js             # Configuração e middlewares do Express
│
├── 📁 node_modules/          # Dependências instaladas (Ignorado no Git)
├── 📄 .gitignore             # Arquivos e pastas ignorados pelo Git
├── 📄 package-lock.json      # Registro exato das versões das dependências
├── 📄 package.json           # Manifesto do projeto e scripts
├── 📄 README.md              # Documentação do projeto
├── 📄 requests.http          # Arquivo para testes de endpoints
└── 📄 server.js              # Inicialização do servidor Node.js


---

## ⚙️ Funcionalidades

- Simulação de dívida vs investimento
- Cálculo de juros compostos mês a mês
- Comparação baseada em tempo
- Gráfico interativo com Chart.js
- Feedback automático de decisão
- Tratamento de erros básicos

---

## 🛠️ Como executar o projeto

### 🔽 1. Clone o repositório

```bash
git clone https://github.com/shadow123433/financial-decision-analyzer.git


### 🔽 1. Entre na pasta do projeto
cd financial-decision-analyzer
code .


### 🔽 1. Instale as dependências.
npm install


### 🔽 1. Ative o servidor.
node server.js

