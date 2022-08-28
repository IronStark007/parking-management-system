const parking = require('../models/parking')


const getAllParkingSlots = (req, res) => {
    console.log("getting all parking slots")
    res.status(200).send(parking);
}

const getParkingSlotById = (req, res) => {
    const id = req.params.id;
    const parking_slot = parking.filter((slot) => slot.slotId == id)
    if (parking_slot.length===1){
        console.log("getting parking slot")
        res.status(200).send(parking_slot);
    }
    else{
        console.error(`parking slot with id ${id} not exists`);
        res.status(500).send({"error":`parking slot with id ${id} not exists`});
    }
}


module.exports = {
    getAllParkingSlots: getAllParkingSlots,
    getParkingSlotById: getParkingSlotById
}