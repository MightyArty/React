const Dive = require("../models/diveModel");
const User = require("../models/userModel");

const getDives = async (req, res) => {
  const { userId } = req.query;

  try {
    const options = {};

    if (userId) {
      options.user = userId;
    }

    console.log(userId);

    const dives = await Dive.find(options)
      .populate("user")
      .sort({ createdAt: -1 });
    res.status(200).json({ messg: "dives fetched successfuly", dives });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createDive = async (req, res) => {
  const { date, site, equipment, duration, depth, note, user } = req.body;

  try {
    const dive = await Dive.create({
      date,
      site,
      equipment,
      duration,
      depth,
      note,
      user,
    });
    const foundUser = await User.findById(user);

    foundUser.dives.push(dive._id);

    await foundUser.save();

    res.status(200).json({ messg: "dive created successfuly", dive });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateDive = async (req, res) => {
  const { diveId, state } = req.body;

  try {
    const dive = await Dive.findByIdAndUpdate(diveId, {
      state,
    });
    res.status(200).json({ messg: "dive updated successfuly", dive });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createDive,
  getDives,
  updateDive,
};
