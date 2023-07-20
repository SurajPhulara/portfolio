import React from 'react'
import "./Home.css"
import { bg1, designerIcon, developerIcon, freelancerIcon, githubicon, linkedinicon, man } from '../../assets'
import Typewriter from 'typewriter-effect';
import Cards from '../../components/Cards/Cards';

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="hero_section flex justify-between min-h-fit w-screen h-screen text-white pl-20 pr-1 pt-16 pb-16 items-center">
        {/* <img src={bg1} className='hero-bg' alt="" /> */}
        <div className="hero_content flex flex-col h-fit gap-8 text-2xl w-2/4 w-3/5 w-1/2">
          <div className="intro w-max flex gap-4 items-center"> Hello, my name is <div className="name text-2xl w-fit"> Suraj Phulara </div></div>
          <div className="profession text-7xl font-bold w-max flex gap-5 w-fit">I'm a
            <Typewriter
              options={{
                strings: [`Developer`, 'Designer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="description w-full text-xl">
            I'm a Full-Stack Web Developer and UX/UI Designer who loves bringing digital ideas to life. I specialize in creating stunning websites and eye-catching mockups that captivate and engage users.
          </div>
          <div className="flex gap-8">
            <a href="#" className="btn yellowbg text-xl hover:shadow-[0_4px_0px_rgb(0,0,0,.2)] w-max "> Download CV </a>
            <a href="#" className="btn text-xl bg-white text-blue-600 font-semibold hover:shadow-[0_4px_0px_rgb(0,0,0,.2)] "> Hire Me Now </a>
          </div>
        </div>
        <div className="image_container h-fit">
          <img src={man} alt="" className="image1 " />
        </div>
      </div>
      <div id="about-me" className='flex justify-between h-fit'>
        <div className="left w-6/12 flex flex-col justify-center items-center gap-y-16 gap-x-8 flex-wrap ml-auto mr-auto">
          <Cards image={designerIcon} title={"UI & UX Designer"} text={"Crafting Engaging Web Experiences"}></Cards>
          <Cards image={developerIcon} title={"Web Developer"} text={"Transform Designs into Pixel Perfect Websites"}></Cards>
          <Cards image={freelancerIcon} title={"Freelancer "} text={"Designing creative websites"}></Cards>
        </div>
        <div className="right flex flex-col justify-center gap-6  w-2/4">
          <div className="text-base font-semibold text-[#e88c09]">ABOUT ME</div>
          <div className="text-2xl text-blue-600">I'm a Full-Stack Web Developer and UX/UI Designer</div>
          <div className="text-lg text-gray-700 w-11/12">With a passion for creating visually appealing and user-friendly digital experiences, I bring ideas to life through seamless web development and intuitive UX/UI design. My goal is to deliver high-quality solutions that not only meet clients' needs but also exceed their expectations. By combining technical expertise with a deep understanding of user-centered design principles, I strive to create captivating websites that engage users and leave a lasting impression. Let's collaborate and transform your ideas into stunning digital realities.</div>
          <div className="text-2xl text-blue-600">Suraj Phulara</div>
          <div className="socialmedia flex items-center gap-16 ml-[-5px]"> 
              <a href="https://www.linkedin.com/in/suraj-phulara-b63b23193/" className="linkedin flex items-center gap-4 text-2xl text-[#0078d4]"> <img src={linkedinicon} alt="linkedin" className='flex justify-start'/> <p className=' pt-2'>LinkedIn</p></a>
              <a href="https://github.com/SurajPhulara" className="github flex items-center gap-4 text-2xl"><img src={githubicon} alt="github"/> <p className=' pt-2'>Github</p></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
