/* jshint indent: 2 */
"use strict";

//Model que descreve o usuário
module.exports = function (sequelize, Sequelize) {
  var Usuario = sequelize.define('usuario', {
    idUsuario: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        is: ["^[a-zA-Zà-úÀ-Ú ]+$"]
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  });

  return Usuario;

};
