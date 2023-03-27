require("dotenv").config();
const cors = require("cors");
const express = require("express");

const mongoose = require("mongoose");

//routes
const userRouter = require("./routes/users"); // login + register
const appointmentRouter = require("./routes/appointments"); // schedule
const messageRouter = require("./routes/messages"); // forum
const diveRouter = require("./routes/dives"); // add dive

const app = express();

app.use(cors());
app.use(express.json());

//log the requests that are coming in
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/users", userRouter);
app.use("/api/appointments", appointmentRouter);
app.use("/api/messages", messageRouter);
app.use("/api/dives", diveRouter);

// listen for requests
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Conntected to DB & listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });