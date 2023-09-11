const { config } = require("dotenv");

config();
// Configura o Sequelize para conectar ao banco de dados, utilizando variáveis de ambiente
module.exports = {
  dialect: process.env.DIALECT,
  host: process.env.HOST,
  username: process.env.USERNAMEDB,
  password: process.env.PASSWORDDB,
  database: process.env.DATABASE,
  port: process.env.PORT,
  define: {
    underscored: true,
    paranoid: true,
  },
};
