import React from 'react'
import "./Cards.css"

const Cards = (props) => {
  return (
    <div className="card max-w-sm rounded-xl overflow-hidden shadow-2xl h-[300px] w-[250px] bg-white flex flex-col justify-center items-center gap-4 ">
      <img src={props.image} className=" w-20" alt="" />
      <p className=" text-blue-900 font-semibold text-xl">{props.title}</p>
      <p className="text-gray-500 text-center">{props.text}</p>
    </div>
  )
}

export default Cards
