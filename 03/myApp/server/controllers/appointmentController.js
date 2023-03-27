const Appointment = require("../models/appointmentModel");

const getAppointments = async (req, res) => {
  try {
    // find({}) means find all appointments
    const appointments = await Appointment.find({}).sort({ createdAt: -1 });
    res
      .status(200)
      .json({ messg: "appointments fetched successfully", appointments });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createAppointment = async (req, res) => {
  const { start, end, title } = req.body;
  try {
    const appointment = await Appointment.create({ start, end, title });
    res
      .status(200)
      .json({ messg: "appointment created successfully", appointment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
};
