import React from 'react'
export default function Title(props){

  return(



  <div style={{width: '100vw',height: '20vh', backgroundColor: '#fff', boxShadow: '2vw 2vw 2vw rgba(5,5,5,(0.5)', marginBottom: '3vh'}}> 
    <div style={{width: '100vw', height: '10vh', backgroundColor: '#00f'}}>

      {props.titleDescription.map(description => {<p>{description.content}</p>})}
    </div>
  <div>
  )
}





