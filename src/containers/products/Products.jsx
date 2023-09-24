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
              <h3>CFO</h3>
              <ul>
                <li>Forecasting: Utilizing advanced financial models to predict future revenues and expenses, helping businesses to anticipate market changes.</li>
                <li>Budgeting: Allocating resources effectively to ensure the company's financial objectives align with its strategic goals.</li>
                <li>Planning: Strategizing for both short-term and long-term financial objectives, ensuring that businesses are prepared for all potential scenarios.</li>
                <li>Growth: Identifying and capitalizing on opportunities to expand, be it through mergers, acquisitions, or organic expansion.</li>
                <li>Substantial cost savings: Scrutinizing expenditures to identify inefficiencies and areas for potential reduction, ensuring optimal profitability.</li>
              </ul>
              <button type='button' onClick={() => window.open('https://www.google.com', '_blank')}>Get Started</button>
          </div>
        </div>
        <div className='nextlvl__products-container_card'>
          <div className="nextlvl__products-container_card-image">
            <img src={product2} alt='products' />
          </div>
          <div className="nextlvl__products-container_card-content">
              <h3>Controller</h3>
              <ul>
                <li>Bank records: Ensuring accurate reconciliation of company bank statements, maintaining the integrity of cash balances and financial transactions.</li>
                <li>EOM (End of Month): Overseeing the end-of-month financial close process to ensure timely and accurate financial reporting.</li>
                <li>Clean up: Regularly reviewing ledgers and accounts to rectify discrepancies, ensuring financial records are clear and accurate.</li>
                <li>Training: Providing guidance and training to accounting staff, ensuring best practices are consistently followed and skill sets are enhanced.</li>
                <li>Payroll: Managing the company's payroll system, ensuring all employees are compensated accurately and on time, while adhering to tax and other regulatory requirements.</li>
              </ul>
              <button type='button' onClick={() => window.open('https://www.google.com', '_blank')}>Get Started</button>
          </div>
        </div> 
        <div className='nextlvl__products-container_card'>
          <div className="nextlvl__products-container_card-image">
            <img src={product3} alt='products' />
          </div>
          <div className="nextlvl__products-container_card-content">
              <h3>Staff Accountant</h3>
              <ul>
                <li>Accounts Payable: Managing outgoing bills and expenses, ensuring timely payments to vendors, suppliers, and other third-party entities while adhering to company procedures.</li>
                <li>Accounts Receivable: Overseeing incoming payments, sending invoices, tracking outstanding balances, and ensuring prompt collection of dues from clients and customers.</li>
                <li>Data Entry: Accurately recording financial transactions into the company's accounting system, maintaining meticulous attention to detail to prevent discrepancies.</li>
                <li>Security: Safeguarding sensitive financial data, adhering to best practices in data protection, and ensuring that all financial records are secure from unauthorized access.</li>
                <li>Opportunity notifications: Proactively identifying financial discrepancies or anomalies that could indicate potential growth areas or concerns, and notifying the appropriate departments or personnel.</li>
              </ul>
              <button type='button' onClick={() => window.open('https://www.google.com', '_blank')}>Get Started</button>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Products
