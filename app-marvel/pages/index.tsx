
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Titles from '../components/Titles'
import Head from '../components/Head'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import getCharacters from './api/CharactersApi'

import { Provider } from 'react-redux'
import configStore from '../data/store/storeConfig'

const store = configStore();

function Home() {
  
  const [dataCharacters, setState] = useState([] as any[])
  const [dataSearch, setSearch] = useState('')
   
  async function promises(): Promise<any> {
    
    const { data } = await getCharacters()
      .then(response => response.json());
          const dataCharacters = data.results;
      setState(dataCharacters);

    return dataCharacters
  }

  useEffect(() => {
    promises()
  }, [])

  const filterDataCharacters = dataCharacters
    .filter((list) => list.name.startsWith(dataSearch))

  function clearSearch() {
    setSearch('')
  }
    
  console.log("test:", dataCharacters)
  console.log(dataSearch)
  console.log("search:", filterDataCharacters)

  return ( 

    <Provider store={store}>
      <div className={styles.container}>
      
        <Head />

        <main className={styles.main}>
          
          <Titles />

          <div className={styles.searchGroup}>
              <input
                type={'text'}
                className={styles.inputSearch}
                value={dataSearch}
                onChange={((e) => setSearch(e.target.value))}
                placeholder={'Search ...'}
              />
              <button className={styles.buttonSearch} onClick={clearSearch}>Clear</button> 
            </div>        

          <ul>
          
            {filterDataCharacters.map((list) => 
              
              <div className={styles.grid} key={list.id}>
                <div className={styles.card}>
                  <h2 className={styles.Cardtitle}>{list.name}</h2>
                  
                  <img 
                    className={styles.image}
                    src={`${list.thumbnail.path}/portrait_xlarge.${list.thumbnail.extension}`} 
                    alt={list.name}
                  />
                                  
                  <Link href={`/characters/${list.id}`}><button className={styles.button}>Detalhes</button></Link>                                                              
                  
                </div>          
              </div>
            
            )}

          </ul>                       
          
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>      
        
      </div>
    </Provider>          
   
  )
}

export default Home
