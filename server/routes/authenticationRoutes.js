const express = require("express");
const router = express.Router();

const authenticationController = require("../controllers/authenticationController");

router.post("/api/auth/login", authenticationController.login);

router.post("/api/auth/logout", authenticationController.logout);

module.exports = router;
