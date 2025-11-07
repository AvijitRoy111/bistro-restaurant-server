const express = require("express");
const verifyToken = require("../midilewares/verifyToken");
const { getMenuItems } = require("../controllers/menuController");

const router = express.Router();

router.get("/", getMenuItems);

module.exports = router;
