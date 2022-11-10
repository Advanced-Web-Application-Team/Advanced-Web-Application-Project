
const mongoose = require("mongoose");

const V3Schema = new mongoose.Schema({
    month: Number,
    year: Number,
    monthly_average: Number, 
    annual_average: Number,
    chartNumber: String
});

module.exports = mongoose.model("V3", V3Schema);
