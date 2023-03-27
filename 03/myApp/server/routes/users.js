const express = require("express");

const { signupUser, loginUser } = require("../controllers/userController");

const router = express.Router();

router.post("/login", loginUser);  // http://3000/login

router.post("/signup", signupUser);     // http://3000/signup

module.exports = router;
