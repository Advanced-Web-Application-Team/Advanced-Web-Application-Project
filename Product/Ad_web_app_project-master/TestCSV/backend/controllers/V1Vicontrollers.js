
const V1Vi = require("../models/V1visualization");
const asyncHandler = require("express-async-handler");

//@desc     Get all data
//@route    /v1vi/all
//@access   Public 


exports.allDataV1 = asyncHandler(async (req, res, next) => {

    let allData = await V1Vi.find();

    res.status(200).json(allData);

});