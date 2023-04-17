const express = require("express");

const { signupUser, loginUser } = require("../controllers/userController");

const router = express.Router();

router.post("/login", loginUser);  // http://4000/application/../login

router.post("/signup", signupUser);     // http://4000/signup

module.exports = router;
