module.exports = (sequelize, DataTypes) => {
  const Jogador = sequelize.define('Jogador', {

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
    },
  },
    {
      freezeTableName: true,
      tableName: 'Jogador',
      timestamps: true,
      createdAt: 'dataCriacao',
      updatedAt: 'dataAtualizacao',
      version: 'versao'
    }
    
  );
  return Jogador;
};
