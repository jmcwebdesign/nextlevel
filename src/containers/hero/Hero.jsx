import React from 'react';
import { video } from './imports';
import './hero.css';

const Hero = () => {
  return (
    <div className='nextlvl__hero section__padding' id='home'>
      <div className='nextlvl__hero-video'>
        <video 
          src={video}
          type="video/mov"
          loop
          muted
          autoPlay
          playsInline
        />
        <div className="nextlvl__hero-video_overlay"></div>
      </div>
      <div className='nextlvl__hero-content'>
        <h1 className='nextlvl__hero-content_title'>Welcome to NextLevel</h1>
        <p>description text here</p>

        <div className='nextlvl__hero-content_btns'>
          <button type='button' onClick={() => window.location.href="/about"}>Learn More</button>
          <button type='button' onClick={() => window.location.href="#contact"}>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
