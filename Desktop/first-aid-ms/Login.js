import React from 'react'
import Username from './res/Username.jpg'
import Password from './res/Password.jpg'
const LoginComponent = (props) => {
    return(
        <div style={props.loginComponent}>
            <h2 style={{color: 'yellow'}}>Login</h2>
            <form method="POST" action="/form-registration">
                <center>
                    <img src={Username} style={{width: '5vw', height: '5vh'}} alt="username"/><br/>
                    <input style={{width: '35vw', height: '5vh', borderRadius: '10px'}} id="userName" type="text" placeholder="user001"/><br/>
                    <img src={Password} style={{width: '5vw', height: '5vh'}} alt="password"/><br/>
                    <input style={{width: '35vw', height: '5vh', borderRadius: '10px'}} id="userPass" type="password" placeholder="******"/><br/><br />
                    <input style={{borderRadius: '10px', backgroundColor: 'yellow', color: 'white', border: 'none', width: '15vw', height: '5vh'}} type="submit" value="Login"/>
                    <input style={{borderRadius: '10px', backgroundColor: 'white', color: 'yellow', border: 'none', width: '15vw', height: '5vh'}} type="reset" value="Clear"/><br/>
                    <label style={{color: 'yellow', fontSize: '2.5vh'}}>If you do not have an account </label><a style={{color: 'grey', fontSize: '2.5vh'}}>sign-up</a>
                </center>
            </form>
        </div>
    )
}
export default LoginComponent