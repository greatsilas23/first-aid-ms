//stateless functional component

import React from 'react'
import Username from './res/Username.jpg'
import Age from './res/Age.jpg'
const FirstAidComponent = () => {

    return(
        <div style={{width: '50vw', backgroundColor: 'white', margin: 'auto', borderRadius: '10px', padding: '10px'}}>
            <h2 style={{color: 'yellow'}}>Register</h2>
            <form method="POST" action="/form-registration">
                <center>
                    <img src={Username} style={{width: '5vw', height: '5vh'}} alt="username"/><br/>
                    <input style={{width: '35vw', height: '5vh', borderRadius: '10px'}} id="userName" type="text" placeholder="user001"/><br/>
                    <img src={Age} style={{width: '5vw', height: '5vh'}} alt="password"/><br/>
                    <input style={{width: '35vw', height: '5vh', borderRadius: '10px'}} id="userAge" type="date" /><br/><br />
                    <input style={{borderRadius: '10px', backgroundColor: 'yellow', color: 'white', border: 'none', width: '15vw', height: '5vh'}} type="submit" value="Register"/>
                    <input style={{borderRadius: '10px', backgroundColor: 'white', color: 'yellow', border: 'none', width: '15vw', height: '5vh'}} type="reset" value="Clear"/><br/>

                </center>
            </form>
        </div>
    )
}
export default FirstAidComponent