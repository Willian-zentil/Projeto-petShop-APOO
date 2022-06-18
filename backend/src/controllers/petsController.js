const { Pet } = require("../model")

class PetsController {
    
    async listarPets(req, res){
        try {
            const listaDePets = await Pet.findAll();
            res.status(200).json(listaDePets)

        } catch (error) {
            res.json("Não foi possível listar pets")
            console.error(error)
        }
    }

    async listarPetId(req, res){
        const { id } = req.params
        try {
            const petID = await Pet.findByPk(id)
            if (!petID){
                return res.status(404).json('Não existe pet com o id ' +id)
            }
            res.status(200).json(petID)
        } catch (error) {
            res.status(500).json("Não foi possivel listar o pet pelo ID")
        }
    }

    async cadastrarPet(req, res){
        try {
            const { name } = req.body
            const novoPet = await Pet.create({name})
            return res.status(201).json(novoPet)

        } catch (error) {
            res.status(400).json("Não foi possivel cadastrar o pet")
        }
    }

    async deletarPet(req, res){
        const { id } = req.params
        try {
            const petId = await Pet.destroy({
                where: {
                    id
                }
            })
            res.status(204).json("")

            if (!petId){
                return res.status(404).json('Não existe pet com o id ' +id)
            }
            
        } catch (error) {
            res.status(400).json("Não foi possivel deletar o pet")
        }
    }

    async atualizarPet (req, res) {
        const { id } = req.params
        try {
            const { name } = req.body
            const atualizarPet = await Pet.update(
                {name}, 
                {
                where: {
                    id
                }
            })
            return res.status(201).json("Pet atualizado com sucesso")

        } catch (error) {
            res.status(400).json("Não foi possivel atualizar o pet")
        }
    }
}

module.exports = PetsController