/* eslint-disable no-unused-vars */
import React from 'react';
import "./Landing.css";
import NavBar from '../../Components/NavBar/NavBar';
import SearchBox from '../../Components/SearchBox/SearchBox';

const Landing = () => {
  return (
    <div>

        <div className='top-section'>
          <NavBar />
          <h1 className='usp-heading'>Share to Inspire</h1>
          <p className='usp-text'>Your one-stop spot for highend quality education resources</p>
          <SearchBox />

          <h2 className='landing-down-arrow'> &#8964; </h2>
          
        </div>
        
    </div>
  )
}

export default Landing