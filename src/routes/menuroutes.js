// const express = require("express");
// const verifyToken = require("../midilewares/verifyToken");
// const { getMenuItems, createMenuItems, deleteMenuItem, updateMenuItem } = require("../controllers/menuController");

const router = express.Router();

router.get("/", getMenuItems);
router.post("/", createMenuItems)
router.delete("/:id", deleteMenuItem);
router.put("/:id", updateMenuItem);

module.exports = router;
