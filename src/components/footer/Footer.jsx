import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='nextlvl__footer section__padding'>
      <div className="nextlvl__footer-links">
        <p><a href='#home'>About</a></p>
        <p><a href='#services'>Services</a></p>
        <p><a href='#blog'>Blog</a></p>
      </div>
      <div className="nextlvl__footer-copyright">
        <p>© 2023 NextLevel CFO. All rights reserved.</p>
        <p><a href='#privacypolicy'>Privacy Policy</a></p>
        <p><a href='#terms'>Terms of Service</a></p>
      </div>
    </div>
  )
}

export default Footer
