const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const config = require("./config");



const app = express();
const port = 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const banco = new Sequelize(config.development);


const Jogador = banco.define('./models/jogador');

banco.sync().then(() => {
  console.log('Modelo sincronizado');
});

app.get('/jogador', async (req, res) => {
  const jogadores = await Jogador.findAll();
  res.json(jogadores);
});

app.post('/jogador', async (req, res) => {
  const { nome, posicao, altura, time_atual } = req.body;
  const novoJogador = await Jogador.create({ 'nome': nome, 'posicao': posicao, 'altura': altura, 'time_atual': time_atual });
  res.json(novoJogador);

});

app.put('/jogador/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, posicao, altura, time_atual } = req.body;

  await Jogador.update({ nome, posicao, altura, time_atual }, { where: { id } });
  const jogadorAtualizado = await Jogador.findByPk(id);

  res.json(jogadorAtualizado);
});

app.delete("/jogador:id", async (req, res) => {
  const { id } = req.params;

  await Jogador.destroy({ where: { id } });
  res.json({ message: 'O jogador foi excluído' });
});

//Iniciar o server
app.listen(port, () => {
  console.log(`Server está na porta ${port}`);
});
