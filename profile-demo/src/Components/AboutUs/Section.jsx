import React from 'react'
import styles from "./AboutUs.module.css"


function Section(props) {
  return (
    <div className="flex w-fit gap-[13vw] h-[40vh] leading-[1] bg-[#e9e9e9]" 
          // id={styles.section}
         style={{
          //  height: `calc(100vh - ${props.topOffset})px`,
           position: 'sticky',
           top: `${props.topOffset}px`,
           zIndex: 10 + props.i
          }}>
      <h1 className='text-[2.5rem] text-[#F8481C] translate-y-[50px]' >({props.num})</h1>
      <div className='flex flex-col w-[49vw] gap-[5vh] self-center'>
        <h1 className='text-[3rem] font-[500] w-[25vw]'>{props.title}</h1>
        <p className='text-[2rem] font-light opacity-[0.7]'>{props.text}</p>
      </div>
    </div>
  )
}

export default Section
