import React from 'react'
import styles from './Hero.module.css'
import Header from './Header'

import DecryptedText from './DecryptedText';

function Hero() {
  return (
    <div className={styles.hero}>
      <Header/>
      {/* <p className={styles.heroText}>
        We’re a design studio for product and brand teams who mean business.
      </p> */}
      <DecryptedText text="We’re a design studio for product and brand teams who mean business." 
      speed={30}
      maxIterations = {18}
      sequential = {true}
      revealDirection = {`start`}
      useOriginalCharsOnly = {false}
      class = {styles.textt}
      />
      
    </div>
  )
}

export default Hero
