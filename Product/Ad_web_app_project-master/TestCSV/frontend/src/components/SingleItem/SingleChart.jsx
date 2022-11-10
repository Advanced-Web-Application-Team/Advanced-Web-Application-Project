import React from 'react';
import { useContext } from 'react';
import ChartContext from '../../context/ChartContext';

function SingleChart ({chart}) {

  let {charts, addChart, deleteChart} = useContext(ChartContext);

  let checkChartExists = charts.includes(chart.id);

  const addToCharts = (id) => {
    addChart(id);
  };

  const removeOutCharts = (id) => {
    deleteChart(id);
  };



  return (
    <div className='mx-2 my-4 shadow-lg border-2 border-black rounded-lg'>
    <div className='w-full h-52 bg-pink-200 flex items-center justify-center'>
        <h1> {chart.name}</h1>
    </div>

    <div className='flex items-center justify-center mt-10 mb-2'>

      {checkChartExists === false ? (<div className='btn btn-md bg-purple-200 text-black hover:bg-gray-200 hover:text-white focus:outline-0' onClick={() => addToCharts(chart.id)}> Add Chart To Layout </div>) : (<div className='btn btn-md bg-gray-500 text-white hover:bg-purple-200 hover:text-black focus:outline-0' onClick={() => removeOutCharts(chart.id)}> Added to Layout </div>)}
    
    </div>
    </div>
  )
}

export default SingleChart;