const db = require("../database")
const { DataTypes} = require("sequelize")

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
    }, {
        tableName: "Pet",
        timestamps: false
    }
)

module.exports = Pet