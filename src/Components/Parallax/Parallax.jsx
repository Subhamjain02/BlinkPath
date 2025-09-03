import React from 'react'
import ParallaxBtn from './Buttons/ParallaxBtn'
import ParallaxBtn2 from './Buttons/ParallaxBtn2'

import styles from './Parallax.module.css'

function Parallax() {
  return (
    <div className={`flex flex-col items-center bg-[#F8481C] min-h-[70vh] w-[100vw] !pt-[100px]`}>
        <div className={`w-[90vw] bg-[#F8481C] relative`} id={styles.lineContainer}>
          <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <p className='text-[3em] w-[600px] leading-[1] text-white'>What happens next usually starts with a conversation.</p>
                    <p className='text-[3.5rem] font-[300]'>hello@blinkpath.com</p>
                </div>
                <div className='self-end'><ParallaxBtn2/></div>
          </div>
          <div>
          </div>
        </div>
    </div>
  )
}

export default Parallax
