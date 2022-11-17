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
let authRoute = require("./routes/auth");
let userRoute = require("./routes/users");
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




//users
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

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

//Upload V8 data

app.post("/", upload.single("file"), async (req, res, next) => {
  csv()
    .fromFile(req.file.path)
      .then(async (jsonObj) => {
        
         let newArray = [];

         jsonObj.forEach((obj) => {
            let time = 0
            let chartNumber = ""
            let newObj = {time, countries: [],chartNumber};
            
             newObj.time = parseFloat(obj.time);
             newObj.countries = [{"Afghanistan":[obj.Afghanistan]},
             {"Albania":[obj.Albania]},
             {"Algeria":[obj.Algeria]},
             {"Andorra":[obj.Andorra]},
             {"Angola":[obj.Angola]},
             {"Anguilla":[obj.Anguilla]},
             {"Antigua_Barbuda":[obj.Antigua_Barbuda]},
             {"Argentina":[obj.Argentina]},
             {"Armenia":[obj.Armenia]},
             {"Aruba":[obj.Aruba]},
             {"Australia":[obj.Australia]},
             {"Austria":[obj.Austria]},
             {"Azerbaijan":[obj.Azerbaijan]},
             {"Bahamas":[obj.Bahamas]},
             {"Bahrain":[obj.Bahrain]},
             {"Bangladesh":[obj.Bangladesh]},
             {"Barbados":[obj.Barbados]},
             {"Belarus":[obj.Belarus]},
             {"Belgium":[obj.Belgium]},
             {"Belize":[obj.Belize]},
             {"Benin":[obj.Benin]},
             {"Bermuda":[obj.Bermuda]},
             {"Bhutan":[obj.Bhutan]},
             {"Bonaire_Saint Eustatius_and_Saba":[obj.Bonaire_Saint_Eustatius_and_Saba]},
             {"Bosnia_and_Herzegovina":[obj.Bosnia_and_Herzegovina]},
             {"Botswana":[obj.Botswana]},
             {"Brazil":[obj.Brazil]},
             {"British_Virgin_Islands":[obj.British_Virgin_Islands]},
             {"Brunei_Darussalam":[obj.Brunei_Darussalam]},
             {"Bulgaria":[obj.Bulgaria]},
             {"Burkina_Faso":[obj.Burkina_Faso]},
             {"Burundi":[obj.Burundi]},
             {"Cambodia":[obj.Cambodia]},
             {"Canada":[obj.Canada]},
             {"Cape_Verde":[obj.Cape_Verde]},
             {"Central_African_Republic":[obj.Central_African_Republic]},
             {"Chad":[obj.Chad]},
             {"Chile":[obj.Chile]},
             {"China":[obj.China]},
             {"Colombia":[obj.Colombia]},
             {"Comoros":[obj.Comoros]},
             {"Congo":[obj.Congo]},
             {"Cook_Islands":[obj.Cook_Islands]},
             {"Costa_Rica":[obj.Costa_Rica]},
             {"Côte_d'Ivoire":[obj.Côte_dIvoire]},
             {"Croatia":[obj.Croatia]},
             {"Cuba":[obj.Cuba]},
             {"Curaçao":[obj.Curaçao]},
             {"Cyprus":[obj.Cyprus]},
             {"Czech_Republic":[obj.Czech_Republic]},
             {"North_Korea":[obj.North_Korea]},
             {"Democratic_Republic_of_the_Congo":[obj.Democratic_Republic_of_the_Congo]},
             {"Denmark":[obj.Denmark]},
             {"Djibouti":[obj.Djibouti]},
             {"Dominica":[obj.Dominica]},
             {"Dominican_Republic":[obj.Dominican_Republic]},
             {"Ecuador":[obj.Ecuador]},
             {"Egypt":[obj.Egypt]},
             {"El_Salvador":[obj.El_Salvador]},
             {"Equatorial_Guinea":[obj.Equatorial_Guinea]},
             {"Eritrea":[obj.Eritrea]},
             {"Estonia":[obj.Estonia]},
             {"Ethiopia":[obj.Ethiopia]},
             {"Faeroe_Islands":[obj.Faeroe_Islands]},
             {"Micronesia":[obj.Micronesia]},
             {"Fiji":[obj.Fiji]},
             {"Finland":[obj.Finland]},
             {"France":[obj.France]},
             {"French_Guiana":[obj.French_Guiana]},
             {"French_Polynesia":[obj.French_Polynesia]},
             {"Gabon":[obj.Gabon]},
             {"Gambia":[obj.Gambia]},
             {"Georgia":[obj.Georgia]},
             {"Germany":[obj.Germany]},
             {"Ghana":[obj.Ghana]},
             {"Greece":[obj.Greece]},
             {"Greenland":[obj.Greenland]},
             {"Grenada":[obj.Grenada]},
             {"Guadeloupe":[obj.Guadeloupe]},
             {"Guatemala":[obj.Guatemala]},
             {"Guinea":[obj.Guinea]},
             {"Guinea_Bissau":[obj.Guinea_Bissau]},
             {"Guyana":[obj.Guyana]},
             {"Haiti":[obj.Haiti]},
             {"Honduras":[obj.Honduras]},
             {"Hong Kong":[obj.Hong_Kong]},
             {"Hungary":[obj.Hungary]},
             {"Iceland":[obj.Iceland]},
             {"India":[obj.India]},
             {"Indonesia":[obj.Indonesia]},
             {"Iraq":[obj.Iraq]},
             {"Ireland":[obj.Ireland]},
             {"Iran":[obj.Iran]},
             {"Israel":[obj.Israel]},
             {"Italy":[obj.Italy]},
             {"Jamaica":[obj.Jamaica]},
             {"Japan":[obj.Japan]},
             {"Jordan":[obj.Jordan]},
             {"Kazakhstan":[obj.Kazakhstan]},
             {"Kenya":[obj.Kenya]},
             {"Kiribati":[obj.Kiribati]},
             {"Kosovo":[obj.Kosovo]},
             {"Kuwait":[obj.Kuwait]},
             {"Kyrgyzstan":[obj.Kyrgyzstan]},
             {"Laos":[obj.Laos]},
             {"Latvia":[obj.Latvia]},
             {"Lebanon":[obj.Lebanon]},
             {"Lesotho":[obj.Lesotho]},
             {"Liberia":[obj.Liberia]},
             {"Libya":[obj.Libya]},
             {"Liechtenstein":[obj.Liechtenstein]},
             {"Lithuania":[obj.Lithuania]},
             {"Luxembourg":[obj.Luxembourg]},
             {"Macao":[obj.Macao]},
             {"North_Macedonia":[obj.North_Macedonia]},
             {"Madagascar":[obj.Madagascar]},
             {"Malawi":[obj.Malawi]},
             {"Malaysia":[obj.Malaysia]},
             {"Maldives":[obj.Maldives]},
             {"Mali":[obj.Mali]},
             {"Malta":[obj.Malta]},
             {"Marshall_Islands":[obj.Marshall_Islands]},
             {"Martinique":[obj.Martinique]},
             {"Mauritania":[obj.Mauritania]},
             {"Mauritius":[obj.Mauritius]},
             {"Mayotte":[obj.Mayotte]},
             {"Mexico":[obj.Mexico]},
             {"Mongolia":[obj.Mongolia]},
             {"Montenegro":[obj.Montenegro]},
             {"Montserrat":[obj.Montserrat]},
             {"Morocco":[obj.Morocco]},
             {"Mozambique":[obj.Mozambique]},
             {"Myanmar":[obj.Myanmar]},
             {"Namibia":[obj.Namibia]},
             {"Nauru":[obj.Nauru]},
             {"Nepal":[obj.Nepal]},
             {"Netherlands":[obj.Netherlands]},
             {"New_Caledonia":[obj.New_Caledonia]},
             {"New_Zealand":[obj.New_Zealand]},
             {"Nicaragua":[obj.Nicaragua]},
             {"Niger":[obj.Niger]},
             {"Nigeria":[obj.Nigeria]},
             {"Niue":[obj.Niue]},
             {"Norway":[obj.Norway]},
             {"Occupied_Palestinian_Territory":[obj.Occupied_Palestinian_Territory]},
             {"Oman":[obj.Oman]},
             {"Pakistan":[obj.Pakistan]},
             {"Palau":[obj.Palau]},
             {"Panama":[obj.Panama]},
             {"Papua_New_Guinea":[obj.Papua_New_Guinea]},
             {"Paraguay":[obj.Paraguay]},
             {"Peru":[obj.Peru]},
             {"Philippines":[obj.Philippines]},
             {"Bolivia":[obj.Bolivia]},
             {"Poland":[obj.Poland]},
             {"Portugal":[obj.Portugal]},
             {"Qatar":[obj.Qatar]},
             {"Cameroon":[obj.Cameroon]},
             {"South_Korea":[obj.South_Korea]},
             {"Moldova":[obj.Moldova]},
             {"South_Sudan":[obj.South_Sudan]},
             {"Sudan":[obj.Sudan]},
             {"Réunion":[obj.Réunion]},
             {"Romania":[obj.Romania]},
             {"Russian_Federation":[obj.Russian_Federation]},
             {"Rwanda":[obj.Rwanda]},
             {"Saint_Helena":[obj.Saint_Helena]},
             {"Saint_Lucia":[obj.Saint_Lucia]},
             {"Sint_Maarten":[obj.Sint_Maarten]},
             {"Samoa":[obj.Samoa]},
             {"Sao_Tome_and_Principe":[obj.Sao_Tome_and_Principe]},
             {"Saudi_Arabia":[obj.Saudi_Arabia]},
             {"Senegal":[obj.Senegal]},
             {"Serbia":[obj.Serbia]},
             {"Seychelles":[obj.Seychelles]},
             {"Sierra_Leone":[obj.Sierra_Leone]},
             {"Singapore":[obj.Singapore]},
             {"Slovakia":[obj.Slovakia]},
             {"Slovenia":[obj.Slovenia]},
             {"Solomon_Islands":[obj.Solomon_Islands]},
             {"Somalia":[obj.Somalia]},
             {"South_Africa":[obj.South_Africa]},
             {"Spain":[obj.Spain]},
             {"Sri_Lanka":[obj.Sri_Lanka]},
             {"Saint_Kitts_and_Nevis":[obj.Saint_Kitts_and_Nevis]},
             {"Saint_Pierre_and_Miquelon":[obj.Saint_Pierre_and_Miquelon]},
             {"Saint_Vincent_and_the_Grenadines":[obj.Saint_Vincent_and_the_Grenadines]},
             {"Suriname":[obj.Suriname]},
             {"Swaziland":[obj.Swaziland]},
             {"Sweden":[obj.Sweden]},
             {"Switzerland":[obj.Switzerland]},
             {"Syria":[obj.Syria]},
             {"Taiwan":[obj.Taiwan]},
             {"Tajikistan":[obj.Tajikistan]},
             {"Thailand":[obj.Thailand]},
             {"Timor_Leste":[obj.Timor_Leste]},
             {"Togo":[obj.Togo]},
             {"Tonga":[obj.Tonga]},
             {"Trinidad_and_Tobago":[obj.Trinidad_and_Tobago]},
             {"Tunisia":[obj.Tunisia]},
             {"Turkey":[obj.Turkey]},
             {"Turkmenistan":[obj.Turkmenistan]},
             {"Turks_and_Caicos_Islands":[obj.Turks_and_Caicos_Islands]},
             {"Tuvalu":[obj.Tuvalu]},
             {"Uganda":[obj.Uganda]},
             {"Ukraine":[obj.Ukraine]},
             {"United_Arab_Emirates":[obj.United_Arab_Emirates]},
             {"United_Kingdom":[obj.United_Kingdom]},
             {"Tanzania":[obj.Tanzania]},
             {"USA":[obj.USA]},
             {"Uruguay":[obj.Uruguay]},
             {"Uzbekistan":[obj.Uzbekistan]},
             {"Vanuatu":[obj.Vanuatu]},
             {"Venezuela":[obj.Venezuela]},
             {"Vietnam":[obj.Vietnam]},
             {"Wallis_and_Futuna_Islands":[obj.Wallis_and_Futuna_Islands]},
             {"Yemen":[obj.Yemen]},
             {"Zambia":[obj.Zambia]},
             {"Zimbabwe":[obj.Zimbabwe]},
             
             ];
             newObj.chartNumber = "v8";

             newArray.push(newObj);
         });

         await V8.insertMany(newArray);
    

        
       }) 
    
   
  });



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



