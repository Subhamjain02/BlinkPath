import React from 'react'
import styles from "./OurServices.module.css"
import SectionText from '../OurWork/SectionText'
import OurWorkNumber from '../OurWork/OurWorkNumber'

import Card from "./Card/Card"
import CardCarousel from './CardCarousel'

function OurServices() {


  const text = "Whatever we take on, whether it’s a product, website, or brand, it’s never just for show. It’s designed to work hard, deliver real value, and never coast on aesthetics."
  const title = "Our Services"
  const num = "02"

  const cardNum = "01"
  const cardTitle = "AI UX"
  const cardText = "AI-driven experiences that help users work smarter, faster, and with confidence. Whether AI is the product or just powering part of it, what matters most is how it feels to use—and whether people come back to it."

  return (
    <div className={styles.container}>
      <div className={styles.textNumberContainer}>
        <SectionText text = {text} title = {title}/>
        <OurWorkNumber className={styles.num} num = {num}/>
      </div>

      <CardCarousel/>

      <div className="h-[100vh]"></div>
    </div>
  )
}

export default OurServices
