const db = require("../database")
const { DataTypes } = require("sequelize")

const Cliente = require('./Cliente')

const Pet = db.define(
    "Pet", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "petId"
        },
        name: {
            type: DataTypes.STRING,
            field: "petName"
        },
        clienteId: {
            type: DataTypes.INTEGER,
            references: {
                model: Cliente,
                key: "id"
            },
            field: "clienteId"
        }
    }, {
        tableName: "Pet",
        timestamps: false
    }
)

module.exports = Pet