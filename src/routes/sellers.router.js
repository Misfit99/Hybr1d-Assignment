const express = require('express');

const {
    httpSellerRegister,
    httpSellerLogin
} = require('./sellers.controller');

const usersRouter = express.Router();

usersRouter.post('/seller-register', httpSellerRegister);

usersRouter.post('/seller-login', httpSellerLogin);

module.exports = usersRouter;