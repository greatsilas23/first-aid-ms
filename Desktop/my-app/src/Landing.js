import React from 'react'
import Layout from './Layout.js'
const Landing = (props) => {
    const styles = Layout
    return(
        <div style={styles.landing}>
            <h1>FINDAPP </h1>
            <a href="#finder"><button id="findIt" style={styles.btn1}>File</button></a>
            <a href="#loser"><button id="loseIt" style={styles.btn1}>Find</button></a>
        </div>
    )
}

export default Landing