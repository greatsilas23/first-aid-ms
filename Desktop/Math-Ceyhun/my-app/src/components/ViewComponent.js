import React from "react"
import Styles from "./Styles.js"

function ViewComponent(props){
    const styles = Styles
    return(
        <div style={styles.view}>
            <div style={styles.profile}>{props.profile}</div>
            <div style={styles.chat}>{props.chat}</div>
            <div style={styles.send}>
                <form name="texter" action="/" method="post">
                    <input type="text" style={styles.text} name="text" id="text" placeholder="..." />
                    <input type="submit" style={styles.deliver} name="sender" id="sender" value="send" />
                </form>
            </div>
        </div>
    )
}

export default ViewComponent