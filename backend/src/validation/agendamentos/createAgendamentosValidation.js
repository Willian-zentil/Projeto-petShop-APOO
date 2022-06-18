const {validate, Joi} = require ('express-validation');

module.exports = validate ({
    body: Joi.object({
        
        petId: Joi.number().required(),
        agendamentoDate: Joi.date().required(),
        agendamentoTypePayment: Joi.string().required(),
        agendamentoTypeService: Joi.string().required(),
        agendamentoValueService: Joi.number().required()
    })
})