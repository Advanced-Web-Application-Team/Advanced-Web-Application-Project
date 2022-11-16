const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
let multer = require('multer');
let upload = multer({ dest: 'uploads/' });
let csv = require('csvtojson');
let connectDB = require("./config/db");
let errorHandler = require("./middleware/errorHandler");


//Route declare
let V1router = require("./routes/V1route");
let V1Virouter = require("./routes/V1Viroute");
let V2router = require("./routes/V2route");
let V3router = require("./routes/V3route");
let V4router = require("./routes/V4route");
let V5router = require("./routes/V5route");
let V6router = require("./routes/V6Route");
let V7router = require("./routes/V7Route");
let V8router = require("./routes/V8Route");
let V9router = require("./routes/V9Route");
//Global environment config
dotenv.config();

//Connect database
connectDB();

//Middleware set-up
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Model declared
const V1 = require("./models/V1Model");
const V1Vi = require("./models/V1visualization");
const V2 = require("./models/V2Model");
const V3 = require("./models/V3model");
const V4 = require("./models/V4model");
const V5 = require('./models/V5model');
const V6 = require("./models/V6model");
const V7 = require("./models/V7model");
const V8 = require("./models/V8model");
//Port defined
const PORT = process.env.PORT || 8000;

//Set up route connection 
app.use("/v1vi", V1Virouter);
app.use("/v1", V1router);
app.use("/v2", V2router);
app.use("/v3", V3router);
app.use("/v4", V4router);
app.use("/v5", V5router);
app.use("/v6", V6router);
app.use("/v7", V7router);
app.use("/v8", V8router);
app.use("/v9", V9router);
//Error handling
app.use(errorHandler);


//Upload V1 dataset

// app.post("/", upload.single("file"), (req, res, next) => {
//     csv()
//     .fromFile(req.file.path)
//     .then(async (jsonObj) => {
//         let newArray = [];
//         jsonObj.forEach((obj) => {
//             let newObj = {};
//             let year = parseInt(obj.Time.split("-")[0]);
            
//             let stringOfMonth = obj.Time.split("-")[1];

//             let monthString = "";

//             if (stringOfMonth.charAt(0) === "0") {
//                 monthString += stringOfMonth.charAt(1);
//             } else {
//                 monthString += stringOfMonth;
//             }

//             let monthValue = parseInt(monthString);

//             newObj.year = year;
//             newObj.month = monthValue;
//             newObj.southern_monthly = parseFloat(obj.southern_monthly);
//             newObj.southern_annual = parseFloat(obj.southern_annual);
//             newObj.northern_monthly= parseFloat(obj.northern_monthly);
//             newObj.northern_annual = parseFloat(obj.northern_annual);
//             newObj.global_monthly = parseFloat(obj.global_monthly);
//             newObj.global_annual = parseFloat(obj.global_annual);
//             newObj.chartNumber = "v1";

//             newArray.push(newObj);
//         });
            
//         await V1Vi.insertMany(newArray);
//     }) 
// });


// Upload V2 dataset

//  app.post("/", upload.single("file"), (req, res, next) => {
//    csv()
//   .fromFile(req.file.path)
//     .then(async (jsonObj) => {
     
//         let newArray = [];

//         jsonObj.forEach((obj) => {
//             let newObj = {};
//             let valueOfNorthRecon = 0.0;
//             if (obj.northern_reconstruction === "") {
//                 valueOfNorthRecon = 0;
//             } else {
//                 valueOfNorthRecon = parseFloat(obj.northern_reconstruction);
//             }

//             let year = parseInt(obj.Time.split("-")[0]);
             
//             let stringOfMonth = obj.Time.split("-")[1];
             
//             let monthString = "";
             
//             if (stringOfMonth.charAt(0) === "0") {
//                 monthString += stringOfMonth.charAt(1);
//             } else {
//                 monthString += stringOfMonth;
//             }

//             newObj.year = parseInt(year);
//             newObj.month = parseInt(monthString);
//             newObj.southern_monthly = parseFloat(obj.southern_monthly);
//             newObj.southern_annual = parseFloat(obj.southern_annual);
//             newObj.northern_monthly = parseFloat(obj.northern_monthly);
//             newObj.northern_annual = parseFloat(obj.northern_annual);
//             newObj.global_monthly = parseFloat(obj.global_monthly);
//             newObj.global_annual = parseFloat(obj.global_annual);
//             newObj.northern_reconstruction = valueOfNorthRecon;
//             newObj.chartNumber = "v2";

//             newArray.push(newObj);
//         });

//         await V2.insertMany(newArray);
       
//      }) 
// });

//Upload V3 data

// app.post("/", upload.single("file"), (req, res, next) => {
//     csv()
//    .fromFile(req.file.path)
//      .then(async (jsonObj) => {
//        let newArray = [];
//         jsonObj.forEach((obj) => {
//            let newObj = {};
//            let year = parseInt(obj.Time.split("-")[0]);
             
//               let stringOfMonth = obj.Time.split("-")[1];
 
//               let monthString = "";
 
//              if (stringOfMonth.charAt(0) === "0") {
//                   monthString += stringOfMonth.charAt(1);
//              } else {
//                   monthString += stringOfMonth;
//              }
 
//              let monthValue = parseInt(monthString);
 
//              newObj.year = year;
//              newObj.month = monthValue;
//              newObj.monthly_average = parseFloat(obj['co2_monthly_avg(micromol/mol)']);
//              newObj.annual_average = parseFloat(obj['co2_annual_avg(micromol/mol)']);
//              newObj.chartNumber = "v3";
//             newArray.push(newObj);
        
//           });
 
       
      
//          await V3.insertMany(newArray);
       
//       }) 
//  });








 
//Upload V5 data

// app.post("/", upload.single("file"), async (req, res, next) => {
//     csv()
//    .fromFile(req.file.path)
//      .then(async (jsonObj) => {
        
//         let newArray = [];

//         jsonObj.forEach((obj) => {
//             let newObj = {};
//             let meanValue = parseFloat(obj['Mean_age_of_air(yr BP)']);
//             let concenValue = parseFloat(obj['CO2_concentration(ppmv)']);

//             newObj.meanAgeOfAir = meanValue;
//             newObj.carbondioxideConcen = concenValue;
//             newObj.chartNumber = "v5";
//             newArray.push(newObj);
//         });

//         await V5.insertMany(newArray);

        
//       }) 

   
//  });

//Upload V6 data

// app.post("/", upload.single("file"), async (req, res, next) => {
//     csv()
//    .fromFile(req.file.path)
//      .then(async (jsonObj) => {
        
//         let newArray = [];

//         jsonObj.forEach((obj) => {
//             let newObj = {};
            
//             newObj.ageGasCal = parseFloat(obj.age_gas_calBP);
//             newObj.carbondioxidePpm = parseFloat(obj.co2_ppm);
//             newObj.chartNumber = "v6";

//             newArray.push(newObj);
//         });

//         await V6.insertMany(newArray);
    

        
//       }) 
    
   
//  });


// Upload monthly North-Hemisphere data

// app.post("/", upload.single("file"), (req, res, next) => {
//     csv()
//     .fromFile(req.file.path)
//     .then(async (jsonObj) => {
//         let newArray = [];
//         jsonObj.forEach(async (obj) => {
//             let newObj = {};
//             let year = parseInt(obj.Time.split("-")[0]);
//             let month = obj.Time.split("-")[1];

//             if (month.charAt(0) === "0") {
//                 month = month.charAt(1);
//             }

//             let monthNumber = parseInt(month);

//             newObj.name = "North_Hemis";
//             newObj.year = year;
//             newObj.month = monthNumber;
//             newObj.period = "monthly"
//             newObj.anomaly = parseFloat(obj['Anomaly (deg C)']);
//             newObj.chartNumber = "v1";
            
       
//             newArray.push(newObj);
//         });
        
//             await V1.insertMany(newArray);
        
//     }) 

//     res.status(200).json({message: "Success"});
// });



//Upload month Global data

// app.post("/", upload.single("file"), (req, res, next) => {
//     csv()
//     .fromFile(req.file.path)
//     .then(async (jsonObj) => {
//         let newArray = [];
//         jsonObj.forEach(async (obj) => {
//             let newObj = {};
//             let year = parseInt(obj.Time.split("-")[0]);
//             let month = obj.Time.split("-")[1];

//             if (month.charAt(0) === "0") {
//                 month = month.charAt(1);
//             }

//             let monthNumber = parseInt(month);

//             newObj.name = "Global";
//             newObj.year = year;
//             newObj.month = monthNumber;
//             newObj.period = "monthly"
//             newObj.anomaly = parseFloat(obj['Anomaly (deg C)']);
//             newObj.chartNumber = "v1";
            
       
//             newArray.push(newObj);
//         });
        
//             await V1.insertMany(newArray);
        
//     }) 

//     res.status(200).json({message: "Success"});
// });


//Upload month South-Hemisphere data
// app.post("/", upload.single("file"), (req, res, next) => {
//     csv()
//     .fromFile(req.file.path)
//     .then(async (jsonObj) => {
//         let newArray = [];
//         jsonObj.forEach(async (obj) => {
//             let newObj = {};
//             let year = parseInt(obj.Time.split("-")[0]);
//             let month = obj.Time.split("-")[1];

//             if (month.charAt(0) === "0") {
//                 month = month.charAt(1);
//             }

//             let monthNumber = parseInt(month);

//             newObj.name = "South_Hemis";
//             newObj.year = year;
//             newObj.month = monthNumber;
//             newObj.period = "monthly"
//             newObj.anomaly = parseFloat(obj['Anomaly (deg C)']);
//             newObj.chartNumber = "v1";
            
       
//             newArray.push(newObj);
//         });
        
//             await V1.insertMany(newArray);
        
//     }) 

//     res.status(200).json({message: "Success"});
// });

//Upload annual Global data

// app.post("/", upload.single("file"), (req, res, next) => {
//     csv()
//     .fromFile(req.file.path)
//     .then(async (jsonObj) => {
//         let newArray = [];
//         jsonObj.forEach(async (obj) => {
//             let newObj = {};

            
//             let year = parseInt(obj.Time);
//             newObj.name = "Global";
//             newObj.year = year;
//             newObj.period = "annual"
//             newObj.anomaly = parseFloat(obj['Anomaly (deg C)']);
//             newObj.chartNumber = "v1";
            
       
//             newArray.push(newObj);
//         });

        
        
//             await V1.insertMany(newArray);
        
//     }) 

//     res.status(200).json({message: "Success"});
// });

//Upload annual North_Hemis data
// app.post("/", upload.single("file"), (req, res, next) => {
//     csv()
//     .fromFile(req.file.path)
//     .then(async (jsonObj) => {
//         let newArray = [];
//         jsonObj.forEach(async (obj) => {
//             let newObj = {};

            
//             let year = parseInt(obj.Time);
//             newObj.name = "North_Hemis";
//             newObj.year = year;
//             newObj.period = "annual"
//             newObj.anomaly = parseFloat(obj['Anomaly (deg C)']);
//             newObj.chartNumber = "v1";
            
       
//             newArray.push(newObj);
//         });

        
        
//             await V1.insertMany(newArray);
        
//     }) 

//     res.status(200).json({message: "Success"});
// });

// Upload annual South_Hemis data

// app.post("/", upload.single("file"), (req, res, next) => {
//     csv()
//     .fromFile(req.file.path)
//     .then(async (jsonObj) => {
//         let newArray = [];
//         jsonObj.forEach(async (obj) => {
//             let newObj = {};

            
//             let year = parseInt(obj.Time);
//             newObj.name = "South_Hemis";
//             newObj.year = year;
//             newObj.period = "annual"
//             newObj.anomaly = parseFloat(obj['Anomaly (deg C)']);
//             newObj.chartNumber = "v1";
            
       
//             newArray.push(newObj);
//         });

        
        
//             await V1.insertMany(newArray);
        
//     }) 

//     res.status(200).json({message: "Success"});
// });


// Port set up
app.listen(PORT, function () {
    console.log(`Server is listened!`.cyan.underline.bold);  
});



