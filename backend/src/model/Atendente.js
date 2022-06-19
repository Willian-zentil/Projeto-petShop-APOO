const db = require("../database");
const { DataTypes, Model } = require("sequelize");

class Atendente extends Model {}
Atendente.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "atendenteId",
    },
    name: {
      type: DataTypes.STRING,
      field: "atendenteName",
    },
    email: {
      type: DataTypes.STRING,
      field: "atendenteEmail",
    },
    password: {
      type: DataTypes.STRING,
      field: "atendentePassword",
    },
  },
  {
    modelName: "Atendente",
    timestamps: false,
    sequelize: db,
    freezeTableName: true
  }
);

module.exports = Atendente;
