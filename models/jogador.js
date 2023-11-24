module.exports = (sequelize, DataTypes) => {
  const Jogador = sequelize.define('Jogador', {
    // Campos do jogador
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    posicao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    altura: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    time_atual: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    tableName: 'jogadores_basquete',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
  });

  return Jogador;
};
