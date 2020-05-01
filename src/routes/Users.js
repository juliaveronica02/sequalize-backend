const express = require("express");
const router = express.Router();
const userController = require("../controllers/Users");

router.get("/users", userController.getUser);
router.get("/reset", userController.reset);
router.get("/", userController.home);
router.post("/new", userController.addUser);

module.exports = router;
