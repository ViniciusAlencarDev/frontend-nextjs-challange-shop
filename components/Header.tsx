import React, { useContext } from 'react'
import styles from '../styles/Header.module.css'

// import config
import { nameSystem } from '../config/config.json'

// import context
import Context from '../contexts/myContext'

import { FaCheck, FaHeart } from 'react-icons/fa'

export default function Header() {

    const myContext = useContext(Context)
    return(
        <div className={styles.container}>
            <div className={styles.boxHeader}>
                <span className={styles.title}>{nameSystem}</span>
            </div>
            <div className={styles.boxHeader}>
                <span><FaCheck /> {myContext?.products.filter((item: { isAdded: any }) => item.isAdded).length}</span>
                <span><FaHeart /> {myContext?.products.filter((item: { isFavorite: any }) => item.isFavorite).length}</span>
            </div>
        </div>
    );

}
