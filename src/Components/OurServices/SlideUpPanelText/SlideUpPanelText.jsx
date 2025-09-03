import React from 'react'
import styles from './SlideUpPanelText.module.css'

import SectionText from '../../OurWork/SectionText.jsx'
import SlideUpNum from './SlideUpNum'


function SlideUpPanelText() {
    const text = "Teams are different. Needs shift. And not every engagement looks the same. That’s why we shape our approach around how you work—and what you’re trying to achieve. Then we help you move it forward."
    const title = "Our Approach"
    const num = "03"

  return (
    <div className={styles.container}>
      <div className={styles.textNumberContainer}>
        <SectionText text = {text} title = {title} color = {`text-black`} mar = {`27px`}/>
        <SlideUpNum className={styles.num} num = {num}/>
      </div>
    </div>
  )
}

export default SlideUpPanelText
