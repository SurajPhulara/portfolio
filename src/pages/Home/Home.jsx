import React from 'react'
import "./Home.css"
import { designerIcon, developerIcon, freelancerIcon, man } from '../../assets'
import Typewriter from 'typewriter-effect';
import Cards from '../../components/Cards/Cards';

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="hero_section flex justify-between ">
        <div className="flex flex-col justify-between mt-14 h-fit gap-8 text-2xl w-2/5">
          <div className="intro w-max"> Hello, my name is <span className="name text-2xl w-fit"> Suraj Phulara </span></div>
          <div className="profession text-7xl font-bold w-max flex gap-5">I'm a
            <Typewriter
              options={{
                strings: [`Developer`, 'Designer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="description text-lg w-full">
            I'm a Full-Stack Web Developer and UX/UI Designer who loves bringing digital ideas to life. I specialize in creating stunning websites and eye-catching mockups that captivate and engage users.
          </div>
          <div className="flex gap-8">
            <a href="#" className="btn yellowbg text-xl hover:shadow-[0_4px_0px_rgb(0,0,0,.2)] w-max "> Download CV </a>
            <a href="#" className="btn text-xl bg-white text-blue-600 font-semibold hover:shadow-[0_4px_0px_rgb(0,0,0,.2)] "> Hire Me Now </a>
          </div>
        </div>
        <div className="image_container">
          <img src={man} alt="" className="image1" />
        </div>
      </div>
      <div id="about-me" className='flex justify-between'>
        <div className="left flex flex-col gap-y-8 flex-wrap h-screen w-6/12 items-center justify-center ">
          <Cards image={designerIcon} title={"UI & UX Designer"} text={"Crafting Engaging Web Experiences"}></Cards>
          <Cards image={developerIcon} title={"Web Developer"} text={"Transform Designs into Pixel Perfect Websites"}></Cards>
          <Cards image={freelancerIcon} title={"Freelancer "} text={"Designing creative websites"}></Cards>
        </div>
        <div className="right flex flex-col justify-center  w-2/4">
          <div className="text-base font-semibold text-[#e88c09]">ABOUT ME</div>
          <div className="text-2xl text-blue-900">I'm a Full-Stack Web Developer and UX/UI Designer</div>
          <div className="text-lg text-gray-700 w-11/12">With a passion for creating visually appealing and user-friendly digital experiences, I bring ideas to life through seamless web development and intuitive UX/UI design. My goal is to deliver high-quality solutions that not only meet clients' needs but also exceed their expectations. By combining technical expertise with a deep understanding of user-centered design principles, I strive to create captivating websites that engage users and leave a lasting impression. Let's collaborate and transform your ideas into stunning digital realities.</div>
          <div className="text-2xl text-blue-900">Suraj Phulara</div>
        </div>
      </div>
    </div>
  )
}

export default Home
