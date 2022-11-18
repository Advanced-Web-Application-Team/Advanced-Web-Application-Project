const express = require("express");
const router = express.Router();
const {verifyToken,verifyTokenAndUser} = require("../middleware/verifyToken")
const {updateUser,deleteUser,getUser} = require("../controllers/UserController");

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id",verifyTokenAndUser,deleteUser);

//GET USER
router.get("/:id", getUser);

module.exports = router;