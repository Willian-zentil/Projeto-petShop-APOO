const { Cliente, Pet } = require("../model")

class ClientesController {
    
    async listarClientes(req, res){
        try {
            const listaDeClientes = await Cliente.findAll();
            res.status(200).json(listaDeClientes)

        } catch (error) {
            res.json("Não foi possível listar clientes")
            console.error(error)
        }
    }
    async listarClienteId(req, res){
        const { id } = req.params
        try {
            const clienteID = await Cliente.findByPk(id)
            if (!clienteID){
                return res.status(404).json('Não existe cliente com o id ' +id)
            }
            res.status(200).json(clienteID)
        } catch (error) {
            res.status(500).json("Não foi possivel listar o cliente pelo ID")
        }
    }
    async cadastrarCliente(req, res){
        try {
            const { name, cpf, phone } = req.body
            const novoCliente = await Cliente.create({name, cpf, phone})
            return res.status(201).json(novoCliente)

        } catch (error) {   
            res.status(400).json("Não foi possivel cadastrar o cliente")
        }
    }
    async deletarCliente(req, res){
        const { id } = req.params
        try {
            const clienteId = await Cliente.destroy({
                where: {
                    id
                }
            })
            res.status(204).json("")

            if (!clienteId){
                return res.status(404).json('Não existe cliente com o id ' +id)
            }
            
        } catch (error) {
            res.status(400).json("Não foi possivel deletar o cliente")
        }
    }
    async atualizarCliente (req, res) {
        const { id } = req.params
        try {
            const { name, cpf, phone } = req.body
            const atualizarCliente = await Cliente.update(
                {name, cpf, phone}, 
                {
                where: {
                    id
                }
            })
            return res.status(201).json("Cliente atualizado com sucesso")

        } catch (error) {
            res.status(400).json("Não foi possivel atualizar o cliente")
        }
    }

}

module.exports = ClientesController