
const express = require("express");
const router = express.Router();
const {allDataV1} = require("../controllers/V1Vicontrollers");

router.get("/", allDataV1);


module.exports = router;