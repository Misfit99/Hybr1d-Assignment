const express = require('express');
const app = express();
app.use(express.json());
const usersRouter = require('./routes/buyers.router');
const sellersRouter = require('./routes/sellers.router');
const buyerAuth = require('./middlewares/user.auth.middleware');
const sellerAuth = require('./middlewares/seller.auth.middleware');

//middlewares
app.use('/users', usersRouter);
app.use('/sellers', sellersRouter);

app.post('/welcome-Buyer', buyerAuth, (req,res) => {
    res.status(200).send("Welcome Buyer!!");
});

app.post('/welcome-Seller', sellerAuth, (req,res) => {
    res.status(200).send("Welcome Seller!!");
});

module.exports = app;