import React, { useState } from 'react';
import axios from 'axios';

import './contact.css';

const handleBlur = (e) => {
  if(!e.target.validity.valid) {
      e.target.classList.add('invalid');
  } else {
      e.target.classList.remove('invalid');
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    serviceCategory: '',
    companyName: '',
    industry: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = [
      'fullName', 'email', 'phoneNumber', 
      'serviceCategory', 'companyName', 'industry', 'message'
    ];

    for (let field of fields) {
      if (!formData[field]) {
          // This finds the first input with an invalid value and focuses on it
          const invalidField = document.querySelector(`.nextlvl__contact-form_input[name="${field}"]`);
          invalidField?.focus();
          
          // Add shake effect
          invalidField.classList.add('shake-effect');
  
          // Remove shake effect after animation is done
          setTimeout(() => {
              invalidField.classList.remove('shake-effect');
          }, 250);
          
          return;
      }
    }

    try {
      await axios.post('/api/send-email', formData); // replace with your server endpoint
      alert('Email sent successfully!');
    } catch (error) {
      alert('Error sending email. Please try again.');
    }
  };

  return (
    <div className="nextlvl__contact-container section__padding" id='contact'>
      <h2 className="nextlvl__contact-title">Contact Us</h2>
      <form className="nextlvl__contact-form" onSubmit={handleSubmit} noValidate>
        <input
          className="nextlvl__contact-form_input"
          name="fullName"
          type="text"
          placeholder="Full Name *"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          onBlur={(e) => handleBlur(e)}
          required
        />
        <input
          className="nextlvl__contact-form_input"
          name="email"
          type="email"
          placeholder="Email *"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onBlur={(e) => handleBlur(e)}
          required
        />
        <input
          className="nextlvl__contact-form_input"
          name="phoneNumber"
          type="tel"
          placeholder="Phone Number *"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          onBlur={(e) => handleBlur(e)}
          required
        />
        <select
          className="nextlvl__contact-form_select"
          name="serviceCategory"
          value={formData.serviceCategory}
          onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
          onBlur={(e) => handleBlur(e)}
          required
        >
          <option value="">Select Service Category *</option>
          {/* You can add more options here */}
          <option value="category1">Product 1</option>
          <option value="category2">Product 2</option>
          <option value="category2">Product 3</option>
        </select>
        <input
          className="nextlvl__contact-form_input"
          name="companyName"
          type="text"
          placeholder="Company Name *"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          onBlur={(e) => handleBlur(e)}
          required
        />
        <input
          className="nextlvl__contact-form_input"
          name="industry"
          type="text"
          placeholder="Industry *"
          value={formData.industry}
          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
          onBlur={(e) => handleBlur(e)}
          required
        />
        <textarea
          className="nextlvl__contact-form_textarea"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
        <button className="nextlvl__contact-form_btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
