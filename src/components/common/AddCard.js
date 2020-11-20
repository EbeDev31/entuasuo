import React from 'react'
import AddNewIcon from '../../entuasoAsset/icons/AddNew'

import styles from './styles/AddCard.module.scss'

const AddCard = ({ image, buttonTitle }) => {

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                {
                    image &&
                    <img alt='backgorundImage' src={image} />
                }
                {
                    !image &&
                    <AddNewIcon />
                }
            </div>
            <div className={styles.button}>Add something {buttonTitle}</div>
        </div>
    )
}

export default AddCard
