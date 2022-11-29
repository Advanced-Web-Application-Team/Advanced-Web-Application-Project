
const express = require("express");
const router = express.Router();
const {addLayout, getAllLayoutByUser, deleteLayout} = require("../controllers/LayoutControllers");
const {protect} = require("../middleware/verifyToken");

router.route("/").post(protect, addLayout);
router.route("/allByOne").get(protect, getAllLayoutByUser);
router.route("/delete/:layoutId").delete(protect, deleteLayout);

module.exports = router;