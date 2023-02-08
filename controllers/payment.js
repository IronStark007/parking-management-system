const booking = require('../models/booking');
const payment = require('../models/payment');
const createOrDeleteHandler = require('../utils')

const createPayment = (req, res) => {
    const id = req.body.slotId
    const booked = booking.filter(booking => booking.slotId == id)[0];
    if (!booked){
        console.error(`parking slot with id ${id} not exists`);
        return res.status(500).send({"error":`parking slot with id ${id} not exists`});
    }
    const payed = payment.filter(payment => payment.bookingId == booked.bookingId)[0]
    if (payed.payment) {
        console.error("Slot is already booked");
        return res.status(500).send({ "message": "Slot is already booked" })
    } else {
        payed.payment = true;
        createOrDeleteHandler('payment', payment);
        console.log(`Payment done for slot id ${id}`)
        return res.status(200).send({ "message": `Payment done for slot id ${id}` })
    }
}

module.exports = {
    createPayment: createPayment
}