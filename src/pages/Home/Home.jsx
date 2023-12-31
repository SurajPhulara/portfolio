import React from 'react'
import "./Home.css"
import { bg1, bootstrap, cicon, contactImg, cplusplus, css, designerIcon, developerIcon, emailicon, figma, freelancerIcon, githubicon, html, js, linkedinicon, man, mongodb, muicon, nodejs, reacticon, resume, serenestone, tailwind, uxicon } from '../../assets'
import Typewriter from 'typewriter-effect';
import Cards from '../../components/Cards/Cards';
import SkillCards from '../../components/SkillCards/SkillCards';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { data } from '../../data/data';
import ContactForm from '../../components/ContactForms/ContactForm';

const Home = () => {
  return (
    <div className='home' id='home'>


      <div className="hero_section flex justify-between min-h-fit w-screen h-screen text-white pl-20 pr-1 pt-16 pb-16 items-center">
        <div className="hero_content flex flex-col h-fit gap-8 text-2xl w-2/4 w-3/5 w-1/2">
          <div className="intro w-max flex gap-4 flex-wrap items-center"> <>Hello, my name is</> <div className="name text-2xl w-fit min-w-fit"> Suraj Phulara </div></div>
          <div className="profession text-7xl font-bold w-max flex flex-wrap gap-5 w-fit"><>I'm a</>
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
            <a href={resume} download="resume.pdf" className="btn yellowbg text-xl hover:shadow-[0_4px_0px_rgb(0,0,0,.2)] w-max "> Download CV </a>
            <a href="#" className="btn text-xl bg-white text-blue-600 font-semibold hover:shadow-[0_4px_0px_rgb(0,0,0,.2)] "> Hire Me Now </a>
          </div>
        </div>
        <div className="image_container h-fit">
          <img src={man} alt="" className="image1 " />
        </div>
      </div>


      {/* ABOUT ME SECTION */}
      <div id="about-me" className='flex justify-between h-fit'>
        <div className="left w-6/12 flex flex-col justify-center items-center gap-y-16 gap-x-8 flex-wrap ml-auto mr-auto">
          <Cards image={designerIcon} title={"UI & UX Designer"} text={"Crafting Engaging Web Experiences"}></Cards>
          <Cards image={developerIcon} title={"Web Developer"} text={"Transform Designs into Pixel Perfect Websites"}></Cards>
          <Cards image={freelancerIcon} title={"Freelancer "} text={"Designing and Developing creative websites"}></Cards>
        </div>
        <div className="right flex flex-col justify-center gap-6  w-2/4">
          <div className="text-xl font-semibold text-[#e88c09]">ABOUT ME</div>
          <div className="text-2xl text-blue-600">I'm a Full-Stack Web Developer and UX/UI Designer</div>
          <div className="text-xl text-gray-700 flex flex-col ">
            {/* <div> */}
              Hello there! I'm Suraj Phulara, a passionate UX/UI designer and web developer hailing from the scenic landscapes of Uttarakhand, India. 

            <br/>
              My journey began with a fascination for the digital world and a curiosity about how things work behind the screens which led me to pursue Computer Science where I honed my skills and fell in love with the art of coding and design. 

            <br/>
              I'm skilled in Coding, Web development and UX/UI design. I take great pride in my ability to blend technical skills with a deep understanding of user experience. 

            <br/>
              {/* I believe that at the heart of every great product is a deep understanding of the user experience.  */}
              I believe that the best digital experiences are those that are intuitive, engaging, and tailored to the user's needs.
              <br />
            <div className=' mt-1'>
              I'm open to Job opportunities so feel free to explore my portfolio or get in touch with me directly. Let's create something amazing together! 
            </div>

            {/* Thank you for taking the time to learn more about me. I look forward to the possibility of working together. */}

            {/* With a passion for creating visually appealing and user-friendly digital experiences, I bring ideas to life through seamless web development and intuitive UX/UI design. My goal is to deliver high-quality solutions that not only meet clients' needs but also exceed their expectations. By combining technical expertise with a deep understanding of user-centered design principles, I strive to create captivating websites that engage users and leave a lasting impression. Let's collaborate and transform your ideas into stunning digital realities. */}
          </div>
          <div className="text-2xl text-blue-600">Suraj Phulara</div>
          <div className="socialmedia flex items-center gap-16 ml-[-5px]">
            <a href="https://www.linkedin.com/in/suraj-phulara-b63b23193/" className="linkedin flex items-center gap-2 text-xl text-[#0078d4]"> <img src={linkedinicon} alt="linkedin" className='flex justify-start' /> <p className=' pt-2'>LinkedIn</p></a>
            <a href="https://github.com/SurajPhulara" className="github flex items-center gap-2 text-xl"><img src={githubicon} alt="github" /> <p className=' pt-2'>Github</p></a>
          </div>
        </div>
      </div>


      {/* SKILLS SECTION */}
      <div className="h-fit pl-[2vw] pt-[100px] pr-[2vw] text-center flex flex-col gap-8" id='skills'>
        <div className="text-xl font-semibold text-[#e88c09]">MY SKILLS</div>
        <div className="flex gap-8 justify-center flex-wrap items-center">
          {data.skills.map((skill, i) => {
            return <SkillCards key={i} image={skill.image} name={skill.name}></SkillCards>
          })
          }
        </div>
      </div>


      {/* PROJECTS SECTION */}
      <div className="portfolio h-fit pt-[100px] pr-[5vw] pl-[5vw] flex flex-col gap-6" id='projects'>
        <div className="heading flex flex-col gap-2">
          <div className="text-xl font-semibold text-[#e88c09] ">MY PORTFOLIO</div>
          <div className="text-2xl text-blue-600">Each project is a unique piece of development</div>
        </div>
        <div className="projects flex flex-col gap-12">
          {
            data.projects.map((item, i) => {
              return <ProjectCard key={i} project={item} ></ProjectCard>
            })
          }
        </div>
      </div>


      {/* CONTACT ME */}
      <div className=" contact-me h-fit pt-[100px] pb-[30px] pr-[5vw] pl-[5vw] flex flex-col gap-6 text-center" id='contact-me'>
        <div className="heading flex flex-col gap-2 ">
          <div className="text-xl font-semibold text-[#e88c09] ">GET IN TOUCH</div>
          <div className="text-2xl  text-blue-600">I'd love to hear from you! Whether you have a project in mind, have any feedback for me or just want to say hello, feel free to drop me a message.</div>
          {/* <div className="text-2xl text-blue-600">Don't hesitate to drop me a message.</div> */}
        </div>
        <div className="contact-body flex justify-between mt-8 text-xl gap-4 text-left">

          <div className=" w-[45%] flex flex-col gap-2">
            <p>Hey there! 👋 I'm Suraj Phulara, your friendly neighborhood developer, and design aficionado! </p>
            <p>I love hearing new ideas and working on exciting projects. If you have something cool in mind, drop me a message! Let's turn your vision into a digital masterpiece!</p>
            {/* left section  */}
            <div className="contact-links">

              <a target='_blank' href="mailto:surajphulara@gmail.com" className=' w-fit h-fit mt-4 flex items-center text-[#0078d4] text-[#0078d4]'><img src={emailicon} alt="" className=' m-2' /><div>surajphulara@gmail.com</div></a>
              <a target='_blank' href="https://www.linkedin.com/in/suraj-phulara-b63b23193/" className="linkedin flex items-center gap-2 text-xl text-[#0078d4]"> <img src={linkedinicon} alt="linkedin" className='flex justify-start ml-1' /> <div className=' pt-2'>linkedin.com/in/suraj-phulara-b63b23193</div></a>
              <a target='_blank' href="https://github.com/SurajPhulara" className=' w-fit h-fit flex items-center mt-1 text-[#0078d4]'><img src={githubicon} alt="" className='mr-1' /><div>github.com/SurajPhulara</div></a>
            </div>
            {/* <a href="" className=' flex items-center text-blue-700'><img src={githubicon} alt="" className='mr-2'/>surajphulara@gmail.com</a> */}
          </div>
          <ContactForm></ContactForm>

        </div>
      </div>
    </div>
  )
}

export default Home
