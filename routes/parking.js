const express = require("express");
const routes = express();
const parking = require("../controllers/parking");

routes.get("/", parking.getAllParkingSlots);
routes.get("/:id", parking.getParkingSlotById);

module.exports = routes;
