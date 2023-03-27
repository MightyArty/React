const express = require("express");

const {
  createDive,
  getDives,
  updateDive,
} = require("../controllers/diveController");

const router = express.Router();

router.get("/", getDives);
router.post("/", createDive);
router.patch("/", updateDive);

module.exports = router;
