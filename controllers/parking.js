const parking = require('../models/parking')


const getAllParkingSlots = (req, res) => {
    res.status(200).send(parking);
}

const getParkingSlotById = (req, res) => {
    const id = req.params.id;
    const parking_slot = parking.filter((slot) => slot.slotId == id)
    if (parking_slot.length===1){
        res.status(200).send(parking_slot);
    }
    else{
        res.status(500).send({"error":`parking slot with id ${id} not exists`});
    }
}


module.exports = {
    getAllParkingSlots: getAllParkingSlots,
    getParkingSlotById: getParkingSlotById
}