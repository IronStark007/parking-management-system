const booking = require('../models/booking');
const payment = require('../models/payment');
const parking = require('../models/parking');
const createOrDeleteHandler = require('../utils');

const createBooking = (req, res) => {
    const id = req.body.slotId;
    const parked = parking.filter((parking) => parking.slotId == id)[0];
    if (!parked){
        console.error(`parking slot with id ${id} not exists`);
        return res.status(500).send({"error":`parking slot with id ${id} not exists`});
    }
    const booked = booking.filter((booking) => booking.bookingId == parked.bookingId)[0];
    if (booked.booking) {
        console.error("Slot is occupied");
        return res.status(500).send({ "message": "Slot is occupied" })
        
    }
    const payed = payment.filter((payment) => payment.bookingId == booked.bookingId)[0];
    if (!payed.payment){
        console.log("Slot is free, please do the payment")
        return res.status(200).send({ "message": "Slot is free, please do the payment" })
    }
    else {
        booked.booking = true;
        booked.carDetails = req.body.carDetails;
        parked.carDetails = req.body.carDetails;
        createOrDeleteHandler('booking',booking);
        createOrDeleteHandler('parking',parking);
        console.log(`Slot ${id} booked`);
        return res.status(201).send({ "message": `Slot ${id} booked` })
    }
}

const deleteBooking = (req, res) => {
    const id = req.params.id;
    const parked = parking.filter((parking) => parking.slotId == id)[0];
    if (!parked){
        console.error(`parking slot with id ${id} not exists`);
        return res.status(500).send({"error":`parking slot with id ${id} not exists`});
    }
    const booked = booking.filter((booking) => booking.slotId == parked.slotId)[0];
    const payed = payment.filter((booking) => booking.bookingId == booked.bookingId)[0];
    if (booked.booking) {
        booked.booking = false;
        booked.carDetails = {};
        parked.carDetails = {};
        payed.payment = false;
        createOrDeleteHandler('booking',booking);
        createOrDeleteHandler('payment',payment);
        createOrDeleteHandler('parking',parking);
        console.log(`Booking with Slot ${booked.slotId} deleted`)
        return res.status(200).send({ "message": `Booking with Slot ${id} deleted` })
    }
    else {
        console.error("Slot is not booked");
        return res.status(500).send({ "message": "Slot is not booked" })
    }
}

module.exports = {
    createBooking: createBooking,
    deleteBooking: deleteBooking
}