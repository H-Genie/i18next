import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styled from 'styled-components'

const Main = () => {
  const { t } = useTranslation(['mypage'])

  return (
    <Container>
      <h3>{t('mypage')}</h3>
    </Container>
  )
}

export default Main

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'mypage',
      ])),
    },
  }
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`