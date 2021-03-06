import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import configStore from '../data/store/storeConfig'

const store = configStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider> 
  </>
  )
}

export default MyApp
