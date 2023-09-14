const {
  createOneUsuario,
  listarOneUsuario,
  updateUsuario,
  deleteUsuario,
  login,
} = require("../controllers/usuario.controller");
const { Router } = require("express");
const { auth } = require("../middleware/auth");

class UsuarioRouter {
  routesFromUsuario() {
    const usuarioRoutes = Router();
    usuarioRoutes.post("/usuario", createOneUsuario);
    usuarioRoutes.get("/usuario/:id", auth, listarOneUsuario);
    usuarioRoutes.put("/usuario/:id", auth, updateUsuario);
    usuarioRoutes.delete("/usuario/:id", auth, deleteUsuario);
    usuarioRoutes.post("/login", login);
    return usuarioRoutes;
  }
}

module.exports = new UsuarioRouter();
