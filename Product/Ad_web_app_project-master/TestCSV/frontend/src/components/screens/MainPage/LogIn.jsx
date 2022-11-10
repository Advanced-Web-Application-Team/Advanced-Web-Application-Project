import React from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function LogIn() {

  useEffect(() => {
    toast.success("To Log In Page");
  },[]);


  return (
    <div className='mb-10'>LogIn</div>
  )
}

export default LogIn