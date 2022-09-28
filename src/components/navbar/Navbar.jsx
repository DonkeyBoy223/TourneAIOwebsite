import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import tourne from '../../assets/android-chrome-512x512.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <img src={tourne} height="50" width="50" align="left" img/>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
        </div>
        <div className="gpt3__navbar-links_container">   
          <p><a href="#home">Home</a></p>
          <p><a href="#aboutus">About Us</a></p>
          <p><a href="#faq">FAQ</a></p>
          <p><a href="#sitelist">Sitelist</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <a href="https://tourneaio.hyper.co/dashboard" type="button">
            <button>Dashboard</button>
        </a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#aboutus">About Us</a></p>
            <p><a href="#faq">FAQ</a></p>
            <p><a href="#sitelist">Sitelist</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <button href="https://tourneaio.hyper.co/dashboard" type="button">Dashboard</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;