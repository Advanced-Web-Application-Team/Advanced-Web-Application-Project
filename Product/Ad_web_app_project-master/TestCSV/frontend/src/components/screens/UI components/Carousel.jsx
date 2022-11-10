import React from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import mockData from '../../../data/mockdata';
import SingleChartCarousel from '../../SingleItem/SingleChartCarousel';
import '@splidejs/react-splide/css';
function Carousel() {
  return (
    <div className="w-10/12 xl:w-9/12 lg:w-9/12 md:w-9/12 mx-auto p-4">
        <Splide options={{
            rewind: true,
            arrows: true,
            pagination: true
        }}>
           {mockData.map((chart) => (
               <SplideSlide>
               <SingleChartCarousel chart={chart}/>
               </SplideSlide>
           ))}
        </Splide>
    </div>
    
  )
}

export default Carousel