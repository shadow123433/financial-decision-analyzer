const express = require('express');
const cors = require('cors');
const path = require('path');
const simulacaoRoutes = require('./routes/simulacao.routes');

const app = express();


app.use(cors());
app.use(express.json());


app.use('/api', simulacaoRoutes);

// 3. Servir arquivos estáticos (CSS, JS do front, Imagens)
const publicPath = path.join(__dirname, '..', 'frontend');
app.use(express.static(publicPath));


app.use((req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

module.exports = app;