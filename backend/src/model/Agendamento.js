const db = require("../database");
const { DataTypes, Model } = require("sequelize");

const Cliente = require("./Cliente");
const Pet = require("./Pet");

class Agendamento extends Model {}
Agendamento.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "agendamentoId",
    },
    agendamentoDate: {
      type: DataTypes.DATE,
      field: "agendamentoDate",
    },
    agendamentoTypePayment: {
      type: DataTypes.STRING,
      field: "agendamentoTypePayment",
    },
    agendamentoTypeService: {
      type: DataTypes.STRING,
      field: "agendamentoTypeService",
    },
    agendamentoValueService: {
      type: DataTypes.FLOAT,
      field: "agendamentoValueService",
    },
    agendamentoIsPaid: {
      type: DataTypes.BOOLEAN,
      field: "agendamentoIsPaid",
    },
    clienteId: {
      type: DataTypes.INTEGER,
      references: {
        model: Cliente,
        key: "id",
      },
      field: "clienteId",
    },
    petId: {
      type: DataTypes.INTEGER,
      references: {
        model: Pet,
        key: "id",
      },
      field: "petId",
    },
  },
  {
    modelName: "Agendamento",
    timestamps: false,
    sequelize: db,
    freezeTableName: true
  }
);

module.exports = Agendamento;
