import React from 'react';
import { useSelector } from 'react-redux';
import TotalChartsContext from '../../../context/LayoutContext';
import { useContext } from 'react';
import { useState } from 'react';
import SingleChartInLayout from '../../SingleItem/SingleChartInLayout';

function LayoutDesignForUser() {

    //All charts' array from context

    let {arrayCharts} = useContext(TotalChartsContext);

     //Global state from redux for layout array with charts inside for layout design page

    let {layoutArray} = useSelector(state => state.layout);

    //Get filter for selected id's charts

    let selectedCharts = arrayCharts.filter((chart) => {
        return layoutArray.includes(chart.id);
    });

    //Set layout selection (one-side or two-side)

    let [layout, setLayout] = useState("oneside");

   
    //Handle submit

    const submit = () => {
        console.log("Submit");
    }
 
  return (
    <div className='p-14 bg-stone-300'>
   <div className='w-full mx-auto p-2 mb-36'>
       <h1 className='text-center text-black font-bold text-3xl'> Layout Design Page for User! </h1>

        {selectedCharts.length == 0 
        
        ? 
        
        (<div className='text-center my-80 text-3xl text-pink-500 font-bold m'> No charts added to layout! </div>) 
        
        : 
        
        (<div className='my-10'> 

            <div className='flex items-center justify-center'>
                <div className='formgroup flex items-center mb-4 mr-10'>
                <input type="radio" name="sidelayout" id="oneside" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' onChange={() => setLayout("oneside")} checked={layout === "oneside"}/>
                <label htmlFor='oneside' className='ml-2 text-lg font-medium text-gray-900 dark:text-gray-300'> One-side Layout </label>
                </div>

                <div className='form-group flex items-center mb-4'>
                <input type="radio" name="sidelayout" id="twoside" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' onChange={() => setLayout("twoside")} checked={layout === "twoside"}/>
                <label htmlFor="twoside" className='ml-2 text-lg font-medium text-gray-900 dark:text-gray-300'> Two-side Layout </label>
                </div>
            </div>

            <div className='my-36'>
            {layout === "oneside" && (
                <div>
                 {selectedCharts.map((chart) => (
                    <SingleChartInLayout item={chart.item} id={chart.id} side={"oneside"}/>
                 ))}
                </div>
              )}

            {layout === "twoside" && (
                 <div className='grid grid-cols-2 w-full gap-8'>
                      {selectedCharts.map((chart) => (
                    <SingleChartInLayout item={chart.item} id={chart.id} side={"twoside"}/>
                 ))}
                
                </div>
              )}

            </div>

          
            <div>
                <div className='btn btn-lg w-full mt-10 bg-sky-500 focus:outline-0 hover:bg-gray-200 hover:text-black' onClick={submit}> Create visualization view! </div>
            </div>

            

        </div>)}
   </div>
   </div>
  )
}

export default LayoutDesignForUser