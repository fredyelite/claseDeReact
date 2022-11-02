/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'

const NavStyle = styled.nav`
a{
    padding: 10px;
    text-decoration: none;
    color: tomato;
}
`

function Nav () {
  return (
    <NavStyle>
        <a href="">link1</a>
        <a href="">link2</a>
        <a href="">link3</a>
        <a href="">link4</a>
    </NavStyle>
  )
}

export default Nav