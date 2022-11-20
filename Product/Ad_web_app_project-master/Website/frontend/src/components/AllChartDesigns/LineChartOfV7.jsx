import React from 'react';
import { useContext } from 'react';
import LineChartContext from '../../context/LineChartContext';
import { useEffect } from 'react';
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
      zoomPlugin,
    );
  
  const options = {
      responsive: true,
      interaction: {mode: 'index', intersect:false},
      stacked:false,
      options: 
       {
          transitions: 
          {
            zoom: 
            {
              animation: 
              {
                duration: 1000,
                easing: 'easeOutCubic'
              }
            }
          },
        },
      plugins: 
     {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Evolution of global temperature over the past two million years (1 equals 1 thousand years) (https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf)',
        },
        subtitle: {
          display: true,
          text: 'Custom Chart Subtitle'
        },
        zoom: {
          zoom: {
            wheel: {
              enabled: true // SET SCROll ZOOM TO TRUE
            },
            speed: 100
          },
          pan: {
            enabled: true,
            speed: 100
          }
        },
        
      },

      scales: {
        A: {
          type: 'linear',
          position: 'left',
      },
      B: {
          type: 'linear',
          position: 'right',
          grid: {
            drawOnChartArea: false,
          },
         }
      },
  };
  

function LineChartOfV7() {

    let {allDataOfV7,  fetchAllDataOfV7} = useContext(LineChartContext);

    useEffect(() => {
        fetchAllDataOfV7();
    },[]);

    let yearLabels = allDataOfV7.map((value) => value.time);

    let carbonValue = allDataOfV7.map((value) => ({
       x: value.time,
       y: value.carbon_dioxide,
    }));
    let surfTemp = allDataOfV7.map((value) => ({
      x: value.time,
      y: value.surface_temp,
  }));

//Make it so that it will show later
let Events = allDataOfV7.map((value) => 
({
    x: value.time,
    y: value.Event,
}));

console.log(Events)
    const data = {
        labels: yearLabels,
        datasets: [
            {
                label: "Carbon dioxide (ppm)",
                data: carbonValue,
                borderColor: "rgb(139,0,0)",
                backgroundColor: 'rgba(139,0,0)',
                yAxisID:"A"
            },
            {
              label: "Surface temperature change(50%)",
              data: surfTemp,
              borderColor: "rgb(0,0,255)",
              backgroundColor: 'rgba(0,0,255)',
              yAxisID:"B"
          },
          {
            label: "Events",
            data: Events,
            borderColor: "rgb(0,0,255)",
            backgroundColor: 'rgba(0,0,255)',
        },
        ]
    }


  return (
    <div>
    <div style={{width: '50%', margin: "auto", border: "3px solid black", borderRadius: 4, padding: 10 ,marginBottom: 4, backgroundColor: "white"}}>
        <Line options={options}  data={data} />

        <h3 className='text-black font-bold text-2xl my-5 text-center'> Description </h3>
        
            <p style={{textAlign: "left", color: 'black', marginBottom: 5}}>The graph shows a spatially weighted
proxy reconstruction of global temperature over the past 2 million
years estimated from a multi-proxy database of over 20,000 sea
surface temperature point reconstructions. Global temperature
gradually cooled until roughly 1.2 million years ago and cooling
then stalled until the present. </p>
<p style={{textAlign: "left"}}> <span style={{fontWeight: "bold"}}> Link to data source: </span> http://carolynsnyder.com/publications.php </p>
    </div>
</div>
  )
}

export default LineChartOfV7