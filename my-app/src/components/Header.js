import React from 'react'
import './Header.css'
function Header() {

  window.addEventListener("scroll", function() {
  });
  return (
    <header className='activenav'>
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