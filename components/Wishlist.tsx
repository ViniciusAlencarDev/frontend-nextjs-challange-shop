import React from 'react'
import styles from '../styles/Wishlist.module.css'

import { FaRegHeart, FaHeart } from 'react-icons/fa'

export default function Wishlist({ isFavorite, callbackClick }: any) {

    return(
        <span className={
            !isFavorite
            ? styles.container
            : styles.containerSelected
            }
            onClick={callbackClick}>
                {!isFavorite ? <FaRegHeart /> : <FaHeart />}
        </span>
    );

}
