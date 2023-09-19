import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href='/about'>About</a></p>
  <p><a href='/services'>Services</a></p>
  <p><a href='/#blog'>Blog</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='nextlvl__navbar'>
      <div className='nextlvl__navbar-logo'>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className='nextlvl__navbar-links'>
        <div className='nextlvl__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='nextlvl__navbar-btns'>
        <button type='button' onClick={() => window.open('https://www.google.com', '_blank')}>Portal Login</button>
        <button type='button' onClick={() => window.location.href="#contact"}>Contact Us</button>
      </div>
      <div className='nextlvl__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='nextlvl__navbar-menu_container scale-up-center'>
            <div className='nextlvl__navbar-menu_container-links'>
              <Menu />
              <div className='nextlvl__navbar-menu_container-links-btns'>
                <button type='button' onClick={() => window.open('https://www.google.com', '_blank')}>Portal Login</button>
                <button type='button' onClick={() => window.location.href="#contact"}>Contact Us</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
