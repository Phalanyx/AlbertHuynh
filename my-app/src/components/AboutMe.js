import React from 'react'
import './AboutMe.css'
function AboutMe() {
  return (
    <div id='aboutme' className='aboutme'>
      <div className='intro'> Hi, my name is </div>
        <div className='name'>Albert Huynh</div>
        <div className='body'> I am a Second year Computer Science student @ UTSC with a strong passion for software development</div>
        <div className='buttons'>
          <a href='#home'>Resume</a>
        </div>
    </div>
  )
}

export default AboutMe