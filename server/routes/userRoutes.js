const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/api/users", userController.userList);

router.get("/api/users/:id", userController.userDetail);

router.post("/api/users", userController.userCreate);

router.put("/api/users/:id", userController.userUpdate);

router.delete("/api/users/:id", userController.userDelete);

module.exports = router;
