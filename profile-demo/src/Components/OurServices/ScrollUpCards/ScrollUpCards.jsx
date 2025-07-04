import React from 'react';

export default function ScrollUpCards() {
  return (
    <div className="relative ">
      
      {/* spacer so first card comes in at 50vh */}
      {/* <div className="h-[-25vh]" /> */}

      {/* Card A */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-10">
        <div className="h-[70vh] w-[88vw] bg-white rounded-[50px] shadow-lg" />
      </div>

      {/* spacer to release A and trigger B */}
      <div className="h-[50vh]" />

      {/* Card B */}
      <div className="sticky top-[100px] h-[calc(100vh-100px)] flex items-center justify-center z-20">
        <div className="h-[70vh] w-[88vw] bg-orange-500 rounded-[50px] shadow-lg" />
      </div>

      {/* spacer to release B and trigger C */}
      <div className="h-[50vh]" />

      {/* Card C */}
      <div className="sticky top-[200px] h-[calc(100vh-200px)] flex items-center justify-center z-30">
        <div className="h-[70vh] w-[88vw] bg-teal-500 rounded-[50px] shadow-lg" />
      </div>

      {/* final spacer so you can scroll past the last card */}
      <div className="h-[50vh]" />

    </div>
  );
}
