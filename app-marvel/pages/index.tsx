
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Titles from '../components/Titles'
import Head from '../components/Head'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import getCharacters from './api/CharactersApi'
import Loader from '../components/Loader'

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
          
            {filterDataCharacters? filterDataCharacters.map((list) => 
              
              <div className={styles.gridHome} key={list.id}>
                <div className={styles.cardHome}>
                  <h2 className={styles.Cardtitle}>{list.name}</h2>
                  
                  <img 
                    className={styles.image}
                    src={`${list.thumbnail.path}/portrait_xlarge.${list.thumbnail.extension}`} 
                    alt={list.name}
                  />
                                  
                  <Link href={`/characters/${list.id}`}><button className={styles.button}>Detalhes</button></Link>                                                              
                  
                </div>          
              </div>
            
            ): <Loader />}

          </ul>                       
          
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>      
        
      </div>        
   
  )
}

export default Home
