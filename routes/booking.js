const express = require('express');
const routes = express();
const booking = require('../controllers/booking')

routes.post('/', booking.createBooking);
routes.delete('/:id', booking.deleteBooking);

module.exports = routes;