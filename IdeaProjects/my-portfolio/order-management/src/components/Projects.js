import React from 'react'
import styles from '../styles.js'
export default function Projects(props){
  return(
    <div style={styles.projects.card}>







      {props.projectsDescription.map((project) => {<div style={styles.project.card} onClick={props.handleProjects(project.description.content} ><img style={styles.project.icon} src={project.image} /><p>{project.description}</p></div>})}
    </div>
  )
}



