import React from 'react'

function SingleChartCarousel({chart}) {
  return (
    <div className='bg-purple-100 rounded-lg h-44 flex items-center justify-center'>
        <h1> {chart.name} </h1>
    </div>
  )
}

export default SingleChartCarousel;