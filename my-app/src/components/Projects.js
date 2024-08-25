import React from 'react'
import { useState } from 'react'
import json from './ProjectData.json'
import './Projects.css'

function Projects() {
    const [onStart, setOnStart] = useState(true)
    const [data, setData] = useState([])

    if (onStart) {
        setData(json['projects'])
        setOnStart(false)
    }

    return (
        <div>
            <div className='projectHeader'>Projects</div>
            <ul className='projectTable'>
                {data.map((project) => (
                    <li className='projectItem' key={project.id}>
                        <div className='image'>
                            <img src={project.img} alt={project.name} />
                        </div>
                        <div className='body'>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                {project.name}
                            </a>
                            <p>{project.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Projects