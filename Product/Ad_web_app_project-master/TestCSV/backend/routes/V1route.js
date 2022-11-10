const express = require("express");
const router = express.Router();
const {getAllDataV1, getMonthlyGlobal, getMonthlyNorth, getMonthlySouth, getAnnualGlobal, getAnnualNorth, getAnnualSouth, getHorizontal} = require("../controllers/V1controllers");

router.get("/", getAllDataV1);
router.get("/horizontal", getHorizontal);
router.get("/north/annual", getAnnualNorth);
router.get("/south/annual", getAnnualSouth);
router.get("/global/annual", getAnnualGlobal);
router.get("/global/monthly", getMonthlyGlobal);
router.get("/north/monthly", getMonthlyNorth);
router.get("/south/monthly", getMonthlySouth);

module.exports = router;