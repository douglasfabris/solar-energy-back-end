const express = require("express");
const cors = require("cors");
const { connection } = require("./database/connection");
const routes = require("./routes");

class Server {
  constructor(server = express()) {
    // Inicialização das funções
    this.middlewares(server);
    this.database();
    this.allRoutes(server);
    this.initializeServer(server);
  }

  async middlewares(app) {
    app.use(cors());
    app.use(express.json());
  }

  async database() {
    // Conexão com o banco de dados
    try {
      await connection.authenticate();
      console.log("Conexão bem sucedida!");
    } catch (error) {
      console.error("Não foi possível conectar no banco de dados.", error);
    }
  }

  async initializeServer(app) {
    // Inicialização do servidor do Node
    const PORT = 3333; // Valor da porta do servidor
    app.listen(PORT, () => console.log(`Servidor executando na porta ${PORT}`)); // Execução do servidor
  }

  async allRoutes(app) {
    // Utilização das rotas
    app.use(routes);
  }
}

module.exports = { Server };
