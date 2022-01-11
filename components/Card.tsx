import React from 'react'
import styles from '../styles/Card.module.css'

// import components
import Button from './Button'
import Wishlist from './Wishlist';

export default function Card({ id, image, description, beforePrice, price, amountOfInstallments, isAdded, isFavorite, callbackAdded, callbackFavorite }: any) {

    return(
        <div className={styles.container}>
            <Wishlist isFavorite={isFavorite} callbackClick={() => callbackFavorite(id)}  />

            <img className={styles.image} src={image} />
            <span className={styles.description}>{description}</span>
            <div className={styles.boxPrice}>
                {
                    beforePrice && !isNaN(beforePrice) && beforePrice > 0 &&
                    <span className={styles.beforePrice}>{beforePrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                }
                <span className={styles.price}>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                <span className={styles.installmentsPrice}>em até <span style={{ fontWeight: 'bold', color: 'black' }}>{amountOfInstallments}x de {(price / amountOfInstallments).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span> sem juros</span>
            </div>

            <Button isAdded={isAdded} callbackClick={() => callbackAdded(id)} />
        </div>
    );

}
