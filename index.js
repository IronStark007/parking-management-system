const express = require('express');
const parking = require('./routes/parking')
const booking = require('./routes/booking')
const payment = require('./routes/payment')
require('dotenv').config();

const app = express();

let port = process.env.PORT || 8000;

app.use(express.json());

app.use('/parking', parking);
app.use('/booking', booking);
app.use('/payment', payment);


app.listen(port, () => {
    console.log(`Connected to server at port ${port}`)
});