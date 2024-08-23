import React from 'react'
import { useState } from 'react'
import json from './ProjectData.json'
function Projects() {
    const [onStart, setOnStart] = useState(true)
    const [data, setData] = useState([])
    if (onStart) {
        setData(json['projects'])
        console.log(data)
        setOnStart(false)
    }
  return (
    <div>
        <div>Projects</div>
        <ul>
            {data.map((project) => (
                <li key={project.id}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </li>
            ))}
        </ul>
    </div>

  )
}

export default Projects