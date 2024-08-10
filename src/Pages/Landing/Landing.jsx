/* eslint-disable no-unused-vars */
import React from 'react';
import "./Landing.css";
import NavBar from '../../Components/NavBar/NavBar';
import SearchBox from '../../Components/SearchBox/SearchBox';

const Landing = () => {
  return (
    <div>
      {/* --------------------------------------------------------------------------- */}
      <NavBar />
        <div className='landing-top-section'>
          <h1 className='usp-heading'>Share to Inspire</h1>
          <p className='usp-text'>Your one-stop spot for highend quality education resources</p>
          <SearchBox />
        </div>
        {/* ------------------------------------------------------------------------- */}
        <div className='landing-mid-section'>
            <div className='landing-info-panel'>
              {/* Panel 3 */}
              <div className='info-panel'>
                <img src="../../../assets/dog.svg" alt="" />
                <h4 className='info-panel-heading'>Heading 1</h4>
                <p className='info-panel-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem in eius ratione dolore, magnam reiciendis pariatur numquam culpa minima consectetur harum. Nostrum excepturi accusantium, quidem eligendi delectus cum? Mollitia, architecto.</p>
              </div>
              {/* Panel 3 */}
              <div className='info-panel'>
                <img src="../../../assets/dog.svg" alt="" />
                <h4 className='info-panel-heading'>Heading 1</h4>
                <p className='info-panel-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem in eius ratione dolore, magnam reiciendis pariatur numquam culpa minima consectetur harum. Nostrum excepturi accusantium, quidem eligendi delectus cum? Mollitia, architecto.</p>
              </div>
                {/* Panel 3 */}
              <div className='info-panel'>
                <img src="../../../assets/dog.svg" alt="" />
                <h4 className='info-panel-heading'>Heading 1</h4>
                <p className='info-panel-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem in eius ratione dolore, magnam reiciendis pariatur numquam culpa minima consectetur harum. Nostrum excepturi accusantium, quidem eligendi delectus cum? Mollitia, architecto.</p>
              </div>
            
            </div>

            {/* ------------------------------------------------------------------------ */}

            <div className='landing-hero-section'>
              <div className='hero-section'>
                <img src="../../../public/assets/dog.svg" alt="" />
                  <div>
                    <h4>Heading</h4>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem vel laborum exercitationem quos. Placeat eum, tempore corporis illum repellendus modi, eius reprehenderit quibusdam tempora vel, natus labore non sed vero!</p>
                  </div>
              </div>

              <div className='hero-section'>
                <div>
                  <h4>Heading</h4>
                  <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem vel laborum exercitationem quos. Placeat eum, tempore corporis illum repellendus modi, eius reprehenderit quibusdam tempora vel, natus labore non sed vero!</p>
                </div>
                <img src="../../../public/assets/dog.svg" alt="" />
              </div>
            </div>
        </div>

        <div className='landing-bottom-section'>
          <div className='landing-teacher-info'>
            <h1> Are you an Educator?</h1>
            <p>Join a commnunity of educators who share innovative ideas  and  revolutionize your classes</p>
          </div>

          <div className='landing-more-info'>
            <h2>paper</h2>
            <h2>paper</h2>
            <h2>paper</h2>
          </div>
        </div>
        
    </div>
  )
}

export default Landing