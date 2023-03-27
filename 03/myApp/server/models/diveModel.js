const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const diveSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    site: {
      type: String,
      required: true,
    },
    equipment: {
      type: String,
      required: false,
    },
    duration: {
      type: Number,
      required: true,
    },
    depth: {
      type: Number,
      required: true,
    },
    note: {
      type: String,
      required: false,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    state: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dive", diveSchema);
