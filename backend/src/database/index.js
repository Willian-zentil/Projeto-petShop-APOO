const sequelize = require ('sequelize')

const DB_NAME = 'ipet'
const DB_USER = 'root'
const DB_PASS = 'mysql'
const DB_HOST = 'localhost'
const DB_PORT = 3306
const DB_CONFIG = {
    dialect: 'mysql',
    host: DB_HOST,
    port: DB_PORT
}

let dbConexao = {}

try {
    dbConexao = new sequelize (
        DB_NAME,
        DB_USER,
        DB_PASS,
        DB_CONFIG
    )
} catch (error) {
    
}

async function conectarBanco () {
    try {
        await dbConexao.authenticate ()
        console.log ('Banco de Dados Conectado')
    } catch (error) {
        console.log ('Problemas ao Conectar ao Banco')
        console.error (error)
    }
}

Object.assign (dbConexao, {
    conectarBanco
})

module.exports = dbConexao