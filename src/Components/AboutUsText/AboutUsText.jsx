import React, { useState } from 'react'
import AboutUsBtn from './AboutUsBtn'
import styles from './AboutUsText.module.css'

import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'

import { Modal } from '../Modal/modal'

function AboutUsText() {

    const [open, setOpen] = useState(false)
  return (
    <div className=''>
      <div className={styles.container}>
      
          <button className={`${styles.btn}`} onClick={() => setOpen(true)} >
              <AboutUsBtn />
          </button>
          <div>
              <p className={`text-[3.8rem] leading-[1] ${styles.text}`}>Startups. Scale-ups. New bets. Big shifts. We work with teams navigating what’s next—launching, evolving, rebuilding. No two challenges are the same, but most share the same ambition. Move with purpose and don’t waste time getting there. This is how we show up, every time. Where do we start?</p>
          </div>
          {open && (
          <Modal open={open} setOpen={setOpen}>
          </Modal>
          )}
      </div>
      <div className='h-[10vh]'></div>
      <div className='bg-[#F8481C]'>
        <div className=' rounded-b-[30px] overflow-hidden bg-[#23201f]'>
          <ScrollAnimation
            texts={['']}
            // velocity={velocity}
            velocityMapping = {`input: [0, 1], output: [0, 1]`}
            className="custom-scroll-text"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUsText
