import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from '../../components/Head'
import Footer from '../../components/Footer'
import styles from '../../styles/Home.module.css'
import { connect } from 'react-redux'

function editCharacter(props: { name: any, description: any }) {
    
    const [dataCharacter, setState] = useState([] as any[])
    const [dataSeries, setSeries] = useState([] as any[])
    const [name, setName] = useState([] as any[]);
    const [description, setDesc] = useState([] as any[]);
    
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
   
    function handleChangeName(event: any) {
        setName(event.target.value);
        props.name = name
    }

    function handleChangeDesc(event: any) {
        setDesc(event.target.value);
    }

    function handleSubmit(event: any) {
        event.preventDefault();        
        console.log('name:', name);
    }
              
    return (
        
            <div className={styles.container}>

                <Head />     
                
                <main className={styles.main}>
                    <ul>
                        <h1 className={styles.title}>To Edit</h1>
                        {dataCharacter.map((list) => 
                            
                            <div className={styles.grid} key={list.id}>
                                <div className={styles.card}>
                                    <h2 className={styles.Cardtitle}>{list.name}</h2>
                                    <img 
                                    className={styles.image}
                                    src={`${list.thumbnail.path}/portrait_xlarge.${list.thumbnail.extension}`} 
                                    alt={list.name}
                                    /> 
                                    
                                    <form onSubmit={handleSubmit}>
                                        <label>Name</label>
                                        <input 
                                            className={styles.inputText} 
                                            type={'text'} 
                                            name={'nameCharacter'}
                                            defaultValue={list.name}                                            
                                            placeholder='Type it character Name...'
                                            onChange={handleChangeName}
                                        />

                                        <label>Decription</label>
                                        <textarea 
                                            className={styles.inputText} 
                                            name={'descriptionCharacter'}
                                            rows={8}
                                            defaultValue={list.description}
                                            placeholder='Type it character description...'
                                            onChange={handleChangeDesc}
                                        />
                                                                               
                                                            
                                        <button 
                                            className={styles.buttonSubmit}
                                            type={'submit'}
                                        >
                                            Submit
                                        </button><Link href={`/characters/${list.id}`}><button className={styles.buttonSubmit}>Voltar</button></Link>
                                    </form> 
                                </div>  
                                        
                            </div>
                            
                        )}
                        
                    </ul> 
                    
                </main>

                <footer className={styles.footer}>
                    <Footer />
                </footer>
                </div>
                    
    )
}

function mapStateToProps(state: any) {
    return {
        name: state.name,
        description: state.description
    }
}

export default connect(mapStateToProps) (editCharacter);
