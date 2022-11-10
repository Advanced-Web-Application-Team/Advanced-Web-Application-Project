import React from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function Register() {
  
  useEffect(() => {
    toast.success("To Register Page");
  },[]);




  return (
    <div>Register</div>
  )
}

export default Register