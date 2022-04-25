import React from 'react'
import styles from '../styles.js'
export default function Qualifications(props){
  return(
    <div style={styles.qualifications.card>
      {props.qualificationsDescription.map((qualification) => { <div style={styles.qualification.card} onClick={props.handleQualification(qualification.description.content)}><img src={qualification.description.image} style={styles.qualification.icon} /><p>{qualification.description.content}</p></div> })}
    </div>
    )
}

