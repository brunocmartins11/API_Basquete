module.exports = (sequelize, DataTypes) => {
  const jogador = sequelize.define('jogador', {
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
    timestamps: false // Define para não criar campos de timestamp
  });

  return jogador;
};
