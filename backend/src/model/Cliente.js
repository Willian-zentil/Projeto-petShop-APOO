const db = require("../database");
const { DataTypes, Model } = require("sequelize");

class Cliente extends Model {}
Cliente.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "clienteId",
    },
    name: {
      type: DataTypes.STRING,
      field: "clienteName",
    },
    cpf: {
      type: DataTypes.STRING,
      unique: true,
      field: "clienteCpf",
    },
    phone: {
      type: DataTypes.STRING,
      field: "clientePhone",
    },
  },
  {
    modelName: "Cliente",
    timestamps: false,
    sequelize: db,
    freezeTableName: true,
  }
);

module.exports = Cliente;
