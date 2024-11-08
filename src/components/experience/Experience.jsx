import React from 'react'
import "./experience.css";
import { BsFillPatchCheckFill} from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend"><br></br>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <div className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </div>
            <div className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </div>
            <div className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </div>
            <div className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </div>
            <div className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </div>
            <div className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Firebase</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </div>
            <div className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Sass</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience