const parking = require('../models/parking')


const getAllParkingSlots = (req, res) => {
    console.log("getting all parking slots")
    return res.status(200).send(parking);
}

const getParkingSlotById = (req, res) => {
    const id = req.params.id;
    const parked = parking.filter((slot) => slot.slotId == id)[0];
    if (parked){
        console.log("getting parking slot")
        return res.status(200).send(parked);
    }
    else{
        console.error(`parking slot with id ${id} not exists`);
        return res.status(500).send({"error":`parking slot with id ${id} not exists`});
    }
}


module.exports = {
    getAllParkingSlots: getAllParkingSlots,
    getParkingSlotById: getParkingSlotById
}