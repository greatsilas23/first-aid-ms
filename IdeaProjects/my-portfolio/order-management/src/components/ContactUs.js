import React from 'react'
import styles from '../styles.js'
export default function ContactUs(props){
  return(
    <div style={styles.contacts.container} >





      {props.contactUsDescription.map((contact) => {<div style={styles.contacts.card} onClick={props.handleContactUs(contact.description.content)}><img src={contact.description.image  } style={styles.contacts.icon  }/><p>{contact.description.content}</p></div>})}
    </div>
  )
}

