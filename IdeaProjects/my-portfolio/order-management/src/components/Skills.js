import React from 'react'
import styles from '../styles.js'
export default function Skills(props){
  return(


    <div style={styles.skills.container}>
      {props.skillsDescription.map((skill) => {<div style={styles.skills.card} onClick={props.handleSkills(skill.description.content)}><img src={skill.description.image} style={styles.skills.icon} /><p>{skill.description.content}</p></div>})}
    </div>
  )
}

