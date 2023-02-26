import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Nav>
      <ul>
        <li><a href="/ko">한국어</a></li>
        <li><a href="/en">English</a></li>
        <li><a href="/ja">日本語</a></li>
        <li><a href="/zh-Hans">简体中文</a></li>
        <li><a href="/es">Español</a></li>
      </ul>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;

  ul {
    display: flex;
  }


  li {
    width: 100px;
    text-align: center;
  }
`