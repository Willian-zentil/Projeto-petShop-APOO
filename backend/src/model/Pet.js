const db = require("../database");
const { DataTypes, Model } = require("sequelize");

const Cliente = require("./Cliente");

class Pet extends Model {}
Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "petId",
    },
    name: {
      type: DataTypes.STRING,
      field: "petName",
    },
    clienteId: {
      type: DataTypes.INTEGER,
      references: {
        model: Cliente,
        key: "id",
      },
      field: "clienteId",
    },
  },
  {
    tableName: "Pet",
    timestamps: false,
    sequelize: db,
    freezeTableName: true,
  }
);

module.exports = Pet;
