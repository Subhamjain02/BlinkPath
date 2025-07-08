import React from 'react'
import Section from './Section'
import styles from "./AboutUs.module.css"

function AboutUs() {
  const sections = [
    { num: "01", title: "Embrace Complexity", text: "We navigate intricate design challenges with care, crafting solutions that are both innovative and adaptable to a rapidly evolving world." },
    { num: "02", title: "Pursue Excellence", text: "We set high standards for our work, delivering exceptional quality in every detail while pushing the boundaries of what's possible." },
    { num: "03", title: "Foster Collaboration", text: "We believe great ideas emerge when diverse perspectives come together in an environment of trust and mutual respect." },
    { num: "04", title: "Drive Impact", text: "We focus on creating meaningful change that delivers tangible value to our clients and the communities they serve." }
  ]

  return (
    <div className='flex justify-center space-between'>
        <div id={styles.container} className='flex'>
            <li id={styles.list} className='relative'><span>About Us</span></li>
            <div className='flex flex-col'>
                {sections.map((section, i) => (
                <Section 
                    key={i}
                    num={section.num} 
                    title={section.title} 
                    text={section.text}
                    style={{
                        top: i === 0 ? '100px' : `${(i * 190) + 100}px`,
                        zIndex: 10 + i,
                        }}
                />
                ))}
            </div>
        </div>
        <div className='h-[100vh]'></div>
    </div>
  )
}

export default AboutUs