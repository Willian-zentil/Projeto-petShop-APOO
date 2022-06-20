const { Agendamento, Cliente, Pet } = require("../model");

class AgendamentosController {
  async listarAgendamentos(req, res) {
    try {
      const listaDeAgendamentos = await Agendamento.findAll({
        include: [
          {
            model: Pet,
            attributes: ["id", "name"],
            include: [{ model: Cliente, attributes: ["id", "name"] }],
          },
        ],
        attributes: [
          "id",
          "agendamentoDate",
          "agendamentoTypePayment",
          "agendamentoTypeService",
          "agendamentoValueService",
          "agendamentoIsPaid"
        ],
      });

      res.status(200).json(listaDeAgendamentos);
    } catch (error) {
      res.json("Não foi possível listar os agendamentos");
      console.error(error);
    }
  }

  async listarAgendamentoById(req, res) {
    const { id } = req.params;
    try {
      const agendamentoBD = await Agendamento.findByPk(id, {
        include: [
          {
            model: Pet,
            attributes: ["id", "name"],
            include: [{ model: Cliente, attributes: ["id", "name"] }],
          },
        ],
        attributes: [
          "id",
          "agendamentoDate",
          "agendamentoTypePayment",
          "agendamentoTypeService",
          "agendamentoValueService",
          "agendamentoIsPaid"
        ],
      });
      if (!agendamentoBD) {
        return res.status(404).json(`Não existe agendamento com o id ${id}`);
      }
      res.status(200).json(agendamentoBD);
    } catch (error) {
      res.status(400).json("Não foi possivel encontrar o agendamento pelo ID");
    }
  }

  async cadastrarAgendamento(req, res) {
    try {
      const {
        petId,
        agendamentoDate,
        agendamentoTypePayment,
        agendamentoTypeService,
        agendamentoValueService,
        agendamentoIsPaid
      } = req.body;
      const novoAgendamento = await Agendamento.create({
        petId,
        agendamentoDate,
        agendamentoTypePayment,
        agendamentoTypeService,
        agendamentoValueService,
        agendamentoIsPaid
      });
      return res.status(201).json(novoAgendamento);
    } catch (error) {
      res.status(400).json("Não foi possivel cadastrar o agendamento");
    }
  }

  async deletarAgendamento(req, res) {
    const { id } = req.params;
    try {
      const agendamentoBD = await Agendamento.findByPk(id);
      if (!agendamentoBD) {
        return res.status(404).json(`Não existe agendamento com o id ${id}`);
      }
      await agendamentoBD.destroy();
      res.status(200).json(`Agendamento ${id} deletado com sucesso`);
    } catch (error) {
      res.status(400).json("Não foi possivel deletar o agendamento");
    }
  }

  async atualizarAgendamento(req, res) {
    const { id } = req.params;
    try {
      const agendamentoBD = await Agendamento.findByPk(id);
      if (!agendamentoBD) {
        return res.status(404).json(`Não existe agendamento com o id ${id}`);
      }
      const {
        petId,
        agendamentoDate,
        agendamentoTypePayment,
        agendamentoTypeService,
        agendamentoValueService,
        agendamentoIsPaid
      } = req.body;
      const atualizarAgendamento = await Agendamento.update(
        {
          petId,
          agendamentoDate,
          agendamentoTypePayment,
          agendamentoTypeService,
          agendamentoValueService,
          agendamentoIsPaid
        },
        { where: { id } }
      );
      res.status(201).json(`Agendamento ${id} atualizado com sucesso`);
    } catch (error) {
      res.status(400).json("Não foi possivel atualizar o agendamento");
    }
  }
}

module.exports = AgendamentosController;
