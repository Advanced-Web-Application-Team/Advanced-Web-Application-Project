import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import LineChartContext from '../../context/LineChartContext';
import axios from "axios";
import 'chartjs-adapter-date-fns';
import {enGB} from "date-fns/locale";
import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin
  );

const options = {
    responsive: true,
    options: {
        transitions: {
          zoom: {
            animation: {
              duration: 1000,
              easing: 'easeOutCubic'
            }
          }
        },
       
      },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'CO2 emissions by country (https://www.icos-cp.eu/science-and-impact/global-carbon-budget/2021)',
      },
      subtitle: {
        display: true,
        text: 'Custom Chart Subtitle'
    },
    scales: {
        xAxes: 
        [{
          type: 'time',
        }],
        yAxes: 
        [
          {stacked: true}
        ]
      }      
,
      zoom: {
        zoom: {
          wheel: {
            enabled: true
          },
          mode: "xy",
          speed: 100
        },
        pan: {
          enabled: true,
          mode: "xy",
          speed: 100
        }
      },
      
    },
};



function LineChartOfV8() {

  let NamesArray= 
             [
              "Afghanistan",
              "Albania",
              "Algeria",
              "Andorra",
              "Angola",
              "Anguilla",
              "Antigua Barbuda",
              "Argentina",
              "Armenia",
              "Aruba",
              "Australia",
              "Austria",
              "Azerbaijan",
              "Bahamas",
              "Bahrain",
              "Bangladesh",
              "Barbados",
              "Belarus",
              "Belgium",
              "Belize",
              "Benin",
              "Bermuda",
              "Bhutan",
              "Bonaire Saint Eustatius and Saba",
              "Bosnia and Herzegovina",
              "Botswana",
              "Brazil",
              "British Virgin Islands",
              "Brunei Darussalam",
              "Bulgaria",
              "Burkina Faso",
              "Burundi",
              "Cambodia",
              "Canada",
              "Cape Verde",
              "Central African Republic",
              "Chad",
              "Chile",
              "China",
              "Colombia",
              "Comoros",
              "Congo",
              "Cook Islands",
              "Costa Rica",
              "Côte d'Ivoire",
              "Croatia",
              "Cuba",
              "Curaçao",
              "Cyprus",
              "Czech Republic",
              "North Korea",
              "Democratic Republic of the Congo",
              "Denmark",
              "Djibouti",
              "Dominica",
              "Dominican Republic",
              "Ecuador",
              "Egypt",
              "El Salvador",
              "Equatorial Guinea",
              "Eritrea",
              "Estonia",
              "Ethiopia",
              "Faeroe Islands",
              "Micronesia",
              "Fiji",
              "Finland",
              "France",
              "French Guiana",
              "French Polynesia",
              "Gabon",
              "Gambia",
              "Georgia",
              "Germany",
              "Ghana",
              "Greece",
              "Greenland",
              "Grenada",
              "Guadeloupe",
              "Guatemala",
              "Guinea",
              "Guinea_Bissau",
              "Guyana",
              "Haiti",
              "Honduras",
              "Hong Kong",
              "Hungary",
              "Iceland",
              "India",
              "Indonesia",
              "Iraq",
              "Ireland",
              "Iran",
              "Israel",
              "Italy",
              "Jamaica",
              "Japan",
              "Jordan",
              "Kazakhstan",
              "Kenya",
              "Kiribati",
              "Kosovo",
              "Kuwait",
              "Kyrgyzstan",
              "Laos",
              "Latvia",
              "Lebanon",
              "Lesotho",
              "Liberia",
              "Libya",
              "Liechtenstein",
              "Lithuania",
              "Luxembourg",
              "Macao",
              "North Macedonia",
              "Madagascar",
              "Malawi",
              "Malaysia",
              "Maldives",
              "Mali",
              "Malta",
              "Marshall Islands",
              "Martinique",
              "Mauritania",
              "Mauritius",
              "Mayotte",
              "Mexico",
              "Mongolia",
              "Montenegro",
              "Montserrat",
              "Morocco",
              "Mozambique",
              "Myanmar",
              "Namibia",
              "Nauru",
              "Nepal",
              "Netherlands",
              "New Caledonia",
              "New Zealand",
              "Nicaragua",
              "Niger",
              "Nigeria",
              "Niue",
              "Norway",
              "Occupied Palestinian Territory",
              "Oman",
              "Pakistan",
              "Palau",
              "Panama",
              "Papua New Guinea",
              "Paraguay",
              "Peru",
              "Philippines",
              "Bolivia",
              "Poland",
              "Portugal",
              "Qatar",
              "Cameroon",
              "South Korea",
              "Moldova",
              "South Sudan",
              "Sudan",
              "Réunion",
              "Romania",
              "Russian Federation",
              "Rwanda",
              "Saint Helena",
              "Saint Lucia",
              "Sint Maarten",
              "Samoa",
              "Sao Tome and Principe",
              "Saudi Arabia",
              "Senegal",
              "Serbia",
              "Seychelles",
              "Sierra Leone",
              "Singapore",
              "Slovakia",
              "Slovenia",
              "Solomon Islands",
              "Somalia",
              "South Africa",
              "Spain",
              "Sri Lanka",
              "Saint Kitts and Nevis",
              "Saint Pierre and Miquelon",
              "Saint Vincent and the Grenadines",
              "Suriname",
              "Swaziland",
              "Sweden",
              "Switzerland",
              "Syria",
              "Taiwan",
              "Tajikistan",
              "Thailand",
              "Timor Leste",
              "Togo",
              "Tonga",
              "Trinidad and Tobago",
              "Tunisia",
              "Turkey",
              "Turkmenistan",
              "Turks and Caicos Islands",
              "Tuvalu",
              "Uganda",
              "Ukraine",
              "United Arab Emirates",
              "United Kingdom",
              "Tanzania",
              "USA",
              "Uruguay",
              "Uzbekistan",
              "Vanuatu",
              "Venezuela",
              "Vietnam",
              "Wallis and Futuna Islands",
              "Yemen",
              "Zambia",
              "Zimbabwe",
             ]

    let {allDataOfV8, fetchAllDataOfV8} = useContext(LineChartContext); 
    

    useEffect(() => {
        fetchAllDataOfV8();
    },[]);
    
//Filter data for visualization
let years = allDataOfV8.map((data) => data.time);

//Loop for the number of countries
for (let i = 0; i < allDataOfV8.length; i++)
{
var countriesNumber = allDataOfV8[i].countries.length
}

//Array to loop over data
let dataArray =[];

//Array to loop over random colors
let colorArray = [];

//Function for random colors, (PS.colors can repeat(fix this if possible?))
let randomColors = () => 
{
  let r = Math.floor(Math.random()*255)
  var g = Math.floor(Math.random()*255)
  var b = Math.floor(Math.random()*255)

return "rgb("+r+","+g+","+b+")";

}




//Iteration i loop from 0 to all countries 
for (let i = 0; i < countriesNumber; i++) 
{

 var datatoArray = allDataOfV8.map((value) => 
  ( 
    {
      x: value.time,
      y: value.countries[i],
    }
  ));
  //Pushing colors to the colorArray
  colorArray.push(randomColors());
  dataArray.push(datatoArray)
};


  //Data to the graph
  const data = {
        labels: years,
        datasets: dataArray.map((data,i) => (
            {
                label: NamesArray[i],
                data:  dataArray[i],
                borderColor: colorArray[i],
                backgroundColor: colorArray[i],
            }
            
            ))
    };




  return (
    <div>
        <div style={{width: '90%', margin: "auto", border: "3px solid black", borderRadius: 4, padding: 10, backgroundColor: "white", alignItems: "center", justifyContent: "center"}}>
            <Line options={options}  data={data} />
            <h3 className='text-black font-bold text-2xl my-5 text-center'> Description </h3>
            <p style={{textAlign: "left", color: 'black', marginBottom: 5}}>  
            The chart shows the input of CO2 to the atmosphere by emissions from human activities, balanced by output (storage) in the carbon reservoirs on land or in the ocean. Thanks to the Global Carbon Budget, the research community can better understand and monitor the global carbon cycle, while the report prodives a highly valuable resource within a climate policy framework.

            The Global Carbon Budget is done by the researchers of the Global Carbon Project (GCP), including scientists from the ICOS community.
            </p>
            <span></span>
            <p style={{textAlign: "left", paddingTop: "20px",}}> <span style={{fontWeight: "bold"}}> Link to data source:</span> https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D  </p>
        </div>
    </div>
  )
}

export default LineChartOfV8