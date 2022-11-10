
const mongoose = require("mongoose");

const V1visualizationSchema = new mongoose.Schema({ 
    year: Number,
    month: Number,
    southern_monthly: Number,
    southern_annual: Number,
    northern_monthly: Number,
    northern_annual: Number,
    global_monthly: Number,
    global_annual: Number,
    chartNumber: String
});

module.exports = mongoose.model("V1Vi", V1visualizationSchema);