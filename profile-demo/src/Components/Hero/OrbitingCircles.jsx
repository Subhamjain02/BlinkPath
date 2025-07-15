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

const CSSSVG = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#1572B6"/>
  </svg>
);

const TailwindSVG = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 54 33">
    <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="#38BDF8"/>
  </svg>
);

const JavaScriptSVG = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 630 630">
    <rect width="630" height="630" fill="#f7df1e" />
    <path d="M423 492c8 13 18 24 36 24 15 0 25-7 25-18 0-13-10-18-28-26l-10-4c-29-12-48-28-48-60 0-30 23-53 59-53 26 0 45 9 58 33l-32 20c-7-13-15-18-26-18s-19 7-19 18c0 13 8 18 26 26l10 4c34 14 53 30 53 63 0 36-28 56-66 56-37 0-61-18-72-41zm-137 4c7 12 13 22 28 22s23-6 23-30V290h43v199c0 45-26 65-64 65-35 0-55-18-65-40z" fill="#000" />
  </svg>
);

const ViteSVG = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Black circle background */}
    <circle cx="50" cy="50" r="50" fill="#000" />
    {/* White triangle (apex at top center) */}
    <path
      d="M50 10 L15 70 H85 Z"
      fill="#FFF"
    />
  </svg>
);



const GitHubSVG = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#000000">
    <path fillRule="evenodd" clipRule="evenodd" fill="#181717"
      d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577 
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 
      1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.931 
      0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013.003-.404c1.02.005 
      2.045.138 3.003.404 2.292-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.911 1.236 
      3.221 0 4.609-2.803 5.628-5.475 5.921.43.37.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.293 
      0 .319.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
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
    { Component: HTMLSVG, color: "#E44D26", scale: 1.1 },
    { Component: CSSSVG,  color: "#1572B6" },
    { Component: JavaScriptSVG, color: "#f7df1e", scale: 0.95 }
  ];
  
  const outerLogos = [
    { Component: ReactSVG, color: "#61DAFB" },
    { Component: ViteSVG, color: "#646CFF" },
    { Component: GitHubSVG, color: "#181717" },
    { Component: TailwindSVG, color: "#38BDF8" }
  ];

  return (
    <OrbitContainer $size={outerRadius * 2 + circleSize}>
      <Center $size={centerSize} $show={showCenter}>
        <ReactSVG size={centerSize} />
      </Center>
      
      <InnerOrbit $radius={innerRadius} $duration={duration} $reverse>
        {innerLogos.map(({ Component, color, scale = 1 }, i) => (
          <OrbitCircle
            key={`inner-${i}`}
            $size={circleSize}
            $angle={i * (360 / innerLogos.length)}
            $radius={innerRadius}
            $color={color}
          >
            <UprightContainer 
              $duration={duration}
              $reverse
              $color={color}
            >
              <Component size={circleSize * scale} />
            </UprightContainer>
          </OrbitCircle>
        ))}
      </InnerOrbit>

      <OuterOrbit $radius={outerRadius} $duration={duration}>
        {outerLogos.map(({ Component, color, scale = 1 }, i) => (
          <OrbitCircle
            key={`outer-${i}`}
            $size={circleSize}
            $angle={i * (360 / outerLogos.length)}
            $radius={outerRadius}
            $color={color}
          >
            <UprightContainer2 
              $duration={duration}
              $reverse
              $color={color}
            >
              <Component size={circleSize * scale} />
            </UprightContainer2>
          </OrbitCircle>
        ))}
      </OuterOrbit>
    </OrbitContainer>
  );
};

// Animations
const orbit = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;
const reverseOrbit = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
`;
const counterSpin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;
const counterSpin2 = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
`;

// Styled Components
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
  border: 1.5px dashed rgba(0, 0, 0, 0.5);
`;

const InnerOrbit = styled(OrbitBase)`
  border: 1.5px dashed rgba(0, 0, 0, 0.5);
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
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  transform: 
    rotate(${props => props.$angle}deg)
    translateX(${props => props.$radius}px)
    rotate(-${props => props.$angle}deg);

  transition: transform 0.3s ease, z-index 0.3s ease;

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

  animation: ${counterSpin} 
             ${p => p.$duration}s 
             linear 
             infinite;

  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 4px rgba(0,0,0,0.2));
    transition: all 0.3s ease;
  }

  &:hover svg {
    filter: drop-shadow(0 0 12px ${p => p.$color});
    transform: scale(1.1);
  }
    `;

const UprightContainer2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${counterSpin2} 
             ${p => p.$duration}s 
             linear 
             infinite;

  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 4px rgba(0,0,0,0.2));
    transition: all 0.3s ease;
  }

  &:hover svg {
    filter: drop-shadow(0 0 12px ${p => p.$color});
    transform: scale(1.1);
  }
`;

export default OrbitingCircles;
