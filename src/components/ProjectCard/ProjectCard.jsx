import React from 'react'
import "./ProjectCard.css"
import { designIcon, githubicon, githubicon2, newtab } from '../../assets'

const ProjectCard = ({project}) => {
  return (
    <div className="project-cards rounded-xl overflow-hidden shadow-xl w-full h-[28rem] bg-white flex gap-8 justify-between p-6 overflow-hidden">
      <a href={project.link} target='_blank' className="project-image-container shadowv w-[48%] min-w-[48%] rounded-xl overflow-hidden" style={{boxShadow: "0 0 10px rgba(0,0,0,.15)"}}>
        <img src={project.image} alt="website visuals" className={(project.scroll)?"scroll":""} />
      </a>
      <div className="flex flex-col justify-center align-middle text-center gap-4">
        <h1 className=" text-2xl text-blue-600 font-bold">{project.name}</h1>
        <p className=" text-xl text-gray-600">{project.description}</p>
        <div className="technologies flex gap-4 justify-center mt-1 flex-wrap">
            {
                project.technologies.map((item, i)=>{
                    return(
                        <div key={i} className="pl-4 pr-4 pt-2 pb-1 text-xl rounded" style={{boxShadow: "0 0 10px rgba(0,0,0,.15)"}}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
        <div className="links flex gap-4 justify-center mt-4 ">
            {
                project.externalresources.map((item, i)=>{
                    return(
                        <a href={item.link} target="_blank" key={i} className=" flex gap-1 items-center pl-4 pr-4 pt-1 pb-1 text-xl rounded " >
                            <p className="text-xl ">{item.name}</p>
                            <img src={item.icon} alt="" className="h-7"/>
                        </a>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
