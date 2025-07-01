import React from 'react'
import styles from './Hero.module.css'
import Header from './Header'

import OrbitingCircles from './OrbitingCircles'

function Hero() {
  return (
    <div className={styles.hero}>
      <Header/>
      <div className={styles.container}>
        <p className={styles.heroText}>
          We’re a design studio for <br/>product and brand teams<br/> who mean business.
        </p>
        <div className={styles.orbit}>
          <OrbitingCircles
          outerRadius={200}
          innerRadius={100}
          circleSize={60}
          centerSize={80}
          duration={20}
          showCenter={false}
                />
        </div>
      </div>
      
    </div>
  )
}

export default Hero
