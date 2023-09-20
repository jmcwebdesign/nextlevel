import React from 'react';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import './products.css';

const Products = () => {
  return (
    <div className='nextlvl__products'>
      <div className="nextlvl__products-title">
        <h1>Our Services</h1>
      </div>
      <div className="nextlvl__products-container">
        <div className='nextlvl__products-container_card'>
          <div className="nextlvl__products-container_card-image">
            <img src={product1} alt='products' />
          </div>
          <div className="nextlvl__products-container_card-content">
              <h3>Product 1</h3>
              <ul>
                <li>Description text goes here. Need length so adding extra words here as well. Repeating.</li>
                <li>Description text goes here. Need length so adding extra words here as well. Repeating.</li>
                <li>Description text goes here. Need length so adding extra words here as well. Repeating.</li>
                <li>Description text goes here. Need length so adding extra words here as well. Repeating.</li>
              </ul>
              <button type='button' onClick={() => window.open('https://www.google.com', '_blank')}>Get Started</button>
          </div>
        </div>
        <div className='nextlvl__products-container_card'>
          <div className="nextlvl__products-container_card-image">
            <img src={product2} alt='products' />
          </div>
          <div className="nextlvl__products-container_card-content">
              <h3>Product 2</h3>
              <ul>
                <li>Description text goes here. Need length so adding extra words here as well. Repeating.</li>
                <li>Description text goes here. Need length so adding extra words here as well. Repeating.</li>
                <li>Description text goes here. Need length so adding extra words here as well. Repeating.</li>
                <li>Description text goes here. Need length so adding extra words here as well. Repeating.</li>
              </ul>
              <button type='button' onClick={() => window.open('https://www.google.com', '_blank')}>Get Started</button>
          </div>
        </div> 
        <div className='nextlvl__products-container_card'>
          <div className="nextlvl__products-container_card-image">
            <img src={product3} alt='products' />
          </div>
          <div className="nextlvl__products-container_card-content">
              <h3>Product 3</h3>
              <ul>
                <li>Description text goes here. Need length so adding extra words here as well. Repeating.</li>
                <li>Description text goes here. Need length so adding extra words here as well. Repeating.</li>
                <li>Description text goes here. Need length so adding extra words here as well. Repeating.</li>
                <li>Description text goes here. Need length so adding extra words here as well. Repeating.</li>
              </ul>
              <button type='button' onClick={() => window.open('https://www.google.com', '_blank')}>Get Started</button>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Products
