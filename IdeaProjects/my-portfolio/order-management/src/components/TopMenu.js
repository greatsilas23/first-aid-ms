import React from 'react'



import styles from '../styles.js'

export default function TopMenu(props){
  return(
    <div styles={styles.topMenu.card} onClick={props.handleTopMenu}>














      {props.topMenuDescription.map((description) => { <div style={styles.card}   onClick={props.handleClick(description.content)} ><img src={description.image} style={styles.icon}/><p>{description.content}</p></div>})} 
   </div>

