import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useContext, useEffect, useState } from 'react';

// import config
import { nameSystem, logoSysten } from '../config/config.json';

// import components
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'

// import context
import Context from '../contexts/myContext'

const Home: NextPage = () => {

  const myContext = useContext(Context)

  function handlerChangeAdded(id: any) {
    let productsTemp = myContext?.products;
    productsTemp[id].isAdded = !productsTemp[id].isAdded 

    myContext?.setProducts([...productsTemp])

    console.log(myContext?.products)
  }

  function handlerChangeFavorite(id: any) {
    let productsTemp = myContext?.products;
    productsTemp[id].isFavorite = !productsTemp[id].isFavorite 

    myContext?.setProducts([...productsTemp])

    console.log(myContext?.products)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | {nameSystem}</title>
        <meta name="description" content="Teste b8one" />
        <link rel="icon" href={logoSysten} type="image/png" />
      </Head>

      <Header />

      <main className={styles.main}>
        {
          myContext?.products && myContext.products.length > 0
          ?
          myContext?.products &&
          myContext.products.map((item: any, index: any) => (
            <Card 
              key={index}
              id={index}
              image={item.image}
              description={item.description}
              beforePrice={item.beforePrice}
              price={item.price}
              amountOfInstallments={item.amountOfInstallments}
              isAdded={item.isAdded}
              isFavorite={item.isFavorite}
              callbackAdded={(id: any) => handlerChangeAdded(id)}
              callbackFavorite={(id: any) => handlerChangeFavorite(id)} />
          ))
          :
          <span>Sem produtos cadastrados</span>
        }
      </main>

      <Footer />
      
    </div>
  )
}

export default Home
