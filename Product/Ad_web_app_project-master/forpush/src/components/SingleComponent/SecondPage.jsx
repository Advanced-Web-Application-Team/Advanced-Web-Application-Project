import React from 'react';
import mockData from "../../data/mockdata";
import { Splide } from '@splidejs/react-splide';
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import SingleChart from '../SingleItem/SingleChart';
import SingleChartCarousel from '../SingleItem/SingleChartCarousel';
function SecondPage() {
  return (

    <div className="bg-stone-300 py-36"> 

<div className="w-10/12 xl:w-9/12 lg:w-9/12 md:w-9/12 mx-auto p-4">
    <Splide options={{
        rewind: true,
        arrows: true,
        pagination: true
    }}>
       {mockData.slice(0, 3).map((chart) => (
           <SplideSlide>
           <SingleChartCarousel chart={chart}/>
           </SplideSlide>
       ))}
    </Splide>
</div>

      <div className='grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 md:grid-cols-2 w-7/12 mx-auto'>
        {mockData.slice(0, 3).map((chart) => (
            <SingleChart chart={chart}/>
        ))}
    </div>
    </div>
  )
}

export default SecondPage