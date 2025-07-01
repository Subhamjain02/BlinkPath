import React from 'react';
import styled, { keyframes } from 'styled-components';

const OrbitingCircles = ({ 
  outerRadius = 200, 
  innerRadius = 100, 
  circleSize = 60,
  centerSize = 80,
  duration = 20,
  showCenter = true
}) => {
  return (
    <OrbitContainer $size={outerRadius * 2 + circleSize}>
      <Center $size={centerSize} $show={showCenter}>
        <svg width={centerSize} height={centerSize} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#6366f1" />
        </svg>
      </Center>
      
      <InnerOrbit $radius={innerRadius} $duration={duration} $reverse>
        {[...Array(3)].map((_, i) => (
          <OrbitCircle
            key={`inner-${i}`}
            $size={circleSize}
            $angle={i * (360 / 3)}
            $radius={innerRadius}
          >
            <svg width={circleSize} height={circleSize} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#8b5cf6" />
            </svg>
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
            <svg width={circleSize} height={circleSize} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#ec4899" />
            </svg>
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

// Styled components
const OrbitContainer = styled.div`
  position: relative;
  width:  ${props => props.$size}px;
  height: ${props => props.$size}px;
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
    filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.7));
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
  border: 1px dashed rgba(0, 0, 0, 0.8);
`;

const InnerOrbit = styled(OrbitBase)`
  border: 1px dashed rgba(0, 0, 0, 0.8);
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

  transform: 
    rotate(${props => props.$angle}deg)
    translateX(${props => props.$radius}px)
    rotate(-${props => props.$angle}deg);

  svg {
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));
  }

  &:hover svg {
    transform: scale(1.1);
    filter: drop-shadow(0 0 8px currentColor);
  }
`;

export default OrbitingCircles;
