module.exports = (sequelize, DataTypes) => {
  const jogador = sequelize.define('jogador', {
      
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    posicao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    altura: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    time_atual: {
        type: Sequelize.STRING,
        allowNull: false
    },
    },
    {
      freezeTableName: true,
      tableName: 'jogadores_basquete',
      timestamps: true,
      createdAt: 'dataCriacao',
      updatedAt: 'dataAtualizacao',
      version: 'versao'
    }
  );
  return jogador;
};
