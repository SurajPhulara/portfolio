import React from 'react'

const SkillCards = (props) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden  w-24 flex flex-col justify-center items-center gap-1 ">
        <img src={props.image} alt={props.name} className="h-20"/>
        <h3>{props.name}</h3>
    </div>
  )
}

export default SkillCards
