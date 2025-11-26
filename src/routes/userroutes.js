// const express = require("express");
// const verifyToken = require("../midilewares/verifyToken");
// const { createUsers, getAllUsers, deleteUser } = require("../controllers/userController");


// const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUsers)
router.delete("/:id", deleteUser);

module.exports = router;
