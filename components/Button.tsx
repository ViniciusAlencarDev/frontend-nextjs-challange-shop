import React from 'react'
import styles from '../styles/Button.module.css'

import { FaCheck } from 'react-icons/fa'

export default function Button({ isAdded, callbackClick }: any) {

    return(
        <button className={
            !isAdded
            ? styles.container
            : styles.containerSelecte
            }
            onClick={callbackClick}>
                {isAdded && <><FaCheck /><span style={{ marginRight: 5 }}></span></> } Adicionar
        </button>
    );

}
