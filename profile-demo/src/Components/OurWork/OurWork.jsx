import React from 'react'
import styles from './OurWork.module.css'
import OurWorkText from './OurWorkText'
import OurWorkNumber from './OurWorkNumber'


import Card from './Card/Card'
import poster from './Card/assets/mrityu.webp'
import clip   from './Card/assets/Movie on 27-06-25 at 4.46 PM.mov'
import CardText from './Card/CardText'

function OurWork() {
  return (
    <div className={styles.container}>
        <div className={styles.textNumberContainer}>
            <OurWorkText/>
            <OurWorkNumber className = {styles.num}/>
        </div>
        <div className= {styles.cardsContainer}>
            <Card
            imageSrc={poster}
            videoSrc={clip}
            />
            <Card
            imageSrc={poster}
            videoSrc={clip}
            />
            <Card
            imageSrc={poster}
            videoSrc={clip}
            />
            <Card
            imageSrc={poster}
            videoSrc={clip}
            />
            <Card
            imageSrc={poster}
            videoSrc={clip}
            />
        </div>
    </div>
  )
}

export default OurWork
