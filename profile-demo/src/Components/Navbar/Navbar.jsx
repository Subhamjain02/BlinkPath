import React from 'react'
import NavbarButton from './NavbarButton'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavbarButton name = 'Work'/>
      <NavbarButton name = 'Services'/>
      <NavbarButton name = 'Approach'/>
      <NavbarButton name = 'About'/>
      <NavbarButton name = 'Contact'/>
    </div>
  )
}

export default Navbar
