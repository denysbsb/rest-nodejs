"use strict";

var express = require('express');
var router = express.Router();
var models = require('../models/rdb');
var path = require("path");
var config = path.join(__dirname, 'config.json');

//Autenticar usuário
router.post('/auth', function (req, res) {
  if (!req.body.email || !req.body.senha) {
    return res.status(400).json({ success: false, "message": "email.or.password.not.sent", "code": 66 });
  }

  var parameters = {
    attributes: ['idUsuario', 'nome', 'email', 'senha'],
    where: {
      email: req.body.email
    }
  };

  models.usuario.get(parameters, function (user, error) {
    console.log('TESTE',user);
  });

});

module.exports = router;
