import React from 'react'
import PortfolioStyles from './PortfolioStyles.js'

const PortfolioStats = () => {
    const styles = PortfolioStyles
    return(
        <div style={styles.stats}>
            <div style={styles.displayPicture}>
                <img style={styles.profile} src="profile.jpg" alt="myPhoto" align="left">
            </div>
            <div style={styles.userInfo}>
                <div class="colorPurple badgeStuff" style={styles.userInfoItem}><h3>Silas Nyamwange</h3></div><br>
                <div class="colorYellow badgeStuff"><h3>3 Courses</h3></div><br>
                <div class="colorBlue badgeStuff"><h3>5 Projects</h3></div><br>
            </div><br>
            <div class="userInformation leftMarginal flexify horiz centerify">
                <div class="colorGrey badgeStuff"><h3>3 Clients</h3></div><br>
                <div class="colorPink badgeStuff"><h3>4 Subsidiaries</h3></div><br>
                <div class="colorGreen badgeStuff"><h3>2 Years Experience</h3></div><br>
            </div>
        </div>
    )
}
