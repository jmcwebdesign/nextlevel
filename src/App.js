import React from 'react';

import { Hero, Services, Blog } from './containers';
import { Navbar, Review, Contact, Footer } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Services />
      <Blog />
      <Review />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
