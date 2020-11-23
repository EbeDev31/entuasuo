import React from 'react'
import styles from './styles/Header.module.scss'

const Header = ({ left, leftStyle, leftAction, center, centerStyle, centerAction, right, rightStyle, rightAction }) => {

    const defaultLeftStyle = leftStyle ? leftStyle : { display: 'flex', alignItems: 'center', padding: 5 }
    const defaultCenterStyle = centerStyle ? centerStyle : { display: 'flex', alignItems: 'center', padding: 5 }
    const defaultRightStyle = rightStyle ? rightStyle : { display: 'flex', alignItems: 'center', padding: 5 }
    return (
        <div className={styles.header}>
            <div style={defaultLeftStyle} onClick={leftAction}> {left} </div>
            <div style={defaultCenterStyle} onClick={centerAction}>{center} </div>
            <div style={defaultRightStyle} onClick={rightAction}>{right} </div>
        </div>
    )
}

export default Header
