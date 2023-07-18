import React from 'react'
import "./Navbar.css"
import { doc } from '../../assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <a href="#" className="navbar_left">
            <img src={doc} alt="" />
            <div className="">CV-Resume</div>
        </a>
        <div className="navbar_right">
            <a href="#" className="navbar_links">Home</a>
            <a href="#" className="navbar_links">About</a>
            <a href="#" className="navbar_links">Skills</a>
            <a href="#" className="navbar_links">Experiences</a>
            <a href="#" className="navbar_links">Contact</a>
            <a href="#" className="hire_btn"> Hire Me </a>
        </div>

    </div>
  )
}

export default Navbar
