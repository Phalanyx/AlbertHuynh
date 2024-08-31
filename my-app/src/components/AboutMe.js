import React from 'react'
import './AboutMe.css'
function AboutMe() {
  return (
    <div id='aboutme' className='aboutme'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <div className='intro'> Hi, my name is </div>
        <div className='name'>Albert Huynh</div>
        <div className='body'> I am a Second year Computer Science student @ UTSC with a strong passion for software development</div>
        <div className='buttons'>
          <a href='https://drive.google.com/file/d/1RE-u2cM32f1bnFmry80V8pHlp0tCz55F/view?usp=sharing'>Resume</a>
          <a class="fa fa-linkedin-square" style={{"font-size": '30px'}} href='https://www.linkedin.com/in/albert-huynh-191099271/'> </a>
        </div>
    </div>
  )
}

export default AboutMe