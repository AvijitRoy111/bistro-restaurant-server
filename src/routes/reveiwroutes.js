const express = require("express");
const verifyToken = require("../midilewares/verifyToken");
const { getreveiws, createreveiws } = require("../controllers/ReveiwController");

const router = express.Router();

router.get("/", getreveiws);
router.post("/", createreveiws)

module.exports = router;
