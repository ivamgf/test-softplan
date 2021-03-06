import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Head from '../../components/Head'
import Footer from '../../components/Footer'

export default function Characters() {

    const [dataCharacter, setState] = useState([] as any[])
    const [dataSeries, setSeries] = useState([] as any[])

    const router = useRouter()
    const slug = router.query.slug

    const url = "http://gateway.marvel.com";
    const publicKey = "a01bf70b954b50f6f78e350e9673348d";
    const hash = "f8478649ac4855dff978e3a46461a14d";
    const endpoint = "/v1/public/characters";

    async function getCharacterId() {        
        return await fetch(`${url}${endpoint}/${slug}?ts=1&apikey=${publicKey}&hash=${hash}`)
    }

    async function getCharacterSeries() {        
        return await fetch(`${url}${endpoint}/${slug}/series?ts=1&apikey=${publicKey}&hash=${hash}`)
    }
   
    async function promisesData() {
        
        const { data } = await getCharacterId()
        .then(response => response.json());
            const dataCharacter = data.results;
        setState(dataCharacter);

        return dataCharacter
    }

    async function promisesSeries() {
        const { data } = await getCharacterSeries()
        .then(response => response.json());
            const dataSeries = data.results;
        setSeries(dataSeries);

        return dataSeries
    }

    useEffect(() => {
        promisesData(),
        promisesSeries()
    }, [])
   
    return (
        <div className={styles.container}>
            
            <Head />       

            <main className={styles.main}>
                <ul>
                    <h1 className={styles.title}>Marvel Character</h1>
                    {dataCharacter.map((list) => 
                        
                        <div className={styles.grid} key={list.id}>
                            <div className={styles.card}>
                                <h2 className={styles.Cardtitle}>{list.name}</h2>
                                
                                <img 
                                className={styles.image}
                                src={`${list.thumbnail.path}/portrait_xlarge.${list.thumbnail.extension}`} 
                                alt={list.name}
                                />
                                                
                                <Link href={`/editCharacter/${list.id}`}><button className={styles.button}>To Edit</button></Link>                                                              
                                
                                <p className={styles.description}>{list.description}</p>
                               
                            </div>          
                        </div>                    
                    )}

                    <h2 className={styles.title}>Series</h2>

                    {dataSeries.map((listSeries) => 
                            <div className={styles.grid} key={listSeries.id}>
                            <div className={styles.card}>
                                <h2 className={styles.Cardtitle}>{listSeries.title}</h2>
                                
                                <img 
                                className={styles.image}
                                src={`${listSeries.thumbnail.path}/portrait_xlarge.${listSeries.thumbnail.extension}`} 
                                alt={listSeries.title}
                                />
                                                              
                            </div>          
                        </div>
                    
                    )}
                </ul> 
                <Link href={`/`}><button className={styles.button}>Voltar</button></Link>
            </main>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}