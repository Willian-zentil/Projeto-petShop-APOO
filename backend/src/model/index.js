const Cliente  = require("./Cliente");
const Atendente = require("./Atendente");
const Pet = require("./Pet");
const Agendamento = require("./Agendamento");
 
Pet.belongsTo(Cliente, {
    foreignKey: "clienteId",
})

Agendamento.belongsTo(Cliente, {
    foreignKey: "clienteId",
})

Agendamento.belongsTo(Pet, {
    foreignKey: "petId",
})

 
module.exports = {
    Cliente,
    Atendente,
    Pet,
    Agendamento
}
