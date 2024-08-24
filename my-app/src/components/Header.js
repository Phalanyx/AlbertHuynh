import React from 'react'
import { useState } from 'react'
import './Header.css'
function Header() {
  const [scroll, setScroll] = useState(false)
  window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
      setScroll(true)
    } else {
      setScroll(false)
  }});
  return (
    <header className={scroll ? "activenav": ""}>
    <div className='logo'>
    <h1>My Portfolio</h1>
    </div>
    <nav className='nav'>
    <ul className='navList'> 
        <li className='navList'><a href="#home">Home</a></li> 
        <li className='navList'><a href="#aboutme">About Me</a></li>
        <li className='navList'> <a href="#projects">Projects</a></li>
        <li className='navList'><a href="#contact">Contact</a></li>
    </ul>
    </nav>
    </header>
  )
}

export default Header