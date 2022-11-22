import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import ChartContext from '../../context/LineChartContext';
import 'chartjs-adapter-date-fns';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChartOfV9() {
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
      tooltip:
      { 
        callbacks: 
        {
         footer: (context) => 
         {
          console.log(context);
    
         return Filter(sub_categoryArray)   
         },
         afterFooter: (context) => 
         {
          // return Filter(sub_sub_categoryArray)
         
          return subSectorTextReturn(context[0].label);
         }
        }
      }
      
    },
};
   



    let {allDataOfV9, fetchAllDataOfV9} = useContext(ChartContext); 
    useEffect(() => {
        fetchAllDataOfV9();
    },[]);

    let mainSector = allDataOfV9.map((data) => data.sector);


    //Energy total greenhouse gas submissions
    let energyTotal = allDataOfV9.filter(x => x.sector === "Energy").map(x => x.Share_of_global_greenhouse_gas_emissions).reduce((acc, element) => acc += element, 0);
    
    //Agriculture, Forestry & Land Use total greenhouse gas submissions
    let agricultureTotal = parseFloat(allDataOfV9.filter(x => x.sector === "Agriculture, Forestry & Land Use").map(x => x.Share_of_global_greenhouse_gas_emissions).reduce((acc, element) => acc += element, 0).toFixed(1));

    //Waste total greenhouse gas submissions

    let wasteTotal = allDataOfV9.filter(x => x.sector === "Waste").map(x => x.Share_of_global_greenhouse_gas_emissions).reduce((acc, element) => acc += element, 0);
  
     // Function to return text for afterBody of each sector in a graph
     const subSectorTextReturn = (label) => {
      
      let energyNames = allDataOfV9.filter(x => x.sector === label).map((value) => ({
        sub_sector: value.sub_sector,
        sub_sub_sector: value.sub_sub_sector,
        gas_emission_value: value.Share_of_global_greenhouse_gas_emissions 
      }));
  
      let totalForEachSector = energyNames.map(x => x.sub_sector);
  
      let removeDuplicates = totalForEachSector.filter((a, b) => totalForEachSector.indexOf(a) == b);
  
  
      let arrayOfNewObjects = [];
      removeDuplicates.forEach((data) => {
  
        let newObj = {};
  
  
        let filterEachSubSector = allDataOfV9.filter((value) => value.sub_sector === data);
  
    
  
        let mappedDataForSubSector = filterEachSubSector.map((data) => ({
            sub_sub_sector: data.sub_sub_sector,
            gas_emission_value: data.Share_of_global_greenhouse_gas_emissions
        }));
  
        newObj[data] = mappedDataForSubSector
  
        arrayOfNewObjects.push(newObj);
  
      
      });
  
      let text = "";
  
      arrayOfNewObjects.forEach((item) => {
        
        let getKeys = Object.keys(item);
  
        let getName = getKeys[0];
  
        let totalSummation = 0;
  
        item[getName].forEach((value) => {
          totalSummation += value.gas_emission_value;
        });
  
        text += `${getName}` + ": " + `${totalSummation.toFixed(1)}` + " (the main sub-sector) " + "\n";
  
        item[getName].forEach((value) => {
          text += `${value.sub_sub_sector}` + ": " + `${value.gas_emission_value}` + "\n";
        });
  
        text += `\n`;
  
      });

      return text;
    };
    
    let testDataArray = [energyTotal, agricultureTotal, wasteTotal];
    // let testDataArray = [78.4,18.4,3.2];
    let sub_categoryArray = [];
    let sub_sub_categoryArray = [];
    let numberArray = [];

    let Filter = (arr) =>
    {
     let result = arr.filter((element, i) => arr.indexOf(element) === i)

     return result;
    };

  
    // for (let i = 0; i < allDataOfV9.length; i++)
    // {
    //    let subSectors = allDataOfV9[i].sub_sector
    //    let sub_sub_sector = allDataOfV9[i].sub_sub_sector
    //    let numbers = allDataOfV9[i].Share_of_global_greenhouse_gas_emissions

    //    sub_categoryArray.push(subSectors)
    //    numberArray.push(numbers +"%")
    //    sub_sub_categoryArray.push(sub_sub_sector)
    // }
      const data = {
         labels: Filter(mainSector),
          datasets:
              [{
                  label: "",
                  data: testDataArray,
                  borderColor: "rgb(0, 0, 0)",
                  backgroundColor: ["rgb(255,255,0)","rgb(0,100,0)","rgb(139,69,19)"]
              }
            
           
            ]
            
      }

  
  



  return (
    <div>
        <div style={{width: '80%', margin: "auto", border: "3px solid black", borderRadius: 4, padding: 10, backgroundColor: "white", alignItems: "center", justifyContent: "center"}}>
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