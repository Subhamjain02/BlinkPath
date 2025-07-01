import React from 'react'
import styles from './Hero.module.css'
import Header from './Header'

import DecryptedText from './DecryptedText';

function Hero() {
  return (
    <div className={styles.hero}>
      <Header/>
      <p className={styles.heroText}>
        We’re a design studio for product and brand teams who mean business.
      </p>
      
    </div>
  )
}

export default Hero
