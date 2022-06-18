const db = require("../database")
const { DataTypes } = require("sequelize")

const Cliente = db.define(
    "Cliente", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "clienteId"
        },
        name: {
            type: DataTypes.STRING,
            field: "clienteName"
        },
        cpf: {
            type: DataTypes.STRING,
            unique: true,
            field: "clienteCpf"
        },
        phone: {
            type: DataTypes.STRING,
            field: "clientePhone"
        },
    }, {
        tableName: "Cliente",
        timestamps: false
    }
)

module.exports = Cliente