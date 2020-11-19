import React from 'react'
import styles from './styles/Header.module.scss'

const Header = ({ left, leftStyle, center, centerStyle, right, rightStyle }) => {

    const defaultLeftStyle = leftStyle ? leftStyle : { display: 'flex', alignItems: 'center', background: 'red', padding: 5 }
    const defaultCenterStyle = centerStyle ? centerStyle : { display: 'flex', alignItems: 'center', background: 'blue', padding: 5 }
    const defaultRightStyle = rightStyle ? rightStyle : { display: 'flex', alignItems: 'center', background: 'green', padding: 5 }
    return (
        <div className={styles.header}>
            <div style={defaultLeftStyle}> go BAck{left}</div>
            <div style={defaultCenterStyle}> menu{center}</div>
            <div style={defaultRightStyle}> signout{right}</div>
        </div>
    )
}

export default Header
