const { connection } = require("../database/connection");
const { STRING, DATE, INTEGER } = require("sequelize");

const Geracao = connection.define("geracao", {
    reference_date: {
        type: DATE,
        allowNull: false,
    },
    total_generated: {
        type: STRING,
        allowNull: false,
    },
});

// Define a relação de chave estrangeira com a tabela Unidade
Geracao.belongsTo(Unidade, {
    foreignKey: "UnidadeId",
    allowNull: false,
});

module.exports = { Geracao };
