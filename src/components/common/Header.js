import React from 'react'
import styles from './styles/Header.module.scss'

const Header = ({ left, leftStyle, center, centerStyle, right, rightStyle }) => {

    const defaultLeftStyle = leftStyle ? leftStyle : { display: 'flex', alignItems: 'center', padding: 5 }
    const defaultCenterStyle = centerStyle ? centerStyle : { display: 'flex', alignItems: 'center', padding: 5 }
    const defaultRightStyle = rightStyle ? rightStyle : { display: 'flex', alignItems: 'center', padding: 5 }
    return (
        <div className={styles.header}>
            <div style={defaultLeftStyle}> {left}</div>
            <div style={defaultCenterStyle}>{center}</div>
            <div style={defaultRightStyle}>{right}</div>
        </div>
    )
}

export default Header
