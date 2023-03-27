const express = require("express");

const {
  createMessage,
  getMessages,
} = require("../controllers/messageController");

const router = express.Router();

// get all messages http://localhost:4000/api/getMessages/ method GET
router.get("/", getMessages);

//create new message  http://localhost:4000/api/createMessages/ method POST
router.post("/", createMessage);

module.exports = router;
