const express = require("express");
const verifyToken = require("../midilewares/verifyToken");
const { 
    createCarts, 
    getCarts, 
    updateCartStatus, 
    getAllOrders, 
    deleteOrder, 
} = require("../controllers/cartCOntroller");

const router = express.Router();

router.post("/", createCarts);
router.get("/", getCarts);
router.patch("/:id", updateCartStatus);
router.get("/orders", getAllOrders);
// router.delete("/:id", deleteOrder)

// module.exports = router;