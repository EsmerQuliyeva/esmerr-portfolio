import React from 'react'
import "./header.css"
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';



const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
      <h5>Hello, I`m</h5>
      <h1>Esmer Quliyeva</h1>
      <h5 className='text-light'>Front-End Web Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
      

    </header>
  );
};

export default Header