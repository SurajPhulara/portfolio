import React from 'react'
import "./Cards.css"

const Cards = (props) => {
  return (
    <div className="card max-w-sm rounded-xl overflow-hidden shadow-2xl w-64 h-[19rem] bg-white flex flex-col justify-center items-center gap-4 ">
      <img src={props.image} className=" w-20" alt="" />
      <p className=" text-blue-600 font-semibold text-xl">{props.title}</p>
      <p className="text-gray-500 text-center text-base">{props.text}</p>
    </div>
  )
}

export default Cards
