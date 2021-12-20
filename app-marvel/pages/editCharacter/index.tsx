import React from 'react'
import Head from '../../components/Head'
import Footer from '../../components/Footer'
import styles from '../styles/Home.module.css'

export default function Characters() {
    return (
        <div className={styles.container}>

            <Head />
                
            <main className={styles.main}></main>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )    
}