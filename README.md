# 💰 Analisador Financeiro Pro

Aplicação full stack desenvolvida para simular decisões financeiras entre **quitar dívidas** ou **investir dinheiro**, utilizando juros compostos e visualização gráfica da evolução ao longo do tempo.

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

## 📂 Estrutura do projeto
├── frontend/
│ ├── js/
│ │ ├── api.js
│ │ ├── chart.js
│ │ ├── main.js
│ │ └── ui.js
│ ├── styles/
│ │ └── main.css
│ └── index.html
│
├── src/
│ ├── controllers/
│ │ └── simulacao.controller.js
│ ├── routes/
│ │ └── simulacao.routes.js
│ ├── services/
│ │ └── simulacao.service.js
│ ├── utils/
│ │ └── calculos.js
│ └── app.js
│
├── server.js
├── package.json
└── README.md


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
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git


### 🔽 1. Entre na pasta do projeto
cd SEU-REPOSITORIO
code .


### 🔽 1. Instale as dependências.
npm install


### 🔽 1. Ative o servidor.
node server.js

