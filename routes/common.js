const express = require("express");
const routes = express();

routes.get("/", async (req, res) => {
  console.log("home");
  return res.status(200).send({ message: "Welcome to Parking System" });
});

routes.get("/health", async (req, res) => {
  return res.status(200).send({ message: "Happy" });
});

module.exports = routes;
