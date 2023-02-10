const express = require("express");
const common = require("./routes/common");
const parking = require("./routes/parking");
const booking = require("./routes/booking");
const payment = require("./routes/payment");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

app.use(`/${process.env.PARKING_PREFIX_URL}/`, common);
app.use(`/${process.env.PARKING_PREFIX_URL}/parking`, parking);
app.use(`/${process.env.PARKING_PREFIX_URL}/booking`, booking);
app.use(`/${process.env.PARKING_PREFIX_URL}/payment`, payment);

app.listen(port, () => {
  console.log(`Connected to server at port ${port}`);
});
