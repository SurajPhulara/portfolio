import React from 'react'
import "./Home.css"
import { man } from '../../assets'
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className='home'>
      <div className="hero_section">
        <div className="flex flex-col justify-between mt-16 h-fit gap-8 text-2xl w-2/5">
          <div className="intro w-max"> Hello, my name is <span className="name text-2xl w-fit"> Suraj Phulara </span></div>
          <div className="profession text-7xl font-bold w-max">I'm a
            <Typewriter
              options={{
                strings: [`Developer`, 'Designer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="description text-lg w-11/12">
          I'm a Full-Stack Web Developer and UX/UI Designer who loves bringing digital ideas to life. I specialize in creating stunning websites and eye-catching mockups that captivate and engage users.
          </div>
          <div className="flex gap-8">
          <a href="#" className="btn yellowbg text-xl hover:shadow-[0_4px_0px_rgb(0,0,0,.2)]"> Download CV </a>
          <a href="#" className="btn text-xl bg-white text-blue-600 font-semibold hover:shadow-[0_4px_0px_rgb(0,0,0,.2)]"> Hire Me Now </a>
          </div>
        </div>
        <div className="image_container">
          <img src={man} alt="" className="image1" />
        </div>
      </div>
    </div>
  )
}

export default Home
