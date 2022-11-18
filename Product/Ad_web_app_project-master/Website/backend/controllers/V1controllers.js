
const V1 = require("../models/V1Model");
const asyncHandler = require("express-async-handler");

//@desc Get all data of V1 visualization
//@route /v1/
//@access Public

exports.getAllDataV1 = asyncHandler(async (req, res, next) => {

    let allDataOfV1 = await V1.find();

    res.status(200).json(allDataOfV1);
});

//@desc Get monthly data of Global
//@route /v1/global/monthly
//@access Public

exports.getMonthlyGlobal = asyncHandler(async (req, res, next) => {

    let monthlyGlobalData = await V1.find({period: "monthly", name: "Global"});

    res.status(200).json(monthlyGlobalData);
});

//@desc Get annual data of Global
//@route /v1/global/annual
//@access Public

exports.getAnnualGlobal = asyncHandler(async (req, res, next) => {

    let annualGlobalData = await V1.find({period: "annual", name: "Global"});

    res.status(200).json(annualGlobalData);
});


//@desc Get annual data of North Hemis
//@route /v1/north/annual
//@access Public

exports.getAnnualNorth = asyncHandler(async (req, res, next) => {

    let annualGlobalNorth = await V1.find({period: "annual", name: "North_Hemis"});

    res.status(200).json(annualGlobalNorth);
});

//@desc Get month and year horizontal axis
//@route /v1/horizontal
//@access Public

exports.getHorizontal = asyncHandler(async (req, res, next) => {

    let allDateAndYear = await V1.find({period: "monthly", name: "Global"});
    
    let yearArray = [];

    allDateAndYear.forEach((value) => {
        yearArray.push(value.year);
    });

    let testArray = [];

    allDateAndYear.forEach((value) => {
        let newString = "";
        newString += value.year + "- ";

        let date = new Date();
        date.setMonth(value.month-1);
        newString += date.toLocaleDateString("default", {month: "long"});
        testArray.push(newString);
    });

    console.log(testArray);

    let filterYearArray = yearArray.filter((a, b) => yearArray.indexOf(a) === b);

    let newFilterYearArray = [];

  
    for (let i=0; i<filterYearArray.length; i+= 3) {
    

        newFilterYearArray.push(filterYearArray[i]);
    };

    let getTotalString = [];

    let index = 1;
    for (let i=0; i<newFilterYearArray.length; i++) {

        let string = "";
        string += newFilterYearArray[i] + "-";

        let date = new Date();

        date.setMonth(index-1);

        string += date.toLocaleDateString("default", {month: "long"});

        getTotalString.push(string);

        index++;

        if (index > 12) {
            index = 1;
        }

    }

    res.status(200).json(filterYearArray);

});

//@desc Get annual data of South Hemis
//@route /v1/south/annual
//@access Public

exports.getAnnualSouth = asyncHandler(async (req, res, next) => {

    let annualGlobalSouth = await V1.find({period: "annual", name: "South_Hemis"});

    res.status(200).json(annualGlobalSouth);
});


//@desc Get monthly data of North Hemisphere
//@route /v1/north/monthly
//@access Public

exports.getMonthlyNorth = asyncHandler(async (req, res, next) => {

    let monthlyGlobalNorth = await V1.find({period: "monthly", name: "North_Hemis"});

    res.status(200).json(monthlyGlobalNorth);
});

//@desc Get monthly data of South Hemisphere
//@route /v1/south/monthly
//@access Public

exports.getMonthlySouth= asyncHandler(async (req, res, next) => {

    let monthlyGlobalSouth = await V1.find({period: "monthly", name: "South_Hemis"});

    res.status(200).json(monthlyGlobalSouth);
});

