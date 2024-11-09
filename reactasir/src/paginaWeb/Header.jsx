import React from 'react'
import style from './header.module.css'

function Header() {
  return (
    <header className={style.cabecera}>
        <h1>I.E.S CURA VALERA</h1>
        <img src="/LogoIESCura.png" width="150"/>

        
    </header>
  )
}

export default Header