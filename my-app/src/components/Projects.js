import React from 'react'
import { useState, useMemo } from 'react'
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
            <div id='project' className='projectHeader'>Projects</div>
            <ul className='projectTable'>
                {data.map((project) => project.id === item ? (
                    <li className='projectItem' key={project.id}>
                        <div className='left' onClick={leftClick}> left</div>
                        <div className='imgBorder'>
                            <div className='image'>
                                <img src={project.img} alt={project.name} />
                            </div>
                        </div>
                        <div className='body'>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                {project.name}
                            </a>
                            <p>{project.description}</p>
                        </div>
                        <div className='right'onClick={rightClick}> right</div>
                    </li>
                ) : <></>)}
            </ul>
        </div>
    )
}

export default Projects