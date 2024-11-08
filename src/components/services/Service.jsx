import React from 'react'
import { BiCheck } from "react-icons/bi";
import "./service.css";
const Service = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
          <div className="service">
            <div className="service_head">
              <h3>Frontend Framework Customization</h3>
            </div>
            <ul className="service_list">
              <li><BiCheck className='service__list-icon' />
                <p>Customizing and extending frontend frameworks (e.g., Bootstrap) to match specific design requirements and branding.</p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p>Building reusable components, themes, and stylesheets for consistent design patterns.</p>
              </li>   
            </ul>
          </div>
          <div className="service">
            <div className="service_head">
              <h3>Web Development</h3>
            </div>
            <ul className="service_list">
              <li><BiCheck className='service__list-icon' />
                <p>Creating responsive and user-friendly websites using HTML, CSS, and JavaScript.</p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p>Integrating frontend frameworks like React to build interactive web applications.</p>
              </li>   
            </ul>
          </div>
          <div className="service">
            <div className="service_head">
              <h3>Responsive Web Design</h3>
            </div>
            <ul className="service_list">
              <li><BiCheck className='service__list-icon' />
                <p>Designing websites that adapt and look good on various devices and screen sizes (desktops, tablets, mobile phones).</p>
              </li>
              <li><BiCheck className='service__list-icon' />
                <p>Using CSS media queries and responsive design principles to create flexible layouts.</p>
              </li>   
            </ul>
          </div>
      </div>
    </section>
  )
}

export default Service
