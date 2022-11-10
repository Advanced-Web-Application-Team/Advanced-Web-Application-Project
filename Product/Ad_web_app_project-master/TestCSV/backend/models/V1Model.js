
const mongoose = require("mongoose");

const V1Schema = new mongoose.Schema({
    name: String,
    year: Number,
    month: Number,
    period: String,
    anomaly: Number,
    chartNumber: String
});

module.exports = mongoose.model("V1", V1Schema);