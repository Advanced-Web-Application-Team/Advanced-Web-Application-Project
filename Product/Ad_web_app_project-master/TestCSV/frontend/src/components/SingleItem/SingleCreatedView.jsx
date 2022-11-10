import React from 'react'

function SingleCreatedView({layout, index}) {
  return (
    <div className='my-10'>
        <div>
            <h3 className='text-black font-bold text-2xl'> Data Visuations! </h3>
        </div>
        <div className='my-12 bg-pink-500 w-full p-10 rounded-lg'>
            <h1 className='text-center font-bold text-black text-2xl'> {layout.layout}</h1>
        </div>

        <div className='w-full p-5 border-2 border-black rounded-lg bg-white'>
            <p> {layout.description}</p>
        </div>
    </div>
  )
}

export default SingleCreatedView