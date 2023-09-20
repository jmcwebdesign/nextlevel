import React from 'react';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import './about.css';

const About = () => {
  return (
    <div className='nextlvl__about'>
      <div className="nextlvl__about-title">
        <h1>About NextLevel</h1>
      </div>
      <div className="nextlvl__about-container">
        <div className='nextlvl__about-container_card'>
          <div className="nextlvl__about-container_card-image">
            <img src={product1} alt='about' />
          </div>
          <div className="nextlvl__about-container_card-content">
              <h3>The Value of NextLevel CFO</h3>
              <p>Description text goes here. Need length so adding extra words here as well. Repeating. Description text goes here. Need length so adding extra words here as well. Description text goes here. Need length so adding extra words here as well.</p>
          </div>
        </div>
        <div className='nextlvl__about-container_card'>
          <div className="nextlvl__about-container_card-content">
              <h3>Leave it to the Experts</h3>
              <p>Description text goes here. Need length so adding extra words here as well. Repeating. Description text goes here. Need length so adding extra words here as well. Description text goes here. Need length so adding extra words here as well.</p>
          </div>
          <div className="nextlvl__about-container_card-image">
            <img src={product2} alt='about' />
          </div>
        </div> 
        <div className='nextlvl__about-container_team'>
          <div className="nextlvl__about-container_team-image">
            <img src={product3} alt='about' />
            <img src={product3} alt='about' />
            <img src={product3} alt='about' />
          </div>
          <div className="nextlvl__about-container_team-content">
              <h3>Meet the Team</h3>
              <p>Description text goes here. Need length so adding extra words here as well. Repeating. Description text goes here. Need length so adding extra words here as well. Description text goes here. Need length so adding extra words here as well.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
