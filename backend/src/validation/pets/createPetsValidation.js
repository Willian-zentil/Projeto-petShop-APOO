const {validate, Joi} = require ('express-validation')

module.exports = validate ({
    body: Joi.object({
        clienteId: Joi.number().required(),
        name: Joi.string().required(),
    })
})