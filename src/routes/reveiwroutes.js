const express = require("express");
const verifyToken = require("../midilewares/verifyToken");
const { getreveiws } = require("../controllers/ReveiwController");

const router = express.Router();

router.get("/", getreveiws);

module.exports = router;
