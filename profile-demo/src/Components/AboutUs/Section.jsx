import React from 'react'
import styles from "./AboutUs.module.css"


function Section(props) {
  return (
    <div className='flex w-fit h-[40vh] gap-[13vw] leading-[1] relative' id={styles.section}>
      <h1 className='text-[2.5rem] text-[#F8481C] translate-y-[50px]' >({props.num})</h1>
      <div className='flex flex-col w-[49vw] gap-[5vh] self-center'>
        <h1 className='text-[3rem] font-[500] w-[25vw]'>{props.title}</h1>
        <p className='text-[2rem] font-light opacity-[0.7]'>{props.text}</p>
      </div>
    </div>
  )
}

export default Section
