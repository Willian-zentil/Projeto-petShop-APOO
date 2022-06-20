const Cliente  = require("./Cliente");
const Atendente = require("./Atendente");
const Pet = require("./Pet");
const Agendamento = require("./Agendamento");
 
Pet.belongsTo(Cliente, {
    foreignKey: "clienteId",
    onDelete: "CASCADE",
})

Agendamento.belongsTo(Cliente, {
    foreignKey: "clienteId",
    onDelete: "CASCADE",
})

Agendamento.belongsTo(Pet, {
    foreignKey: "petId",
    onDelete: "CASCADE",
})

 
module.exports = {
    Cliente,
    Atendente,
    Pet,
    Agendamento
}
