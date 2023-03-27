const Message = require("../models/messageModel");
const { populate } = require("../models/userModel");

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({})
      .populate("user")
      .sort({ createdAt: +1 });

    res.status(200).json({ messg: "messages fetched successfuly", messages });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createMessage = async (req, res) => {
  const { user, text } = req.body;
  try {
    const _message = await Message.create({ user, text });
    _message.populate("user");
    res.status(200).json({ messg: "message created successfuly", _message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createMessage,
  getMessages,
};
