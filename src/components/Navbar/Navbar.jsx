import React, { useState } from 'react'
import "./Navbar.css"
import { doc, menuIcon } from '../../assets'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <a href="#" className="navbar_left">
        <img src={doc} alt="" />
        <div className="">CV-Resume</div>
      </a>
      <div className="navbar_right">
        <a href="#" className="navbar_links" onClick={handleNavLinkClick}>Home</a>
        <a href="#about-me" className="navbar_links" onClick={handleNavLinkClick}>About</a>
        <a href="#" className="navbar_links" onClick={handleNavLinkClick}>Skills</a>
        <a href="#" className="navbar_links" onClick={handleNavLinkClick}>Projects</a>
        <a href="#" className="navbar_links" onClick={handleNavLinkClick}>Contact</a>
        <a href="#" className="hire_btn"> Hire Me </a>

        <div className="navbar_menu-toggle" onClick={handleMenuToggle}>
          <img src={menuIcon} alt="menuIcon" />
        </div>

      </div>
        {isMenuOpen && (
          <div className="navbar_dropdown ">
            <a href="#" className="navbar_links_menubar" onClick={handleNavLinkClick}>Home</a>
            <a href="#about-me" className="navbar_links_menubar" onClick={handleNavLinkClick}>About</a>
            <a href="#" className="navbar_links_menubar" onClick={handleNavLinkClick}>Skills</a>
            <a href="#" className="navbar_links_menubar" onClick={handleNavLinkClick}>Projects</a>
            <a href="#" className="navbar_links_menubar" onClick={handleNavLinkClick}>Contact</a>
          </div>
        )}

    </div>
  )
}

export default Navbar
