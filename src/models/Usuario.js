const { connection } = require("../database/connection");
const { STRING, INTEGER } = require("sequelize");

const Usuario = connection.define(
  //define declara o modelo inicial
  "usuario",
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    nome: {
      type: STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 20],
          msg: "Nome precisa ter entre 02 e 20 caracteres.",
        },
      },
    },

    email: {
      type: STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },

    senha: {
      type: STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 12],
          msg: "A senha deve conter de 8 a 12 caracteres.",
        },
        is: {
          args: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          msg: "A senha deve conter uma letra maiúscula, um número e um caractere especial.",
        },
      },
    },
  }
);
module.exports = {
  Usuario,
};
