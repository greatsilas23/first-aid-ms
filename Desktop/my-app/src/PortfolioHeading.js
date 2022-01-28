import React from 'react'
import PortfolioStyles from './PortfolioStyles.js'

const PortfolioHeading = () => {
    const styles = PortfolioStyles
    return(
        <div style={styles.heading}>
            <center>
                <h3>MY PORTFOLIO</h3>
                <hr>
            </center>
        </div>
    )
}

export default PortfolioHeading