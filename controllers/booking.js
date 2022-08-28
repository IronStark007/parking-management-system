const booking = require('../models/booking');
const payment = require('../models/payment');
const createOrDeleteHandler = require('../utils');

const createBooking = (req, res) => {
    const id = req.body.slotId;
    const booked = booking.filter((booking) => booking.slotId == id)[0];
    const payed = payment.filter((booking) => booking.bookingId == booked.bookingId)[0];
    if (booked.booking) {
        console.error("Slot is occupied");
        res.status(500).send({ "message": "Slot is occupied" })
    }
    else if (!payed.payment){
        console.log("Slot is free, please do the payment")
        res.status(200).send({ "message": "Slot is free, please do the payment" })
    }
    else {
        booked.booking = true;
        booked.carDetails = req.body.carDetails;
        createOrDeleteHandler('booking',booking);
        console.log(`Slot booked with the booking id ${booked.bookingId}`)
        res.status(201).send({ "message": `Slot booked with the booking id ${booked.bookingId}` })
    }
}

const deleteBooking = (req, res) => {
    const id = req.params.id;
    const booked = booking.filter((booking) => booking.bookingId == id)[0]
    const payed = payment.filter((booking) => booking.bookingId == id)[0];
    if (booked.booking) {
        booked.booking = false;
        booked.carDetails = {};
        payed.payment = false;
        createOrDeleteHandler('booking',booking);
        createOrDeleteHandler('payment',payment);
        console.log(`Booking with Slot ${booked.slotId} deleted`)
        res.status(200).send({ "message": `Booking with Slot ${booked.slotId} deleted` })
    }
    else {
        console.error("Slot is not booked");
        res.status(500).send({ "message": "Slot is not booked" })
    }
}

module.exports = {
    createBooking: createBooking,
    deleteBooking: deleteBooking
}