const express = require("express");
const cors = require("cors");
const products = require("../mock-products.json");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Sizervinks: Servidor iniciado e rodando na porta ${PORT}`);
});
