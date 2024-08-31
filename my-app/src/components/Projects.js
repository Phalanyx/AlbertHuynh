import React from 'react'
import { useState } from 'react'
import json from './ProjectData.json'
import './Projects.css'

function Projects() {
    const [onStart, setOnStart] = useState(true)
    const [data, setData] = useState([])
    const [item, setItem] = useState(0)

    if (onStart) {
        setData(json['projects'])
        setOnStart(false)
    }

    const leftClick = () => { 
        if (item === 0) {
            setItem(data.length - 1)
        } else {
            setItem(item - 1)
        }
    }
    
    const rightClick = () => {  
        if (item === data.length - 1) {
            setItem(0)
        } else {
            setItem(item + 1)
        }
    }


    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div id='project' className='projectHeader'>Projects</div>
            <ul className='projectTable'>
                {data.map((project) => project.id === item ? (
                    <li className='projectItem' key={project.id}>
                        <div className='left' onClick={leftClick}> &larr; </div>
                        <div className='imgBorder'>
                            <div className='image'>
                                {project.img.map((img) => <img src={img} alt={project.name} />)}
                            </div>
                        </div>
                        <div className='body'>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                {project.name} 
                            </a>
                            <p>{project.description}</p>
                            <a class="fa fa-github" href={project.github} target="_blank" rel="noopener noreferrer"> </a>

                        </div>
                        <div className='right'onClick={rightClick}> &rarr; </div>
                    </li>
                ) : <></>)}
            </ul>
            <div className='counter'> {data.map((project) => project.id === item ? (<li className='goodCircle'> </li>) : <li className='badCircle'></li>)} </div>
        </div>
    )
}

export default Projects