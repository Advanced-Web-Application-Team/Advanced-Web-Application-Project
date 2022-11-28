
const express = require("express");
const router = express.Router();
const {addLayout} = require("../controllers/LayoutControllers");
const {protect} = require("../middleware/verifyToken");

router.route("/").post(protect, addLayout);


module.exports = router;