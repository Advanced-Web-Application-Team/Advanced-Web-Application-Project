const express = require("express");
const router = express.Router();
//const User = require("../models/User");
//const bcrypt = require("bcrypt");
const {updateUser,deleteUser,getUser} = require("../controllers/UserController");

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id",deleteUser);

//GET USER
router.get("/:id", getUser);

module.exports = router;