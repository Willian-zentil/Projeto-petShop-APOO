const { Agendamento, Cliente, Pet } = require("../model");

class AgendamentosController {
    async listarAgendamentos(req, res){
        try{
            const listaDeAgendamentos = await Agendamento.findAll(
                {include: [{model: Pet, attributes: ["id", "name"], include: [{model: Cliente, attributes: ["id", "name"]}]}],
                attributes: ['id', 'agendamentoDate', 'agendamentoTypePayment', 'agendamentoTypeService', 'agendamentoValueService']}   
            )
            
            res.status(200).json(listaDeAgendamentos)
        } catch (error) {
            res.json("Não foi possível listar os agendamentos")
            console.error(error)
        }
    }

    async listarAgendamentoById(req, res){
        const { id } = req.params;
        try {
            const agendamentoBD = await Agendamento.findByPk(id,
                {include: [{model: Pet, attributes: ["id", "name"], include: [{model: Cliente, attributes: ["id", "name"]}]}],
                attributes: ['id', 'agendamentoDate', 'agendamentoTypePayment', 'agendamentoTypeService', 'agendamentoValueService']}
            );
            if(!agendamentoBD){
                return res.status(404).json(`Não existe agendamento com o id ${id}`);
            }
            res.status(200).json(agendamentoBD);
        } catch (error) {
            res.status(400).json('Não foi possivel encontrar o agendamento pelo ID');
        }
    }

    async cadastrarAgendamento(req, res) {
        try {
            const { petId, agendamentoDate, agendamentoTypePayment, agendamentoTypeService, agendamentoValueService } = req.body;
            const novoAgendamento = await Agendamento.create({petId, agendamentoDate, agendamentoTypePayment, agendamentoTypeService, agendamentoValueService});
            return res.status(201).json(novoAgendamento);
        } catch (error) {
            res.status(400).json('Não foi possivel cadastrar o agendamento');
        }
    }
}

module.exports = AgendamentosController;