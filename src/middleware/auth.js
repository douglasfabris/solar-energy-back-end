const { config } = require("dotenv");
const { verify } = require("jsonwebtoken");
config();

// Função para verificar se o usuário está autenticado para acessar as rotas
async function auth(req, res, next) {
  try {
    // Recebe o token enviado no headers da requisição
    const { authorization } = req.headers;
    // Verifica se a assinatura do token é válida e passa à próxima função da rota
    req["payload"] = verify(authorization, "lab365");
    next();
  } catch (err) {
    // Caso ocorra erro, retorna a mensagem
    return res.status(401).send({
      message: "Autenticação Falhou",
      cause: err.message,
    });
  }
}

module.exports = { auth };
