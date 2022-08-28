const payment = require('../models/payment');
const createOrDeleteHandler = require('../utils')

const createPayment = (req, res) => {
    const id = req.body.bookingId
    const payed = payment.filter((booking) => booking.bookingId == id)[0]
    if (payed.payment) {
        console.error("Slot is already booked");
        res.status(500).send({ "message": "Slot is already booked" })
    } else {
        payed.payment = true;
        createOrDeleteHandler('payment', payment);
        console.log(`Payment done for booking id ${payed.bookingId}`)
        res.status(200).send({ "message": `Payment done for booking id ${payed.bookingId}` })
    }
}

module.exports = {
    createPayment: createPayment
}