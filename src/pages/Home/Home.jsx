import React from 'react'
import "./Home.css"
import { man } from '../../assets'
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className='home'>
      <div className="hero_section">
        <div className="flex flex-col justify-between mt-16 h-64 text-2xl w-5/12">
          <div className="intro w-fit"> Hello, my name is <span className="name"> Suraj Phulara </span></div>
          <div className="profession text-7xl font-bold w-fit">I'm a
            <Typewriter
              options={{
                strings: [`Developer`, 'Designer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="description text-lg">
          I'm a Full-Stack Web Developer. My expertise is to create and design Websites,Apps,Mockups and many more...
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
