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
    const onClick = (target) => {
      if (target === "Home") {
        return () => {
          const element = document.getElementById("aboutme")
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
      if (target === "Me") {
        return () => {

        }
      }
      if (target === "Projects") {
        return () => {
          const element = document.getElementById("project")
          element.scrollIntoView({ behavior: "smooth"})
        }
      }
      if (target === "Contact") {
        return () => {
          const element = document.getElementById("contact")
          element.scrollIntoView({ behavior: "smooth" })
        }
    
  }}
  return (
    <header className={scroll ? "activenav": ""}>
    <div className='logo'>
    <h1>Albert Huynh</h1>
    </div>
    <nav className='nav'>
    <ul className='navList'> 
        <li className='navList'><a href="#home" onClick={onClick("Home")}>Home</a></li> 
        <li className='navList'><a href="#aboutme" onClick={onClick("Me")}>About Me</a></li>
        <li className='navList'> <a href="#projects" onClick={onClick("Projects")}>Projects</a></li>
        <li className='navList'><a href="#contact" onClick={onClick("Contact")}>Contact</a></li>
    </ul>
    </nav>
    </header>
  )




}

export default Header