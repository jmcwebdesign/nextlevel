import React, { useState } from 'react';
import axios from 'axios';

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
    try {
      await axios.post('/api/send-email', formData); // replace with your server endpoint
      alert('Email sent successfully!');
    } catch (error) {
      alert('Error sending email. Please try again.');
    }
  };

  return (
    <div className="nextlvl__contact-container section__padding">
      <h2 className="nextlvl__contact-title">Contact Us</h2>
      <form className="nextlvl__contact-form" onSubmit={handleSubmit}>
        <input
          className="nextlvl__contact-form_input"
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          required
        />
        <input
          className="nextlvl__contact-form_input"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          className="nextlvl__contact-form_input"
          type="tel"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          required
        />
        <select
          className="nextlvl__contact-form_select"
          value={formData.serviceCategory}
          onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
          required
        >
          <option value="">Select Service Category</option>
          {/* You can add more options here */}
          <option value="category1">Product 1</option>
          <option value="category2">Product 2</option>
          <option value="category2">Product 3</option>
        </select>
        <input
          className="nextlvl__contact-form_input"
          type="text"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          required
        />
        <input
          className="nextlvl__contact-form_input"
          type="text"
          placeholder="Industry"
          value={formData.industry}
          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
          required
        />
        <textarea
          className="nextlvl__contact-form_textarea"
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
