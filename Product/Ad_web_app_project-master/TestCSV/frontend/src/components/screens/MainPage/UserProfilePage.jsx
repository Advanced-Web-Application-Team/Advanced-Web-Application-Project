import React from 'react';
import { useSelector } from 'react-redux';




//User Page for log-in user 
function UserProfilePage() {

    //Global state from redux for auth
    let {user} = useSelector(state => state.auth);


    

  return (
        <div>
        <div className='container mx-auto p-5'>
            <h1 className='text-black text-3xl font-bold my-5'> Profile Page: {user.username}</h1>

            <div className='bg-gray-100 w-8/12 xl:w-6/12 lg:w-6/12 md:w-6/12 border-2 rounded-lg border-black p-10 shadow-lg'>
               
                    <h3 className='text-black font-bold text-xl'> Name: {user.username}</h3>
    
               
                    <h3 className='text-black font-bold text-xl mt-5'> Email: {user.email}</h3>

            </div>
        </div>
        </div>
  )
}



export default UserProfilePage