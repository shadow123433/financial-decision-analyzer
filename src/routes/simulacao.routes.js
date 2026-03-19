const express = require("express");
const router = express.Router();

const { simular } = require("../controllers/simulacao.controller");

router.post("/simular", simular);

module.exports = router;