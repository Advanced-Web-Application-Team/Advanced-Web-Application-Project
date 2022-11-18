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
        text: 'Temperature Anomalies from 1980 (Data source: https://www.metoffice.gov.uk/hadobs/hadcrut5/)',
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



function LineChart() {

    let {allData, fetchAllData} = useContext(LineChartContext); 
    

    useEffect(() => {
        fetchAllData();
    },[]);
    
    //Filter data for V1 visualization
    let yearArray = allData.map((data) => data.year);
    let distinctYearArray = yearArray.filter((a, b) => yearArray.indexOf(a) === b);
   
    let southMonthlyArray = allData.map((data) => ({
        x: data.year,
        y: data.southern_monthly
    }));

    let southAnnualArray = allData.map((data) => ({
        x: data.year,
        y: data.southern_annual
    }));

    let northMonthlyArray = allData.map((data) => ({
        x: data.year,
        y: data.northern_monthly
    }));

    let northAnnualArray = allData.map((data) => ({
        x: data.year,
        y: data.northern_annual
    }));

    let globalMonthlyArray = allData.map((data) => ({
        x: data.year,
        y: data.global_monthly
    }));

    let globalAnnualArray = allData.map((data) => ({
        x: data.year,
        y: data.global_annual
    }));
    

    
    const data = {
        labels: distinctYearArray,
        datasets: [
            {
                label: "Global Annual",
                data: globalAnnualArray,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            },
            {
                label: "Global Monthly",
                data: globalMonthlyArray,
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            },
            {
                label: "Southern Hemisphere Monthly",
                data: southMonthlyArray,
                borderColor: "rgba(247, 40, 145)",
                backgroundColor: "rgba(247, 40, 145, 0.5)"
            },
            {
                label: "Southern Hemisphere Annual",
                data: southAnnualArray,
                borderColor: "rgba(96, 248, 184)",
                backgroundColor: "rgba(96, 248, 184, 0.51)"
            },
            {
                label: "Northern Hemisphere Monthly",
                data: northMonthlyArray,
                borderColor: "rgba(0, 255, 255)",
                backgroundColor: "rgba(0, 255, 255, 0.51)"
            },
            {
                label: "Northern Hemisphere Annual",
                data: northAnnualArray,
                borderColor: "rgba(0, 87, 0)",
                backgroundColor: "rgba(0, 87, 0, 0.53))"
            }
        ]
    }

  

  return (
    <div>
        <div style={{width: '50%', margin: "auto", border: "3px solid black", borderRadius: 4, padding: 10, backgroundColor: "white", alignItems: "center", justifyContent: "center"}}>
            <Line options={options}  data={data} />
        </div>
    </div>
  )
}

export default LineChart