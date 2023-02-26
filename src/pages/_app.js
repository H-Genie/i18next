import React from 'react'
import { appWithTranslation } from 'next-i18next'
import GlobalStyle from '../style/globalStyle'
import Header from 'components/Header'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)