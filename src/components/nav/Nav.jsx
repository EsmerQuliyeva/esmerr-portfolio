import React from 'react'
import "./nav.css"
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { SlBookOpen } from "react-icons/sl";
import { RiServiceLine } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { useState } from 'react';
const Nav = () => {
  const [activeNav,setactiveNav]=useState("#")
  return (
    <nav>
      <a href="#header" onClick={()=>setactiveNav("#header")} className={activeNav==="#header"?"active":""}><FaHome /></a>
      <a href="#about" onClick={()=>setactiveNav("#about")} className={activeNav==="#about"?"active":""}><FaRegUser /></a>
      <a href="#experience" onClick={()=>setactiveNav("#experience")} className={activeNav==="#experience"? "active":""}><SlBookOpen /></a>
      <a href="#service" onClick={()=>setactiveNav("#service")} className={activeNav==="#service"? "active":""}><RiServiceLine /></a>
      <a href="#contact" onClick={()=>setactiveNav("#contact")} className={activeNav==="#contact"? "active": ""}><IoMdContacts /></a>
    </nav>
  )
}

export default Nav