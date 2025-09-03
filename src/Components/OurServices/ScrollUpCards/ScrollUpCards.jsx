import React from 'react';
import styles from './ScrollUpCards.module.css';

import Card1 from './animations/Card1';
import Card2 from './animations/Card2';
import Card3 from './animations/Card3';

export default function ScrollUpCards() {
  return (
    <div className="relative ">
      
      {/* spacer so first card comes in at 50vh */}
      {/* <div className="h-[-25vh]" /> */}

      {/* Card A */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-10">
        <div className={`${styles.card} flex justify-between bg-white items-center`}>
            <div className='flex flex-col justify-between w-[34vw] h-[100%]'>
                <div className='flex flex-col '>
                    <h3 className='text-[20px] font-[400]'>(01)</h3>
                    <h1 className='text-[70px] font-[400]'>SPRINTS</h1>
                </div>
                <p className='text-[25px] leading-[1.001] font-[300]'>Fast, focused engagements to explore, test, or move a critical piece forward—without getting bogged down. Tightly scoped, clearly defined, and built to create momentum. You’ll walk away with answers, direction, and something real to build on.</p>
            </div>
            <div className=''>
                <Card2/>
            </div>
        </div>
      </div>

      {/* spacer to release A and trigger B */}
      <div className="h-[50vh]" />

      {/* Card B */}
      <div className="sticky top-[100px] h-[calc(100vh-100px)] flex items-center justify-center z-20">
        <div className={`${styles.card} flex justify-between bg-[#F8481C] items-center`}>
            <div className='flex flex-col justify-between w-[34vw] h-[100%] text-white'>
                <div className='flex flex-col'>
                    <h3 className='text-[20px] font-[400]'>(02)</h3>
                    <h1 className='text-[70px] font-[400]'>Projects</h1>
                </div>
                <p className='text-[25px] leading-[1.001] font-[300]'>End-to-end design support for a product, brand, or web experience—with a defined scope and measurable outcomes. We lead from brief to build, aligning teams, shaping the vision, and driving toward a result you can launch with confidence.</p>
            </div>
            <div className=''>
                <Card1/>
            </div>
        </div>
      </div>

      {/* spacer to release B and trigger C */}
      <div className="h-[50vh]" />

      {/* Card C */}
      <div className="sticky top-[200px] h-[calc(100vh-200px)] flex items-center justify-center z-30">
        <div className={`${styles.card} flex justify-between bg-[#1E1C1B] items-center`}>
            <div className='flex flex-col justify-between w-[34vw] h-[100%] text-white'>
                <div className='flex flex-col '>
                    <h3 className='text-[20px] font-[400]'>(03)</h3>
                    <h1 className='text-[70px] font-[400]'>Partnerships</h1>
                </div>
                <p className='text-[25px] leading-[1.001] font-[300]'>For companies that need more than a vendor—they want a design partner. We embed with your team, stay close to the work, and evolve alongside the business. The result is consistency, speed, and strategic lift as you grow.</p>
            </div>
            <div className='mr-[500px]'>
                <Card3/>
            </div>
        </div>
      </div>

      {/* final spacer so you can scroll past the last card */}
      <div className="h-[50vh]" />

    </div>
  );
}
