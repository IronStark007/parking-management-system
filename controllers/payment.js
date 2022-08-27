const fs = require('fs');
const payment = require('../models/payment');

const createFileHanlder = (modelname) => {
    file = `C:/Users/ansar/OneDrive/Documents/Web development/geekster/Geekster/Advanced Backend/Jan8/models/booking.js`
    var content = fs.readFileSync(file, "utf8");
    end = content.indexOf("=")
    first_words = content.slice(0, end + 1)
    complete = `${first_words} ${JSON.stringify(modelname)}`
    fs.writeFileSync(file, complete, 'utf8');
}

const createPayment = (req, res) => {
    var id = req.body.bookingId
    payed = payment.filter((booking) => booking.bookingId == id)[0]
    if (payed.payment) {
        res.send({ "message": "Slot is already booked" })
    }
    payed.payment = true;
    createFileHanlder(payment);
    res.send({ "message": `Payment done with booking id ${payed.bookingId}` })
}

module.exports = {
    createPayment: createPayment
}