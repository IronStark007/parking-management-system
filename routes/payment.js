const express = require('express');
const routes = express();
const payment = require('../controllers/payment')

routes.post('/', payment.createPayment);

module.exports = routes;