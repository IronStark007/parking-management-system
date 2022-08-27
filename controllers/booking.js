const booking = require('../models/booking')
const createOrDeleteBooking = require('../utils/booking');

const createBooking = (req, res) => {
    const id = req.body.bookingId
    const booked = booking.filter((booking) => booking.bookingId == id)[0]
    if (booked.booking) {
        res.status(500).send({ "message": "Slot is occupied" })
    }
    else {
        booked.booking = true;
        createOrDeleteBooking(booking);
        res.send({ "message": `Booking with Slot ${booked.slotId} created` })
    }
}

const deleteBooking = (req, res) => {
    const id = req.params.id;
    const booked = booking.filter((booking) => booking.bookingId == id)[0]
    if (booked.booking) {
        booked.booking = false;
        createOrDeleteBooking(booking);
        res.send({ "message": `Booking with Slot ${booked.slotId} deleted` })
    }
    else {
        res.status(500).send({ "message": "Slot is not booked" })
    }
}

module.exports = {
    createBooking: createBooking,
    deleteBooking: deleteBooking
}