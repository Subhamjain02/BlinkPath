import React from 'react'
import Section from './Section'

import styles from "./AboutUs.module.css"

function AboutUs() {

    const num = "01"
    const title = "Embrace Complexity"
    const text = "We navigate intricate design challenges with care, crafting solutions that are both innovative and adaptable to a rapidly evolving world."

  return (
    <div className='flex justify-center spce-between'>
        <div id = {styles.container} className='flex'>
          <li id = {styles.list}><span>About Us</span></li>
          <div className='flex flex-col'>
            <Section num = {num} title = {title} text = {text}/>
            <Section num = "02" title = {title} text = {text}/>
            <Section num = "03" title = {title} text = {text}/>
            <Section num = "04" title = {title} text = {text}/>
          </div>
        </div>
    </div>
  )
}

export default AboutUs
