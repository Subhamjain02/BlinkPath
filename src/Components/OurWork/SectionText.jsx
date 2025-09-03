import React from 'react'
import styles from './OurWork.module.css'

function SectionText({text, title, color, mar = '70px'}) {
  return (
    <div className={styles.textContainer}>
        <ul className={styles.listWrapper}>
            {/* <li className={styles.list}>Our Work</li> */}
            <li className={styles.list} style={{marginTop: mar}}>{title}</li>
        </ul>
        {/* <p className={styles.text}>Global teams trust us to take on complex challenges, push creative boundaries, and move fast when it matters most. We bring clarity, momentum, and a little heat to every project.</p> */}
        <p className={`${styles.text} ${color}`}>{text}</p>
    </div>
  )
}

export default SectionText
