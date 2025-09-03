import React from 'react'
import styles from './Hero.module.css'
import HeaderLogo from './HeaderLogo'
import EmailButton from './EmailButton'


function Header() {
  return (
    <div className={styles.header}>
      <HeaderLogo/>
      <EmailButton/>
    </div>
  )
}

export default Header
