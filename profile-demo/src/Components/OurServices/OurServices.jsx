import React from 'react'
import styles from "./OurServices.module.css"
import SectionText from '../OurWork/SectionText'
import OurWorkNumber from '../OurWork/OurWorkNumber'

import Card from "./Card/Card"
import CardCarousel from './CardCarousel'

import ScrollUpCards from './ScrollUpCards/ScrollUpCards'
import SlideUpNum from './SlideUpPanelText/SlideUpNum'

function OurServices() {


  const text = "Whatever we take on, whether it’s a product, website, or brand, it’s never just for show. It’s designed to work hard, deliver real value, and never coast on aesthetics."
  const title = "Our Services"
  const num = "02"

  const text2 = "Every engagement is different. Our approach isn’t—disciplined, intentional, and with a rhythm that keeps things moving."

  return (
    <div className={styles.container}>
      <div className={styles.textNumberContainer}>
        <SectionText text = {text} title = {title} className = "text-black"/>
        <OurWorkNumber className={styles.num} num = {num}/>
      </div>

      <CardCarousel/>

      <div className="bg-[#e9e9e9]">
        <ScrollUpCards/>
      </div>

      <div className={`${styles.textNumberContainer2} mt-[60px]`}>
        <p className={`${styles.text} w-[660px]`}>{text2}</p>
        <SlideUpNum className={styles.num} num = "03"/>
      </div>

      
    </div>
  )
}

export default OurServices
