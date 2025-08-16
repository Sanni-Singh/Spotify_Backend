const express = require('express');
const { singup, login } = require('../controller/user.controller');
const route = express.Router();

route.post('/singup',singup);
route.get('/login',login);

module.exports = route;