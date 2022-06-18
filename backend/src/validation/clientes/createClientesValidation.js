const {validate, Joi} = require ('express-validation')

module.exports = validate ({
    body: Joi.object({
        name: Joi.string().required(),
        cpf: Joi.string().min(11).required(),
        phone: Joi.string().min(12),
    })
})