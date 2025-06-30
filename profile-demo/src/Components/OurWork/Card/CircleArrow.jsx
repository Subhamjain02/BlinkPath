import React, { useState, useEffect } from 'react';

const CircleArrow = ({
  textDistance = 80,
  arrowShift = 12,
  circleColor = "#f44336", 
  textColor = "#FFFFFF",
  text = "Visit Site • Visit Site • Visit Site • ",
  textSize = 33.5,
  rotationSpeed = 0.5
}) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + rotationSpeed) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, [rotationSpeed]);

  // Adjust viewBox and drawing area to prevent clipping
  const svgSize = 400; // Logical pixel area
  const center = svgSize / 2;
  const radius = 73;

  // Arrow adjusted for new center
  const arrowPath = `
    M${center + 30 - arrowShift},${center} 
    L${center + 15 - arrowShift},${center + 10} 
    L${center + 15 - arrowShift},${center + 5} 
    L${center - arrowShift},${center + 5} 
    L${center - arrowShift},${center - 5} 
    L${center + 15 - arrowShift},${center - 5} 
    L${center + 15 - arrowShift},${center - 10} 
    Z
  `;

  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      style={{ display: 'block' }}
    >
      <defs>
        <mask id="circleMask">
          <rect width="100%" height="100%" fill="white" />
          <path d={arrowPath} fill="black" />
        </mask>
      </defs>

      {/* Masked Circle */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill={circleColor}
        mask="url(#circleMask)"
      />

      {/* Circular path for text */}
      <defs>
        <path
          id="textPath"
          d={`M${center},${center - textDistance} 
             a${textDistance},${textDistance} 0 1,1 0,${textDistance * 2} 
             a${textDistance},${textDistance} 0 1,1 0,${-textDistance * 2}`}
          fill="none"
        />
      </defs>

      <text
        fill={textColor}
        fontSize={textSize}
        fontWeight="bold"
        transform={`rotate(${rotation}, ${center}, ${center})`}
      >
        <textPath href="#textPath" startOffset="0">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default CircleArrow;
