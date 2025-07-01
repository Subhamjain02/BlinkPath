import React from 'react'
import styles from './OurWork.module.css'

function SectionText(props) {
  return (
    <div className={styles.textContainer}>
        <ul className={styles.listWrapper}>
            {/* <li className={styles.list}>Our Work</li> */}
            <li className={styles.list}>{props.title}</li>
        </ul>
        {/* <p className={styles.text}>Global teams trust us to take on complex challenges, push creative boundaries, and move fast when it matters most. We bring clarity, momentum, and a little heat to every project.</p> */}
        <p className={styles.text}>{props.text}</p>
    </div>
  )
}

export default SectionText
