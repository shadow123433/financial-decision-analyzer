const express = require("express");
const app = express();

const simulacaoRoutes = require("./routes/simulacao.routes");

app.use(express.json());
app.use("/api", simulacaoRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});