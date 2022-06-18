const express = require("express")
const AtendentesController = new (require("../controllers/atendentesController"))
const ClientesController = new (require("../controllers/clientesController"))
const AgendamentosController = new (require("../controllers/agendamentosController"))
const PetsController = new (require("../controllers/petsController"))
const createAtendentesValidation = require("../validation/atendentes/createAtendentesValidation")
const createClientesValidation = require('../validation/clientes/createClientesValidation')
const createAgendamentosValidation = require("../validation/agendamentos/createAgendamentosValidation")
const createPetsValidation = require("../validation/pets/createPetsValidation")
const authController = new (require('../controllers/authController'))
const loginValidation = require('../validation/auth/authLogin')
const autenticador = require('../middlewares/autenticador')
const routes = express.Router()

/*Atendentes*/
routes.post("/atendentes", createAtendentesValidation, AtendentesController.cadastrarAtendente)
routes.delete("/atendentes/:id", AtendentesController.deletarAtendente)
routes.put("/atendentes/:id", AtendentesController.atualizarAtendente)

/*Clientes*/
routes.get("/clientes", ClientesController.listarClientes)
routes.get("/clientes/:id", ClientesController.listarClienteId)
routes.post("/clientes", createClientesValidation, ClientesController.cadastrarCliente)
routes.delete("/clientes/:id", ClientesController.deletarCliente)
routes.put("/clientes/:id", ClientesController.atualizarCliente)

/*Pets*/
routes.get("/pets", PetsController.listarPets)
routes.get("/pets/:id", PetsController.listarPetId)
routes.post("/pets", createPetsValidation, PetsController.cadastrarPet)
routes.delete("/pets/:id", PetsController.deletarPet)
routes.put("/pets/:id", PetsController.atualizarPet)

/*Login*/
routes.post('/login', loginValidation, authController.login)

/*Agendamentos*/
routes.get('/agendamentos', AgendamentosController.listarAgendamentos)
routes.get('/agendamentos/:id', AgendamentosController.listarAgendamentoById)
routes.post('/agendamentos', createAgendamentosValidation, AgendamentosController.cadastrarAgendamento)



module.exports = routes
