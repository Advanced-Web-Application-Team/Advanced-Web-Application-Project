import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import ChartContext from '../../context/LineChartContext';
import 'chartjs-adapter-date-fns';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'CO2 emissions by sectors (%)',
      },
      
    },
};
function DoughnutChartOfV9() {
    let {allDataOfV9, fetchAllDataOfV9} = useContext(ChartContext); 
    useEffect(() => {
        fetchAllDataOfV9();
    },[]);

    let Filter = (arr) =>
    {
     let result = arr.filter((element, i) => arr.indexOf(element) === i)

     return result;
    };
    
    let mainSector = allDataOfV9.map((data) => data.sector)
    let Data = allDataOfV9.map((data) => data.Share_of_global_greenhouse_gas_emissions)

    console.log(mainSector)

    //Idea? Do this tomorrow. Change the database so that each sector and sub sector has its own array of numbers
      const data = {
         labels: Filter(mainSector),
          datasets:
              [{
                  label: "test",
                  data: Data,
                  borderColor: "rgb(0, 75, 43)",
                  backgroundColor: 'rgba(238, 75, 43)'
              },
              {
                label: "test",
                data: Data,
                borderColor: "rgb(0, 75, 43)",
                backgroundColor: 'rgba(238, 75, 43)'
            },
            {
                label: "test",
                data: Data,
                borderColor: "rgb(, 75, 43)",
                backgroundColor: 'rgba(238, 75, 43)'
            },
            ]
            
      }

  
  



  return (
    <div>
        <div style={{width: '60%', margin: "auto", border: "3px solid black", borderRadius: 4, padding: 10, backgroundColor: "white", alignItems: "center", justifyContent: "center"}}>
            <Doughnut options={options} data={data} />
            <h3 className='text-black font-bold text-2xl my-5 text-center'> Description </h3>
            <p style={{textAlign: "left", color: 'black', marginBottom: 5}}> 
            This chart shows methane emissions by sector, measured in tonnes of carbon dioxide equivalents.

We see that, globally, agriculture is the largest contributor to methane emissions. Most of this methane comes from livestock (they produce methane through their digestive processes, in a process known as ‘enteric fermentation’). Rice production is also a large contributor to methane emissions.
            
            </p>
            <span></span>
            <p style={{textAlign: "left", paddingTop: "20px",}}> <span style={{fontWeight: "bold"}}> Link to data source:</span> https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx </p>
        </div>
    </div>
  )
}

export default DoughnutChartOfV9