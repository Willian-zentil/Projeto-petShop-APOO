const Atendente = require('../model/Atendente')
const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const secret = require ('../config/secret')

class authController {
    async login (req, res) {
        const { email, password } = req.body

        const atendente = await Atendente.findOne ({
            where: {
                email: email
            }
        })

        if (!atendente) {
            return res.status(400).json ('Usuário ou senha inválidos')
        }

        if (!bcrypt.compareSync(password, atendente.password)) {
            return res.status(401).json ('Usuario ou senha invalidos')
        }

        const token = jwt.sign ({
            id: atendente.id,
            email: atendente.email,
            name: atendente.name
        }, secret.key)

        return res.json(token)
    }
}

module.exports = authController