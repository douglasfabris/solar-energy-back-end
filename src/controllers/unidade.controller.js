const { Unidade } = require("../models/unidade");

class UnidadeController {
  async listarUnidades(req, res) {
    try {
      const unidades = await Unidade.findAll();
      res.status(200).send(unidades);
    } catch (err) {
      return res.status(400).send({
        message: "Falha na requisição",
        cause: err.message,
      });
    }
  }
  async criarUnidade(req, res) {
    try {
      const { id, nickname, address, brand, model, active } = req.body;
      const data = await Unidade.create({
        id,
        nickname,
        address,
        brand,
        model,
        active,
      });
      return res.status(201).send(data);
    } catch (err) {
      return res.status(400).send({
        message: "Não foi possível criar um registro de unidade",
        cause: err.message,
      });
    }
  }
  async atualizarUnidade(req, res) {
    try {
      const { id } = req.params;
      const { nickname, address, brand, model, active } = req.body;
      console.log(active);
      console.log(address);
      const updatedData = Object.assign(
        {},
        nickname && { nickname },
        address && { address },
        brand && { brand },
        model && { model },
        typeof active === "boolean" && { active }
      );
      console.log(updatedData);
      const response = await Unidade.update(updatedData, {
        where: { id: id },
      });

      if (response[0] == 0)
        return res.status(404).send("Unidade não encontrada ou campo inválido");
      return res.status(200).send(updatedData);
    } catch (err) {
      return res.status(400).send({
        message: "Falha na atualização dos dados",
        cause: err.message,
      });
    }
  }
  async excluirUnidade(req, res) {
    try {
      const { id } = req.params;
      const unidade = await Unidade.findByPk(id, {
        attributes: {
          exclude: ["deletedAt"],
        },
      });
      if (!unidade) return res.status(404).send("Unidade não encontrado");
      await Unidade.destroy({ where: { id: id } });
      return res.status(204).send("Unidade deletado com sucesso");
    } catch (err) {
      // Caso ocorre algum outro erro, retorna a sua causa
      return res.status(400).send({
        message: "Falha na exclusao da unidade",
        cause: err.message,
      });
    }
  }
}

module.exports = new UnidadeController();
