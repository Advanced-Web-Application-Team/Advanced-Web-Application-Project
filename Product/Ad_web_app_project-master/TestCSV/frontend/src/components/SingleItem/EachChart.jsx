import React from 'react'

function EachChart({id, singleItem}) {
  return (
  
     <>
            <h1 className='text-black text-center text-3xl my-5'> Visualization type: <span className='font-bold'> {id} </span> </h1>
            {singleItem}
    </>
    
  )
}

export default EachChart