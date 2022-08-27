const fs = require('fs');
var path = require('path');

module.exports =  createOrDeleteBooking = (booking) => {
    const file = path.join(__dirname,'../models/booking.js');
    const content = fs.readFileSync(file, "utf8");
    const start = content.indexOf("=")
    const previous = content.slice(0, start + 1)
    const complete = `${previous} ${JSON.stringify(booking)}`
    fs.writeFileSync(file, complete, 'utf8');
}

