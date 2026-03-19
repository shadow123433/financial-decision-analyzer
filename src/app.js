const express = require('express');
const cors = require('cors');
const simulacaoRoutes = require('./routes/simulacao.routes');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "..")));

//endereçamento das rotas
app.use('/api', simulacaoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});