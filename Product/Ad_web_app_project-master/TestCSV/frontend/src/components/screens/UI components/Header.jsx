import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

function Header({openModal}) {

    let navigate = useNavigate();
    const handleClick = () => {
        openModal();
    }

    const goToMainPage = () => {
        navigate("/");  
    };

  return (
    <div className='bg-purple-200 p-5'>
        
        <div className='container mx-auto flex items-center justify-between'>
        <GiHamburgerMenu className='inline-block left-5 top-6 cursor-pointer' size={24} onClick={handleClick}/>
        <h1 className='text-center text-3xl font-bold px-5 cursor-pointer' onClick={goToMainPage}> Data Visualization Application </h1>
        <div></div>
        </div>
    </div>
  )
}

export default Header