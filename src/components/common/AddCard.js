import React from 'react'
import AddNewIcon from '../../entuasoAsset/icons/AddNew'

import styles from './styles/AddCard.module.scss'

const AddCard = ({ image, title }) => {

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                {
                    image &&
                    <img alt='backgorundImage' src={image} style={{ height: '100%', width: '100%' }} />
                }
                {
                    !image &&
                    <AddNewIcon />
                }
            </div>
            <div className={styles.button}>{title ? title : ''}</div>
        </div>
    )
}

export default AddCard
