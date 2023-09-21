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
          playbackRate='0.5'
          muted
          autoPlay
          playsInline
        />
        <div className="nextlvl__hero-video_overlay"></div>
      </div>
      <div className='nextlvl__hero-content'>
        <h1 className='nextlvl__hero-content_title'>Welcome to NextLevel</h1>
        <h4>Your Strategic Financial Partner</h4>
        <p>In today's dynamic business landscape, visionary enterprises require more than just basic accounting; they demand strategic financial foresight.<br/>NextLevel bridges this gap by offering outsourced CFO and accounting solutions tailored for the future.</p>

        <div className='nextlvl__hero-content_btns'>
          <button type='button' onClick={() => window.location.href="/about"}>Learn More</button>
          <button type='button' onClick={() => window.location.href="#contact"}>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
