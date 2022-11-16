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



function LineChartOfV8() {

    let {allDataOfV8, fetchAllDataOfV8} = useContext(LineChartContext); 
    

    useEffect(() => {
        fetchAllDataOfV8();
    },[]);
    
    //Filter data for visualization
    let yearArray = allDataOfV8.map((data) => data.time);
 
    

      let test = allDataOfV8.map((value) => ({
        x: value.time,
        y: value.Countries,
     }));
   
    
    const data = {
        labels: yearArray,
        datasets: allDataOfV8.map((data,i) => (
            {
                label: "Finland",
                data: test,
                borderColor: "rgb(238, 75, 43)",
                backgroundColor: 'rgba(238, 75, 43)'
            }))
    }

  console.log(data)

  return (
    <div>
        <div style={{width: '50%', margin: "auto", border: "3px solid black", borderRadius: 4, padding: 10, backgroundColor: "white", alignItems: "center", justifyContent: "center"}}>
            <Line options={options}  data={data} />
            <h3 className='text-black font-bold text-2xl my-5 text-center'> Description </h3>
            <p style={{textAlign: "left", color: 'black', marginBottom: 5}}> The CO2 records presented here are derived from three ice cores obtained at Law Dome, East Antarctica from 1987 to 1993. 
            
            </p>
            <span></span>
            <p style={{textAlign: "left", paddingTop: "20px",}}> <span style={{fontWeight: "bold"}}> Link to data source:</span> https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat </p>
        </div>
    </div>
  )
}

export default LineChartOfV8