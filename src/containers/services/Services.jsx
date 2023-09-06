import React from 'react';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import './services.css';

const Services = () => {
  return (
    <div className='nextlvl__services section__padding' id='services'>
      <div className="nextlvl__services-heading">
        <h1 className='gradient__text'>Our Services</h1>
        <p className='nextlvl__services-subtext'>Choose from our wide range of accounting solutions</p>
      </div>
      <div className='nextlvl__services-container_article'>
        <div className="nextlvl__services-container_article-image">
          <img src={product1} alt='services' />
        </div>
        <div className="nextlvl__services-container_article-content">
          <div>
            <h2>Product 1</h2>
            <h3>product description</h3>
          </div>
        </div>
      </div>
      <div className='nextlvl__services-container_article'>
        <div className="nextlvl__services-container_article-image">
          <img src={product2} alt='services' />
        </div>
        <div className="nextlvl__services-container_article-content">
          <div>
            <h2>Product 2</h2>
            <h3>product description</h3>
          </div>
        </div>
      </div>
      <div className='nextlvl__services-container_article'>
        <div className="nextlvl__services-container_article-image">
          <img src={product3} alt='services' />
        </div>
        <div className="nextlvl__services-container_article-content">
          <div>
            <h2>Product 3</h2>
            <h3>product description</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
