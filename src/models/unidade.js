const { connection } = require("../database/connection");
const { STRING, BOOLEAN } = require("sequelize");

const Unidade = connection.define("unidade", {
  nickname: { type: STRING, allowNull: false },
  address: { type: STRING, allowNull: false },
  brand: { type: STRING, allowNull: false },
  model: { type: STRING, allowNull: false },
  active: { type: BOOLEAN, allowNull: false },
});

module.exports = { Unidade };
