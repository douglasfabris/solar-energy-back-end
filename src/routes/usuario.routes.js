const {
  createOneUsuario,
  listarOneUsuario,
  updateUsuario,
  deleteUsuario,
  login,
} = require("../controllers/usuario.controller");
const { Router } = require("express");

class UsuarioRouter {
  routesFromUsuario() {
    const usuarioRoutes = Router();
    usuarioRoutes.post("/usuario", createOneUsuario);
    usuarioRoutes.get("/usuario/:id", listarOneUsuario);
    usuarioRoutes.put("/usuario/:id", updateUsuario);
    usuarioRoutes.delete("/usuario/:id", deleteUsuario);
    usuarioRoutes.post("/login", login);
    return usuarioRoutes;
  }
}

module.exports = new UsuarioRouter();
