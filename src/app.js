const express = require('express');
const cors = require('cors');
const simulacaoRoutes = require('./routes/simulacao.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', simulacaoRoutes);

module.exports = app;