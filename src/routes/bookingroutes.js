const express = require("express");
const verifyToken = require("../midilewares/verifyToken");
const { createbookings, getbookings, updatebooking } = require("../controllers/bookingController");

const router = express.Router();

router.get("/", getbookings);
router.post("/", createbookings);
router.patch("/:id", updatebooking)

module.exports = router;
