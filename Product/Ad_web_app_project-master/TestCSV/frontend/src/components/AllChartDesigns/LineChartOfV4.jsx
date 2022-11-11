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
        text: 'Antarctic Ice Core records of atmospheric CO2 ratios combined with Mauna Loa measurements (https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html)',
      },
      subtitle: {
        display: true,
        text: 'Custom Chart Subtitle'
    },
    scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'month'
          }
        }],
      }      
,
      zoom: {
        zoom: {
          wheel: {
            enabled: true // SET SCROOL ZOOM TO TRUE
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



function LineChartOfV4() {

    let {allDataOfV4, fetchAllDataOfV4} = useContext(LineChartContext); 
    

    useEffect(() => {
        fetchAllDataOfV4();
    },[]);
    
    //Filter data for visualization
    let yearArray = allDataOfV4.map((data) => data.year);
    let distinctYearArray = yearArray.filter((a, b) => yearArray.indexOf(a) === b);
   
    let co2_annually = allDataOfV4.map((data) => ({
        x: data.year,
        y: data.co2_annually
    }));

    let de08_mixing_ratio = allDataOfV4.map((data) => ({
        x: data.year,
        y: data. de08_co2_mixing_ratio
    }));

    let de08_2_mixing_ratio = allDataOfV4.map((data) => ({
        x: data.year,
        y: data.de08_2_co2_mixing_ratio
    }));

    let dss_mixing_ratio = allDataOfV4.map((data) => ({
        x: data.year,
        y: data.dss_co2_mixing_ratio
    }));
    
    const data = {
        labels: distinctYearArray,
        datasets: [
            {
                label: "CO2 Annual",
                data: co2_annually,
                borderColor: "rgb(238, 75, 43)",
                backgroundColor: 'rgba(238, 75, 43)'
            },
            {
                label: "DE08 CO2 Mixing Ratio",
                data: de08_mixing_ratio,
                borderColor: "rgb(70,130,180)",
                backgroundColor: 'rgba(70,130,180)'
            },
            {
                label: "DE08-2 CO2 Mixing Ratio",
                data: de08_2_mixing_ratio,
                borderColor: "rgb(138,43,226)",
                backgroundColor: 'rgba(138,43,226)'
            },
            {
                label: "DSS CO2 Mixing Ratio",
                data: dss_mixing_ratio,
                borderColor: "rgb(0,0,139)",
                backgroundColor: 'rgba(0,0,139)'
            },
        ]
    }

  

  return (
    <div>
        <div style={{width: '50%', margin: "auto", border: "3px solid black", borderRadius: 4, padding: 10, backgroundColor: "white", alignItems: "center", justifyContent: "center"}}>
            <Line options={options}  data={data} />
            <h3 className='text-black font-bold text-2xl my-5 text-center'> Description </h3>
            <p style={{textAlign: "left", color: 'black', marginBottom: 5}}> The CO2 records presented here are derived from three ice cores obtained at Law Dome, East Antarctica from 1987 to 1993. 
            The ice core air samples, ranging from about 50 to 150 ml standard temperature and pressure (STP), were measured for CO2 mixing ratio with a Carle 400 Series analytical gas chromatograph (GC).
            After separation on the GC columns, the CO2 was catalytically converted to methane before flame ionization detection. 
            As many as three separate analysis were made on each ice core sample. Each sample injection to the GC was bracketed by calibration gas injections. 
            CO2 mixing ratios were then found for each aliquot by multiplying the ratio of the sample peak area to calibration gas peak area (interpolated to the time of sample analysis) by the CO2 mixing ratio assigned to the calibration gas. 
            The precision of analysis of the Law Dome ice core air samples was 0.2 ppm. 
            For greater details on the experimental techniques used on the DE08, DE08-2, and DSS ice cores, please refer to Etheridge et al. (1996).
            </p>
            <span>The atmospheric CO2 reconstructions presented here offer records of atmospheric CO2 mixing ratios from 1006 A.D. to 1978 A.D.</span>
            <p style={{textAlign: "left", paddingTop: "20px",}}> <span style={{fontWeight: "bold"}}> Link to data source for description:</span> https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat </p>
        </div>
    </div>
  )
}

export default LineChartOfV4