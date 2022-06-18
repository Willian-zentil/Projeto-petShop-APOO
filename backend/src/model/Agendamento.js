const db = require("../database");
const { DataTypes } = require("sequelize");

const Cliente  = require("./Cliente");
const Pet  = require("./Pet");

const Agendamento = db.define(
    "Agendamento", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "agendamentoId"
        },
        agendamentoDate: {
            type: DataTypes.DATE,
            field: "agendamentoDate"
        },
        agendamentoTypePayment: {
          type: DataTypes.STRING,
          field: "agendamentoTypePayment"
        },
        agendamentoTypeService: {
          type: DataTypes.STRING,
          field: "agendamentoTypeService"
        },
        agendamentoValueService: {
          type: DataTypes.FLOAT,
          field: "agendamentoValueService"
        },
        clienteId: {
          type: DataTypes.INTEGER,
          references: {
              model: Cliente,
              key: "id"
          },
          field: "clienteId"
        },
        petId: {
          type: DataTypes.INTEGER,
          references: {
              model: Pet,
              key: "id"
          },
          field: "petId"
        }
    }, {
        tableName: "Agendamento",
        timestamps: false
    }
)
module.exports = Agendamento;