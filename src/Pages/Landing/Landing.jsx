/* eslint-disable no-unused-vars */
import React from 'react';
import "./Landing.css";
import NavBar from '../../Components/NavBar/NavBar';

const Landing = () => {
  return (
    <div>
        <div className='top-section'>
          <NavBar />
          <h1 className='usp-heading'>Share to Inspire</h1>
          <p className='usp-text'>Your one-stop spot for top quality educational resources</p>
        </div>
        
    </div>
  )
}

export default Landing