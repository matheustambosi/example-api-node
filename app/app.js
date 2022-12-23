const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get("/", (req, res, next) => {
  res.json(
    `Testando Node.JS pelo Docker na porta ${port}`
  );
});

app.get("/user", (req, res, next) => {
  res.json(["Matheus Tambosi"]);
});