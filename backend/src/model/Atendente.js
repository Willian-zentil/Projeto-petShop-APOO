const db = require("../database")
const { DataTypes } = require("sequelize")

const Atendente = db.define(
    "Atendente", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "atendenteId"
        },
        name: {
            type: DataTypes.STRING,
            field: "atendenteName"
        },
        email:{
            type: DataTypes.STRING,
            field: "atendenteEmail"
        },
        password:{
            type: DataTypes.STRING,
            field: "atendentePassword"
        }
    }, {
        tableName: "Atendente",
        timestamps: false
    }
)

module.exports = Atendente