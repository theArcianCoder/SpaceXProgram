import '../styles/globals.css'
import Head from 'next/head'
import App from '../comps/App'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
    <title>SpaceX Programs</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <App>
      <Component {...pageProps} />
    </App>
    </>
  ) 
}

export default MyApp
