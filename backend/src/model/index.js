const Cliente  = require("./Cliente");
const Atendente = require("./Atendente");
const Pet = require("./Pet");
const Agendamento = require("./Agendamento");
 
Cliente.belongsTo(Pet, {
    foreignKey: "petId",
})

Agendamento.belongsTo(Cliente, {
    foreignKey: "clienteId",
})

 
module.exports = {
    Cliente,
    Atendente,
    Pet,
    Agendamento
}
