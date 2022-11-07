import React from 'react'
import mockData from '../../data/mockdata';
import SingleChart from '../SingleItem/SingleChart';
import Carousel from './Carousel';
function DisplayCharts() {
  return (
    <div className="bg-stone-300">
    <Carousel />
    <div className='grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 md:grid-cols-2 w-7/12 mx-auto'>
        {mockData.map((chart) => (
            <SingleChart chart={chart}/>
        ))}
    </div>
    </div>
  )
}

export default DisplayCharts