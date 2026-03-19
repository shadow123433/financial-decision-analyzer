const express = require('express');
const router = express.Router();
const simulacaoController = require('../controllers/simulacao.controller');

router.post('/analisar', simulacaoController.calcularAnalise);

module.exports = router;