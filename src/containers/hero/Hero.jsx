import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className='nextlvl__hero section__padding' id='home'>
      <div className='nextlvl__hero-content'>
        <h1 className='nextlvl__hero-title'>Welcome to NextLevel</h1>
        <p>description text here</p>

        <div className='nextlvl__hero-content_btns'>
          <button type='button'>Learn More</button>
          <button type='button'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
