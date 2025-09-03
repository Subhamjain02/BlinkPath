import React from 'react';
import styles from './TempAbout.module.css';


export default function TempAbout() {
  return (
    <div className="relative ">
      
      {/* spacer so first card comes in at 50vh */}
      {/* <div className="h-[-25vh]" /> */}

      {/* Card A */}
        <div className="sticky top-[-200px] h-[calc(100vh+200px)] mt-[200px] flex items-center justify-center z-10">
            <div className="flex w-fit gap-[13vw] h-[40vh] leading-[1] bg-[#e9e9e9] border" >
                <h1 className='text-[2.5rem] text-[#F8481C] translate-y-[50px]' >(01)</h1>
                <div className='flex flex-col w-[49vw] gap-[5vh] self-center'>
                    <h1 className='text-[3rem] font-[500] w-[25vw]'>Embrace Complexity</h1>
                    <p className='text-[2rem] font-light opacity-[0.7]'>We navigate intricate design challenges with care, crafting solutions that are both innovative and adaptable to a rapidly evolving world.</p>
                </div>
            </div>
        </div>

      {/* spacer to release A and trigger B */}
      {/* <div className="h-[50vh]" /> */}

      {/* Card B */}
      <div className="sticky top-[310px] h-[calc(0vh)] flex items-center justify-center z-10">
        <div className="flex w-fit gap-[13vw] h-[40vh] leading-[1] bg-[#e9e9e9] border" >
                <h1 className='text-[2.5rem] text-[#F8481C] translate-y-[50px]' >(02)</h1>
                <div className='flex flex-col w-[49vw] gap-[5vh] self-center'>
                    <h1 className='text-[3rem] font-[500] w-[25vw]'>Embrace Complexity</h1>
                    <p className='text-[2rem] font-light opacity-[0.7]'>We navigate intricate design challenges with care, crafting solutions that are both innovative and adaptable to a rapidly evolving world.</p>
                </div>
            </div>
      </div>

      {/* spacer to release B and trigger C */}
      {/* <div className="h-[50vh]" /> */}

      {/* Card C */}
      <div className="sticky top-[420px] h-[calc(100vh-420px)] flex items-center justify-center z-10">
        <div className="flex w-fit gap-[13vw] h-[40vh] leading-[1] bg-[#e9e9e9] border" >
                <h1 className='text-[2.5rem] text-[#F8481C] translate-y-[50px]' >(03)</h1>
                <div className='flex flex-col w-[49vw] gap-[5vh] self-center'>
                    <h1 className='text-[3rem] font-[500] w-[25vw]'>Embrace Complexity</h1>
                    <p className='text-[2rem] font-light opacity-[0.7]'>We navigate intricate design challenges with care, crafting solutions that are both innovative and adaptable to a rapidly evolving world.</p>
                </div>
        </div>
      </div>

      {/* final spacer so you can scroll past the last card */}
      <div className="h-[50vh]" />

    </div>
  );
}
