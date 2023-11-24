const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize }= require("sequelize");
const config = require("./config");
const defineJogadorModel = require("./models/jogador");

const app = express();
const port = 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const banco = new Sequelize(config.development);

const Jogador = defineJogadorModel(banco);

banco.sync().then(() => {
  console.log("Tabela de jogadores criada!");
});
app.get("/jogador", async (req, res) => {
  const Jogador = await jogador.findAll();
  res.json(Jogador);
});

app.post("/jogador", async (req, res) => {
  const { nome, posicao, altura, time_atual } = req.body;
  const Jogador = await jogador.create({ nome, posicao, altura, time_atual });
  res.json(Jogador);
});

app.put("/jogador:id", async (req, res) => {
  const { id } = req.params;
  const { nome, posicao, altura, time_atual } = req.body;

  await jogador.update({ nome, posicao, altura, time_atual }, { where: { id } });
  const Jogador = await jogador.findByPk(id);

  res.json(Jogador);
});

app.delete("/jogador:id", async (req, res) => {
  const { id } = req.params;

  await jogador.destroy({ where: { id } });
  res.json({ message: " O jogador foi excluído" });
});

//Iniciar o server
app.listen(port, () => {
  console.log(`Server está na porta ${port}`);
});