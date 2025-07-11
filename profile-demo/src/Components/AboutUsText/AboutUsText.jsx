import React, { useState } from 'react'
import AboutUsBtn from './AboutUsBtn'
import styles from './AboutUsText.module.css'

import { Modal } from '../Modal/modal'

function AboutUsText() {

    const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
      
        <button className={`${styles.btn}`} onClick={() => setOpen(true)} >
            <AboutUsBtn />
        </button>

        <div>
            <p className={`text-[3.8rem] leading-[1] ${styles.text}`}>Startups. Scale-ups. New bets. Big shifts. We work with teams navigating what’s next—launching, evolving, rebuilding. No two challenges are the same, but most share the same ambition. Move with purpose and don’t waste time getting there. This is how we show up, every time. Where do we start?</p>
        </div>

        {open && (
        <Modal open={open} setOpen={setOpen}>
          {/* optional extra content you want inside */}
        </Modal>
        )}
    </div>
  )
}

export default AboutUsText
