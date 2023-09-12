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
}

module.exports = new UnidadeController();
