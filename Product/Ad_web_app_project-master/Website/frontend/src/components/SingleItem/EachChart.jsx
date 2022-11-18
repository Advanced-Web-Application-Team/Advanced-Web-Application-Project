import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function EachChart({id, singleItem}) {

  //Global state from redux for auth
  let {user} = useSelector(state => state.auth);


  return (
  
     <div className='p-5 my-5'>       
            <div>
            <h1 className='text-black text-center text-3xl my-5'> Visualization type: <span className='font-bold'> {id} </span> </h1>
            {singleItem}
            </div>

            <div className='flex items-center justify-center my-5'>
              {user.username 
              ? 
              
              (
                <div className='btn btn-lg bg-sky-500 focus:outline-0'> Add This Chart to Layout! </div>
              )
              :

              (
              <Link to="/login">
              <div className='btn btn-lg bg-amber-500 focus:outline-0'> Please Log In To Add Chart! </div>
              </Link>
              )
            }
            </div>
    </div>
    
  )
}

export default EachChart