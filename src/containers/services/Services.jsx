import React from 'react';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import './services.css';

const Services = () => {
  return (
    <div className='nextlvl__services section__padding' id='services'>
      <div className="nextlvl__services-heading">
        <h1>Our Services</h1>
        <p>Choose from our wide range of accounting solutions</p>
      </div>
      <div className="nextlvl__services-container">
        <a href='/services' className='nextlvl__services-container_link'>
          <div className='nextlvl__services-container_article'>
            <div className="nextlvl__services-container_article-image">
              <img src={product1} alt='services' />
            </div>
            <div className="nextlvl__services-container_article-content">
              <div>
                <h2>CFO</h2>
                <h3><li>Forecasting</li><li>Budgeting</li><li>Planning</li><li>Growth</li><li>Substantial cost savings</li></h3>
              </div>
            </div>
          </div>
        </a>
        <a href='/services' className='nextlvl__services-container_link'>
          <div className='nextlvl__services-container_article'>
            <div className="nextlvl__services-container_article-image">
              <img src={product2} alt='services' />
            </div>
            <div className="nextlvl__services-container_article-content">
              <div>
                <h2>Controller</h2>
                <h3><li>Bank records</li><li>EOM</li><li>Clean up</li><li>Training</li><li>Payroll</li></h3>
              </div>
            </div>
          </div>
        </a>
        <a href='/services' className='nextlvl__services-container_link'>
          <div className='nextlvl__services-container_article'>
            <div className="nextlvl__services-container_article-image">
              <img src={product3} alt='services' />
            </div>
            <div className="nextlvl__services-container_article-content">
              <div>
                <h2>Staff Accountant</h2>
                <h3><li>Accounts Payable</li><li>Accounts Receivable</li><li>Data Entry</li><li>Security</li><li>Opportunity notifications</li></h3>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Services
