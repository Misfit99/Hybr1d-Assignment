const express = require('express');

const {
    httpUserRegister,
    httpUserLogin
} = require('./buyers.controller');

const usersRouter = express.Router();

usersRouter.post('/buyer-register', httpUserRegister);

usersRouter.post('/buyer-login', httpUserLogin);

module.exports = usersRouter;