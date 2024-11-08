import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/'><FaLinkedin /></a>
        <a href='https://www.github.com/'><FaGithub /></a>
      <a href='https://www.facebook.com/'><FaFacebook /></a>
    </div>
  )
}

export default HeaderSocials
