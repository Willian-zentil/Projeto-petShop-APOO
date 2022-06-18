const { Atendente } = require("../model")
const bcrypt = require("bcryptjs")


class AtendentesController {
    async cadastrarAtendente(req, res){
        try {
            const { name, email, password } = req.body
            const newPassword = bcrypt.hashSync(password, 10)
            const newAtendente = await Atendente.create({name, email, password: newPassword})
            return res.status(201).json(newAtendente)

        } catch (error) {
            res.status(400).json("Não foi possivel cadastrar o atendente")
            console.log(error)
        }
    }

    async deletarAtendente(req, res){
        const { id } = req.params
        try {
            const atendenteId = await Atendente.destroy({
                where: {
                    id
                }
            })
            res.status(204).send('')

            if (!atendenteId){
                return res.status(404).json('Não existe atendente com o id ' +id)
            }
            
        } catch (error) {
            res.status(400).json("Não foi possivel deletar o atendente")
        }
    }

    async atualizarAtendente (req, res) {
        const { id } = req.params
        try {
            const { name, email, password } = req.body
            
            if (password){
                const newPassword = bcrypt.hashSync(password, 10)
                const atualizarAtendente = await Atendente.update(
                    {name, email, password: newPassword}, 
                    {
                    where: {
                        id
                    }
                })
                return res.status(201).json('Atendente atualizado')
            }else {
                const atualizarAtendente = await Atendente.update(
                    {name, email, password}, 
                    {
                    where: {
                        id
                    }
                })
                return res.status(201).json('Atendente atualizado com sucesso')
            }

        } catch (error) {
            res.status(400).json("Não foi possivel atualizar o paciente")
        }
    }

}

module.exports = AtendentesController