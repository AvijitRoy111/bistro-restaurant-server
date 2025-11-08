const express = require("express");
const verifyToken = require("../midilewares/verifyToken");
const { createCarts, getCarts } = require("../controllers/cartCOntroller");

const router = express.Router();

router.post("/", createCarts);
router.get("/", getCarts);

module.exports = router;