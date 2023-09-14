const { Usuario } = require("../models/usuario");
const jwt = require("jsonwebtoken");

class UsuarioController {
  async login(request, response) {
    const { email, senha } = request.body;

    try {
      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario) {
        return response.status(404).json({ message: "Email não encontrado." });
      }
      if (!senha !== usuario.senha) {
        return response.status(401).json({ message: "Senha incorreta" });
      }
      const token = jwt.sign(
        {
          id_usuario: usuario,
          email: usuario.email,
        },
        "lab365",
        { expiresIn: "1h" }
      );
      return response.status(200).json({ token });
    } catch (error) {
      console.log(error);
      return response.status(401).json({ message: "Erro no servidor." });
    }
  }
  async createOneUsuario(request, response) {
    try {
      const { name, email, senha, login } = request.body;

      if (!name) {
        return response.status(400).send({ message: "Nome obrigatório." });
      }
      if (!email) {
        return response.status(400).send({ message: "email obrigatório " });
      }
      if (!senha) {
        return response
          .status(400)
          .send({ message: "Campo não pode ser vazio." });
      }
      const validaEmail = await Usuario.findOne({
        where: { email },
      });
      if (validaEmail) {
        return response
          .status(403)
          .send({ message: "Este email já está cadastrado." });
      }
      const data = await Usuario.create({
        name,
        email,
        senha,
      });
      return response
        .status(201)
        .send({ message: "Usuário cadastrado com sucesso!" });
    } catch (error) {
      return response
        .status(500)
        .send({ message: "Erro no servidor.", cause: error.message });
    }
  }

  async listarOneUsuario(request, response) {
    const { id } = request.params;
    const data = await Usuario.findOne({
      where: { id },
      attributes: { exclude: ["senha"] },
    });
    if (!data) {
      return response.status(400).send("usuário não encontrado.");
    }
    return response.status(201).send(data);
  }

  async updateUsuario(request, response) {
    const { id } = request.params;
    const { name, senha } = request.body;
    try {
      const usuario = await Usuario.findOne({ where: { id: id } });
      if (!usuario) {
        return response
          .status(400)
          .json({ message: "Usuário não encontrado." });
      }
      if (!name || !senha) {
        return response.status(400).send({ message: "Campo obrigatório." });
      }
      usuario.name = name;
      usuario.senha = senha;

      await usuario.save();
      return response
        .status(200)
        .send({ message: "Dados atualizados com sucesso!" });
    } catch (error) {
      return response.status(500).json({ message: "Erro no servidor." });
    }
  }

  async senha(request, response) {
    const { id } = request.params;
    const { senha } = request.body;
    try {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return response
          .status(404)
          .json({ message: "Usuário não encontrado." });
      }
      usuario.senha = senha;

      await Usuario.save();

      return response
        .status(204)
        .json({ message: "Senha alterada com sucesso!" });
    } catch (error) {
      console.log(error.message);
      return response
        .status(400)
        .json({ message: "Erro no servidor", cause: error.message });
    }
  }

  async deleteUsuario(request, response) {
    const { id } = request.params;
    await Usuario.destroy({ where: { id } });
    return response
      .status(201)
      .send({ message: "Usuário deletado com sucesso." });
  }
}
module.exports = new UsuarioController();
