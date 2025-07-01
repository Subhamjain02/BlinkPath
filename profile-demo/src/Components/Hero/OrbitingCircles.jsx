import React from 'react';
import styled, { keyframes } from 'styled-components';

// SVG Components
const ReactSVG = ({ size }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const HTMLSVG = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302l-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58h-2.102l.247 3.123 4.054 1.085 4.099-1.085.615-6.904h-7.126z" fill="#E44D26"/>
  </svg>
);

const TailwindSVG = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 54 33">
    <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="#38BDF8"/>
  </svg>
);

const CSSSVG = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#1572B6"/>
  </svg>
);

const OrbitingCircles = ({ 
  outerRadius = 200, 
  innerRadius = 100, 
  circleSize = 60,
  centerSize = 80,
  duration = 20,
  showCenter = true
}) => {
  const innerLogos = [
    { Component: HTMLSVG, color: "#E44D26", name: "HTML" },
    { Component: CSSSVG, color: "#1572B6", name: "CSS" },
    { Component: TailwindSVG, color: "#38BDF8", name: "Tailwind" }
  ];

  return (
    <OrbitContainer $size={outerRadius * 2 + circleSize}>
      <Center $size={centerSize} $show={showCenter}>
        <ReactSVG size={centerSize} />
      </Center>
      
      <InnerOrbit $radius={innerRadius} $duration={duration} $reverse>
        {innerLogos.map(({ Component, color }, i) => (
          <OrbitCircle
            key={`inner-${i}`}
            $size={circleSize}
            $angle={i * (360 / innerLogos.length)}
            $radius={innerRadius}
            
          >
            <UprightContainer 
              $duration={duration}        /* same duration */
              $reverse                   /* counter‑rotate */
              $color={color}
            >
              <Component size={circleSize} />
            </UprightContainer>
          </OrbitCircle>
        ))}
      </InnerOrbit>
      
      <OuterOrbit $radius={outerRadius} $duration={duration}>
        {[...Array(4)].map((_, i) => (
          <OrbitCircle
            key={`outer-${i}`}
            $size={circleSize}
            $angle={i * (360 / 4)}
            $radius={outerRadius}
          >
            <UprightContainer 
              $duration={duration} 
              $reverse 
              $color="#61DAFB"
            >
              <ReactSVG size={circleSize} />
            </UprightContainer>
          </OrbitCircle>
        ))}
      </OuterOrbit>
    </OrbitContainer>
  );
};

// Parent orbit animations
const orbit = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;
const reverseOrbit = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
`;

// Counter‑rotation animation (for UprightContainer)
const counterSpin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

// Styled components
const OrbitContainer = styled.div`
  position: relative;
  width:  ${p => p.$size}px;
  height: ${p => p.$size}px;
  margin: 0 auto;
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width:  ${props => props.$size}px;
  height: ${props => props.$size}px;
  z-index: 10;
  display:  ${props => (props.$show ? 'block' : 'none')};
  transition: all 0.3s ease;
  
  svg {
    filter: drop-shadow(0 0 8px rgba(97, 218, 251, 0.7));
    transition: all 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.15);
    filter: drop-shadow(0 0 12px #61dafb);
  }
`;

const OrbitBase = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width:       ${props => props.$radius * 2}px;
  height:      ${props => props.$radius * 2}px;
  margin-top:  -${props => props.$radius}px;
  margin-left: -${props => props.$radius}px;
  border-radius: 50%;
  animation: ${props => (props.$reverse ? reverseOrbit : orbit)} 
             ${props => props.$duration}s linear infinite;
`;

const OuterOrbit = styled(OrbitBase)`
  border: 1px dashed rgba(0, 0, 0, 0.5);
`;

const InnerOrbit = styled(OrbitBase)`
  border: 1px dashed rgba(0, 0, 0, 0.5);
`;

const OrbitCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width:  ${props => props.$size}px;
  height: ${props => props.$size}px;
  margin-top:  -${props => props.$size / 2}px;
  margin-left: -${props => props.$size / 2}px;
  transform-origin: center center;
  cursor: pointer;
  transition: transform 0.3s ease, z-index 0.3s ease;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  transform: 
    rotate(${props => props.$angle}deg)
    translateX(${props => props.$radius}px)
    rotate(-${props => props.$angle}deg);

  &:hover {
    z-index: 20;
    transform: 
      rotate(${props => props.$angle}deg)
      translateX(${props => props.$radius}px)
      rotate(-${props => props.$angle}deg)
      scale(1.15);
    
    div {
      svg {
        filter: drop-shadow(0 0 12px ${props => props.$color});
      }
    }
  }
`;

const UprightContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* counter-rotate to cancel parent spin */
  animation: ${counterSpin} 
             ${p => p.$duration}s 
             linear 
             infinite;

  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 4px rgba(0,0,0,0.2));
    transition: all 0.3s ease;
    /* you can also use p.$color here for hover if you like */
  }

  &:hover svg {
    filter: drop-shadow(0 0 12px ${p => p.$color});
    transform: scale(1.1);
  }
`;

export default OrbitingCircles;